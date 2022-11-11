import Image from 'next/image';
import colors from '../styles/colors';
import photoPlaceholder from '../../public/images/photo-input-placeholder.svg';

// MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const classes: any = {
    logFormInputs: {
        width: 'calc(100% - 20px)',
        height: '100%',
        fontSize: 'inherit',
        color: colors.primary,
        borderRadius: '12px',
        border: 'none',
        outline: 'none',
        background: 'rgba(232, 243, 255, 0.25)',
        boxShadow: '0px 0px 10px rgba(28, 54, 79, 0.25)',
        padding: '0 10px',
        direction: 'ltr',
    },
    inputsContainer: {
        width: '100%',
        height: '80px',
        fontSize: '23px',
        '@media (max-width: 600px)': {
            height: '50px',
            fontSize: '18px'
        }
    },
    container: {
        width: 'fit-content',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
    },
    invisiableInput: {
        width: '150px',
        height: '150px',
        opacity: 0,
        position: 'absolute',
        cursor: 'pointer',
    },
    photoPLaceholder: {
        width: '150px',
        height: '150px',
        backgroundColor: '#D4E7F9',
        border: '2px dashed #1C364F',
        borderRadius: '13px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
};

const MyPhotoInput: React.FC = () => {
    return (
        <Box sx={classes.container}>
            <Box sx={classes.photoPLaceholder}>
                <Image src={photoPlaceholder} alt='Add Your Photo' />
                <input type='file' style={classes.invisiableInput} />
            </Box>
            <Typography variant='h6' color='primary'>
                تحميل صورتك الشخصية
            </Typography>
        </Box>
    );
}
 
export default MyPhotoInput;