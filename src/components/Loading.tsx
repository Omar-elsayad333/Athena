import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/system';
import clsx from 'clsx';

import { IStyle } from 'styles/IStyle';

const styles: IStyle = {
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '99',
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

type IProps = {
    small?: boolean | undefined;
    inside?: boolean | undefined;
};

const Loading: React.FC<IProps> = ({ small, inside }) => {
    console.log('loading');
    return (
        <>
            {inside ? (
                <Box className={clsx(styles.root, styles.inside)}>
                    <CircularProgress size={small ? 30 : 75} />
                </Box>
            ) : (
                <Box>
                    <CircularProgress size={small ? 30 : 75} sx={styles.circle} />
                </Box>
            )}
        </>
    );
};

export default Loading;
