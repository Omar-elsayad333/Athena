import useLayout from 'container/useLayout';
import MobileSideNav from './MobileSideNav';
import DesktopSideNav from './DesktopSideNav';

// MUI
import Box from '@mui/material/Box';
import { withProtected } from 'routes/withRouts';

type IProps = {
    children?: JSX.Element | JSX.Element[];
};

const Layout: React.FC<IProps> = ({ children }) => {

    const { 
        sideNavState, 
        controleSideNav,
        mobileSideNavState,
        controleMobileSideNav,
        currentPath,
    } = useLayout();

    const style = {
        container: {
            display: 'flex',
            '@media(max-width: 1200px)': {
                flexDirection: 'column',
            },
        }
    }
    
    return (
        <Box>
            <Box sx={style.container}>    
                <DesktopSideNav controleSideNav={controleSideNav} sideNavState={sideNavState} currentPath={currentPath} /> 
                <MobileSideNav mobileSideNavState={ mobileSideNavState} controleMobileSideNav={controleMobileSideNav} currentPath={currentPath} />
                {children}
            </Box>
        </Box>
    );
}

export default withProtected(Layout)