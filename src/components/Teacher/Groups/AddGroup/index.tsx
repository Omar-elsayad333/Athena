import { useContext } from 'react';
import MyInput from 'components/MyInput';
import AddDayButton from './AddDayButton';
import MySelect from 'components/MySelect';
import MyButton from 'components/Buttons/MyButton';
import MyDaysDialog from 'components/MyDaysDialog';
import MyTimePicker from 'components/MyTimePicker';
import { DarkThemeContext } from 'context/ThemeContext';
import MyButtonError from 'components/Buttons/MyButtonError';
import BasicDialog from 'components/Dialogs/BasicDialogs';
import PageError from 'components/Shared/PageError';

// MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

type Props = {
    states: any;
    actions: any;
    dialogs: any;
}

const AddGroupC: React.FC<Props> = ({states, actions, dialogs}) => {

    const { mainColors } = useContext(DarkThemeContext)

    const style = {
        root: {
            display: 'flex',
            flexDirection: 'column',
            gap: '60px',
        },
        container: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '40px',
        },
        title: {
            flex: '100%',
        },
        timeContainer: {
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            gap: '40px',
        },
        backPaper: {
            width: 'fit-content',
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            gap: '20px',
            padding: '30px',
            background: mainColors.paper.main,
            border: `2px solid ${mainColors.paper.border}`,
            borderRadius: '12px',
        },
        dayContainer: {
            display: 'flex',
            gap: '45px',
            flexWrap: 'wrap',
        },
        daysList: {
            display: 'flex',
            gap: '25px',
            flexWrap: 'wrap',
        },
        daysBox: {
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
            gap: '25px',
            flexWrap: 'wrap'
        },
        dayLabel: {
            width: '109px',
            height: '41px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: '700',
            fontSize: '20px',
            borderRadius: '5px',
            color: mainColors.chips.contrastText,
            background: mainColors.chips.main,
            border: `1px solid ${mainColors.chips.border}`,
            cursor: 'pointer',
            transition: '.2s',
        },
        timePickerContainer: {
            padding: '40px 30px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '65px',
        },
        timePicker: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'start',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '50px',
        },
        buttonsContainer: {
            marginTop: '30px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '35px'
        },
        submitButton: {
            width: '170px',
            height: '40px',
        }
    }

    return (
        <Box sx={style.root}>
            <Box sx={style.container}>
                <Typography sx={style.title} variant="h3" color={mainColors.title.main}>
                    بيانات المجموعة:-
                </Typography>
                <MyInput 
                    value={states.name.value}
                    error={states.name.error}
                    placeholder='أسم المجموعة'
                    onChange={actions.nameHandler}
                    type='text'
                    helperText={states.name.helperText}
                />
                <MySelect 
                    value={states.selectedYear.name}
                    placeholder='العام الدراسي'
                    data={states.years} 
                    getSelected={actions.yearHandler}
                    error={states.selectedYear.error}
                    helperText={states.selectedYear.helperText}            
                />
                <MySelect 
                    value={states.selectedClassroom.name}
                    placeholder='الصف الدراسي الخاص بالمجموعة'
                    data={states.classrooms} 
                    getSelected={actions.classroomHandler}
                    error={states.selectedClassroom.error}
                    disabled={states.selectedYear.name ? false : true}
                    helperText={states.selectedClassroom.helperText}            
                />
                <MySelect  
                    error={states.selectedHeadquarter.error}  
                    data={states.headquarters} 
                    placeholder='المقر الخاص بالمجموعة'
                    value={states.selectedHeadquarter.name}
                    getSelected={actions.headquarterHandler}
                    helperText={states.selectedHeadquarter.helperText}            
                />
                <MyInput    
                    value={states.limit.value}
                    error={states.limit.error}
                    placeholder='الحد الاقصى لعدد الطلاب' 
                    onChange={actions.limitHandler}
                    type='number'
                    helperText={states.limit.helperText}
                />
            </Box>
            <Box sx={style.timeContainer}>
                <Typography variant='h3' color={mainColors.title.main}>
                    مواعيد المجموعة:-
                </Typography>
                <Box sx={style.backPaper}>
                    <Typography variant='h5' color={mainColors.primary.main}>
                        أيام الحضور:-
                    </Typography>
                    <Box sx={style.dayContainer}>
                        <AddDayButton handleDialogState={dialogs.handleDaysDialogState} />
                        <MyDaysDialog open={dialogs.dialogState} handleClose={dialogs.handleDaysDialogState} getSelectedDays={actions.getSelectedDays} />
                        {
                            states.selectedDays.length > 0 &&
                            <Box sx={style.daysList}>
                                {
                                    states.selectedDays.map((item: any) => {
                                        return (
                                            <Box key={item.name} sx={style.dayLabel}>
                                                {item.content}
                                            </Box>
                                        )
                                    })
                                }
                            </Box>
                        }
                    </Box>
                </Box>
                {
                    states.selectedDays.length > 0 &&
                    <Box sx={[style.backPaper, style.timePickerContainer]}>
                        {
                            states.selectedDays.map((item: any) => {
                                return (
                                    <Box sx={style.timePicker} key={item.name}>
                                        <Box sx={style.dayLabel} ml={10}>
                                            {item.content}
                                        </Box>
                                        <Box sx={style.timePicker} >
                                            <Box>
                                                <Typography mb={3} fontSize={14} color={mainColors.title.main}>
                                                    وقت بدأ المجموعة:-
                                                </Typography>
                                                <MyTimePicker 
                                                    value={new Date(item.startTime)}
                                                    day={item.name} 
                                                    name='startTime' 
                                                    getSelectedTime={actions.getSelectedTime}
                                                />
                                            </Box>
                                            <Box>
                                                <Typography mb={3} fontSize={14} color={mainColors.title.main}>
                                                    وقت انتهاء المجموعة:-
                                                </Typography>
                                                <MyTimePicker
                                                    value={new Date(item.startTime)}
                                                    name='endTime' 
                                                    day={item.name}
                                                    getSelectedTime={actions.getSelectedTime} 
                                                />
                                            </Box>
                                        </Box>
                                    </Box>
                                )
                            })
                        }
                    </Box> 
                }
                <Box sx={style.buttonsContainer}>
                    <PageError errorInfo={states.errorLabel} />
                    <Box sx={style.submitButton}>
                        <MyButton loading={states.loading} content='تأكيد واضافة' onClick={actions.submit} />
                    </Box>
                    <Box sx={style.submitButton}>
                        <MyButtonError loading={states.loading} content='إلغاء العملية' onClick={dialogs.actions.handleCancleDialogState} />
                    </Box>
                </Box>
            </Box>
            <BasicDialog state={dialogs.cancelContent.state} content={dialogs.cancelContent} actions={dialogs.actions} />
        </Box>
    );
}

export default AddGroupC;