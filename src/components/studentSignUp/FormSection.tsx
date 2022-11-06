import style from './style';
import Link from 'next/link';
import MyInput from '../inputs/MyInput';
import MyPhotoInput from '../inputs/MyPhotoInput';
import MyButton from '../buttons/MyButton';

// MUI
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const FormSection = () => {
    return (
        <Container sx={style.formSec}>
            <Box sx={style.formSec.headerContainer}>
                <Box sx={style.formSec.formHeader}>
                    <Typography variant='h2' color='primary'>
                        انشاء حساب جديد  
                    </Typography>
                    <Typography pb={1} variant='h5' color='primary'>
                        لدي حساب بالفعل
                        <Link href='/studentLogin'>
                            <a style={style.formSec.formHeader.link}>
                                &nbsp;تسجيل الدخول
                            </a>
                        </Link>
                    </Typography>
                </Box>
                <Box sx={style.formSec.headerPhotoInput}>
                    <MyPhotoInput />
                </Box>
            </Box>

            <Box sx={style.formSec.formLayout}>
                <Box sx={style.formSec.stepLayout}>
                    <Typography variant='h4' fontWeight={700} color='primary'>
                        معلومات الطالب الشخصية
                    </Typography>
                    <Box sx={style.formSec.photoInput}>
                        <MyPhotoInput />
                    </Box>
                    <Box sx={style.formSec.inputsLayout}>
                        <MyInput Placeholder='أكتب أسمك بالكامل' Type='text' />
                        <MyInput Placeholder='أكتب أسمك بالكامل' Type='text' />
                        <MyInput Placeholder='أكتب أسمك بالكامل' Type='text' />
                        <MyInput Placeholder='أكتب أسمك بالكامل' Type='text' />
                        <MyInput Placeholder='أكتب أسمك بالكامل' Type='text' />
                        <MyInput Placeholder='أكتب أسمك بالكامل' Type='text' />
                        <MyInput Placeholder='أكتب أسمك بالكامل' Type='text' />
                        <MyInput Placeholder='أكتب أسمك بالكامل' Type='text' />
                        <MyInput Placeholder='أكتب أسمك بالكامل' Type='text' />
                    </Box>
                </Box>

                <Box sx={style.formSec.stepLayout}>
                    <Typography variant='h4' fontWeight={700} color='primary'>
                        معلومات ولي الأمر
                    </Typography>
                    <Box sx={style.formSec.inputsLayout}>                        
                        <MyInput Placeholder='أكتب أسمك بالكامل' Type='text' />
                        <MyInput Placeholder='أكتب أسمك بالكامل' Type='text' />
                        <MyInput Placeholder='أكتب أسمك بالكامل' Type='text' />
                    </Box>
                </Box>

                <Box sx={style.formSec.stepLayout}>
                    <Typography variant='h4' fontWeight={700} color='primary'>
                        معلومات الحساب
                    </Typography>
                    <Box sx={style.formSec.inputsLayout}>
                        <MyInput Placeholder='أكتب أسمك بالكامل' Type='text' />
                        <MyInput Placeholder='أكتب أسمك بالكامل' Type='text' />
                        <MyInput Placeholder='أكتب أسمك بالكامل' Type='text' />
                    </Box>
                </Box>
            </Box>
            <Box sx={style.formSec.privacy}>
                <Checkbox size='small' color='secondary' />
                <Typography variant="h5" color='secondary'>
                    عمري 13 عاما أو أكثر وأوافق على سياسة الخصوصية وشروط الخدمة     
                </Typography>
            </Box>
            <Box sx={style.formSec.submitButton}>
                <MyButton content='انشاء الحساب' color='info' onClick={null}/>
            </Box>
        </Container>
    );
}

export default FormSection;