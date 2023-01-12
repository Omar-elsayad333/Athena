import { useContext } from 'react';
import { DarkThemeContext } from 'context/ThemeContext';
import MyDatePicker from 'components/MyDatePicker';
import MyButton from 'components/Buttons/MyButton';
import MyButtonError from 'components/Buttons/MyButtonError';
import useYearsSetting from 'container/years/useYearsSetting';
import ClassesDialog from 'components/Dialogs/ClassesDialog';
import ClassroomsDialog from 'components/Dialogs/ClassroomsDialog';
import MySelect from 'components/MySelect';
import MyIconButton from 'components/MyIconButton';
import { IStyle } from 'styles/IStyle';

// MUI
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ControlPointIcon from '@mui/icons-material/ControlPoint';


const AddYearC: React.FC = () => {
    
    const { mainColors } = useContext(DarkThemeContext);
    const {
        data,
        states,
        actions,
        // classes,
        // classrooms,
        // dialogs,
        // date,
        // submit
    } = useYearsSetting();
    
    const style: IStyle = {
        container: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '40px',
            columnGap: '104px',
        },
        startYearContainer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '43px',
        },
        startButton: {
            width: '214px',
            height: '40px',
            display: 'grid',
            placeItems: 'center',
            cursor: 'pointer',
            borderRadius: '7px',
            border: states.yearActive ? `solid 1px ${mainColors.chips.border}` : 'none',
            background: states.yearActive ? mainColors.linerGradient.primary : mainColors.chips.main,
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
            <Box sx={style.startYearContainer}>
                <Box onClick={() => actions.activeYear()} sx={style.startButton} id='start-year-but'>
                    <Typography fontWeight={700} variant='h4' color='primary'>
                        بداية عام جديد
                    </Typography>
                </Box>
                <Box className='classes-section'>
                    <MySelect placeholder='تحديد العام الدراسي' data={data.yearsToSelect} />
                </Box>
            </Box>
            <Typography className='classes-section' sx={style.title} variant="h3" color={mainColors.title.main}>
                تحديد الصفوف الدراسية:-
            </Typography>
            <Box className='classes-section'>
                <MyIconButton icon={<ControlPointIcon />} content='الصفوف الدراسية'  />
            </Box>
            {/* <ClassesDialog open={states.classesDialogState} handleClose={actions.classesHandleDialogState} getSelectedClasses={} /> */}
        </Box>
    );
}
 
export default AddYearC;