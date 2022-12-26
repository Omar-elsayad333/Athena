import { useContext } from 'react';
import { DarkThemeContext } from 'context/ThemeContext';
import MyInput from 'components/MyInput';
import MyInputSmall from 'components/MyInputSmall';
import MyButton from 'components/Buttons/MyButton';
import MyButtonError from 'components/Buttons/MyButtonError';

// MUI
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AddCard from './AddCard';
import EmployeCard from './EmployeCard';

const style = {
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '40px',
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        gap: '13px',
    },
    title: {
        flex: '100%',
    },
    buttonsContainer: {
        marginTop: '30px',
        flex: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '35px'
    },
    submitButton: {
        width: '170px',
        height: '40px',
    }
}

const AddHeadquarterC = () => {
    
    const {mainColors} = useContext(DarkThemeContext);

    return (
        <Box sx={style.container}>
            <Typography sx={style.title} variant="h3" color={mainColors.title.main}>
                بيانات المقر:- 
            </Typography>
            <MyInput Placeholder='أسم المقر' />
            <Typography sx={style.title} variant="h3" color={mainColors.title.main}>
                عنوان المقر:-  
            </Typography>
            <MyInputSmall Placeholder='المدينة' />
            <MyInputSmall Placeholder='أسم المنطقة' />
            <MyInputSmall Placeholder='أسم المنطقة' />
            <MyInputSmall Placeholder='رقم المبنى' />
            <Typography sx={style.title} variant="h3" color={mainColors.title.main}>
                بيانات الاتصال:-  
            </Typography>
            <Box sx={style.inputContainer}>
                <Typography variant='h5' color={mainColors.primary.dark}>
                    رقم الهاتف الأول
                </Typography>
                <MyInput Placeholder='رقم الهاتف' />
            </Box>
            <Box sx={style.inputContainer}>
                <Typography variant='h5' color={mainColors.primary.dark}>
                    رقم الهاتف الثاني
                </Typography>
                <MyInput Placeholder='رقم الهاتف' />
            </Box>
            <Typography sx={style.title} variant="h3" color={mainColors.title.main}>
                الموظفيين:-  
            </Typography>
            <AddCard />
            <EmployeCard />
            <Box sx={style.buttonsContainer}>
                <Box sx={style.submitButton}>
                    <MyButton content='تأكيد واضافة' />
                </Box>
                <Box sx={style.submitButton}>
                    <MyButtonError content='إلغاء العملية' />
                </Box>
            </Box>
        </Box>
    );
}
 
export default AddHeadquarterC;