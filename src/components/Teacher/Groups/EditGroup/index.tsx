import MyInput from 'components/MyInput'
import MySelect from 'components/MySelect'
import { useTheme } from 'context/ThemeContext'
import MyIconButton from 'components/MyIconButton'
import MyButton from 'components/Buttons/MyButton'
import MyDaysDialog from 'components/MyDaysDialog'
import MyTimePicker from 'components/MyTimePicker'
import MyButtonError from 'components/Buttons/MyButtonError'
// import WarningDialog from 'components/Dialogs/WarningDialog';

// MUI
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

type Props = {
    data: any
    states: any
    actions: any
    dialogs: any
}

const EditGroupC: React.FC<Props> = ({ data, states, actions, dialogs }) => {
    const { mainColors } = useTheme()

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
            flexWrap: 'wrap',
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
            gap: '35px',
        },
        submitButton: {
            width: '170px',
            height: '40px',
        },
    }

    return (
        <Box sx={style.container}>
            <Box sx={style.formContainer}>
                <Typography sx={style.title} variant="h3" color={mainColors.title.main}>
                    بيانات المجموعة:-
                </Typography>
                <Box sx={style.inputContainer}>
                    <Typography variant="h5" color={mainColors.primary.dark}>
                        أسم المجموعة
                    </Typography>
                    <MyInput
                        placeholder={data.name}
                        value={states.name.value}
                        error={states.name.error}
                        onChange={actions.nameHandler}
                        helperText={states.name.helperText}
                    />
                </Box>
                <Box sx={style.inputContainer}>
                    <Typography variant="h5" color={mainColors.primary.dark}>
                        العام الدراسي
                    </Typography>
                    <MySelect
                        data={states.yearsData}
                        value={states.selectedYear.value || `${data.startYear} / ${data.endYear}`}
                        getSelected={actions.yearHandler}
                        error={states.selectedYear.error}
                        helperText={states.selectedYear.helperText}
                        placeholder={`${data.startYear} / ${data.endYear}`}
                    />
                </Box>
                <Box sx={style.inputContainer}>
                    <Typography variant="h5" color={mainColors.primary.dark}>
                        الصف الدراسي الخاص بالمجموعة
                    </Typography>
                    <MySelect
                        data={states.levelsData}
                        placeholder={data.level}
                        value={states.selectedLevel.value || data.level || ''}
                        getSelected={actions.levelHandler}
                        error={states.selectedLevel.error}
                        helperText={states.selectedLevel.helperText}
                    />
                </Box>
                <Box sx={style.inputContainer}>
                    <Typography variant="h5" color={mainColors.primary.dark}>
                        المقر الخاص بالمجموعة
                    </Typography>
                    <MySelect
                        data={states.headquartersData}
                        placeholder={data.headQuarter}
                        value={states.selectedHeadquarter.value || data.headQuarter || ''}
                        getSelected={actions.headquarterHandler}
                        error={states.selectedHeadquarter.error}
                        helperText={states.selectedHeadquarter.helperText}
                    />
                </Box>
                <Box sx={style.inputContainer}>
                    <Typography variant="h5" color={mainColors.primary.dark}>
                        الحد القصى للطلاب
                    </Typography>
                    <MyInput
                        value={states.limit.value}
                        error={states.limit.error}
                        placeholder={data.limit}
                        onChange={actions.limitHandler}
                        type="number"
                        helperText={states.limit.helperText}
                    />
                </Box>
            </Box>
            <Box sx={style.timeContainer}>
                <Typography variant="h3" color={mainColors.title.main}>
                    مواعيد المجموعة:-
                </Typography>
                <Box sx={style.backPaper}>
                    <Typography variant="h5" color={mainColors.primary.main}>
                        أيام الحضور:-
                    </Typography>
                    <Box sx={style.dayContainer}>
                        <MyIconButton
                            content="تعديل"
                            event={actions.daysDialogHandler}
                            icon={
                                <svg
                                    width="21"
                                    height="21"
                                    viewBox="0 0 21 21"
                                    fill="none"
                                    stroke={mainColors.primary.main}
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M10.52 20.04C15.7778 20.04 20.04 15.7778 20.04 10.52C20.04 5.26225 15.7778 1 10.52 1C5.26225 1 1 5.26225 1 10.52C1 15.7778 5.26225 20.04 10.52 20.04Z"
                                        stroke="inherit"
                                        strokeWidth="1.7"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M10.52 6.71069V14.3267"
                                        stroke="inherit"
                                        strokeWidth="1.7"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M6.71234 10.52H14.3283"
                                        stroke="inherit"
                                        strokeWidth="1.7"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            }
                        />
                        <MyDaysDialog
                            open={dialogs.daysDialog}
                            handleClose={actions.daysDialogHandler}
                            getSelectedDays={actions.getSelectedDays}
                            data={states.selectedDays}
                        />
                        {states.selectedDays.length > 0 && (
                            <Box sx={style.daysList}>
                                {states.selectedDays.map((item: any) => {
                                    return (
                                        <Box key={item.name} sx={style.dayLabel}>
                                            {item.content}
                                        </Box>
                                    )
                                })}
                            </Box>
                        )}
                    </Box>
                </Box>
                {states.selectedDays.length > 0 && (
                    <Box sx={[style.backPaper, style.timePickerContainer]}>
                        {states.selectedDays.map((item: any) => {
                            return (
                                <Box sx={style.timePicker} key={item.name}>
                                    <Box sx={style.dayLabel} ml={10}>
                                        {item.content}
                                    </Box>
                                    <Box sx={style.timePicker}>
                                        <Box>
                                            <Typography
                                                mb={3}
                                                fontSize={14}
                                                color={mainColors.title.main}
                                            >
                                                وقت بدأ المجموعة:-
                                            </Typography>
                                            <MyTimePicker
                                                name="startTime"
                                                day={item.name}
                                                value={new Date(item.startTime)}
                                                getSelectedTime={actions.updateItem}
                                            />
                                        </Box>
                                        <Box>
                                            <Typography
                                                mb={3}
                                                fontSize={14}
                                                color={mainColors.title.main}
                                            >
                                                وقت انتهاء المجموعة:-
                                            </Typography>
                                            <MyTimePicker
                                                name="endTime"
                                                day={item.name}
                                                value={new Date(item.endTime)}
                                                getSelectedTime={actions.updateItem}
                                            />
                                        </Box>
                                    </Box>
                                </Box>
                            )
                        })}
                    </Box>
                )}
                <Box sx={style.buttonsContainer}>
                    <Box sx={style.submitButton}>
                        <MyButton
                            content="حفظ التعديلات"
                            loading={states.loading}
                            onClick={actions.submit}
                        />
                    </Box>
                    <Box sx={style.submitButton}>
                        <MyButtonError
                            content="حذف المجموعة"
                            loading={states.loading}
                            onClick={actions.openWarningDialogState}
                        />
                    </Box>
                </Box>
                {/* <BasicDialog state={dialogs.content.state} content={dialogs.content} actions={dialogs.actions} /> */}
            </Box>
        </Box>
    )
}

export default EditGroupC
