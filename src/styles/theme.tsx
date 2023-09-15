import { useTheme } from 'context/ThemeContext'
import { lightColors, darkColors } from './colors'

// MUI
import { createTheme, ThemeProvider } from '@mui/material/styles'

type IProps = {
    children: JSX.Element | JSX.Element[]
}

// them component
const ThemeApp: React.FC<IProps> = ({ children }) => {
    const { darkMode } = useTheme()

    // Light Theme
    const lightTheme = createTheme({
        palette: {
            primary: {
                main: lightColors.primary.main,
                light: lightColors.primary.light,
                dark: lightColors.primary.dark,
                contrastText: lightColors.primary.contrastText,
            },
            secondary: {
                main: lightColors.secondary.main,
                light: lightColors.secondary.light,
                dark: lightColors.secondary.dark,
                contrastText: lightColors.secondary.contrastText,
            },
            success: {
                main: lightColors.success.main,
                light: lightColors.success.light,
                dark: lightColors.success.dark,
                contrastText: lightColors.success.contrastText,
            },
            error: {
                main: lightColors.error.main,
                light: lightColors.error.light,
                dark: lightColors.error.dark,
                contrastText: lightColors.error.contrastText,
            },
            warning: {
                main: lightColors.warning.main,
                light: lightColors.warning.light,
                dark: lightColors.warning.dark,
                contrastText: lightColors.warning.contrastText,
            },
            info: {
                main: lightColors.info.main,
                light: lightColors.info.light,
                dark: lightColors.info.dark,
                contrastText: lightColors.info.contrastText,
            },
        },
        typography: {
            fontFamily: 'Almarai, sans-serif',
            h1: {
                fontWeight: '700',
                fontSize: '30px',
                '@media screen and  (min-width:600px)': {
                    fontSize: '32px',
                },
                '@media screen and  (min-width:1500px)': {
                    fontSize: '35px',
                },
            },
            h2: {
                fontWeight: '700',
                fontSize: '25px',
                '@media screen and  (min-width:600px)': {
                    fontSize: '27px',
                },
                '@media screen and  (min-width:1500px)': {
                    fontSize: '30px',
                },
            },
            h3: {
                fontWeight: '700',
                fontSize: '20px',
                '@media screen and  (min-width:600px)': {
                    fontSize: '23px',
                },
                '@media screen and  (min-width:1500px)': {
                    fontSize: '25px',
                },
            },
            h4: {
                fontWeight: '400',
                fontSize: '18px',
                '@media screen and  (min-width:1500px)': {
                    fontSize: '20px',
                },
            },
            h5: {
                fontWeight: '400',
                fontSize: '13px',
                '@media screen and  (min-width:1500px)': {
                    fontSize: '14px',
                },
            },
            h6: {
                fontWeight: '300',
                fontSize: '10px',
                '@media screen and  (min-width:1500px)': {
                    fontSize: '12px',
                },
            },
        },
        direction: 'rtl',
    })

    // Dark Theme
    const darkTheme = createTheme({
        palette: {
            primary: {
                main: darkColors.primary.main,
                light: darkColors.primary.light,
                dark: darkColors.primary.dark,
                contrastText: darkColors.primary.contrastText,
            },
            secondary: {
                main: darkColors.secondary.main,
                light: darkColors.secondary.light,
                dark: darkColors.secondary.dark,
                contrastText: darkColors.secondary.contrastText,
            },
            success: {
                main: darkColors.success.main,
                light: darkColors.success.light,
                dark: darkColors.success.dark,
                contrastText: darkColors.success.contrastText,
            },
            error: {
                main: darkColors.error.main,
                light: darkColors.error.light,
                dark: darkColors.error.dark,
                contrastText: darkColors.error.contrastText,
            },
            warning: {
                main: darkColors.warning.main,
                light: darkColors.warning.light,
                dark: darkColors.warning.dark,
                contrastText: darkColors.warning.contrastText,
            },
            info: {
                main: darkColors.info.main,
                light: darkColors.info.light,
                dark: darkColors.info.dark,
                contrastText: darkColors.info.contrastText,
            },
        },
        typography: {
            fontFamily: 'Almarai, sans-serif',
            h1: {
                fontWeight: '700',
                fontSize: '30px',
                '@media screen and  (min-width:600px)': {
                    fontSize: '32px',
                },
                '@media screen and  (min-width:1500px)': {
                    fontSize: '35px',
                },
            },
            h2: {
                fontWeight: '700',
                fontSize: '25px',
                '@media screen and  (min-width:600px)': {
                    fontSize: '27px',
                },
                '@media screen and  (min-width:1500px)': {
                    fontSize: '30px',
                },
            },
            h3: {
                fontWeight: '700',
                fontSize: '20px',
                '@media screen and  (min-width:600px)': {
                    fontSize: '23px',
                },
                '@media screen and  (min-width:1500px)': {
                    fontSize: '25px',
                },
            },
            h4: {
                fontWeight: '400',
                fontSize: '18px',
                '@media screen and  (min-width:1500px)': {
                    fontSize: '20px',
                },
            },
            h5: {
                fontWeight: '400',
                fontSize: '13px',
                '@media screen and  (min-width:1500px)': {
                    fontSize: '14px',
                },
            },
            h6: {
                fontWeight: '300',
                fontSize: '10px',
                '@media screen and  (min-width:1500px)': {
                    fontSize: '12px',
                },
            },
        },
        direction: 'rtl',
    })

    return <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>{children}</ThemeProvider>
}

export default ThemeApp
