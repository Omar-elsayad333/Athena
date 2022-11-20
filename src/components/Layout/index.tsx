import DesktopSideNav from './DesktopSideNav';
import MobileSideNav from './MobileSideNav';
import useLayout from 'container/useLayout';

// MUI
import Box from '@mui/material/Box';
import { useEffect } from 'react';

type IProps = {
    children?: JSX.Element | JSX.Element[];
};

const Layout: React.FC<IProps> = ({ children }) => {

    const { 
        check, 
        layoutState,
        sideNavState, 
        controleSideNav,
        mobileSideNavState,
        controleMobileSideNav,
    } = useLayout();
    
    useEffect(() => {
        check();
    });

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
                { 
                    layoutState &&
                    <>
                        <DesktopSideNav controleSideNav={controleSideNav} sideNavState={sideNavState} /> 
                        <MobileSideNav mobileSideNavState={ mobileSideNavState} controleMobileSideNav={controleMobileSideNav} />
                    </>
                }
                {children}
            </Box>
        </Box>
    );
}

export default Layout;