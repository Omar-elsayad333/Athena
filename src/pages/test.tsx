
// MUI
import Box from '@mui/material/Box';

const classes = {
    root: {
        margin: 'auto',
        width:'80%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '100px',
    },
}

const Test = () => {

    return (
        <Box sx={classes.root}>
        </Box>
    );
}

export default Test;