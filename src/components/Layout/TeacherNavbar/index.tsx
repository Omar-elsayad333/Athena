import Image from 'next/image';
import logo from '../../../../public/images/secondaryInlinelogo.svg';
import menu from '../../../../public/images/MenuIcon.svg';
import me from '../../../../public/images/me.jpg';
import colors from 'styles/colors';
import NavbarBut from './NavbarBut';
import NavbarSecBut from './NavbarSecBut';
import iconBell from '../../../../public/images/iconBell.svg';
import iconEmail from '../../../../public/images/iconEmail.svg';
import Avatar from '../../Avatar';

// MUI
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { useEffect } from 'react';

type Props = {
    sideNavState: any;
    closeSideNav: any;
    openSideNav: any;
}

const classes = {
    container: {
        width: '100%',
        height: '123px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '25px',
        backgroundColor: '#B6D5F0',
        borderBottom: `solid 1px ${colors.primary.dark}`,
    },
    navItems: {
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'start',
        alignItems: 'center',
        gap:'10px',
        header: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'start',
            alignItems: 'center',
            gap:'20px',
            menuIcon: { 
                width: '28px',
                height: '19px',
                cursor: 'pointer',
                // display: 'none',
            },
        },
        logo: {
            width: '308px',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'linear-gradient(90deg, #B6D5F0 0%, #DFEFFF 100%)',
        },
        buttonsContainer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '35px',
        },
    },
    teacherInfo: {
        marginX: '55px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '25px',
        profile: {
            width: '170px',
            heigth: '60px',
            padding: '10px 12px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '15px',
            border: '1px solid #E8F3FF',
            borderRadius: '10px',
            boxShadow: '0px 0px 10px 0px #3F72A440',
        },
        photo: {
            display: 'flex',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            border: '1px solid #3F72A4',
        },
    },
};

const TeacherNavbar: React.FC<Props> = ({sideNavState, closeSideNav, openSideNav}) => {

    useEffect(() => {
        console.log(openSideNav)
    }, [sideNavState])

    return (
        <Box sx={classes.container}>
            <Box sx= {classes.navItems}>
                <Box sx={classes.navItems.logo}>
                    <Image src={logo} alt='Athena' width={228} height={43} />
                </Box>
                <Box sx={classes.navItems.buttonsContainer}>
                    <Box sx={classes.navItems.header.menuIcon}>
                        <Image src={menu} layout='intrinsic' alt='menu icon' onClick={closeSideNav} />
                    </Box>
                    <NavbarBut content='جميع المجموعات' />
                    <NavbarSecBut content='اضافة مجموعة' />
                </Box>
            </Box>
            <Box sx={classes.teacherInfo}>
                <Image src={iconEmail} alt='Notifications' />
                <Image src={iconBell} alt='Messages' />
                <Box sx={classes.teacherInfo.profile}>
                    <Box sx={classes.teacherInfo.photo}>
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