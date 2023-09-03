import useStyle from './styles'
import { IStyle } from 'styles/IStyle'
import { useTheme } from 'context/ThemeContext'
import MyButton from 'components/Buttons/MyButton'
import MyInputSmall from 'components/MyInputSmall'
import MyIconButton from 'components/MyIconButton'
import MyDatePicker from 'components/MyDatePicker'
import PageError from 'components/Shared/PageError'
import SelectedLevelsCard from './SelectedLevelsCard'
import ClassesDialog from 'components/Dialogs/ClassesDialog'

// MUI
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import ControlPointIcon from '@mui/icons-material/ControlPoint'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'

type Props = {
    data: any
    states: any
    actions: any
    dialogs: any
}

const EditYearC: React.FC<Props> = ({ data, states, actions }) => {
    const styles = useStyle()
    const { mainColors } = useTheme()

    const style: IStyle = {
        container: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '40px',
            columnGap: '104px',
        },
        yearControlsContainer: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'start',
            alignItems: 'center',
            gap: '43px',
        },
        deleteYearButton: {
            width: '214px',
            height: '40px',
            color: '#E8F3FF',
            background: mainColors.error.main,
            borderRadius: '7px',
            ':hover': {
                background: mainColors.error.main,
            },
        },
        endYearButton: {
            width: '214px',
            height: '40px',
            color: mainColors.error.main,
            background: 'transparent',
            borderRadius: '7px',
            border: `1px solid ${mainColors.error.main}`,
            ':hover': {
                background: 'transparent',
            },
        },
        backPaper: {
            width: 'fit-content',
            padding: '30px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '46px',
            borderRadius: '12px',
            background: mainColors.paper.main,
            border: `2px solid ${mainColors.paper.border}`,
        },
        classesList: {
            display: 'flex',
            gap: '25px',
            flexWrap: 'wrap',
        },
        classesLabel: {
            width: '154px',
            height: '41px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '14px',
            fontWeight: '700',
            textAlign: 'center',
            cursor: 'pointer',
            borderRadius: '5px',
            border: `1px solid ${mainColors.chips.border}`,
            color: mainColors.secondary.contrastText,
            background: mainColors.chips.main,
        },
        semestersBackPaper: {
            width: 'fit-content',
            padding: '40px',
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            gap: '60px',
            borderRadius: '12px',
            background: mainColors.paper.main,
            border: `2px solid ${mainColors.paper.border}`,
        },
        semeterContainer: {
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            columnGap: '80px',
            rowGap: '30px',
        },
        semestersBox: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '29px',
        },
        semesterChip: {
            width: '154px',
            height: '41px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '14px',
            fontWeight: '700',
            textAlign: 'center',
            cursor: 'pointer',
            borderRadius: '5px',
            border: `solid 1px ${mainColors.chips.border}`,
            color: mainColors.secondary.contrastText,
            background: mainColors.linerGradient.primary,
        },
        title: {
            flex: '100%',
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
                تعديل الصفوف الدراسية:-
            </Typography>
            <Box sx={style.backPaper}>
                <MyIconButton
                    event={actions.classesHandleDialog}
                    icon={<ControlPointIcon />}
                    content="الصفوف الدراسية"
                />
                {data.levels.length > 0 && (
                    <Box sx={style.classesList}>
                        {data.levels.map((item: any) => {
                            return (
                                <Box key={item.id} sx={style.classesLabel}>
                                    {item.name}
                                </Box>
                            )
                        })}
                    </Box>
                )}
            </Box>
            {data.levels.length > 0 && (
                <Typography sx={style.title} variant="h3" color={mainColors.title.main}>
                    تعديل بيانات العام الدراسي:-
                </Typography>
            )}
            <SelectedLevelsCard data={data} states={states} actions={actions} />
            {data.levels.length > 0 && (
                <Box sx={styles.levelsContianer} className="levels-contianer">
                    {data.levels.map((item: any) => (
                        <Box sx={styles.levelContainer} key={item.id}>
                            <Box
                                key={item.id}
                                sx={[
                                    styles.levelCard,
                                    { borderColor: item.error && mainColors.error.main },
                                ]}
                                className="level-card"
                            >
                                <Typography variant="h1" color={'primary'}>
                                    {item.error && (
                                        <Tooltip
                                            sx={{ marginLeft: '10px' }}
                                            title="تاكد من ملئ كل البيانات"
                                        >
                                            <InfoOutlinedIcon color={'primary'} />
                                        </Tooltip>
                                    )}
                                    {item.name}
                                </Typography>
                                <Box sx={styles.cardActionsContainer}>
                                    <Box sx={styles.cardController}>
                                        <svg
                                            width="40"
                                            height="40"
                                            viewBox="0 0 40 40"
                                            fill={mainColors.primary.main}
                                            xmlns="http://www.w3.org/2000/svg"
                                            onClick={(e) => {
                                                actions.openAndCloseCard(item.id)
                                                e.currentTarget.style.rotate == '0deg' ||
                                                e.currentTarget.style.rotate == ''
                                                    ? (e.currentTarget.style.rotate = '180deg')
                                                    : (e.currentTarget.style.rotate = '0deg')
                                            }}
                                        >
                                            <path
                                                d="M19.5446 26.0586C19.1641 26.0593 18.7953 25.9268 18.5022 25.684L8.72975 17.5402C8.39713 17.2637 8.18796 16.8665 8.14825 16.4358C8.10854 16.0051 8.24155 15.5763 8.51801 15.2437C8.79447 14.911 9.19174 14.7019 9.62243 14.6622C10.0531 14.6225 10.4819 14.7555 10.8145 15.0319L19.5446 22.3287L28.2747 15.2925C28.4413 15.1572 28.633 15.0562 28.8388 14.9952C29.0446 14.9343 29.2604 14.9146 29.4738 14.9373C29.6872 14.96 29.894 15.0246 30.0824 15.1275C30.2707 15.2304 30.4369 15.3695 30.5713 15.5368C30.7204 15.7043 30.8334 15.9008 30.9031 16.1139C30.9728 16.3271 30.9977 16.5524 30.9763 16.7756C30.9549 16.9988 30.8876 17.2153 30.7787 17.4113C30.6698 17.6073 30.5215 17.7787 30.3433 17.9148L20.5708 25.7817C20.2693 25.9861 19.908 26.0836 19.5446 26.0586Z"
                                                fill="inherit"
                                            />
                                        </svg>
                                    </Box>
                                </Box>
                            </Box>
                            {item.open && (
                                <Box sx={styles.cardDetails}>
                                    <Box sx={styles.semestersContainer}>
                                        <Typography
                                            variant="h5"
                                            fontWeight={700}
                                            color={mainColors.title.main}
                                        >
                                            الفصول الدراسية الخاصة بالصف:-
                                        </Typography>
                                        <Box sx={styles.semesterChips}>
                                            <Box sx={styles.inputContaienr}>
                                                <Box sx={style.classesLabel}>
                                                    الفصل الدراسي الاول
                                                </Box>
                                                <Box sx={styles.inputContaienr}>
                                                    <Typography
                                                        variant="h5"
                                                        color={mainColors.title.main}
                                                    >
                                                        بداية الفصل الدراسي الأول
                                                    </Typography>
                                                    <MyDatePicker
                                                        name="first"
                                                        helperText=""
                                                        extraData={{
                                                            levelId: item.id,
                                                            levelType: 'old',
                                                        }}
                                                        dateValue={actions.filterNeededSemester(
                                                            item.semsters,
                                                            (data = {
                                                                level: 'الفصل الدراسى الأول',
                                                                name: 'start',
                                                            }),
                                                        )}
                                                        placeholder="حدد بداية الفصل الدراسي الأول"
                                                        handleDateValue={
                                                            actions.semesterStartDateHander
                                                        }
                                                    />
                                                </Box>
                                                <Box sx={styles.inputContaienr}>
                                                    <Typography
                                                        variant="h5"
                                                        color={mainColors.title.main}
                                                    >
                                                        نهاية الفصل الدراسي الأول
                                                    </Typography>
                                                    <MyDatePicker
                                                        name="first"
                                                        helperText=""
                                                        extraData={{
                                                            levelId: item.id,
                                                            levelType: 'old',
                                                        }}
                                                        dateValue={actions.filterNeededSemester(
                                                            item.semsters,
                                                            (data = {
                                                                level: 'الفصل الدراسى الأول',
                                                                name: 'end',
                                                            }),
                                                        )}
                                                        placeholder="حدد نهاية الفصل الدراسي الأول"
                                                        handleDateValue={
                                                            actions.semesterEndDateHander
                                                        }
                                                    />
                                                </Box>
                                            </Box>
                                            <Box sx={styles.inputContaienr}>
                                                <Box sx={style.classesLabel}>
                                                    الفصل الدراسي الثاني
                                                </Box>
                                                <Box sx={styles.inputContaienr}>
                                                    <Typography
                                                        variant="h5"
                                                        color={mainColors.title.main}
                                                    >
                                                        بداية الفصل الدراسي الثاني
                                                    </Typography>
                                                    <MyDatePicker
                                                        helperText=""
                                                        name="second"
                                                        extraData={{
                                                            levelId: item.id,
                                                            levelType: 'old',
                                                        }}
                                                        dateValue={actions.filterNeededSemester(
                                                            item.semsters,
                                                            (data = {
                                                                level: 'الفصل الدراسى الثانى',
                                                                name: 'start',
                                                            }),
                                                        )}
                                                        placeholder="حدد بداية الفصل الدراسي الثاني"
                                                        handleDateValue={
                                                            actions.semesterStartDateHander
                                                        }
                                                    />
                                                </Box>
                                                <Box sx={styles.inputContaienr}>
                                                    <Typography
                                                        variant="h5"
                                                        color={mainColors.title.main}
                                                    >
                                                        نهاية الفصل الدراسي الثاني
                                                    </Typography>
                                                    <MyDatePicker
                                                        helperText=""
                                                        name="second"
                                                        extraData={{
                                                            levelId: item.id,
                                                            levelType: 'old',
                                                        }}
                                                        dateValue={actions.filterNeededSemester(
                                                            item.semsters,
                                                            (data = {
                                                                level: 'الفصل الدراسى الثانى',
                                                                name: 'end',
                                                            }),
                                                        )}
                                                        placeholder="حدد نهاية الفصل الدراسي الثاني"
                                                        handleDateValue={
                                                            actions.semesterEndDateHander
                                                        }
                                                    />
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box sx={styles.semestersContainer}>
                                        <Typography
                                            variant="h5"
                                            fontWeight={700}
                                            color={mainColors.title.main}
                                        >
                                            حدد المصروفات الدراسية الخاصة بالصف:-
                                        </Typography>
                                        <Box sx={styles.semesterChips}>
                                            <Box sx={styles.inputContaienr}>
                                                <Typography
                                                    variant="h5"
                                                    color={mainColors.title.main}
                                                >
                                                    المقدم
                                                </Typography>
                                                <MyInputSmall
                                                    indexes={item.id}
                                                    value={item.introFee}
                                                    name="old"
                                                    type="number"
                                                    placeholder="حدد المقدم الخاص بك"
                                                    onChange={actions.selectedIntroFeeHandler}
                                                />
                                            </Box>
                                            <Box sx={styles.inputContaienr}>
                                                <Typography
                                                    variant="h5"
                                                    color={mainColors.title.main}
                                                >
                                                    المصروفات الشهرية
                                                </Typography>
                                                <MyInputSmall
                                                    indexes={item.id}
                                                    name="old"
                                                    value={item.monthFee}
                                                    type="number"
                                                    placeholder="حدد المصروفات الشهرية"
                                                    onChange={actions.selectedMonthFeeHandler}
                                                />
                                            </Box>
                                        </Box>
                                        <PageError errors={states.errorLabel} />
                                        <MyButton
                                            content="تأكيد"
                                            onClick={() => actions.submitOldLevel(item.id)}
                                        />
                                    </Box>
                                </Box>
                            )}
                        </Box>
                    ))}
                    <Box sx={styles.actionButtons}>
                        {data.yearData && data.yearData.yearState === 'open' && (
                            <Button sx={style.endYearButton} onClick={actions.endYear}>
                                <Typography fontSize={'h4'} fontWeight={700}>
                                    إنهاء العام الدراسي
                                </Typography>
                            </Button>
                        )}
                        <Button sx={style.deleteYearButton} onClick={actions.deleteYear}>
                            <Typography fontSize={'h4'} fontWeight={700}>
                                حذف العام الدراسي
                            </Typography>
                        </Button>
                    </Box>
                </Box>
            )}
            <ClassesDialog
                data={data.levelsData}
                open={states.classesDialogState}
                handleClose={actions.classesHandleDialog}
                getSelectedClasses={actions.handleSelectedClasses}
            />
        </Box>
    )
}

export default EditYearC
