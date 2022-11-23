import { lightColors, darkColors } from 'styles/colors';
import PageTitle from 'components/Shared/PageTitle';
import GroupsIcon from '../../../../../public/images/GroupsIcon.svg';
import { useContext } from "react";
import { DarkThemeContext } from "context/ThemeContext";

// MUI
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MyInput from 'components/MyInput';
import MySelect from 'components/MySelect';

const FormSection = () => {

    const {darkMode} = useContext(DarkThemeContext);

    const style = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            gap: '60px',
        },
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
        <Box sx={style.container}>
            <PageTitle icon={GroupsIcon} content='اضافة مجموعة جديدة' />
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