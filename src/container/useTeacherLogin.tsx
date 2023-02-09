import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useUser } from "context/userContext";
import { 
    loginHandler, 
    userObjectHandler,
} from 'handlers/userHandler';

const useTeacherLogin = () => {

    const router = useRouter();
    const auth = useUser()
    const [userName, setUserName] = useState<string>('');
    const [userNameError, setUserNameError] = useState<boolean>(false);
    const [password, setPassword] = useState<any>({
        length: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });
    const [passwordError, setPasswordError] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        if(auth.authToken) {
            router.replace('/teacher/home')
        }
    }, [auth.authToken])

    const supmit = async () => {
        setIsLoading(true)
        if(password.length >= 8) {
            const data = {
                'email': userName,
                'password': password.password
            }
            console.log(data.email)

            // Get user token
            await loginHandler(data)
            .then( 
                async (res: any) => {
                    auth.userToken(res)

                    // Get user base data with token
                    await userObjectHandler(res)
                    .then( 
                        async (res: any) => {
                            console.log(res)
                            router.replace('/teacher/home')
                        },
                        (rej: any) => {
                            console.log(rej)                    
                        }
                    )
                },
                (rej: any) => {
                    console.log(rej)                    
                }
            )
            .finally(
                () => setIsLoading(false)
            )
        }else {
            setPasswordError(true);
            setIsLoading(false)
        }
    };

    return (
        {
            userInfo: {
                userName,
                setUserName,
                password,
                setPassword,
            },
            emailError: {
                userNameError,
                setUserNameError,
            },
            passwordError: {
                passwordError,
                setPasswordError
            },
            supmit,
            isLoading
        }
    );
}

export default useTeacherLogin;