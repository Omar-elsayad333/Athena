import Image from 'next/image';
import { lightColors, darkColors } from 'styles/colors';
import LogOutIcon from '../../../../public/images/LogOutIcon.svg';
// import askIcon from '../../../../public/images/AskIcon.svg';
import { DarkThemeContext } from 'context/ThemeContext';
import { useContext } from 'react';

// MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


type Props = {
    sideNavState: Boolean;
}

const Footer: React.FC<Props> = ({sideNavState}) => {
    
    const {darkMode} = useContext(DarkThemeContext);

    const style = {
        container: {
            width: '100%',
            height: '66px',
            paddingLeft: '20px',
            paddingRight: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px',
            borderLeft: `solid 1px ${darkMode ? darkColors.primary.main : lightColors.primary.main}`,
            background: darkMode ? darkColors.linerGradient.secondary : lightColors.linerGradient.secondary,
            overflow: 'hidden',
            logout: {
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            },
        },
    }

    const classes = {
        container: {
            gap: sideNavState ? '20px' : '0',
        },
        logout: {
            gap: sideNavState ? '10px' : '0',
            width: sideNavState ? 'fit-content' : '100%'
        }
    }

    return (
        <Box sx={[style.container, classes.container]}>
            <Box sx={[style.container.logout, classes.logout]}>
                <Image src={LogOutIcon} alt='تسجيل الخروج' style={{cursor: 'pointer'}}/>
                {
                    sideNavState &&
                    <Typography fontSize={20} fontWeight={700} color='primary' sx={{whiteSpace: 'noWrap'}}>
                        تسجيل الخروج    
                    </Typography>
                }
            </Box>
            <Box>
                {
                    sideNavState &&
                    <Image src='/public/images/AskIcon.svg' width={25} height={25} alt='ask' style={{cursor: 'pointer'}}/>
                }
            </Box>
        </Box>
    );
}
 
export default Footer;