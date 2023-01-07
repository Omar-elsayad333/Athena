import style from './style';
import Link from 'next/link';
import MyInput from '../MyInput';
import MyPhotoInput from '../MyPhotoInput';
import MyButton from '../LogButS';
import MySelect from 'components/MySelect';
// import MyDatePicker from 'components/MyDatePicker';

// MUI
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import MyPassInput from 'components/MyPassInput';

const genders = [
    'ذكر',
    'أنثى',
];

const FormSection: React.FC = () => {
    return (
        <Container sx={style.formSec}>
            <Box sx={style.formSec.headerContainer}>
                <Box sx={style.formSec.formHeader}>
                    <Typography fontSize={35} fontWeight={700} color={'#1C364F'}>
                        انشاء حساب جديد  
                    </Typography>
                    <Typography pb={1} variant='h5' color={'#1C364F'} sx={style.formSec.formHeader.link}>
                        لدي حساب بالفعل
                        <Link href='/studentLogin'>
                            <a className='dark-link'>
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
                    <Typography variant='h4' fontWeight={700} color={'#1C364F'}>
                        معلومات الطالب الشخصية
                    </Typography>
                    <Box sx={style.formSec.photoInput}>
                        <MyPhotoInput />
                    </Box>
                    <Box sx={style.formSec.inputsLayout}>
                        <MyInput placeholder='الاسم الأول' type='text' onChange={() => {}}/>
                        <MyInput placeholder='الاسم الأخير' type='text' onChange={() => {}} />
                        <MyInput placeholder='الاسم الأوسط' type='text' onChange={() => {}} />
                        <MySelect placeholder='حدد النوع' data={genders} />
                        {/* <MyDatePicker placeholder='حدد تاريخ ميلادك ' /> */}
                        <MyInput placeholder='أكتب عنوانك بالكامل' type='text' onChange={() => {}} />
                        <MyInput placeholder='البريد الإلكتروني الخاص بك' type='email' onChange={() => {}} />
                        <MyInput placeholder='رقم الهاتف الخاص بك' type='text' onChange={() => {}} />
                        <MyInput placeholder='رقم الهاتف المنزلي' type='text' onChange={() => {}} />
                    </Box>
                </Box>

                <Box sx={style.formSec.stepLayout}>
                    <Typography variant='h4' fontWeight={700} color={'#1C364F'}>
                        معلومات ولي الأمر
                    </Typography>
                    <Box sx={style.formSec.inputsLayout}>                        
                        <MyInput placeholder='أسم ولي الأمر' type='text' onChange={() => {}} />
                        <MyInput placeholder='وظيفة ولي الأمر' type='text' onChange={() => {}} />
                        <MyInput placeholder='رقم هاتف ولي الأمر' type='text' onChange={() => {}} />
                    </Box>
                </Box>

                <Box sx={style.formSec.stepLayout}>
                    <Typography variant='h4' fontWeight={700} color={'#1C364F'}>
                        معلومات الحساب
                    </Typography>
                    <Box sx={style.formSec.inputsLayout}>
                        <MyInput placeholder='أسم المستخدم' type='text' onChange={() => {}} />
                        <MyPassInput placeholder='كلمة السر' />
                        <MyPassInput placeholder='تأكيد كلمة السر' />
                    </Box>
                </Box>
            </Box>
            
            <Box sx={style.formSec.privacy}>
                <Checkbox size='small' color='primary' />
                <Typography variant="h5" color='primary'>
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