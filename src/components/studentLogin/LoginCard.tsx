import Typography from "@mui/material/Typography";
import Image from "next/image";
import style from './style';
import logo from '../../../public/images/Logo(2).svg'
import Box from "@mui/system/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "../button/Button";

const LoginCard = () => {
    return (
        <Box style={style.loginCard}>
            <Box style={{width: '60%'}}>
                <Image layout="responsive" alt="Athena" src={logo} />
            </Box>
            <Typography sx={style.headerText}>
                أهلاً بك في بوابة الطالب
            </Typography>
            <Box sx={style.form}>
                <Box>
                    <Typography style={style.formLabels}>
                        أسم المستخدم، البريد الإلكتروني أو رقم الهاتف 
                    </Typography>
                    <input style={style.formInputs} />
                </Box>
                <Box>
                    <Typography style={style.formLabels}>
                        الرقم السري الخاص بك    
                    </Typography>
                    <input style={style.formInputs} />
                    <Box sx={style.formOptions}>
                        <Typography>
                            هل نسيت الرقم السري ؟
                        </Typography>
                        <FormControlLabel control={<Checkbox />} label="تذكريني" />            
                    </Box>
                </Box>
                <Box sx={style.logContainer}>
                    <Button content='تسجيل الدخول' />
                    <Typography>
                        انا طالب جديد، انشاء حساب الان         
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}   
    
export default LoginCard;