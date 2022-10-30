import style from './style';
import MyInput from '../inputs/MyInput';
import MyPhotoInput from '../inputs/MyPhotoInput';

// MUI
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const FormSection = () => {
    return (
        <Container sx={style.formSec}>
            <Box sx={style.formSec.formLayout}>
                <Box sx={style.formSec.stepLayout}>
                    <Typography variant='h4' fontWeight={700} color='primary'>
                        معلومات الطالب الشخصية
                    </Typography>
                    <Box sx={style.formSec.inputsLayout}>
                        <MyInput placeholder='أكتب أسمك بالكامل' inputType='text' />
                        <MyInput placeholder='أكتب أسمك بالكامل' inputType='text' />
                        <MyInput placeholder='أكتب أسمك بالكامل' inputType='text' />
                        <MyInput placeholder='أكتب أسمك بالكامل' inputType='text' />
                        <MyInput placeholder='أكتب أسمك بالكامل' inputType='text' />
                        <MyInput placeholder='أكتب أسمك بالكامل' inputType='text' />
                        <MyInput placeholder='أكتب أسمك بالكامل' inputType='text' />
                        <MyInput placeholder='أكتب أسمك بالكامل' inputType='text' />
                        <MyInput placeholder='أكتب أسمك بالكامل' inputType='text' />
                    </Box>
                </Box>

                <Box sx={style.formSec.stepLayout}>
                    <Typography variant='h4' fontWeight={700} color='primary'>
                        معلومات ولي الأمر
                    </Typography>
                    <Box sx={style.formSec.inputsLayout}>                        
                        <MyInput placeholder='أكتب أسمك بالكامل' inputType='text' />
                        <MyInput placeholder='أكتب أسمك بالكامل' inputType='text' />
                        <MyInput placeholder='أكتب أسمك بالكامل' inputType='text' />
                    </Box>
                </Box>

                <Box sx={style.formSec.stepLayout}>
                    <Typography variant='h4' fontWeight={700} color='primary'>
                        معلومات الحساب
                    </Typography>
                    <Box sx={style.formSec.inputsLayout}>
                        <MyInput placeholder='أكتب أسمك بالكامل' inputType='text' />
                        <MyInput placeholder='أكتب أسمك بالكامل' inputType='text' />
                        <MyInput placeholder='أكتب أسمك بالكامل' inputType='text' />
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}

export default FormSection;