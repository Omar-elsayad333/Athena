import Image from 'next/image';
import Avatar from '../../Avatar';
import me from '../../../../public/images/me.jpg';
import logo from '../../../../public/images/secondary-inline-logo.svg';
import iconBell from '../../../../public/images/iconBell.svg';
import iconEmail from '../../../../public/images/iconEmail.svg';
import closeIcon from '../../../../public/images/CloseIcon.svg';

// MUI
import Box from '@mui/material/Box'

type Props = {
    controleMobileSideNav: any;
    mobileSideNavState: any;
}

const style = {
    container: {
        width: '100%',
        height: '80px',
        paddingX: '50px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '35px',
        borderBottom: '2px solid #3F72A4',  
        background: 'linear-gradient(90deg, #B6D5F0 0%, #DFEFFF 100%)',
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

const Header: React.FC<Props> = ({controleMobileSideNav, mobileSideNavState}) => {
    return (
        <>
            {
                !mobileSideNavState ?
                <Box sx={style.container}>
                    <Box sx={style.menuIcon}>
                        <Image src='/images/menu-icon' width={28} height={19} layout='intrinsic' alt='open menu' onClick={controleMobileSideNav} />
                    </Box>
                    <Box>
                        <Image src={logo} alt='Athena' width={192} />
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