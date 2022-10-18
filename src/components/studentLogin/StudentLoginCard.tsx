import logo from '../../../public/images/Logo(2).svg';
import Image from "next/image";
import style from './style';
import MyButton from "../Buttons/MyButton";
import MyLogFormInput from '../Inputs/MyLogFormInput';
import Link from 'next/link';

// MUI
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import Checkbox from "@mui/material/Checkbox";

const StudentLoginCard = () => {
    return (
        <Box sx={style.StudentLoginCard}>
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
                        <MyButton content='تسجيل الدخول' color='primary' />
                        <Typography>
                            انا طالب جديد،
                            <Link href='/studentSignUp'>
                                <a style={style.link}>
                                    &nbsp;انشاء حساب الان
                                </a>
                            </Link>
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}   
    
export default StudentLoginCard;