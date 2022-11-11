import Teacher from './Teacher';

// MUI
import Box from '@mui/material/Box';

type IProps = {
    children?: JSX.Element | JSX.Element[];
};

const Layout: React.FC<IProps> = ({ children }) => {
    return (
        <Box>
            <Teacher />
            {children}
        </Box>
    );
}

export default Layout;