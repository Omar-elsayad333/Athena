// import { useContext } from 'react';
// import { DarkThemeContext } from 'context/ThemeContext';

// MUI
import Box from '@mui/material/Box';

const style = {
    root: {
        width: '143px',
        height: '143px',
        display: 'grid',
        placeItems: 'center',
        borderRadius: '12px',  
        background: '#E8F3FF',
        border: '2px solid #3F72A4',
    },
    addIcon: {
        width: '73px',
        height: '73px',
        borderRadius: '50%',  
        background: '#B6D5F0',
        border: '3px solid #3F72A4',
    }
}

const AddCard = () => {
    return (
        <Box sx={style.root}>
            <Box sx={style.addIcon}>
                
            </Box>
        </Box>
    );
}
 
export default AddCard;