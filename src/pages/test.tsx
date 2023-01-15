import { useContext } from 'react';
import useTest from 'container/useTest';
import ThemeSwitcher from 'components/ThemeSwitcher';
import { DarkThemeContext } from 'context/ThemeContext';

// MUI
import Box from '@mui/material/Box';
import AlertNotify from 'components/AlertNotify';

const Test = () => {
    
    useTest();
    const { mainColors } = useContext(DarkThemeContext);

    const classes = {
        root: {
            width:'100%',
            height: '100vh',
            margin: 'auto',
            padding: '50px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '100px',
            background: mainColors.backgroundColor.main,
            transition: '.2s',
        },
    }

    return (
        <Box sx={classes.root}>
            <ThemeSwitcher />
        </Box>
    );
}

export default Test;