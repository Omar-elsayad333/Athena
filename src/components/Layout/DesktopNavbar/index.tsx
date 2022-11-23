import { darkColors, lightColors } from 'styles/colors';
import Image from 'next/image';
import me from '../../../../public/images/me.jpg';
import iconBell from '../../../../public/images/iconBell.svg';
import iconEmail from '../../../../public/images/iconEmail.svg';
import NavbarBut from './NavbarBut';
import NavbarSecBut from './NavbarSecBut';
import Avatar from 'components/Avatar';
import { useContext } from 'react';
import { DarkThemeContext } from 'context/ThemeContext';

// MUI
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

const DesktopNavbar: React.FC = () => {

    const {darkMode} = useContext(DarkThemeContext);

    const style: any = {
        container: {
            width: '100%',
            height: '95px',
            padding: '0 55px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '25px',
            background: darkMode ? darkColors.backgroundColor.navbar : lightColors.backgroundColor.navbar,
            borderBottom: `1px solid ${darkMode ? darkColors.primary.main : lightColors.primary.main}`,
            '@media(max-width: 1200px)': {
                height: '75px',
                justifyContent: 'center',
                borderBottom: '3px solid #3F72A4',
                borderRadius: '0 0 20px 20px',
            },   
            '@media(max-width: 500px)': {
                padding: '0 20px',
            },   
        },
        buttonsContainer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '30px',
            '@media(max-width: 1200px)': {
                width: '100%',
                justifyContent: 'space-between',
            },
        },
        teacherInfo: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '20px',
            profile: {
                width: 'fit-content',
                heigth: '46px',
                padding: '6px 9px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '9px',
                border: '1px solid #E8F3FF',
                borderRadius: '7px',
                boxShadow: '0px 0px 10px 0px #3F72A440',
                background: darkMode ? darkColors.backgroundColor.sideNav : lightColors.linerGradient.main,
            },
            photo: {
                display: 'flex',
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                border: '1px solid #3F72A4',
            },
            '@media(max-width: 1200px)': {
                display: 'none',
            },
        },
    }
    
    return (
        <Box sx={style.container}>
            <Box sx={style.buttonsContainer}>
                <NavbarBut content='جميع المجموعات' />
                <NavbarSecBut content='اضافة مجموعة' />
            </Box>
            <Box sx={style.teacherInfo}>
                <Image src={iconEmail} alt='Notifications' />
                <Image src={iconBell} alt='Messages' />
                <Box sx={style.teacherInfo.profile}>
                    <Box sx={style.teacherInfo.photo}>
                        <Avatar alt='أ / محمد خليل' src={me} />
                    </Box>
                    <Box>
                        <Typography fontWeight={700} fontSize={14} color='primary'>
                            أ / محمد خليل
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );  
}
 
export default DesktopNavbar;