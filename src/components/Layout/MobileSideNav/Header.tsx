import Image from 'next/image';
import Avatar from '../../Avatar';
import me from '../../../../public/images/me.jpg';
import iconBell from '../../../../public/images/iconBell.svg';
import iconEmail from '../../../../public/images/iconEmail.svg';
import closeIcon from '../../../../public/images/CloseIcon.svg';
import { useContext } from 'react';
import { DarkThemeContext } from 'context/ThemeContext';

// MUI
import Box from '@mui/material/Box'

type Props = {
    controleMobileSideNav: any;
    mobileSideNavState: any;
}


const Header: React.FC<Props> = ({controleMobileSideNav, mobileSideNavState}) => {

    const {mainColors, darkMode} = useContext(DarkThemeContext);
    
    const style = {
        container: {
            width: '100%',
            height: '80px',
            paddingX: '50px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '35px',
            borderBottom: `2px solid ${mainColors.primary.main}`,  
            background: mainColors.linerGradient.primary,
            '@media(max-width: 500px)': {
                paddingX: '20px',
            }
        },
        menuIcon: { 
            width: '28px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
        },
        profile: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '20px',
            '@media(max-width: 250px)': {
                gap: '10px',
            },
            meImage: {
                width: '50px',
                height: '50px',
                display: 'flex',
            },
        },
    }

    return (
        <>
            {
                !mobileSideNavState ?
                <Box sx={style.container}>
                    <Box sx={style.menuIcon}>
                        <Image src='/images/menu-icon.svg' width={28} height={19} layout='intrinsic' alt='open menu' onClick={controleMobileSideNav} />
                    </Box>
                    <Box>
                        {
                            darkMode ?
                            <Image src='/images/secondary-inline-logo.svg' alt='Athena' width={190} height={35} /> :
                            <Image src='/images/primary-inline-logo.svg' alt='Athena' width={190} height={35} /> 
                        }
                    </Box>
                </Box> :
                <Box sx={style.container}>
                    <Box sx={style.menuIcon}>
                        <Image src={closeIcon} layout='intrinsic' alt='close menu' onClick={controleMobileSideNav} />
                    </Box>
                    <Box sx={style.profile}>
                        <Image src={iconEmail} layout='intrinsic' alt='Emails' />
                        <Image src={iconBell} layout='intrinsic' alt='Notifications' />
                        <Box sx={style.profile.meImage}>
                            <Avatar alt='أ / محمد خليل' src={me} />
                        </Box>
                    </Box>
                </Box>
            }
        </>
    );
}
 
export default Header;