import Image from 'next/image';
import logOut from '../../../../public/images/LogOutIcon.svg';
import { useContext } from 'react';
import { DarkThemeContext } from 'context/ThemeContext';

// MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const Footer: React.FC = () => {

    const {mainColors} = useContext(DarkThemeContext)

    const classes = {
        footer: {
            width: '100%',
            height: '66px',
            paddingLeft: '20px',
            paddingRight: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px',
            background: mainColors.linerGradient.secondary,
            overflow: 'hidden',
            logout: {
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px'
            },
        },
    }

    return (
        <Box sx={classes.footer}>
            <Box sx={classes.footer.logout}>
                <Image src={logOut} alt='تسجيل الخروج' style={{cursor: 'pointer'}}/>
                <Typography fontSize={20} fontWeight={700} color={mainColors.primary.main} sx={{whiteSpace: 'noWrap'}}>
                    تسجيل الخروج    
                </Typography>
            </Box>
            <Box>
                <Image src='/images/ask-icon.svg' width={25} height={25} alt='ask' style={{cursor: 'pointer'}}/>
            </Box>
        </Box>
    );
}

export default Footer;