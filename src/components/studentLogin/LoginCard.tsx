import logo from '../../../public/images/Logo(2).svg'
import Image from "next/image";
import style from './style';
import MyButton from "../button/MyButton";

// MUI
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import Checkbox from "@mui/material/Checkbox";

const LoginCard = () => {
    return (
        <Box style={style.loginCard}>
            <Box style={{width: '60%'}}>
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
                    <input style={style.formInputs} />
                </Box>
                <Box>
                    <Typography variant="h4" style={style.formLabels}>
                        الرقم السري الخاص بك    
                    </Typography>
                    <input style={style.formInputs} />
                    <Box sx={style.formOptions}>
                        <Typography variant="h5">
                            هل نسيت الرقم السري ؟
                        </Typography> 
                        <Box sx={style.checkContainer}>
                            <Checkbox size='small'/>
                            <Typography variant="h5">
                                تذكريني 
                            </Typography>
                        </Box>       
                    </Box>
                </Box>
                <Box sx={style.logContainer}>
                    <MyButton content='تسجيل الدخول' />
                    <Typography>
                        انا طالب جديد، انشاء حساب الان         
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}   
    
export default LoginCard;