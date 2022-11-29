import Image from 'next/image';
import { DarkThemeContext } from 'context/ThemeContext';
import { useContext } from 'react';

// MUI
import Box from '@mui/material/Box';

type Props = {
    controleSideNav: any;
    sideNavState: Boolean;
}


const Header: React.FC<Props> = ({controleSideNav, sideNavState}) => {
    
    const {mainColors, darkMode} = useContext(DarkThemeContext);

    const classes = {
        container: {
            width: '100%',
            height: '94px',
            padding: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '30px',
            background: mainColors.linerGradient.primary,
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
                            <Image src='/images/secondary-inline-logo.svg' alt='Athena' width={190} height={35} /> :
                            <Image src='/images/primary-inline-logo.svg' alt='Athena' width={190} height={35} /> 
                        }
                    </>
                }
            </Box>
            <Box sx={classes.menuIcon}>
                <Image src='/images/menu-icon.svg' width={28} height={19} layout='intrinsic' alt='menu icon' onClick={controleSideNav} />
            </Box>
        </Box>
    );
};

export default Header;