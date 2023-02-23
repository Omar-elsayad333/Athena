import { IStyle } from "styles/IStyle";
import MyInput from "components/MyInput";
import MySelect from "components/MySelect";
import { useTheme } from "context/ThemeContext";
import MyRadioGroup from "components/MyRadioGroup";
import MyDatePicker from "components/MyDatePicker";
import TeacherAddExamLayer from "components/BigImages/TeacherAddExamLayer";

// MUI
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MyBigTimePicker from "components/MyBigTimePicker";

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
            gap: '17px'
        },
        smallData: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '33px'
        },
    }

    return (
        <Box sx={style.container}>
            <Box sx={style.formContainer}>
                <MyRadioGroup getSelected={actions.examTypesHandler} data={data.examTypes} />
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
                            placeholder='حدد العام الدراسي'
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
                            placeholder='حدد الصف الدراسي'
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
                            placeholder='حدد تاريخ النموذج'
                            handleDateValue={actions.examStartDateHandler}
                            error={states.examStartDate.error}
                            helperText={states.examStartDate.helperText}
                        />
                    </Box>
                    <Box sx={style.inputWithLabel}>
                        <Typography
                            variant='h3'
                            fontWeight={700}
                            color={mainColors.title.main}
                        >
                            عدد الاسئلة الرئيسية:-
                        </Typography>
                        <MyInput 
                            type='number'
                            placeholder='حدد عدد الاسئلة'
                            value={states.sectionCount.value > 10 ? '' :states.sectionCount.value}
                            error={states.sectionCount.error}
                            onChange={actions.examSectionCountsHandler}
                            helperText={states.sectionCount.helperText}
                        />
                    </Box>
                    <Box sx={style.inputWithLabel}>
                        <Typography
                            variant='h3'
                            fontWeight={700}
                            color={mainColors.title.main}
                        >
                            وقت بدأ الامتحان:-
                        </Typography>
                        <MyBigTimePicker 
                            placeholder='حدد وقت بدأ الامتحان'
                            value={states.examStartTime.value}
                            getSelectedTime={actions.examStartTimeHandler}
                        />
                    </Box>
                    <Box sx={style.inputWithLabel}>
                        <Typography
                            variant='h3'
                            fontWeight={700}
                            color={mainColors.title.main}
                        >
                            المدة الزمنية:-  
                        </Typography>
                        <MyInput 
                            type='number'
                            placeholder='حدد المدة الزمنية بالدقيقة'
                            value={states.examTime.value}
                            error={states.examTime.error}
                            onChange={actions.examTimeHandler}
                            helperText={states.examTime.helperText}
                        />
                    </Box>
                    <Box sx={style.inputWithLabel}>
                        <Typography
                            variant='h3'
                            fontWeight={700}
                            color={mainColors.title.main}   
                        >
                            الدرجة الكلية:-
                        </Typography>
                        <MyInput 
                            type="number"
                            placeholder='حدد الدرجة الكلية'
                            value={states.examDegree.value}
                            error={states.examDegree.error}
                            onChange={actions.examDegreeHandler}
                            helperText={states.examDegree.helperText}
                        />
                    </Box>
                </Box>
                <Button variant="contained" color={'primary'} onClick={() => actions.submitBasicData()}>
                    <Typography variant="h3" fontWeight={700}>
                        إنشاء نموذج
                    </Typography>
                </Button>
                {
                    states.examReady &&
                    <Box sx={style.examNameCard}>
                        <Box sx={style.cardData}>
                            <Typography sx={style.title} variant='h2' color={'primary'} fontWeight={700}>
                                {states.examName.value}
                            </Typography>
                            <Box sx={style.smallData}>
                                <Typography variant='h5' color={'primary'}>
                                    {states.selectedLevel.value}
                                </Typography>
                                <Typography variant='h5' color={'primary'}>
                                    {states.selectedLevel.value}
                                </Typography>
                            </Box>
                        </Box>
                        {
                            !states.spcialExam ?
                            <svg onClick={() => actions.spcialExamHandler()} width="39" height="39" viewBox="0 0 39 39" fill={mainColors.primary.main} xmlns="http://www.w3.org/2000/svg">
                                <path d="M28.1838 33.7057C27.9271 33.7067 27.6739 33.6462 27.4455 33.5291L19.26 29.2438L11.0745 33.5291C10.8087 33.6689 10.509 33.7313 10.2095 33.7092C9.91003 33.6872 9.62274 33.5815 9.38031 33.4043C9.13787 33.227 8.95002 32.9854 8.83811 32.7067C8.7262 32.428 8.69472 32.1235 8.74725 31.8278L10.3522 22.7917L3.73965 16.3717C3.53334 16.1658 3.38698 15.9076 3.31629 15.6249C3.2456 15.3421 3.25324 15.0454 3.3384 14.7667C3.43142 14.4814 3.60254 14.228 3.83234 14.0351C4.06213 13.8422 4.3414 13.7175 4.63845 13.6753L13.7869 12.3431L17.8155 4.1095C17.9469 3.83814 18.1521 3.60929 18.4076 3.44916C18.6631 3.28903 18.9585 3.2041 19.26 3.2041C19.5615 3.2041 19.8569 3.28903 20.1124 3.44916C20.3679 3.60929 20.5731 3.83814 20.7045 4.1095L24.7812 12.3271L33.9297 13.6592C34.2267 13.7015 34.506 13.8261 34.7358 14.019C34.9656 14.2119 35.1367 14.4654 35.2297 14.7506C35.3149 15.0294 35.3225 15.3261 35.2519 15.6088C35.1812 15.8916 35.0348 16.1498 34.8285 16.3556L28.2159 22.7756L29.8209 31.8118C29.8782 32.1127 29.8482 32.4237 29.7344 32.7081C29.6207 32.9925 29.4279 33.2384 29.1789 33.4168C28.8883 33.6205 28.5383 33.7221 28.1838 33.7057ZM19.26 25.8412C19.5173 25.8347 19.7718 25.8956 19.9983 26.0177L26.0491 29.2277L24.8935 22.4707C24.8487 22.2127 24.8677 21.9476 24.9488 21.6987C25.0299 21.4497 25.1708 21.2243 25.359 21.0422L30.174 16.3396L23.433 15.3445C23.1858 15.2947 22.9538 15.1874 22.7558 15.0313C22.5578 14.8751 22.3994 14.6745 22.2934 14.4457L19.26 8.42695L16.2265 14.4457C16.1104 14.6763 15.9404 14.8756 15.7308 15.0264C15.5212 15.1773 15.2784 15.2754 15.0228 15.3124L8.2818 16.3075L13.0968 21.0101C13.285 21.1922 13.4258 21.4176 13.507 21.6665C13.5881 21.9155 13.6071 22.1806 13.5622 22.4386L12.4066 29.1154L18.4575 25.9054C18.7139 25.8101 18.9917 25.7879 19.26 25.8412Z" fill="inherit"/>
                            </svg> :
                            <svg onClick={() => actions.spcialExamHandler()} width="39" height="39" viewBox="0 0 39 39" fill={mainColors.warning.main} xmlns="http://www.w3.org/2000/svg">
                                <path d="M28.1838 33.7047C27.9271 33.7058 27.674 33.6452 27.4455 33.5282L19.26 29.2428L11.0745 33.5282C10.8087 33.6679 10.509 33.7303 10.2095 33.7083C9.91005 33.6862 9.62275 33.5805 9.38032 33.4033C9.13789 33.2261 8.95004 32.9844 8.83813 32.7057C8.72622 32.427 8.69474 32.1225 8.74726 31.8269L10.3523 22.7907L3.73966 16.3707C3.53335 16.1648 3.387 15.9067 3.31631 15.6239C3.24562 15.3411 3.25326 15.0445 3.33841 14.7657C3.43144 14.4805 3.60256 14.227 3.83235 14.0341C4.06215 13.8412 4.34141 13.7165 4.63846 13.6743L13.787 12.3422L17.8155 4.10852C17.9469 3.83716 18.1521 3.60831 18.4076 3.44818C18.6631 3.28805 18.9585 3.20312 19.26 3.20312C19.5615 3.20312 19.8569 3.28805 20.1124 3.44818C20.3679 3.60831 20.5731 3.83716 20.7045 4.10852L24.7812 12.3261L33.9297 13.6583C34.2268 13.7005 34.506 13.8251 34.7358 14.018C34.9656 14.211 35.1367 14.4644 35.2298 14.7497C35.3149 15.0284 35.3226 15.3251 35.2519 15.6079C35.1812 15.8906 35.0348 16.1488 34.8285 16.3547L28.2159 22.7747L29.8209 31.8108C29.8782 32.1117 29.8482 32.4227 29.7345 32.7071C29.6207 32.9915 29.4279 33.2374 29.1789 33.4158C28.8883 33.6195 28.5383 33.7211 28.1838 33.7047Z" fill="inherit"/>
                            </svg>
                        }
                    </Box>
                }
            </Box>
            <TeacherAddExamLayer />
        </Box>
    );
}
 
export default CreateExam;