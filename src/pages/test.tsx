import { useContext } from 'react';
import { DarkThemeContext } from 'context/ThemeContext';
import ThemeSwitcher from 'components/ThemeSwitcher';

// MUI
import Box from '@mui/material/Box';
import AlertNotify from 'components/AlertNotify';
import { useError } from 'context/ErrorContext';
import useTest from 'container/useTest';

const Test = () => {
    
    const {mainColors} = useContext(DarkThemeContext);

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

    const {
        msg,
        state,
        msgType,
        handleState
    } = useError();

    const {
        
    } = useTest()
    

    return (
        <Box sx={classes.root}>
            <ThemeSwitcher />
            <AlertNotify msg={msg} msgType={msgType} state={state} handleState={handleState} />
        </Box>
    );
}

export default Test;