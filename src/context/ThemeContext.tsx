import { useState, createContext, useEffect } from "react";

const initialValues = {
    darkMode: false,
    handelDarkTheme: Function
}

type ContextState = {
    darkMode: Boolean | String;
    handelDarkTheme: any;
};

type IProps = { 
    children: React.ReactElement<any, any> & React.ReactNode;
};

// create context for dark theme state
const DarkThemeContext = createContext<ContextState>(initialValues);

const DarkThemeProvider: React.FC<IProps> = ({ children }) => {
    
    // The theme data that gets stored in context
    const [ darkMode, setDarkMode] = useState<Boolean | String>(false);

    // get the last selected theme
    useEffect(() => {
        if(typeof window !== 'undefined') {
            localStorage.getItem('athena-theme') === 'true' && setDarkMode(true);
        }
    }, [])

    // handle change theme
    const handelDarkTheme = async () => {
        localStorage.setItem('athena-theme', JSON.stringify(!darkMode));
        setDarkMode(!darkMode)
    };

    return (
        <DarkThemeContext.Provider value={{ darkMode, handelDarkTheme }}>
            {children}
        </DarkThemeContext.Provider> 
    );
};

export {DarkThemeContext, DarkThemeProvider};