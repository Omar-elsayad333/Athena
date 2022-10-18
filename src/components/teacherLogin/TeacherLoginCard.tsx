import logo from '../../../public/images/Logo(1).svg';
import Image from "next/image";
import style from './style';
import MyButton from '../buttons/MyButton';
import MyLogFormInput from '../inputs/MyLogFormInput';

// MUI
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import Checkbox from "@mui/material/Checkbox";

const TeacherLoginCard = () => {
    return (
        <Box sx={style.TeacherLoginCard}>
            <Box sx={style.container}>
                <Box sx={{width: '60%'}}>
                    <Image layout="responsive" alt="Athena" src={logo} />
                </Box>
                <Typography variant="h2" sx={style.headerText}>
                    أهلاً بك في البوابة الرئيسية
                </Typography>
                <Box sx={style.form}>
                    <Box>
                        <Typography variant="h4" style={style.formLabels}>
                            أسم المستخدم، البريد الإلكتروني أو رقم الهاتف 
                        </Typography>
                        <MyLogFormInput inputType='email' />
                    </Box>
                    <Box>
                        <Typography variant="h4" style={style.formLabels}>
                            الرقم السري الخاص بك    
                        </Typography>
                        <MyLogFormInput inputType='password' />
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
                        <MyButton content='تسجيل الدخول' color='secondary' />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}   
    
export default TeacherLoginCard;