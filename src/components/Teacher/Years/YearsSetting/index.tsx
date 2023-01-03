import { useContext } from 'react';
import { DarkThemeContext } from 'context/ThemeContext';
import MyDatePicker from 'components/MyDatePicker';
import MyButton from 'components/Buttons/MyButton';
import MyButtonError from 'components/Buttons/MyButtonError';
import useYearsSetting from 'container/years/useYearsSetting';
import ClassesDialog from 'components/Dialogs/ClassesDialog';

// MUI
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

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
    classes: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: '26px'
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

const YearsSettingC: React.FC = () => {

    const { mainColors } = useContext(DarkThemeContext);
    const {
        selectedClasses,
        handleSelectedClasses,
        selectedClassrooms,
        handleSelectedClasserooms,
        dialogState,
        handleDialogState,
        getSelectedClasses,
    } = useYearsSetting();

    return (
        <Box sx={style.container}>
            <Typography sx={style.title} variant="h3" color={mainColors.title.main}>
                بداية عام دراسي جديد:-
            </Typography>
            <Box sx={style.inputContainer}>
                <Typography variant='h5' color={mainColors.primary.dark}>
                    حدد بداية العام الدراسي الخاص بك:-   
                </Typography>
                <MyDatePicker placeholder='تحديد التاريخ' />
            </Box>
            <Box sx={style.inputContainer}>
                <Typography variant='h5' color={mainColors.primary.dark}>
                    حدد نهاية العام الدراسي الخاص بك:- 
                </Typography>
                <MyDatePicker placeholder='تحديد التاريخ' />
            </Box>  
            <Typography sx={style.title} variant="h3" color={mainColors.title.main}>
                الصفوف الدراسية:- 
            </Typography>
            <Box sx={style.classes}>
                <svg onClick={() => handleDialogState()} width="77" height="77" viewBox="0 0 77 77" stroke={mainColors.primary.main} fill={mainColors.icons.roundedAdd} xmlns="http://www.w3.org/2000/svg">
                    <path d="M38.52 75.04C58.6894 75.04 75.04 58.6894 75.04 38.52C75.04 18.3506 58.6894 2 38.52 2C18.3506 2 2 18.3506 2 38.52C2 58.6894 18.3506 75.04 38.52 75.04Z" fill="inherit" stroke="inherit" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M38.52 23.8994V53.1154" stroke="inherit" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M23.9117 38.5195H53.1277" stroke="inherit" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <ClassesDialog open={dialogState} handleClose={handleDialogState} getSelectedClasses={getSelectedClasses} />
            </Box>
            <Typography sx={style.title} variant="h3" color={mainColors.title.main}>
                الفصول الدراسية:-
            </Typography>
            <Box sx={style.classes}>
                <svg width="48" height="48" viewBox="0 0 48 48" stroke={mainColors.primary.main} fill={mainColors.icons.roundedAdd} xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.52 46.04C35.9575 46.04 46.04 35.9575 46.04 23.52C46.04 11.0825 35.9575 1 23.52 1C11.0825 1 1 11.0825 1 23.52C1 35.9575 11.0825 46.04 23.52 46.04Z" fill="inherit" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M23.52 14.5049V32.5209" stroke="inherit" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M14.512 23.5195H32.5279" stroke="inherit" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>  
            </Box>
            <Box sx={style.buttonsContainer}>
                <Box sx={style.submitButton}>
                    <MyButton content='اضافة العام' />
                </Box>
                <Box sx={style.submitButton}>
                    <MyButtonError content='إلغاء العملية' />
                </Box>
            </Box>
        </Box>
    );
}
 
export default YearsSettingC;