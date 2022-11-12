import style from './style';
import Image from 'next/image';
import logo from '../../../../public/images/secondaryInlinelogo.svg';
import smallLogo from '../../../../public/images/Logo.svg';
import menu from '../../../../public/images/MenuIcon.svg';
import me from '../../../../public/images/me.jpg';
import NavbarBut from './NavbarBut';
import NavbarSecBut from './NavbarSecBut';
import iconBell from '../../../../public/images/iconBell.svg';
import iconEmail from '../../../../public/images/iconEmail.svg';
import Avatar from '../../Avatar';

// MUI
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

type Props = {
    closeSideNav: any;
    sideNavState: any;
}


const TeacherNavbar: React.FC<Props> = ({closeSideNav, sideNavState}) => {
    
    const classes = {
        navItems: {
            flexDirection: sideNavState ? 'row' : 'column',
            header: {
                flexDirection:  sideNavState ? 'row' : 'column-reverse',
                width:  sideNavState ? 'fit-content' : '76px',
                gap: sideNavState ? '0' : '20px'
            }, 
            menuIcon: {
                marginRight: sideNavState ? '12px' : '0',
            },
            logo: {
                width: sideNavState ? '308px' : '100%',
                height: sideNavState ? '100%' : '42px'
            }
        },
    };

    return (
        <Box sx={style.container}>
            <Box sx= {style.navItems}>
                <Box sx={[style.navItems.header, classes.navItems.header]}>
                    <Box sx={[style.navItems.logo, classes.navItems.logo]}>
                        {
                            sideNavState ?
                            <Image src={logo} alt='Athena' width={228} height={43} /> :
                            <Image src={smallLogo} alt='Athena' width={49} height={42} />
                        }
                    </Box>
                    <Box sx={[style.navItems.header.menuIcon, classes.navItems.menuIcon]}>
                        <Image src={menu} layout='intrinsic' alt='menu icon' onClick={closeSideNav} />
                    </Box>
                </Box>
                <Box sx={style.navItems.buttonsContainer}>
                    <NavbarBut content='جميع المجموعات' />
                    <NavbarSecBut content='اضافة مجموعة' />
                </Box>
            </Box>
            <Box sx={style.teacherInfo}>
                <Image src={iconEmail} alt='Notifications' />
                <Image src={iconBell} alt='Messages' />
                <Box sx={style.teacherInfo.profile}>
                    <Box sx={style.teacherInfo.photo}>
                        <Avatar alt='أ / محمد خليل' src={me} />
                    </Box>
                    <Box>
                        <Typography fontWeight={700} variant='h5' color='#3F72A4'>
                            أ / محمد خليل
                        </Typography>
                        <Typography fontSize={8} color='#3F72A4'>
                            أستاذ اللغة العربية
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );  
}
 
export default TeacherNavbar;