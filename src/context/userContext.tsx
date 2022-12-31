import { useState, createContext, useContext } from 'react';

type ContextState = {
    user: any;
    authToken: string;
    loadingUser: boolean;
    setUserToken: Function;
};

const initialValues = {
    user: null, 
    authToken: '',
    loadingUser: true,
    setUserToken: () => {},
};

type IProps = { 
    children: React.ReactElement<any, any> & React.ReactNode;
};

export const UserContext = createContext<ContextState>(initialValues);

export const UserProvider: React.FC<IProps> = ({ children }) => {

    const [user] = useState<any>(null);
    const [authToken, setAuthToken] = useState<any>('');
    const [loadingUser] = useState<boolean>(true);
    
    const setUserToken = (token: any) => {
        setAuthToken(token)
    }

    return (
        <UserContext.Provider value={{user, authToken, setUserToken, loadingUser}}>
            {children}
        </UserContext.Provider>
    );
};

// Custom hook that shorthands the context!
export const useUser = () => useContext(UserContext);