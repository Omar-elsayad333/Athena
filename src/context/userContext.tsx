import { useState, createContext, useContext } from 'react';

type ContextState = {
    user: any;
    authToken: string;
    loadingUser: boolean;
    userToken: Function;
    setUserObject: Function;
};

const initialValues = {
    user: null, 
    authToken: '',
    loadingUser: true,
    userToken: () => {},
    setUserObject: () => {}
};

type IProps = { 
    children: React.ReactElement<any, any> & React.ReactNode;
};

export const UserContext = createContext<ContextState>(initialValues);

export const UserProvider: React.FC<IProps> = ({ children }) => {

    const [user, setUser] = useState<any>({
        address: '',
        courseName: '',
        email: '',
        emailConfirmed: '',
        firstName: '',
        gender: '',
        imagePath: '',
        isActive: '',
        lastName: '',
        middleName: '',
        phoneNumber: '',
        phoneNumberConfirmed: ''
    });
    const [authToken, setAuthToken] = useState<any>('');
    const [loadingUser] = useState<boolean>(true);

    const userToken = (token: any) => {
        setAuthToken(token);
    }

    const setUserObject = (userObject: any) => {
        for (const item in userObject) {
            setUser({ ...userObject, [item]: userObject[item] });
        }
    }

    return (
        <UserContext.Provider value={{user, setUserObject, authToken, userToken, loadingUser}}>
            {children}
        </UserContext.Provider>
    );
};

// Custom hook that shorthands the context!
export const useUser = () => useContext(UserContext);