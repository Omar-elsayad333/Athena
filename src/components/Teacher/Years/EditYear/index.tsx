import { useContext } from 'react';
import { DarkThemeContext } from 'context/ThemeContext';

// MUI
import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';


const EditYearC: React.FC = () => {
    
    const { mainColors } = useContext(DarkThemeContext);
    
    const style = {
        container: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '40px',
            columnGap: '104px',
        },
        inputContainer: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            gap: '13px',
        },
        title: {
            flex: '100%',
        },
        classes: {
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '26px'
        },
        selectedContainer: {
            padding: '18px 27px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '28px',
            background: mainColors.paper.main,
            border: `solid 2px ${mainColors.paper.border}`,
            borderRadius: '14px',
        },
        classesChips: {
            width: '95px',
            height: '95px',
            padding: '5px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: '700',
            fontSize: '20px',
            textAlign: 'center',
            borderRadius: '50%',
            border: '2px solid #3F72A4',
            color: mainColors.secondary.contrastText,
            background: mainColors.linerGradient.primary,
            cursor: 'pointer',
        },
        buttonsContainer: {
            marginTop: '30px',
            flex: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '35px',
        },
        submitButton: {
            width: '170px',
            height: '40px',
        },
    }
    
    return (
        <Box sx={style.container}>
        </Box>
    );
}
 
export default EditYearC;