import { useContext } from 'react';
import { DarkThemeContext } from 'context/ThemeContext';

// MUI
import { Box } from '@mui/system';
import { IStyle } from 'styles/IStyle';
import CircularProgress from '@mui/material/CircularProgress';


type IProps = {
    small?: boolean ;
    inside?: boolean ;
};

const Loading: React.FC<IProps> = ({ small }) => {

    const { mainColors } = useContext(DarkThemeContext);

    const styles: IStyle = {
      container: {
        width: '100%',
        height: '100vh',
        position: 'abslout', 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // position: 'sticky',
        top: 0,
        right: 0,
        // bottom: 0,
        // left: 0,
        // margin: 'auto',
        zIndex: '999',
        background: mainColors.loader.main,
      }
    };

    return (
      <Box sx={styles.container}>
        <CircularProgress color='primary' size={small ? 30 : 75} />
      </Box>
    );
};

export default Loading;
