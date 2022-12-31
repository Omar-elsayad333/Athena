import { useRouter } from "next/router";
import { useState } from "react";
import { loginHandler } from 'handlers/userHandler';
import { useUser } from "context/userContext";

const useTeacherLogin = () => {

    const router = useRouter();
    const auth = useUser();
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

    const supmit = async () => {
        if(password.length >= 8) {
            const data = {
                'email': userName,
                'password': password.password
            }
            setIsLoading(true)
            await loginHandler(data)
            .then(
                (res: any) => {
                    console.log(res)
                    auth.setUserToken(res.token.toString())
                    router.replace('teacher/home');
                },
                (rej: any) => {
                    console.log(rej)                    
                }
            )
            .finally(() => setIsLoading(false))
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