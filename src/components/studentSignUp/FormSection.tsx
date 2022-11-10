import style from './style';
import Link from 'next/link';
import MyInput from '../Inputs/MyInput';
import MyPhotoInput from '../Inputs/MyPhotoInput';
import MyButton from '../Buttons/LogButS';

// MUI
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const FormSection: React.FC = () => {
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
                        <MyInput Placeholder='الاسم الأول' Type='text' />
                        <MyInput Placeholder='الاسم الأخير' Type='text' />
                        <MyInput Placeholder='الاسم الأوسط' Type='text' />
                        <MyInput Placeholder='أكتب عنوانك بالكامل' Type='text' />
                        <MyInput Placeholder='أكتب أسمك بالكامل' Type='text' />
                        <MyInput Placeholder='أكتب أسمك بالكامل' Type='text' />
                        <MyInput Placeholder='البريد الإلكتروني الخاص بك' Type='text' />
                        <MyInput Placeholder='رقم الهاتف الخاص بك' Type='text' />
                        <MyInput Placeholder='رقم الهاتف المنزلي' Type='text' />
                    </Box>
                </Box>

                <Box sx={style.formSec.stepLayout}>
                    <Typography variant='h4' fontWeight={700} color='primary'>
                        معلومات ولي الأمر
                    </Typography>
                    <Box sx={style.formSec.inputsLayout}>                        
                        <MyInput Placeholder='أسم ولي الأمر' Type='text' />
                        <MyInput Placeholder='وظيفة ولي الأمر' Type='text' />
                        <MyInput Placeholder='رقم هاتف ولي الأمر' Type='text' />
                    </Box>
                </Box>

                <Box sx={style.formSec.stepLayout}>
                    <Typography variant='h4' fontWeight={700} color='primary'>
                        معلومات الحساب
                    </Typography>
                    <Box sx={style.formSec.inputsLayout}>
                        <MyInput Placeholder='أسم المستخدم' Type='text' />
                        <MyInput Placeholder='كلمة السر ' Type='text' />
                        <MyInput Placeholder='تأكيد كلمة السر' Type='text' />
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
                <MyButton content='انشاء الحساب' onClick={null}/>
            </Box>
        </Container>
    );
}

export default FormSection;