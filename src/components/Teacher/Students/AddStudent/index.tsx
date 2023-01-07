import { useContext } from 'react';
import { DarkThemeContext } from 'context/ThemeContext';
import MyButton from 'components/Buttons/MyButton';
import MyButtonError from 'components/Buttons/MyButtonError';

// MUI
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MyInput from 'components/MyInput';
import MyPhotoInput from 'components/MyPhotoInput';


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
            flexWrap: 'wrap',
            gap: '50px',
        },
        studentCard: {
            padding: '30px 35px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'start',
            flexWrap: 'wrap',
            gap: '70px',
            borderRadius: '20px',
            background: mainColors.paper.main,
            border: `2px solid ${mainColors.paper.border}`,
            dataContainer: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'start',
                flexWrap: 'wrap',
                gap: '20px',
            },
            row: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '35px',
            },
            studentName: {
                marginBottom: '15px',
                padding: '10px 20px',
                borderRadius: '10px',
                border: `2px solid ${mainColors.icons.roundedAdd}`,
                background: mainColors.linerGradient.primary,
                boxShadow: '0px 5px 15px 0px #B6D5F080',
            },
            dataCard: {
                padding: '10px 15px',
                borderRadius: '5px',
                background: mainColors.backgroundColor.main,
                border: `1px solid ${mainColors.paper.border}`,
            }
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
                <MyInput placeholder={'أدخل كود الطالب'} onChange={() => {}} />
                <Box sx={style.submitButton}>
                    <MyButton content='تأكيد' />
                </Box>
            </Box>
            <Typography sx={style.title} variant="h3" color={mainColors.title.main}>
                بطاقة الطالب التعريفية:- 
            </Typography>
            <Box sx={style.studentCard}>
                <Box sx={style.studentCard.dataContainer}>
                    <Box sx={style.studentCard.row}>
                        <Box sx={style.studentCard.studentName}>
                            <Typography color={'primary'} variant={'h3'}>
                                الطالب / مروان محمد عبد العزيز
                            </Typography>
                        </Box>
                        <Box sx={style.studentCard.dataCard}>
                            <Typography color={'primary'} variant='h5' fontWeight={700}>
                                25012011
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <MyPhotoInput />
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