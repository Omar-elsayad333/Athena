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

    const { check, navState } = useLayout();
    
    useEffect(() => {
        check()
    }, []);
    
    return (
        <Box>
            { navState && <TeacherNavbar /> }
            <Box sx={classes.root}>
                { navState && <TeacherSideNav /> }
                {children}
            </Box>
        </Box>
    );
}

export default Layout;