import { useState, createContext } from "react";

// const initialValues = {
//     darkMode: false,
//     handelDarkTheme: Function
// }

type ContextState = {
    darkMode: Boolean;
    handelDarkTheme: any;
};

type IProps = { 
    children: React.ReactElement<any, any> & React.ReactNode;
};

// create context for login global state
export const DarkModeContext = createContext<any>('');

export const DarkModeProvider: React.FC<IProps> = ({ children }) => {
    // The data that gets stored in context
    const [ darkMode, setDarkMode] = useState<Boolean>(false);
  
    // Logout updates the user data to default
    const handelDarkTheme = () => {
        setDarkMode(!darkMode);
        console.log(darkMode);
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
    };
  
    return (
        <DarkModeContext.Provider value={{ darkMode, handelDarkTheme }}>
            {children}
        </DarkModeContext.Provider> 
    );
};