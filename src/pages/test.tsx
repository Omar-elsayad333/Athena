import { useState } from 'react';

// MUI
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MyDaysDialog from 'components/MyDaysDialog';

const classes = {
    root: {
        width:'100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '100px',
    },
}

const Test = () => {

    const [open, setOpen] = useState<boolean>(false);
  
    const handleClickOpen = () => {
        setOpen(true);
    };
  
    const handleClose = () => {
        setOpen(false);
    };
  
    return (
        <Box sx={classes.root}>
            <Button variant='contained' onClick={handleClickOpen}>
                open dialog
            </Button>
            <MyDaysDialog handleClose={handleClose} open={open} />
        </Box>
    );
}

export default Test;