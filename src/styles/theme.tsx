import { createTheme, ThemeProvider } from '@mui/material/styles';

import colors from './colors';

type IProps = {
  children: JSX.Element | JSX.Element[];
};

// Create a theme instance.
export const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    info: {
      main: colors.third,
      contrastText: colors.primary,
    }
  },
  typography: {
    fontFamily: 'Almarai, sans-serif'
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          width: '100%',
          boxShadow: 'none'
        },
      },
    },
    // MuiTextField: {
    //   styleOverrides: {
    //     root: {
    //       boxSizing: 'border-box',
    //       width: '255px',
    //       height: '46px',
    //       '& .MuiOutlinedInput-notchedOutline': {
    //         border: 'none',
    //       },
    //       '&:hover': {
    //         '& .MuiOutlinedInput-notchedOutline': {
    //           border: 'solid 1px transparent',
    //         },
    //       },
    //     }
    //   }
    // },
    // MuiOutlinedInput: {
    //   styleOverrides: {
    //     root: {
    //       color: colors.secondary,
    //       backgroundColor: '#E8F3FF',
    //       fontSize: '14px',
    //       fontWeight: '400',
    //       borderRadius: '6px',
    //       border: '1px solid transparent',
    //       boxShadow: '0px 0px 10px 1px #B6D5F0',
    //       transition: '.2s ease-out',
    //       '& .MuiOutlinedInput-notchedOutline': {
    //         border: 'solid 1px transparent',
    //       },
    //       '&.Mui-focused': {
    //         '& .MuiOutlinedInput-notchedOutline': {
    //           border: 'solid 1px transparent',
    //         },
    //         boxShadow: '0px 0px 0px 1px #3F72A4',
    //       },
    //       '&:hover': {
    //         '& .MuiOutlinedInput-notchedOutline': {
    //           border: 'none',
    //         },
    //       },  
    //     },
    //   },
    // },
  },
  direction: 'rtl',
});

theme.typography.h2 = {
  fontFamily: 'Almarai, sans-serif',
  fontWeight: '700',
  fontSize: '1.5rem',
  '@media (min-width:600px)': {
    fontSize: '1.8rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '2rem',
  }
};

theme.typography.h3 = {
  fontFamily: 'Almarai, sans-serif',
  fontWeight: '700',
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '2rem',
  }
};

theme.typography.h4 = {
  fontFamily: 'Almarai, sans-serif',
  fontWeight: '400',
  fontSize: '1rem',
  '@media (min-width:600px)': {
    fontSize: '1.3rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '1.3rem',
  }
};

theme.typography.h5 = {
  fontFamily: 'Almarai, sans-serif',
  fontWeight: '400',
  fontSize: '0.8rem',
  '@media (min-width:600px)': {
    fontSize: '0.9rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '0.9rem',
  }
};

theme.typography.h6 = {
  fontFamily: 'Almarai, sans-serif',
  fontWeight: '300',
  fontSize: '0.6rem',
  '@media (min-width:600px)': {
    fontSize: '0.7rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '0.7rem',
  }
};

//  them component
const ThemeApp: React.FC<IProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
};

export default ThemeApp;