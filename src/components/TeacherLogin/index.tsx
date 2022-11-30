import style from './style';
import Image from 'next/image';
import MyButton from './LoginButton';
import MyLoginInput from './LoginInput';
import PasswordInput from './PasswordInput';

// MUI
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';

const TeacherLogin: React.FC = () => {

    return (
        <Box sx={style.TeacherLoginCard}>
            <Box sx={style.container}>
                <Box sx={style.imageContainer}>
                    <Image src='/images/logo-with-text.svg' layout="responsive" alt="Athena" width='60%' height='50%' />
                </Box>
                <Typography variant="h2" sx={style.headerText}>
                    أهلاً بك في البوابة الرئيسية
                </Typography>
                <Box sx={style.form}>
                    <Box>
                        <Typography sx={style.formLabels}>
                            أسم المستخدم، البريد الإلكتروني أو رقم الهاتف 
                        </Typography>
                        <MyLoginInput />
                    </Box>
                    <Box sx={{width: '100%'}}>
                        <Typography sx={style.formLabels}>
                            الرقم السري الخاص بك    
                        </Typography>
                        <PasswordInput />
                        <Box sx={style.formOptions}>
                            <Typography variant="h5">
                                هل نسيت الرقم السري ؟
                            </Typography> 
                            <Box sx={style.checkContainer}>
                                <Checkbox size='small' color='primary' sx={style.checkBox} />
                                <Typography variant="h5">
                                    تذكريني 
                                </Typography>
                            </Box>       
                        </Box>
                    </Box>
                    <Box sx={style.logContainer}>
                        <MyButton content='تسجيل الدخول' onClick={null} />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}   
    
export default TeacherLogin;