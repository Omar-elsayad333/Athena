import { useContext } from 'react';
import { DarkThemeContext } from 'context/ThemeContext';

// MUI
import clsx from 'clsx';
import { Box } from '@mui/system';
import { IStyle } from 'styles/IStyle';
import CircularProgress from '@mui/material/CircularProgress';


type IProps = {
    small?: boolean ;
    inside?: boolean ;
};

const Loading: React.FC<IProps> = ({ small, inside }) => {

    const { mainColors } = useContext(DarkThemeContext);

    const styles: IStyle = {
      container: {
        width: '100%',
        height: '100vh',
        position: 'abslout',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        margin: 'auto',
        zIndex: '999',
        background: mainColors.backgroundColor.main
      },
      inside: {
        width: '100%',
        height: '100vh',
        position: 'abslout',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        margin: 'auto',
        zIndex: '999',
        opacity: '.5',
        background: mainColors.backgroundColor.main,
      },
      circle: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        margin: 'auto',
        zIndex: '999',
      },
    };

    return (
        <>
            {
                inside ? 
                <Box className={clsx(styles.root, styles.inside)}>
                    <CircularProgress size={small ? 30 : 75} />
                </Box> :
                <Box sx={styles.container}>
                    <CircularProgress size={small ? 30 : 75} sx={styles.circle} />
                </Box>
            }
        </>
    );
};

export default Loading;
