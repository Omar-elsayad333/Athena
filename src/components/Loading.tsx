import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/system';
import clsx from 'clsx';
import { DarkThemeContext } from 'context/ThemeContext';
import { useContext } from 'react';

import { IStyle } from 'styles/IStyle';


type IProps = {
  small?: boolean | undefined;
  inside?: boolean | undefined;
};

const Loading: React.FC<IProps> = ({ small, inside }) => {
    const { mainColors } = useContext(DarkThemeContext);

    const styles: IStyle = {
      root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: '99',
        background: 'red'
      },
      container: {
        width: '100%',
        height: '100vh',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        margin: 'auto',
        zIndex: '999',
        background: mainColors.backgroundColor.main
      },
      inside: {
        height: 'auto',
        marginTop: '30px',
        marginBottom: '20px',
        zIndex: '999',
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
            {inside ? (
                <Box className={clsx(styles.root, styles.inside, styles.container)}>
                    <CircularProgress size={small ? 30 : 75} />
                </Box>
            ) : (
                <Box sx={styles.container}>
                    <CircularProgress size={small ? 30 : 75} sx={styles.circle} />
                </Box>
            )}
        </>
    );
};

export default Loading;
