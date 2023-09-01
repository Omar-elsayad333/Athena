import MyInput from 'components/MyInput'
import MySelect from 'components/MySelect'
import { useTheme } from 'context/ThemeContext'
import MyButton from 'components/Buttons/MyButton'
import MyDaysDialog from 'components/MyDaysDialog'
import MyTimePicker from 'components/MyTimePicker'
import MyIconButton from 'components/MyIconButton'
import PageError from 'components/Shared/PageError'
import MyButtonError from 'components/Buttons/MyButtonError'
import WarningDialog from 'components/Dialogs/WarningDialog'

// MUI
import Box from '@mui/material/Box'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'

type Props = {
    data: any
    states: any
    actions: any
    dialogs: any
}

const AddGroupC: React.FC<Props> = ({ data, states, actions, dialogs }) => {
    const { mainColors } = useTheme()
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
            gap: '35px',
        },
        submitButton: {
            width: '170px',
            height: '40px',
        },
        toolContainer: {
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
        },
    }

    return (
        <Box sx={style.root}>
            <Box sx={style.container}>
                <Typography
                    sx={style.title}
                    variant="h3"
                    component="h1"
                    color={mainColors.title.main}
                >
                    بيانات المجموعة:-
                </Typography>
                <MyInput
                    placeholder="أسم المجموعة"
                    value={states.name.value}
                    error={states.name.error}
                    onChange={actions.nameHandler}
                    helperText={states.name.helperText}
                />
                <Box sx={style.toolContainer}>
                    <MySelect
                        data={data.yearsData}
                        placeholder="العام الدراسي"
                        value={states.selectedYear.value}
                        getSelected={actions.yearHandler}
                        error={states.selectedYear.error}
                        helperText={states.selectedYear.helperText}
                    />
                    <Tooltip
                        sx={{ alignSelf: 'center' }}
                        title="لا يمكن تعديل العام الدراسي لاحقا لذالك يجب التأكد من اختياره جيدا"
                    >
                        <InfoOutlinedIcon color={'primary'} />
                    </Tooltip>
                </Box>
                <Box sx={style.toolContainer}>
                    <MySelect
                        data={data.levelsData}
                        value={states.selectedLevel.value}
                        error={states.selectedLevel.error}
                        placeholder="الصف الدراسي الخاص بالمجموعة"
                        getSelected={actions.levelHandler}
                        helperText={states.selectedLevel.helperText}
                        disabled={states.selectedYear.id ? false : true}
                    />
                    <Tooltip
                        sx={{ alignSelf: 'center' }}
                        title="لا يمكن تعديل الصف الدراسي لاحقا لذالك يجب التأكد من اختياره جيدا"
                    >
                        <InfoOutlinedIcon color={'primary'} />
                    </Tooltip>
                </Box>
                <MySelect
                    data={data.headquartersData}
                    placeholder="المقر الخاص بالمجموعة"
                    value={states.selectedHeadquarter.value}
                    error={states.selectedHeadquarter.error}
                    getSelected={actions.headquarterHandler}
                    helperText={states.selectedHeadquarter.helperText}
                />
                <MyInput
                    type="number"
                    error={states.limit.error}
                    value={states.limit.value}
                    onChange={actions.limitHandler}
                    helperText={states.limit.helperText}
                    placeholder="الحد الاقصى لعدد الطلاب"
                />
            </Box>
            <Box sx={style.timeContainer}>
                <Typography variant="h3" component="h2" color={mainColors.title.main}>
                    مواعيد المجموعة:-
                </Typography>
                <Box sx={style.backPaper}>
                    <Typography variant="h5" component="h4" color={mainColors.title.main}>
                        أيام الحضور:-
                    </Typography>
                    <Box sx={style.dayContainer}>
                        <MyIconButton
                            event={actions.daysDialogHandler}
                            content="اضافة يوم"
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
                                                component="h4"
                                                color={mainColors.title.main}
                                            >
                                                وقت بدأ المجموعة:-
                                            </Typography>
                                            <MyTimePicker
                                                day={item.name}
                                                name="startTime"
                                                value={new Date(item.startTime)}
                                                getSelectedTime={actions.updateItem}
                                            />
                                        </Box>
                                        <Box>
                                            <Typography
                                                mb={3}
                                                fontSize={14}
                                                component="h4"
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
                    {states.pageErrors.length > 0 && <PageError errors={states.pageErrors} />}
                    <Box sx={style.submitButton}>
                        <MyButton
                            loading={states.loading}
                            content="تأكيد واضافة"
                            onClick={actions.submit}
                        />
                    </Box>
                    <Box sx={style.submitButton}>
                        <MyButtonError
                            loading={states.loading}
                            content="إلغاء العملية"
                            onClick={actions.openWarningDialogState}
                        />
                    </Box>
                </Box>
            </Box>
            <MyDaysDialog
                open={dialogs.daysDialog}
                handleClose={actions.daysDialogHandler}
                getSelectedDays={actions.getSelectedDays}
            />
            <WarningDialog
                state={dialogs.warningDialog.state}
                content={dialogs.warningDialog.content}
                actions={dialogs.warningDialog.actions}
            />
        </Box>
    )
}

export default AddGroupC
