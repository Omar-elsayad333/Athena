import { useContext } from "react";
import { lightColors, darkColors } from 'styles/colors';
import { DarkThemeContext } from "context/ThemeContext";

// MUI
import Typography from "@mui/material/Typography";
import MyInput from 'components/MyInput';
import MySelect from 'components/MySelect';
import Box from "@mui/material/Box";


const FormSection = () => {

    const {darkMode} = useContext(DarkThemeContext);

    const style = {
        title: {
            flex: '100%',
        },
        inputsContainer: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '40px',
        }
    }

    return (
        <Box>
            <Box sx={style.inputsContainer}>
            <Typography sx={style.title} variant="h3" color={darkMode ? darkColors.title.main : lightColors.title.main}>
                بيانات المجموعة:- 
            </Typography>
            <MyInput Placeholder='أسم المجموعة' />
            <MySelect placeholder='الصف الدراسي الخاص بالمجموعة' data={[]} />
            <MySelect placeholder='المقر الخاص بالمجموعة' data={[]} />
            <MyInput Placeholder='الحد الاقصى لعدد الطلاب' />
            </Box>
            <Box sx={style.inputsContainer}>
                <Typography sx={style.title} variant="h3" color={darkMode ? darkColors.title.main : lightColors.title.main}>
                    مواعيد المجموعة:- 
                </Typography>
            </Box>
        </Box>
    );
}
 
export default FormSection;