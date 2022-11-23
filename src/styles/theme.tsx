import { lightColors , darkColors } from './colors';
import { useContext } from 'react';
import { DarkThemeContext } from 'context/ThemeContext';

// MUI
import { createTheme, ThemeProvider } from '@mui/material/styles';

type IProps = {
  children: JSX.Element | JSX.Element[];
};


// them component
const ThemeApp: React.FC<IProps> = ({ children }) => {

  const {darkMode} = useContext(DarkThemeContext);

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
    },
    typography: {
      fontFamily: 'Almarai, sans-serif',
      h1: {
        fontWeight: '700',
        fontSize: '30px',
        '@media (min-width:600px)': {
          fontSize: '32px',
        },
        '@media (min-width:1500px)': {
          fontSize: '35px',
        }
      },
      h2: {
        fontWeight: '700',
        fontSize: '25px',
        '@media (min-width:600px)': {
          fontSize: '27px',
        },
        '@media (min-width:1500px)': {
          fontSize: '30px',
        }
      },
      h3: {
        fontWeight: '700',
        fontSize: '20px',
        '@media (min-width:600px)': {
          fontSize: '23px',        
        },
        '@media (min-width:1500px)': {
          fontSize: '25px',       
        },
      },
      h4: {
        fontWeight: '400',
        fontSize: '18px',
        '@media (min-width:1500px)': {
          fontSize: '20px',       
        },
      },
      h5: {
        fontWeight: '400',
        fontSize: '13px',
        '@media (min-width:1500px)': {
          fontSize: '14px',       
        },
      },
      h6: {
        fontWeight: '300',
        fontSize: '10px',
        '@media (min-width:1500px)': {
          fontSize: '12px',       
        },
      },
    },
    direction: 'rtl',
  });

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
    },
    typography: {
      fontFamily: 'Almarai, sans-serif',
      h1: {
        fontWeight: '700',
        fontSize: '30px',
        '@media (min-width:600px)': {
          fontSize: '32px',
        },
        '@media (min-width:1500px)': {
          fontSize: '35px',
        }
      },
      h2: {
        fontWeight: '700',
        fontSize: '25px',
        '@media (min-width:600px)': {
          fontSize: '27px',
        },
        '@media (min-width:1500px)': {
          fontSize: '30px',
        }
      },
      h3: {
        fontWeight: '700',
        fontSize: '20px',
        '@media (min-width:600px)': {
          fontSize: '23px',        
        },
        '@media (min-width:1500px)': {
          fontSize: '25px',       
        },
      },
      h4: {
        fontWeight: '400',
        fontSize: '18px',
        '@media (min-width:1500px)': {
          fontSize: '20px',       
        },
      },
      h5: {
        fontWeight: '400',
        fontSize: '13px',
        '@media (min-width:1500px)': {
          fontSize: '14px',       
        },
      },
      h6: {
        fontWeight: '300',
        fontSize: '10px',
        '@media (min-width:1500px)': {
          fontSize: '12px',       
        },
      },
    },
    direction: 'rtl',
  });

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme} >
      {children}
    </ThemeProvider>
  )
};

export default ThemeApp;