import { useState } from "react";
import { Routes } from "routes/Routes";
import { useRouter } from "next/router";
import { useUser } from "context/userContext";
import { loginHandler, userObjectHandler,} from 'handlers/userHandler';
import { inputInitialValues, InputProps } from "interfaces/shared/input";
import { InputPasswordProps, passwordInitialValues } from "interfaces/shared/inputPassword";

const useTeacherLogin = () => {

    const router = useRouter()
    const { userToken } = useUser()
    const [ loading, setLoading ] = useState<boolean>(false)
    const [ pageErrors, setPasswordErrors ] = useState<any>([])
    const [ userName, setUserName ] = useState<InputProps>(inputInitialValues)
    const [ password, setPassword ] = useState<InputPasswordProps>(passwordInitialValues)

    // Get username from user
    const userNameHandler = (newValue: string) => {
        setUserName(
            {
                value: newValue.trim(),
                length: newValue.trim().length,
                error: false,
                helperText: ''
            }
        )
    }

    // Get password from user
    const passwordHandler = (newValue: string) => {
        setPassword(password => (
            {
                ...password,
                value: newValue,
                length: newValue.trim().length,
                error: false,
                helperText: ''
            }
        ))
    }

    // Get password from user
    const showPasswordHandler = () => {
        setPassword(password => (
            {
                ...password,
                show: !password.show
            }
        ))
    }

    // Validate data before collect it
    const validation = () => {
        let state = true

        if(!userName.length) {
            state = false
            setUserName(password => (
                {
                    ...password,
                    error: true,
                    helperText: 'يجب ادخال اسم المستخدم'
                }
            ))
        }

        if(!password.length) {
            state = false
            setPassword(password => (
                {
                    ...password,
                    error: true,
                    helperText: 'يجب ادخال الرقم السري'
                }
            ))
        }else if(password.length < 8) {
            state = false
            setPassword(password => (
                {
                    ...password,
                    error: true,
                    helperText: 'الرقم السري غير صحيح'
                }
            ))
        }

        return state
    }

    // Collect data to submit it
    const collectData = () => {
        const data = {
            email: userName.value,
            password: password.value
        }

        return data
    }
    
    // Submit data to api 
    const submit = async () => {
        if(validation()) {
            try {
                setLoading(true)
                const data = collectData()
                const res = await loginHandler(data)
                userToken(res)
                getUserData(res)
            }
            catch(error) {
                console.log(error)
                setPasswordErrors([
                    {
                        name: 'loginError', 
                        value: 'اسم المستخدم او الرقم السري غير صحيح'
                    }
                ])
            }
            finally {
                setLoading(false)
            }
        }
    }

    const getUserData = async (res: any) => {
        try {
            const userData = await userObjectHandler(res)
            console.log(userData)
            router.replace(Routes.teacherHome)
        }
        catch(error) {
            console.log(error)
        }
        finally {
            setLoading(false)
        }
    }

    return (
        {
            states: {
                loading,
                userName,
                password,
                pageErrors
            },
            actions: {
                userNameHandler,
                passwordHandler,
                showPasswordHandler,
                submit
            }
        }
    );
}

export default useTeacherLogin;