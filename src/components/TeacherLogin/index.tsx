import style from './style';
import Image from 'next/image';
import MyButton from './LoginButton';
import LoginInput from './LoginInput';
import PasswordInput from './PasswordInput';

// MUI
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';

type Props = {
    userInfo: any;
    supmit: Function;
}

const TeacherLogin: React.FC<Props> = ({userInfo, supmit}) => {

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
                        <LoginInput value={userInfo.userName} setValue={userInfo.setUserName} />
                    </Box>
                    <Box sx={{width: '100%'}}>
                        <Typography sx={style.formLabels}>
                            الرقم السري الخاص بك    
                        </Typography>
                        <PasswordInput value={userInfo.password} setValue={userInfo.setPassword} />
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
                        <MyButton content='تسجيل الدخول' onClick={() => supmit()} />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}   
    
export default TeacherLogin;