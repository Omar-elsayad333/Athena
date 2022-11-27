import { useContext } from "react";
import { lightColors, darkColors } from 'styles/colors';
import { DarkThemeContext } from "context/ThemeContext";
import MySelect from 'components/MySelect';
import MyInput from 'components/MyInput';
import AddDayBut from "./AddDayBut";
import useAddGroup from "container/useAddGroup";

// MUI
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MyDaysDialog from "components/MyDaysDialog";


const FormSection = () => {

    const { darkMode } = useContext(DarkThemeContext);

    const {
        selectedDays,
        getSelectedDays,
        dialogState,
        handleDialogState,
    } = useAddGroup()

    const style = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            gap: '60px',
        },
        title: {
            flex: '100%',
        },
        inputsContainer: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '40px',
        },
        backPaper: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px',
            padding: '30px',
            background: '#E8F3FF',
            border: '2px solid #B6D5F0',
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
            border: '1px solid #3F72A4',
            background: '#B6D5F0',
            cursor: 'pointer',
            color: '#3F72A4',
            transition: '.2s',
        },
    }

    return (
        <Box sx={style.container}>
            <Box sx={style.inputsContainer}>
                <Typography sx={style.title} variant="h3" color={darkMode ? darkColors.title.main : lightColors.title.main}>
                    بيانات المجموعة:-
                </Typography>
                <MyInput Placeholder='أسم المجموعة' />
                <MySelect placeholder='الصف الدراسي الخاص بالمجموعة' data={[]} />
                <MySelect placeholder='المقر الخاص بالمجموعة' data={[]} />
                <MyInput Placeholder='الحد الاقصى لعدد الطلاب' />
            </Box>
            <Box sx={style.inputsContainer}>
                <Typography sx={style.title} variant='h3' color={darkMode ? darkColors.title.main : lightColors.title.main}>
                    مواعيد المجموعة:-
                </Typography>
                <Box sx={style.backPaper}>
                    <Typography sx={style.title} variant='h5' color={lightColors.title.main}>
                        أيام الحضور:-
                    </Typography>
                    <Box sx={style.daysList}>
                        <AddDayBut handleDialogState={handleDialogState} />
                        <MyDaysDialog open={dialogState} handleClose={handleDialogState} getSelectedDays={getSelectedDays} />
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
                </Box>
            </Box>
        </Box>
    );
}

export default FormSection;