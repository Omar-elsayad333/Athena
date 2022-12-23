import { useContext } from 'react';
import { lightColors, darkColors } from 'styles/colors';
import { DarkThemeContext } from 'context/ThemeContext';
import AddDayButton from './AddDayButton';
import MyButton from 'components/Buttons/MyButton';
import MyButtonError from 'components/Buttons/MyButtonError';
import MyDaysDialog from 'components/MyDaysDialog';
import MyTimePicker from 'components/MyTimePicker';

// MUI
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

type Props = {
    dialogState: boolean;
    handleDialogState: Function;
    selectedDays: any;
    getSelectedDays: Function;
    getSelectedTime: Function;
}

const FormTimeInputs: React.FC<Props> = ({handleDialogState, dialogState, getSelectedDays, selectedDays, getSelectedTime}) => {

    const {darkMode, mainColors} = useContext(DarkThemeContext);

    const style = {
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
        <Box sx={style.timeContainer}>
            <Typography variant='h3' color={darkMode ? darkColors.title.main : lightColors.title.main}>
                مواعيد المجموعة:-
            </Typography>
            <Box sx={style.backPaper}>
                <Typography variant='h5' color={mainColors.primary.main}>
                    أيام الحضور:-
                </Typography>
                <Box sx={style.dayContainer}>
                    <AddDayButton handleDialogState={handleDialogState} />
                    <MyDaysDialog open={dialogState} handleClose={handleDialogState} getSelectedDays={getSelectedDays} />
                    {
                        selectedDays.length > 0 &&
                        <Box sx={style.daysList}>
                            {
                                selectedDays.map((item: any) => {
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
                selectedDays.length > 0 &&
                <Box sx={[style.backPaper, style.timePickerContainer]}>
                    {
                        selectedDays.map((item: any) => {
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
                                            <MyTimePicker name='startTime' day={item.name} getSelectedTime={getSelectedTime} />
                                        </Box>
                                        <Box>
                                            <Typography mb={3} fontSize={14} color={mainColors.title.main}>
                                                وقت انتهاء المجموعة:-
                                            </Typography>
                                            <MyTimePicker name='endTime' day={item.name} getSelectedTime={getSelectedTime} />
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
                    <MyButton content='تأكيد واضافة' />
                </Box>
                <Box sx={style.submitButton}>
                    <MyButtonError content='إلغاء العملية' />
                </Box>
            </Box>
        </Box>
    );
}
 
export default FormTimeInputs;