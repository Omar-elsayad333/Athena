import MyInput from "components/MyInput";
import MySelect from "components/MySelect";
import { useTheme } from "context/ThemeContext";
import MyDatePicker from "components/MyDatePicker";
import TeacherAddExamLayer from "components/BigImages/TeacherAddExamLayer";

// MUI
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MyRadioGroup from "components/MyRadioGroup";
import { IStyle } from "styles/IStyle";
import { Button } from "@mui/material";

type Props = {
    data: any;
    states: any;
    actions: any;
}

const CreateExam: React.FC<Props> = ({ data, states, actions }) => {

    const { mainColors } = useTheme()
    const style: IStyle = {
        container: {
            width: '100%',
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
            '@media screen and (max-width: 700px)': {
                gridTemplateColumns: '1fr',
            }
        },
        formContainer: {
            display: 'flex',
            flexDirection: 'column',
            gap: '75px'
        },
        inputWithLabel: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            gap: '25px'
        },
        radioChoose: {
            flex: '1'
        }
    }

    return (
        <Box sx={style.container}>
            <Box sx={style.formContainer}>
                <Box sx={style.radioChoose}>
                    <MyRadioGroup getSelected={actions.examTypesHandler} data={data.examTypes} />
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
                <Button variant="contained" color={'primary'} onClick={() => actions.submitBasicData()}>
                    <Typography variant="h3" fontWeight={700}>
                        إنشاء نموذج
                    </Typography>
                </Button>
            </Box>
            <TeacherAddExamLayer />
        </Box>
    );
}
 
export default CreateExam;