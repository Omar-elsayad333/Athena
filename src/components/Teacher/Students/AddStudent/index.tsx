import { useContext } from 'react';
import { DarkThemeContext } from 'context/ThemeContext';
import MyButton from 'components/Buttons/MyButton';
import MyButtonError from 'components/Buttons/MyButtonError';

// MUI
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MyInput from 'components/MyInput';


const YearsSettingC: React.FC = () => {
    
    const { mainColors } = useContext(DarkThemeContext);
    
    const style = {
        container: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '40px',
            columnGap: '104px',
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
        codeContainer: {
            display:  'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '50px'
        },
        studentCard: {
            padding: '30px 35px',
            display: 'content',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '20px',
            background: mainColors.paper.main,
            border: `2px solid ${mainColors.paper.border}`
        },
        buttonsContainer: {
            marginTop: '30px',
            flex: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '35px',
        },
        submitButton: {
            width: '170px',
            height: '40px',
        },
    }
    
    return (
        <Box sx={style.container}>
            <Typography sx={style.title} variant="h3" color={mainColors.title.main}>
                الكود الخاص بالطالب:-
            </Typography>
            <Box sx={style.codeContainer}>
                <MyInput Placeholder={'أدخل كود الطالب'} />
                <Box sx={style.submitButton}>
                    <MyButton content='تأكيد' />
                </Box>
            </Box>
            <Typography sx={style.title} variant="h3" color={mainColors.title.main}>
                بطاقة الطالب التعريفية:- 
            </Typography>
            <Box sx={style.studentCard}>
                asjf;asl
            </Box>
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
 
export default YearsSettingC;