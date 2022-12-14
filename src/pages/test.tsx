import { useContext } from 'react';
import { DarkThemeContext } from 'context/ThemeContext';
import ThemeSwitcher from 'components/ThemeSwitcher';
import MyTable from 'components/MyTable';

// MUI
import Box from '@mui/material/Box';

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

    return (
        <Box sx={classes.root}>
            <ThemeSwitcher />
            <MyTable />
        </Box>
    );
}

export default Test;