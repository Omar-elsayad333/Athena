import Image from 'next/image';
import photoPlaceholder from '../../public/images/PhotoInputPlaceholder.svg';

// MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const classes: any = {
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
        backgroundColor: '#B6D5F0',
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