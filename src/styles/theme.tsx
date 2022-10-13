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
  },
  typography: {
    fontFamily: 'Almarai, sans-serif'
  },  
});

//  them component
const ThemeApp: React.FC<IProps> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeApp;
