import TeacherSideNav from './TeacherSideNav';
import DesktopNavbar from './DesktopNavbar';
import useLayout from 'container/useLayout';

// MUI
import Box from '@mui/material/Box';
import { useEffect } from 'react';
import MobileNavbar from './MobileNavbar';

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
        
    return (
        <Box>
            {
                layoutState && 
                <>
                    <DesktopNavbar controleSideNav={controleSideNav} sideNavState={sideNavState} /> 
                    <MobileNavbar controleMobileSideNav={controleMobileSideNav} mobileSideNavState={mobileSideNavState} /> 
                </>
                    
            }

            <Box sx={{display: 'flex'}}>
                { layoutState && <TeacherSideNav sideNavState={sideNavState} /> }
                {children}
            </Box>
        </Box>
    );
}

export default Layout;