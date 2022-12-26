import { useContext } from 'react';
import { DarkThemeContext } from 'context/ThemeContext';

// MUI
import Box from '@mui/material/Box';


const AddCard = () => {
    
    const { mainColors } = useContext(DarkThemeContext);
    
    const style = {
        root: {
            width: '143px',
            height: '143px',
            display: 'grid',
            placeItems: 'center',
            borderRadius: '12px',  
            background: mainColors.paper.main,
            border: '2px solid #3F72A4',
        },
        addIcon: {
            width: '73px',
            height: '73px',
            borderRadius: '50%',  
            background: mainColors.paper.border,
            border: `3px solid ${mainColors.primary.main}`,
        }
    }

    return (
        <Box sx={style.root}>
            <Box sx={style.addIcon}>
                
            </Box>
        </Box>
    );
}
 
export default AddCard;