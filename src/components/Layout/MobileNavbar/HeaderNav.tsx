import { HeaderStyle } from './style'
import Image from 'next/image';
import Avatar from '../../Avatar';
import me from '../../../../public/images/me.jpg';
import NavbarBut from '../DesktopNavbar/NavbarBut';
import NavbarSecBut from '../DesktopNavbar/NavbarSecBut';
import menu from '../../../../public/images/MenuIcon.svg';
import smallLogo from '../../../../public/images/Logo.svg';
import iconBell from '../../../../public/images/iconBell.svg';
import iconEmail from '../../../../public/images/iconEmail.svg';
import closeIcon from '../../../../public/images/CloseIcon.svg';

// MUI
import Box from '@mui/material/Box'

type Props = {
    controleMobileSideNav: any;
    mobileSideNavState: any;
}

const HeaderNav: React.FC<Props> = ({controleMobileSideNav, mobileSideNavState}) => {
    return (
        <Box sx={HeaderStyle.container}>
            <Box sx= {HeaderStyle.navItems}>
                {
                    !mobileSideNavState ?
                    <Box sx={HeaderStyle.navItems.header}>
                        <Box sx={HeaderStyle.navItems.logo}>
                            <Image src={smallLogo} alt='Athena' width={49} height={42} />
                        </Box>
                        <Box sx={HeaderStyle.navItems.header.menuIcon}>
                            <Image src={menu} layout='intrinsic' alt='open menu' onClick={controleMobileSideNav} />
                        </Box>
                    </Box> :
                    <Box sx={HeaderStyle.navItems.header}>
                        <Box sx={HeaderStyle.profile}>
                            <Box sx={HeaderStyle.profile.meImage}>
                                <Avatar alt='أ / محمد خليل' src={me} />
                            </Box>
                            <Image src={iconEmail} layout='intrinsic' alt='menu icon' />
                            <Image src={iconBell} layout='intrinsic' alt='menu icon' />
                        </Box>
                        <Box sx={HeaderStyle.navItems.header.menuIcon}>
                            <Image src={closeIcon} layout='intrinsic' alt='close menu' onClick={controleMobileSideNav} />
                        </Box>
                    </Box>
                }
                <Box sx={HeaderStyle.navItems.buttonsContainer}>
                    <NavbarBut content='جميع المجموعات' />
                    <NavbarSecBut content='اضافة مجموعة' />
                </Box>
            </Box>
        </Box>
    );
}
 
export default HeaderNav;