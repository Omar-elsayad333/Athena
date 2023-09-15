import HeaderNav from './Header'
import MenuNav from './Menu'

// MUI
import Box from '@mui/material/Box'

type Props = {
    controleMobileSideNav: any
    mobileSideNavState: any
    currentPath: any
}

const classes = {
    root: {
        position: 'sticky',
        top: '0',
        zIndex: '100',
        '@media screen and (min-width: 1200px)': {
            display: 'none',
        },
    },
}

const MobileNavbar: React.FC<Props> = ({
    controleMobileSideNav,
    mobileSideNavState,
    currentPath,
}) => {
    return (
        <Box sx={classes.root}>
            <HeaderNav
                controleMobileSideNav={controleMobileSideNav}
                mobileSideNavState={mobileSideNavState}
            />
            <MenuNav
                currentPath={currentPath}
                controleMobileSideNav={controleMobileSideNav}
                mobileSideNavState={mobileSideNavState}
            />
        </Box>
    )
}

export default MobileNavbar
