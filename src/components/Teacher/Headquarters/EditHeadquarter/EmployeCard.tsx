import { useContext } from 'react';
import { DarkThemeContext } from 'context/ThemeContext';

// MUI
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


const EmployeCard: React.FC = () => {

    const { mainColors } = useContext(DarkThemeContext);

    const style = {
        root: {
            width: '143px',
            height: '143px',
            position: 'relative',
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '5px',
            borderRadius: '12px',  
            background: mainColors.paper.main,
            border: '2px solid #3F72A4',
        },
        avatar: {
            width: '75px !important',
            height: '75px !important',
            display: 'flex'
        },
        deleteButton: {
            position: 'absolute',
            top: '13px',
            right: '10px',
        }
    }

    return (
        <Box sx={style.root}>
            <Box sx={style.deleteButton}>
            <svg width="10" height="10" viewBox="0 0 10 10" stroke={mainColors.primary.main} fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.28 1L1 9.28" stroke="inherit" strokeWidth="1.38" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1 1L9.28 9.28" stroke="inherit" strokeWidth="1.38" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            </Box>
            <Box sx={style.avatar}>
                {/* <MyAvatar alt='باكينام السيد' src={me} /> */}
            </Box>
            <Typography variant='h5' color='primary' fontWeight={700}>
                باكينام السيد
            </Typography>
            <Typography variant='h6' color='primary'>
                سكرتارية
            </Typography>
        </Box>
    );
}
 
export default EmployeCard;