import { useTheme } from 'context/ThemeContext';
import MyTimePicker from 'components/MyTimePicker';
import { dayTranslateToArabic } from 'utils/translateors';

// MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


type Props = {
    data: any;
}

const TimeCard: React.FC<Props> = ({ data }) => {

    const { mainColors } = useTheme()
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
            <Typography variant='h3' color={mainColors.title.main}>
                مواعيد المجموعة:-
            </Typography>
            <Box sx={style.backPaper}>
                <Typography variant='h5' color={mainColors.primary.main}>
                    أيام الحضور:-
                </Typography>
                <Box sx={style.daysList}>
                    <Box sx={style.daysList}>
                        {
                            data &&
                            data.map((item: any) => {
                                return (
                                    <Box key={item.id} sx={style.dayLabel}>
                                        {dayTranslateToArabic(item.day)}
                                    </Box>
                                )
                            })
                        }
                    </Box>
                </Box>
            </Box>
            {
                data?.length > 0 &&
                <Box sx={[style.backPaper, style.timePickerContainer]}>
                    {
                        data.map((item: any) => {
                            return (
                                <Box sx={style.timePicker} key={item.name}>
                                    <Box sx={style.dayLabel} ml={10}>
                                        {dayTranslateToArabic(item.day)}
                                    </Box>
                                    <Box sx={style.timePicker} >
                                        <Box>
                                            <Typography mb={3} fontSize={14} color={mainColors.title.main}>
                                                وقت بدأ المجموعة:-
                                            </Typography>
                                            <MyTimePicker 
                                                getSelectedTime={() => {}}
                                                readOnly={true}
                                                name='startTime'    
                                                day={item.name}
                                                value={new Date(`01-01-2023 ${item.startTime}`)}
                                            />  
                                        </Box>
                                        <Box>
                                            <Typography mb={3} fontSize={14} color={mainColors.title.main}>
                                                وقت انتهاء المجموعة:-
                                            </Typography>
                                            <MyTimePicker 
                                                getSelectedTime={() => {}}
                                                readOnly={true}
                                                name='endTime' 
                                                day={item.name} 
                                                value={new Date(`01-01-2023 ${item.endTime}`)}
                                            />
                                        </Box>
                                    </Box>
                                </Box>
                            )
                        })
                    }
                </Box> 
            }
        </Box>   
    );
}

export default TimeCard;