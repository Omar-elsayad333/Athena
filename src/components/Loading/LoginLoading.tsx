import { IStyle } from 'styles/IStyle';

// MUI
import Box from '@mui/system/Box';
import CircularProgress from '@mui/material/CircularProgress';


type IProps = {
    small?: boolean ;
    inside?: boolean ;
};

const LoginLoading: React.FC<IProps> = ({ small }) => {

    const styles: IStyle = {
      container: {
        width: '100%',
        height: '100%',
        position: 'absolute', 
        zIndex: '100',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }
    };

    return (
      <Box sx={styles.container}>
        <CircularProgress color='primary' size={small ? 30 : 75} />
      </Box>
    );
};

export default LoginLoading;
