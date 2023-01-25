import { useContext } from 'react';
import MyInput from 'components/MyInput';
import MySelect from 'components/MySelect';
import { DarkThemeContext } from 'context/ThemeContext';
import MyIconButton from 'components/MyIconButton';
import MyButton from 'components/Buttons/MyButton';
import MyButtonError from 'components/Buttons/MyButtonError';
import MyDaysDialog from 'components/MyDaysDialog';
import MyTimePicker from 'components/MyTimePicker';

// MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';


type Props = {
    data: any;
    states: any;
    actions: any;
    dialogs: any;
}

const EditGroupC: React.FC<Props> = ({data, states, actions, dialogs}) => {
    
    const {mainColors} = useContext(DarkThemeContext);

    const style = {
        container: {
            display: 'flex',
            flexDirection: 'column',    
            gap: '60px',
        },
        formContainer: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '40px',
        },
        title: {
            flex: '100%',
        },
        inputContainer: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            gap: '13px',
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
            border: `1px solid ${mainColors.chips.border}`,
            background: mainColors.chips.main,
            cursor: 'pointer',
            color: mainColors.chips.contrastText,
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
        <Box sx={style.container}>
            <Box sx={style.formContainer}>
                <Typography sx={style.title} variant="h3" color={mainColors.title.main}>
                    بيانات المجموعة:-
                </Typography>
                <Box sx={style.inputContainer}>
                    <Typography variant='h5' color={mainColors.primary.dark}>
                        أسم المجموعة    
                    </Typography>
                    <MyInput 
                        value={states.name.value}
                        error={states.name.error}
                        placeholder={data.name}
                        onChange={actions.nameHandler}
                        type='text'
                        helperText={states.name.helperText}
                    />
                </Box>
                <Box sx={style.inputContainer}>
                    <Typography variant='h5' color={mainColors.primary.dark}>
                        العام الدراسي   
                    </Typography>
                    <MySelect 
                        value={states.selectedYear.name}
                        placeholder={`${data.startYear} / ${data.endYear}`}
                        data={states.years} 
                        getSelected={actions.yearHandler}
                        error={states.selectedYear.error}
                        helperText={states.selectedYear.helperText}            
                    />               
                </Box>
                <Box sx={style.inputContainer}>
                    <Typography variant='h5' color={mainColors.primary.dark}>
                        الصف الدراسي الخاص بالمجموعة
                    </Typography>
                    <MySelect 
                        value={states.selectedClassroom.name}
                        placeholder={data.level}
                        data={states.classrooms} 
                        getSelected={actions.classroomHandler}
                        error={states.selectedClassroom.error}
                        helperText={states.selectedClassroom.helperText}            
                    />
                </Box>
                <Box sx={style.inputContainer}>
                    <Typography variant='h5' color={mainColors.primary.dark}>
                        المقر الخاص بالمجموعة   
                    </Typography>
                    <MySelect  
                        error={states.selectedHeadquarter.error}  
                        data={states.headquarters} 
                        placeholder={data.headQuarter}
                        value={states.selectedHeadquarter.name}
                        getSelected={actions.headquarterHandler}
                        helperText={states.selectedHeadquarter.helperText}            
                    />
                </Box>
                <Box sx={style.inputContainer}>
                    <Typography variant='h5' color={mainColors.primary.dark}>
                        الحد القصى للطلاب   
                    </Typography>
                    <MyInput    
                        value={states.limit.value}
                        error={states.limit.error}
                        placeholder={data.limit}
                        onChange={actions.limitHandler}
                        type='number'
                        helperText={states.limit.helperText}
                    />
                </Box>
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
                        <MyIconButton content='تعديل' icon={<CreateOutlinedIcon />} event={dialogs.handleDaysDialogState} />
                        <MyDaysDialog
                            open={dialogs.dialogState} 
                            handleClose={dialogs.handleDaysDialogState} 
                            getSelectedDays={actions.getSelectedDays} 
                            data={states.selectedDays}
                        />
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
                                                    name='startTime'
                                                    day={item.name}
                                                    value={new Date(item.startTime)}
                                                    getSelectedTime={actions.updateItem}
                                                />
                                            </Box>
                                            <Box>
                                                <Typography mb={3} fontSize={14} color={mainColors.title.main}>
                                                    وقت انتهاء المجموعة:-
                                                </Typography>
                                                <MyTimePicker 
                                                    name='endTime'
                                                    day={item.name} 
                                                    value={new Date(item.endTime)}
                                                    getSelectedTime={actions.updateItem} 
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
                    <Box sx={style.submitButton}>
                        <MyButton content='حفظ التعديلات' onClick={actions.submit} />
                    </Box>
                    <Box sx={style.submitButton}>
                        <MyButtonError content='حذف المجموعة' />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default EditGroupC;