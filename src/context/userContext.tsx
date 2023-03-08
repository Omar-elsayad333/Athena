import { Routes } from 'routes/Routes';
import { useRouter } from 'next/router';
import { userObjectHandler } from 'handlers/userHandler';
import { useState, createContext, useContext, useEffect } from 'react';

type ContextState = {
    user: any;
    authToken: string;
    loginUser: Function;  
};

const initialValues = {
    user: null, 
    authToken: '',
    loginUser: () => {}
};

type IProps = { 
    children: React.ReactElement<any, any> & React.ReactNode;
};

export const UserContext = createContext<ContextState>(initialValues);

export const UserProvider: React.FC<IProps> = ({ children }) => {

    const router = useRouter();
    const [ user, setUser ] = useState<any>('')
    const [ authToken, setAuthToken ] = useState<string>('')
    const [ expireDate, setExpireDate ] = useState<any>('')
    const [ , setRefreshToken ] = useState<any>('')
    
    useEffect(() => {
        if(user) {
            console.table(user)
            if(new Date(expireDate) < new Date()) {
                setAuthToken('')
                setRefreshToken('')
                setExpireDate('')
                localStorage.clear()
                sessionStorage.clear()
                console.log('Token expired')
                router.replace(Routes.teacherLogin)
            }
        }
    }, [user])

    useEffect(() => {
        if(typeof window !== 'undefined'){
            checkForToken()
        }
    }, [])
    
    const checkForToken = () => {
        if(localStorage.getItem('athena-token') && authToken == '') {
            getUserData(localStorage.getItem('athena-token')!)
            setAuthToken(localStorage.getItem('athena-token')!)
            setRefreshToken(localStorage.getItem('athena-refresh-token')!)
            setExpireDate(localStorage.getItem('athena-refresh-token-expiryTime')!)
            return null
        }
        if(sessionStorage.getItem('athena-token') && authToken == '') {
            getUserData(sessionStorage.getItem('athena-token')!)
            setAuthToken(sessionStorage.getItem('athena-token')!)
            setRefreshToken(sessionStorage.getItem('athena-refresh-token')!)
            setExpireDate(sessionStorage.getItem('athena-refresh-token-expiryTime')!)
            return null
        }

        return null
    }

    const getUserData = async (token: any) => {
        try {
            const res = await userObjectHandler(token)
            setUser(res)
        }
        catch(error) {
            console.log(error)
            setAuthToken('')
            setRefreshToken('')
            setExpireDate('')
            localStorage.clear()
            sessionStorage.clear()
            console.log('error from loginUser')
            router.replace(Routes.teacherLogin)
        }
    }

    const loginUser = async (userData: any, rememberMe: boolean) => { 
        await getUserData(userData.token)
        setAuthToken(userData.token)
        setRefreshToken(userData.refreshToken)
        setExpireDate(userData.refreshTokenExpiryTime)
        console.log(rememberMe)
        if(rememberMe) {
            localStorage.setItem('athena-token', userData.token)
            localStorage.setItem('athena-refresh-token', userData.refreshToken)
            localStorage.setItem('athena-refresh-token-expiryTime', userData.refreshTokenExpiryTime)
        }else {
            sessionStorage.setItem('athena-token', userData.token)
            sessionStorage.setItem('athena-refresh-token', userData.refreshToken)
            sessionStorage.setItem('athena-refresh-token-expiryTime', userData.refreshTokenExpiryTime)
        }

        router.replace(Routes.teacherHome)
    }

    return (
        <UserContext.Provider value={{ user, authToken, loginUser }}>
            {children}
        </UserContext.Provider>
    );
};

// Custom hook that shorthands the context!
export const useUser = () => useContext(UserContext);