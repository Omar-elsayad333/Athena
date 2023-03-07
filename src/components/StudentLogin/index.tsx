import style from './style';
import Link from 'next/link';
import Image from 'next/image';
import LoginButDark from "../LoginButDark";
import logo from '../../../public/images/Logo(2).svg';
import MyLoginInput from '../TeacherLogin/LoginInput';

// MUI
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';

const StudentLogin: React.FC = () => {
    return (
        <Box sx={style.StudentLoginCard}>
            <Box sx={style.container}>
                <Box sx={{width: '60%'}}>
                    <Image layout="responsive" alt="Athena" src={logo} />
                </Box>
                <Typography variant="h2" sx={style.headerText}>
                    أهلاً بك في بوابة الطالب                
                </Typography>
                <Box sx={style.form}>
                    <Box>
                        <Typography variant="h4" style={style.formLabels}>
                            أسم المستخدم، البريد الإلكتروني أو رقم الهاتف 
                        </Typography>
                        <MyLoginInput />
                    </Box>
                    <Box>
                        <Typography variant="h4" style={style.formLabels}>
                            الرقم السري الخاص بك    
                        </Typography>
                        <MyLoginInput />
                        <Box sx={style.formOptions}>
                            <Typography variant="h5">
                                هل نسيت الرقم السري ؟
                            </Typography> 
                            <Box sx={style.checkContainer}>
                                <Checkbox size='small' />
                                <Typography variant="h5">
                                    تذكريني 
                                </Typography>
                            </Box>       
                        </Box>
                    </Box>
                    <Box sx={style.logContainer}>
                        <LoginButDark content='تسجيل الدخول' onClick={null} />
                        <Typography>
                            انا طالب جديد،
                            <Link href='/studentSignUp'>
                                <u style={style.link}>
                                    &nbsp;انشاء حساب الان
                                </u>
                            </Link>
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}   
    
export default StudentLogin;