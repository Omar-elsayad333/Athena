import { useState, createContext, useContext, useEffect } from 'react';
import { userObjectHandler } from 'handlers/userHandler';

type ContextState = {
    user: any;
    authToken: string;
    loadingUser: boolean;
    userToken: Function;
};

const initialValues = {
    user: null, 
    authToken: '',
    loadingUser: true,
    userToken: () => {},
};

type IProps = { 
    children: React.ReactElement<any, any> & React.ReactNode;
};

export const UserContext = createContext<ContextState>(initialValues);

export const UserProvider: React.FC<IProps> = ({ children }) => {

    const [user, setUser] = useState<any>('');
    const [authToken, setAuthToken] = useState<any>('');
    const [loadingUser] = useState<boolean>(true);

    useEffect(() => {
        if(typeof window !== 'undefined'){
            if (localStorage.getItem('athena-token')) {
                setAuthToken(localStorage.getItem('athena-token'))
            }
        }
    }, [])

    useEffect(() => {
        if(authToken){
            userObjectHandler(authToken)
            .then( (res: any) => {
                for (const item in res) {   
                    setUser({ ...res, [item]: res[item] });
                }
            })
        }
    }, [authToken])

    useEffect(() => {
        console.log(user)
    }, [user])

    const userToken = (token: any) => {
        setAuthToken(token);
    }

    return (
        <UserContext.Provider value={{user, authToken, userToken, loadingUser}}>
            {children}
        </UserContext.Provider>
    );
};

// Custom hook that shorthands the context!
export const useUser = () => useContext(UserContext);