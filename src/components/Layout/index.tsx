import TeacherLayout from './TeacherLayout';

// MUI
import Box from '@mui/material/Box';

type IProps = {
    children?: JSX.Element | JSX.Element[];
};

const Layout: React.FC<IProps> = ({ children }) => {
    return (
        <Box>
            <TeacherLayout />
            {children}
        </Box>
    );
}

export default Layout;