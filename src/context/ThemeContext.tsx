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
    const [ customColors, setCustomColors] = useState<any>();

    // get the last selected theme
    useEffect(() => {
        if(typeof window !== 'undefined') {
            localStorage.getItem('athena-theme') === 'true' && setDarkMode(true);
        }
    }, [])

    const initialColors = {
        primary: {
            main: darkMode ? '#E0EEFF' : '#3F72A4',
            light: darkMode ? '#ffd700' : '#ffd700',
            dark: '#1C364F',
            contrastText: '#E8F3FF',
        },
        secondary: {
            main: '#E8F3FF',
            light: '#ffd700',
            dark: '#3F72A4',
            contrastText: '#3F72A4',
        },
        error: {
            main: '#9C1414',
            light: '#ffd700',
            dark: '#581616',
            contrastText: '#E8F3FF',
        },
        title: {
            main: '#1C364F',
        },
        backgroundColor: {
            main: '#E0EEFF',
            sideNav: '#B6D5F0',
            navbar: '#B6D5F0',
        },
        linerGradient: {
            primary: 'linear-gradient(180deg, #B6D5F0 0%, #DFEFFF 100%)',
            secondary: 'linear-gradient(180deg, #DFEFFF 0%, #B6D5F0 100%)',
        },
    }

    const darkColors = {
        primary: {
            main: '#E0EEFF',
            light: 'red',
            dark: '#B6D5F0',
            contrastText: '#1C364F',
        },
        secondary: {
            main: 'rgb(63 114 164 / 0%)',
            light: 'red',
            dark: '#E0EEFF',
            contrastText: '#E0EEFF',
        },
        error: {
            main: '#9C1414',
            light: '#ffd700',
            dark: '#581616',
            contrastText: '#E8F3FF',
        },
        title: {
            main: '#E0EEFF',
        },
        backgroundColor: {
            main: '#162A3E',
            sideNav: '#1C364F',
            navbar: 'linear-gradient(0deg, #4072A4 0%, #1D3750 100%)',
        },
        linerGradient: {
            primary: 'linear-gradient(0deg, #4072A4 0%, #1D3750 100%)',
            secondary: 'linear-gradient(180deg, #3F72A4 0%, #1C364F 100%)'
        },
    }

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