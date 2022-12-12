import Image from 'next/image';
import LogOutIcon from '../../../../public/images/LogOutIcon.svg';
import { DarkThemeContext } from 'context/ThemeContext';
import { useContext } from 'react';

// MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


type Props = {
    sideNavState: Boolean;
}

const Footer: React.FC<Props> = ({sideNavState}) => {
    
    const {mainColors} = useContext(DarkThemeContext);

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
            borderLeft: `solid 1px ${mainColors.primary.main}`,
            background: mainColors.linerGradient.secondary,
            overflow: 'hidden',
            transition: '.2s',
            logout: {
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            },
        },
    };

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
                    <Image src='/images/ask-icon.svg' width={25} height={25} alt='ask' style={{cursor: 'pointer'}}/>
                }
            </Box>
        </Box>
    );
}
 
export default Footer;