import { useContext } from 'react';
import { DarkThemeContext } from 'context/ThemeContext';
import ThemeSwitcher from 'components/ThemeSwitcher';

// MUI
import Box from '@mui/material/Box';

const Test = () => {
    
    const {mainColors} = useContext(DarkThemeContext);

    const classes = {
        root: {
            width:'100%',
            height: '100vh',
            margin: 'auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '100px',
            transition: '.2s',
            background: mainColors.backgroundColor.main,
        },
    }

    return (
        <Box sx={classes.root}>
            <ThemeSwitcher />
            <svg fill="transparent" stroke={mainColors.primary.main}>
                <path d="M1 8.41165L11 1L21 8.41165V20.0585C21 20.6201 20.7659 21.1588 20.3491 21.5559C19.9324 21.953 19.3671 22.1761 18.7778 22.1761H3.22222C2.63285 22.1761 2.06762 21.953 1.65087 21.5559C1.23413 21.1588 1 20.6201 1 20.0585V8.41165Z" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7.66638 22.1769V11.5889H14.333V22.1769" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </Box>
    );
}

export default Test;