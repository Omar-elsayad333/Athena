
// MUI
import Box from '@mui/material/Box';

const classes = {
    root: {
        width:'100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
    },
}

const Test = () => {
    return (
        <Box sx={classes.root}>
        </Box>
    );
}

export default Test;