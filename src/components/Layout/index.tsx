import TeacherSideNav from './TeacherSideNav';
import TeacherNavbar from './TeacherNavbar';
import useLayout from 'container/useLayout';

// MUI
import Box from '@mui/material/Box';
import { useEffect } from 'react';

type IProps = {
    children?: JSX.Element | JSX.Element[];
};

const classes = {
    root: {
        display: 'flex'
    }
}

const Layout: React.FC<IProps> = ({ children }) => {

    const { check, layoutState } = useLayout();
    
    useEffect(() => {
        check();
    });
        
    return (
        <Box>
            { layoutState && <TeacherNavbar /> }
            <Box sx={classes.root}>
                { layoutState && <TeacherSideNav /> }
                {children}
            </Box>
        </Box>
    );
}

export default Layout;