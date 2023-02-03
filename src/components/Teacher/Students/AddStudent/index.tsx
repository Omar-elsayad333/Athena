import { useContext } from 'react';
import { DarkThemeContext } from 'context/ThemeContext';
import MyButton from 'components/Buttons/MyButton';
import MyButtonError from 'components/Buttons/MyButtonError';
import MyInput from 'components/MyInput';

// MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { IStyle } from 'styles/IStyle';

type Props = {
    data: any;
    states: any;
    actions: any;
    dialogs: any;
}

const AddStudentC: React.FC<Props> = ({ states, actions }) => {
    
    const { mainColors } = useContext(DarkThemeContext);    
    const style: IStyle = {
        container: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '40px',
            columnGap: '104px',
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
        },
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
        },
        chipsContainer: {
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
            gap: '10px'
        },
        infoChip: {
            padding: '10px 8px',
            borderRadius: '5px',
            background: mainColors.backgroundColor.main,
            border: `1px solid ${mainColors.paper.border}`
        },
        photoContainer: {
            width: 'fit-content',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
        },
        photoPLaceholder: {
            width: '150px',
            height: '150px',
            // background: () => {
            //     if(value){
            //         return(`url(${value})`)
            //     }else {
            //         return '#B6D5F0'
            //     }
            // },
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            zIndex: '99',
            outline: `2px dashed ${mainColors.primary.main}`,
            borderRadius: '13px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
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
                <MyInput 
                    placeholder='أدخل كود الطالب'
                    value={states.studentCode.value}
                    error={states.studentCode.error}
                    onChange={actions.studentCodeHandler} 
                    helperText={states.studentCode.helperText}
                />
                <Box sx={style.submitButton}>
                    <MyButton content='تأكيد' onClick={actions.submitCode} />
                </Box>
            </Box>
            {
                states.codeError.error &&
                <Typography sx={style.title} variant="h4" color={mainColors.error.main}>
                    {states.codeError.value}
                </Typography>
            }
            <Typography sx={style.title} variant="h3" color={mainColors.title.main}>
                بطاقة الطالب التعريفية:- 
            </Typography>
            <Box sx={style.studentCard}>
                <Box sx={style.dataContainer}>
                    <Box sx={style.row}>
                        <Box sx={style.studentName}>
                            <Typography color={'primary'} variant={'h3'}>
                                الطالب / مروان محمد عبد العزيز
                            </Typography>
                        </Box>
                        <Box sx={style.dataCard}>
                            <Typography color={'primary'} variant='h5' fontWeight={700}>
                                25012011
                            </Typography>
                        </Box>
                    </Box>
                    <Box>
                        <Box sx={style.chipsContainer}>
                            <Typography variant='h5' color={mainColors.title.main} fontWeight={700}>
                                الصف الدراسي:-
                            </Typography>
                            <Box sx={style.infoChip}>
                                <Typography variant='h5' color={'primary'} fontWeight={700}>
                                    الصف الثالث الثانوي
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box sx={style.photoContainer}>
                    <Box sx={style.photoPLaceholder} />
                    <Typography variant='h5' color={mainColors.title.main}>
                        صورة الطالب الشخصية
                    </Typography>
                </Box>
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
 
export default AddStudentC;