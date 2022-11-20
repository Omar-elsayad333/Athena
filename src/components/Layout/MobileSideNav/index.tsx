import HeaderNav from './Header';
import MenuNav from './Menu';

// MUI
import Box from '@mui/material/Box';

type Props = {
    controleMobileSideNav: any;
    mobileSideNavState: any;
}

const classes = {
    root: {
        position: 'relative',
        '@media(min-width: 1200px)': {
            display: 'none',
        }
    },
}

const MobileNavbar: React.FC<Props> = ({controleMobileSideNav, mobileSideNavState}) => {
    return (
        <Box sx={classes.root}>
            <HeaderNav controleMobileSideNav={controleMobileSideNav} mobileSideNavState={mobileSideNavState} />
            <MenuNav controleMobileSideNav={controleMobileSideNav} mobileSideNavState={mobileSideNavState} />
        </Box>
    );
}

export default MobileNavbar;