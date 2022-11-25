import Image from 'next/image';
import PrimaryInlinelogo from '../../../../public/images/PrimaryInlinelogo.svg';
import SecondaryInlinelogo from '../../../../public/images/SecondaryInlinelogo.svg';
import MenuIcon from '../../../../public/images/MenuIcon.svg';
import { DarkThemeContext } from 'context/ThemeContext';
import { useContext } from 'react';
import { lightColors, darkColors } from 'styles/colors';

// MUI
import Box from '@mui/material/Box';

type Props = {
    controleSideNav: any;
    sideNavState: Boolean;
}


const Header: React.FC<Props> = ({controleSideNav, sideNavState}) => {
    
    const {darkMode} = useContext(DarkThemeContext);

    const classes = {
        container: {
            width: '100%',
            height: '94px',
            padding: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '30px',
            background: darkMode ? darkColors.linerGradient.primary : lightColors.linerGradient.primary,
            transition: '.5s',
        },
        menuIcon: {
            cursor: 'pointer'
        },
    }

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
                    <>
                        {
                            darkMode ?
                            <Image src={SecondaryInlinelogo} alt='Athena' width={190} /> :
                            <Image src={PrimaryInlinelogo} alt='Athena' width={190} /> 
                        }
                    </>
                }
            </Box>
            <Box sx={classes.menuIcon}>
                <Image src={MenuIcon} layout='intrinsic' alt='menu icon' width={28} onClick={controleSideNav} />
            </Box>
        </Box>
    );
};

export default Header;