import MyInput from "components/MyInput";
import MySelect from "components/MySelect";
import { useTheme } from "context/ThemeContext";
import MyDatePicker from "components/MyDatePicker";

// MUI
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

type Props = {
    data: any;
    states: any;
    actions: any;
}

const CreateExam: React.FC<Props> = ({ data, states, actions }) => {

    const { mainColors } = useTheme()
    const style = {
        container: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'start',
            gap: '30px'
        },
        inputsContainer: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            rowGap: '70px',
            columnGap: '70px',
        },
        inputWithLabel: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            gap: '25px'
        },
        radioChoose: {

        },
    }

    return (
        <Box sx={style.container}>
            <Box sx={style.radioChoose}>

            </Box>
            <Box sx={style.inputsContainer}>
                <Box sx={style.inputWithLabel}>
                    <Typography
                        variant='h3'
                        fontWeight={700}
                        color={mainColors.title.main}
                    >
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
                    <Typography
                        variant='h3'
                        fontWeight={700}
                        color={mainColors.title.main}
                    >
                        العام الدراسي:-
                    </Typography>
                    <MySelect 
                        data={data.yearsData}
                        placeholder="حدد أسم النموذج"
                        value={states.selectedYear.value}
                        error={states.selectedYear.error}
                        getSelected={actions.selectedYearHandler}
                        helperText={states.selectedYear.helperText}
                    />
                </Box>
                <Box sx={style.inputWithLabel}>
                    <Typography
                        variant='h3'
                        fontWeight={700}
                        color={mainColors.title.main}
                    >
                        الصف الدراسي:-  
                    </Typography>
                    <MySelect 
                        data={data.levelsData}
                        placeholder="حدد أسم النموذج"
                        value={states.selectedLevel.value}
                        error={states.selectedLevel.error}
                        getSelected={actions.selectedLevelHandler}
                        helperText={states.selectedLevel.helperText}
                        disabled={states.selectedYear.id ? false : true}
                    />
                </Box>
                <Box sx={style.inputWithLabel}>
                    <Typography
                        variant='h3'
                        fontWeight={700}
                        color={mainColors.title.main}
                    >
                        تاريخ الاصدار:-
                    </Typography>
                    <MyDatePicker 
                        dateValue={states.examStartDate.value}
                        placeholder="حدد أسم النموذج"
                        handleDateValue={actions.examStartDateHandler}
                        error={states.examStartDate.error}
                        helperText={states.examStartDate.helperText}
                    />
                </Box>
            </Box>
            {/* <TeacherAddExamLayer /> */}
    </Box>
    );
}
 
export default CreateExam;