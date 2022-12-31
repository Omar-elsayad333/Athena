import { useState, createContext, useContext } from 'react';

type ContextState = {
    user: any;
    authToken: string;
    loadingUser: boolean;
};

const initialValues = {
    user: null, 
    authToken: '',
    loadingUser: true,
};

type IProps = { 
    children: React.ReactElement<any, any> & React.ReactNode;
};

export const UserContext = createContext<ContextState>(initialValues);

export const UserProvider: React.FC<IProps> = ({ children }) => {

    const [user] = useState<any>(null);
    const [authToken] = useState<string>('');
    const [loadingUser] = useState<boolean>(true);

    return (
        <UserContext.Provider value={{user, authToken, loadingUser}}>
            {children}
        </UserContext.Provider>
    );
};

// Custom hook that shorthands the context!
export const useUser = () => useContext(UserContext);