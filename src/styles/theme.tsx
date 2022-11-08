import { createTheme, ThemeProvider } from '@mui/material/styles';

import colors from './colors';

type IProps = {
  children: JSX.Element | JSX.Element[];
};

// Create a theme instance.
export const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary.main,
      light: colors.primary.light,
      dark: colors.primary.dark,
      contrastText: colors.primary.contrastText,
    },
    secondary: {
      main: colors.secondary.main,
      light: colors.secondary.light,
      dark: colors.secondary.dark,
      contrastText: colors.secondary.contrastText,    
    },
  },
  typography: {
    fontFamily: 'Almarai, sans-serif'
  },
  components: {
  },
  direction: 'rtl',
});

theme.typography.h1 = {
  fontFamily: 'Almarai, sans-serif',
  fontWeight: '700',
  fontSize: '30px',
  '@media (min-width:600px)': {
    fontSize: '32px',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '35px',
  }
};

theme.typography.h2 = {
  fontFamily: 'Almarai, sans-serif',
  fontWeight: '700',
  fontSize: '25px',
  '@media (min-width:600px)': {
    fontSize: '27px',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '30px',
  }
};

theme.typography.h3 = {
  fontFamily: 'Almarai, sans-serif',
  fontWeight: '700',
  fontSize: '20px',
  '@media (min-width:600px)': {
    fontSize: '22px',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '25px',
  }
};

theme.typography.h4 = {
  fontFamily: 'Almarai, sans-serif',
  fontWeight: '400',
  fontSize: '18px',
  [theme.breakpoints.up('lg')]: {
    fontSize: '20px',
  }
};

theme.typography.h5 = {
  fontFamily: 'Almarai, sans-serif',
  fontWeight: '400',
  fontSize: '13px',
  [theme.breakpoints.up('lg')]: {
    fontSize: '14px',
  }
};

theme.typography.h6 = {
  fontFamily: 'Almarai, sans-serif',
  fontWeight: '300',
  fontSize: '11px',
  [theme.breakpoints.up('lg')]: {
    fontSize: '12px',
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