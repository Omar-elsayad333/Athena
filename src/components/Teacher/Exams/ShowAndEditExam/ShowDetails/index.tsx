import { IStyle } from 'styles/IStyle'
import MyInput from 'components/MyInput'
import MySelect from 'components/MySelect'
import { useTheme } from 'context/ThemeContext'
import MyRadioGroup from 'components/MyRadioGroup'
import MyDatePicker from 'components/MyDatePicker'
import MyBigTimePicker from 'components/MyBigTimePicker'
import TeacherAddExamLayer from 'components/BigImages/TeacherAddExamLayer'

// MUI
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

type Props = {
    data: any
    states: any
    actions: any
}

const ShowDetails: React.FC<Props> = ({ data, states, actions }) => {
    const { mainColors } = useTheme()
    const style: IStyle = {
        container: {
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'start',
            gap: '30px',
        },
        inputsContainer: {
            display: 'grid',
            rowGap: '70px',
            columnGap: '70px',
            gridTemplateColumns: '1fr 1fr',
            '@media screen and (max-width: 700px)': {
                gridTemplateColumns: '1fr',
            },
        },
        formContainer: {
            display: 'flex',
            flexDirection: 'column',
            gap: '75px',
        },
        inputWithLabel: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            gap: '25px',
        },
        examNameCard: {
            padding: '20px 30px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '30px',
            background: mainColors.backgroundColor.sideNav,
            border: '2px solid #3F72A4',
            borderRadius: '12px',
        },
        cardData: {
            display: 'flex',
            flexDirection: 'column',
            gap: '17px',
        },
        smallData: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '33px',
        },
    }

    return (
        <Box sx={style.container}>
            <Box sx={style.formContainer}>
                {data.examTypes.length > 0 && (
                    <MyRadioGroup
                        getSelected={actions.examTypesHandler}
                        data={data.examTypes}
                        value={states.selectedExamType.id}
                    />
                )}
                <Box sx={style.inputsContainer}>
                    <Box sx={style.inputWithLabel}>
                        <Typography variant="h3" fontWeight={700} color={mainColors.title.main}>
                            أسم النموذج:-
                        </Typography>
                        <MyInput
                            placeholder="حدد أسم النموذج"
                            value={states.examName.value}
                            error={states.examName.error}
                            onChange={actions.examNameHandler}
                            helperText={states.examName.helperText}
                        />
                    </Box>
                    <Box sx={style.inputWithLabel}>
                        <Typography variant="h3" fontWeight={700} color={mainColors.title.main}>
                            الصف الدراسي:-
                        </Typography>
                        <MySelect
                            data={data.levelsData}
                            placeholder="حدد الصف الدراسي"
                            value={states.selectedLevel.value}
                            error={states.selectedLevel.error}
                            getSelected={actions.selectedLevelHandler}
                            helperText={states.selectedLevel.helperText}
                            disabled={states.selectedYear.id ? false : true}
                        />
                    </Box>
                    <Box sx={style.inputWithLabel}>
                        <Typography variant="h3" fontWeight={700} color={mainColors.title.main}>
                            تاريخ الاصدار:-
                        </Typography>
                        <MyDatePicker
                            dateValue={states.examStartDate.value}
                            placeholder="حدد تاريخ النموذج"
                            handleDateValue={actions.examStartDateHandler}
                            error={states.examStartDate.error}
                            helperText={states.examStartDate.helperText}
                        />
                    </Box>
                    <Box sx={style.inputWithLabel}>
                        <Typography variant="h3" fontWeight={700} color={mainColors.title.main}>
                            عدد الاسئلة الرئيسية:-
                        </Typography>
                        <MyInput
                            type="number"
                            placeholder="حدد عدد الاسئلة"
                            value={states.sectionCount.value > 10 ? '' : states.sectionCount.value}
                            error={states.sectionCount.error}
                            onChange={actions.examSectionCountsHandler}
                            helperText={states.sectionCount.helperText}
                        />
                    </Box>
                    <Box sx={style.inputWithLabel}>
                        <Typography variant="h3" fontWeight={700} color={mainColors.title.main}>
                            وقت بدأ الامتحان:-
                        </Typography>
                        <MyBigTimePicker
                            error={states.examStartTime.error}
                            placeholder="حدد وقت بدأ الامتحان"
                            value={states.examStartTime.value}
                            helperText={states.examStartTime.helperText}
                            getSelectedTime={actions.examStartTimeHandler}
                        />
                    </Box>
                    <Box sx={style.inputWithLabel}>
                        <Typography variant="h3" fontWeight={700} color={mainColors.title.main}>
                            المدة الزمنية:-
                        </Typography>
                        <MyInput
                            type="number"
                            placeholder="حدد المدة الزمنية بالدقيقة"
                            value={states.examTime.value}
                            error={states.examTime.error}
                            onChange={actions.examTimeHandler}
                            helperText={states.examTime.helperText}
                        />
                    </Box>
                    <Box sx={style.inputWithLabel}>
                        <Typography variant="h3" fontWeight={700} color={mainColors.title.main}>
                            الدرجة الكلية:-
                        </Typography>
                        <MyInput
                            type="number"
                            placeholder="حدد الدرجة الكلية"
                            value={states.examDegree.value}
                            error={states.examDegree.error}
                            onChange={actions.examDegreeHandler}
                            helperText={states.examDegree.helperText}
                        />
                    </Box>
                </Box>
            </Box>
            <TeacherAddExamLayer />
        </Box>
    )
}

export default ShowDetails
