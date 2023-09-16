import Header from './Header'
import Menu from './Menu'
import Footer from './Footer'

// MUI
import Box from '@mui/material/Box'

type Props = {
    controleSideNav: Function
    sideNavState: Boolean
    currentPath: any
}

const style: any = {
    container: {
        height: '100vh',
        position: 'sticky',
        top: '0',
        zIndex: '99',
        transition: '.2s',
        '@media screen and (max-width: 1200px)': {
            display: 'none',
        },
    },
}

const DesktopSideNav: React.FC<Props> = ({ controleSideNav, sideNavState, currentPath }) => {
    const classes: any = {
        container: {
            width: sideNavState ? '308px' : '76px',
        },
    }

    return (
        <Box sx={[style.container, classes.container]}>
            <Header controleSideNav={controleSideNav} sideNavState={sideNavState} />
            <Menu sideNavState={sideNavState} currentPath={currentPath} />
            <Footer sideNavState={sideNavState} />
        </Box>
    )
}

export default DesktopSideNav
