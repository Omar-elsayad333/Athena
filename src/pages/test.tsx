import { useContext } from 'react';
import { DarkThemeContext } from 'context/ThemeContext';
import ThemeSwitcher from 'components/ThemeSwitcher';
import MySearchInput from 'components/MySearchInput';

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
            transition: '.3s',
            background: mainColors.backgroundColor.main,
        },
    }

    return (
        <Box sx={classes.root}>
            <ThemeSwitcher />
            <MySearchInput placeholder='هل تبحث عن مجموعة معينة ؟'/>
        </Box>
    );
}

export default Test;