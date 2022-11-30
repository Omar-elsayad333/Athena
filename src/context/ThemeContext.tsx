import { useState, createContext, useEffect, useContext } from "react";

const initialValues = {
    darkMode: false,
    mainColors: {},
    handelDarkTheme: Function,
}

type ContextState = {
    darkMode: Boolean | String;
    handelDarkTheme: any;
    mainColors: any;
};

type IProps = { 
    children: React.ReactElement<any, any> & React.ReactNode;
};

// create context for dark theme state
export const DarkThemeContext = createContext<ContextState>(initialValues);

export const DarkThemeProvider: React.FC<IProps> = ({ children }) => {
    
    // The theme data that gets stored in context
    const [ darkMode, setDarkMode] = useState<Boolean | String>(false);

    // get the last selected theme
    useEffect(() => {
        if(typeof window !== 'undefined') {
            localStorage.getItem('athena-theme') === 'true' && setDarkMode(true);
        }
    }, [])

    const mainColors :any = {
        primary: {
            main: darkMode ? '#E0EEFF' : '#3F72A4',
            light: darkMode ? '#ffd700' : '#ffd700',
            dark: darkMode ? '#B6D5F0' : '#1C364F',
            contrastText: darkMode ? '#1C364F' : '#E8F3FF',
        },
        secondary: {
            main: darkMode ? 'rgb(63 114 164 / 0%)' : '#E8F3FF',
            light: darkMode ? '#ffd700' : '#ffd700',
            dark: darkMode ? '#E0EEFF' : '#3F72A4',
            contrastText: darkMode ? '#E0EEFF' : '#3F72A4',
        },
        error: {
            main: '#9C1414',
            light: '#ffd700',
            dark: '#581616',
            contrastText: '#E8F3FF',
        },
        title: {
            main: darkMode ? '#E0EEFF' : '#1C364F',
        },
        paper: {
            main: darkMode ? '#1C364F' : '#E8F3FF',
            border: darkMode ? '#3F72A4' : '#B6D5F0',
        },
        chips: {
            main: darkMode ? '#E0EEFF' : '#B6D5F0',
            border: darkMode ? '#E0EEFF' : '#3F72A4',
            contrastText: '#3F72A4',
        },
        customButton: {
            main: darkMode ? '#162A3E' : '#E8F3FF',
        },
        backgroundColor: {
            main: darkMode ? '#162A3E' : '#E0EEFF',
            sideNav: darkMode ? '#1C364F' : '#B6D5F0',
        },
        linerGradient: {
            primary: darkMode ? 'linear-gradient(0deg, #4072A4 0%, #1D3750 100%)' : 'linear-gradient(180deg, #B6D5F0 0%, #DFEFFF 100%)',
            secondary: darkMode ? 'linear-gradient(180deg, #3F72A4 0%, #1C364F 100%)' : 'linear-gradient(180deg, #DFEFFF 0%, #B6D5F0 100%)',
        },
    };

    // handle change theme
    const handelDarkTheme = async () => {
        localStorage.setItem('athena-theme', JSON.stringify(!darkMode));
        setDarkMode(!darkMode)
    };

    return (
        <DarkThemeContext.Provider value={{ mainColors, darkMode, handelDarkTheme }}>
            {children}
        </DarkThemeContext.Provider> 
    );
};

// Custom hook that shorthands the context!
export const useTheme = () => useContext(DarkThemeContext);