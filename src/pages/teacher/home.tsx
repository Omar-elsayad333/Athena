import { NextPage } from 'next';
import DesktopNavbar from 'components/Layout/DesktopNavbar';
import { lightColors, darkColors } from 'styles/colors';
import { DarkThemeContext } from 'context/ThemeContext';
import { useContext } from 'react';

// MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Home: NextPage = () => {
  
  const {darkMode, handelDarkTheme} = useContext(DarkThemeContext);

  return (
      <Box sx={{width: '100%', minHeight: '100vh', backgroundColor: darkMode ? darkColors.backgroundColor.main : lightColors.backgroundColor.main }}>
        <DesktopNavbar /> 
        <Typography variant='h1' color='primary' p={5}>
          home
        </Typography>
        <button onClick={() => handelDarkTheme()}>Change Theme</button>
      </Box>    
  );
}

export default Home;