import { useContext } from 'react';
import { DarkThemeContext } from 'context/ThemeContext';
import MyDatePicker from 'components/MyDatePicker';
import MyButton from 'components/Buttons/MyButton';
import MyButtonError from 'components/Buttons/MyButtonError';
import useYearsSetting from 'container/years/useAddYear';
import ClassroomsDialog from 'components/Dialogs/SemestersDialog';

// MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const EditYearC: React.FC = () => {
    
    const { mainColors } = useContext(DarkThemeContext);
    const {
        classes,
        classrooms,
        dialogs,
        date,
        submit
    } = useYearsSetting();
    
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
        selectedContainer: {
            padding: '18px 27px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '28px',
            background: mainColors.paper.main,
            border: `solid 2px ${mainColors.paper.border}`,
            borderRadius: '14px',
        },
        classesChips: {
            width: '95px',
            height: '95px',
            padding: '5px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: '700',
            fontSize: '20px',
            textAlign: 'center',
            borderRadius: '50%',
            border: '2px solid #3F72A4',
            color: mainColors.secondary.contrastText,
            background: mainColors.linerGradient.primary,
            cursor: 'pointer',
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
                الفترة الزمنية:-
            </Typography>
            <Box sx={style.inputContainer}>
                <Typography variant='h5' color={mainColors.primary.dark}>
                    بداية العام الدراسي الخاص بك:-   
                </Typography>
                <MyDatePicker dateValue={date.yearStartDate} handleDateValue={date.handleYearStartDate} placeholder='تحديد التاريخ' />
            </Box>
            <Box sx={style.inputContainer}>
                <Typography variant='h5' color={mainColors.primary.dark}>
                    نهاية العام الدراسي الخاص بك:- 
                </Typography>
                <MyDatePicker dateValue={date.yearEndDate} handleDateValue={date.handleYearEndDate} placeholder='تحديد التاريخ' />
            </Box>  
            <Typography sx={style.title} variant="h3" color={mainColors.title.main}>
                الصفوف الدراسية:- 
            </Typography>
            <Box sx={style.classes}>
                {
                    classes.selectedClasses &&
                    <Box sx={style.selectedContainer}>
                        {
                            classes.selectedClasses.map((item: any, index: any) => (
                                <Box key={index} sx={style.classesChips}>
                                    {item.content}
                                </Box>
                            ))
                        }
                    </Box>
                }
                <svg width="77" height="77" viewBox="0 0 77 77" stroke={mainColors.primary.main} fill={mainColors.icons.roundedAdd} xmlns="http://www.w3.org/2000/svg">
                    <path d="M38.52 75.04C58.6894 75.04 75.04 58.6894 75.04 38.52C75.04 18.3506 58.6894 2 38.52 2C18.3506 2 2 18.3506 2 38.52C2 58.6894 18.3506 75.04 38.52 75.04Z" fill="inherit" stroke="inherit" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M38.52 23.8994V53.1154" stroke="inherit" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M23.9117 38.5195H53.1277" stroke="inherit" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </Box>
            <Typography sx={style.title} variant="h3" color={mainColors.title.main}>
                الفصول الدراسية:-
            </Typography>
            <Box sx={style.classes}>
                {
                    classrooms.selectedClassrooms &&
                    <Box sx={style.selectedContainer}>
                        {
                            classrooms.selectedClassrooms.map((item: any, index: any) => (
                                <Box key={index} sx={style.classesChips}>
                                    {item.content}
                                </Box>
                            ))
                        }
                    </Box>
                }
                <svg onClick={() => dialogs.classroomsHandleDialogState()} width="48" height="48" viewBox="0 0 48 48" stroke={mainColors.primary.main} fill={mainColors.icons.roundedAdd} xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.52 46.04C35.9575 46.04 46.04 35.9575 46.04 23.52C46.04 11.0825 35.9575 1 23.52 1C11.0825 1 1 11.0825 1 23.52C1 35.9575 11.0825 46.04 23.52 46.04Z" fill="inherit" stroke="inherit" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M23.52 14.5049V32.5209" stroke="inherit" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14.512 23.5195H32.5279" stroke="inherit" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>  
                <ClassroomsDialog date={date} open={dialogs.classroomsDialogState} handleClose={dialogs.classroomsHandleDialogState} getSelectedClassrooms={classrooms.handleSelectedClasserooms} />
            </Box>
            <Box sx={style.buttonsContainer}>
                <Box sx={style.submitButton}>
                    <MyButton onClick={() => submit()} content='حفظ التعديلات' />
                </Box>
                <Box sx={style.submitButton}>
                    <MyButtonError   content='حذف العام' />
                </Box>
            </Box>
        </Box>
    );
}
 
export default EditYearC;