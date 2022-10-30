import { Typography } from '@mui/material';
import Container from '@mui/material/Container';
import MyInput from '../inputs/MyInput';
import MyPhotoInput from '../inputs/MyPhotoInput';
import MySmallInput from '../inputs/MySmallInput';
import style from './style';

const FormSection = () => {
    return (
        <Container sx={style.formSec}>
            <Typography>
                hello form form
            </Typography>
            <MyInput placeholder='أكتب أسمك بالكامل' inputType='text' />
            <MySmallInput placeholder='أكتب أسمك بالكامل' inputType='text' />
            <MyPhotoInput />
        </Container>
    );
}

export default FormSection;