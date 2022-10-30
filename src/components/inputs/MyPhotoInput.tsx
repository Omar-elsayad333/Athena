import photoPlaceholder from '../../../public/images/photo-input-placeholder.svg';
import style from './style';
import Image from 'next/image';

// MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const MyPhotoInput = () => {
    return (
        <Box sx={style.container}>
            <Box sx={style.photoPLaceholder}>
                <Image src={photoPlaceholder} alt='Add Your Photo' />
                <input type='file' style={style.invisiableInput} />
            </Box>
            <Typography variant='h6' color='primary'>
                تحميل صورتك الشخصية
            </Typography>
        </Box>
    );
}
 
export default MyPhotoInput;