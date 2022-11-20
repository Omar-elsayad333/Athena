import Image from 'next/image';
import logo from '../../../../public/images/secondaryInlinelogo.svg';
import menu from '../../../../public/images/MenuIcon.svg';

// MUI
import Box from '@mui/material/Box';

type Props = {
    controleSideNav: any;
    sideNavState: Boolean;
}

const classes = {
    container: {
        width: '100%',
        height: '94px',
        padding: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '30px',
        background: 'linear-gradient(90deg, #B6D5F0 0%, #DFEFFF 100%)',
        transition: '.5s',
    },
    menuIcon: {
        cursor: 'pointer'
    },
}

const Header: React.FC<Props> = ({controleSideNav, sideNavState}) => {

    const style = {
        logo: {
            display: sideNavState ? 'block' : 'none',
        },
    };

    return (
        <Box sx= {classes.container}>
            <Box sx={style.logo}>
                {
                    sideNavState &&
                    <Image src={logo} alt='Athena' width={190} /> 
                }
            </Box>
            <Box sx={classes.menuIcon}>
                <Image src={menu} layout='intrinsic' alt='menu icon' width={28} onClick={controleSideNav} />
            </Box>
        </Box>
    );
};

export default Header;