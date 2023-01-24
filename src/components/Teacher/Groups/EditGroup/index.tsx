import { useContext } from 'react';
import MyInput from 'components/MyInput';
import MySelect from 'components/MySelect';
import FormTimeInputs from './FormTimeInputs';
import { DarkThemeContext } from 'context/ThemeContext';

// MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


type Props = {
    data: any;
    states: any;
    actions: any;
    dialogs: any;
}

const EditGroupC: React.FC<Props> = ({data, states, actions, dialogs}) => {
    
    const {mainColors} = useContext(DarkThemeContext);

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
        }
    }

    return (
        <Box sx={style.container}>
            <Box sx={style.formContainer}>
                <Typography sx={style.title} variant="h3" color={mainColors.title.main}>
                    بيانات المجموعة:-
                </Typography>
                <Box sx={style.inputContainer}>
                    <Typography variant='h5' color={mainColors.primary.dark}>
                        أسم المجموعة    
                    </Typography>
                    <MyInput 
                        value={states.name.value}
                        error={states.name.error}
                        placeholder={data.name}
                        onChange={actions.nameHandler}
                        type='text'
                        helperText={states.name.helperText}
                    />
                </Box>
                <Box sx={style.inputContainer}>
                    <Typography variant='h5' color={mainColors.primary.dark}>
                        العام الدراسي   
                    </Typography>
                    <MySelect 
                        value={states.selectedYear.name}
                        placeholder={`${data.startYear} / ${data.endYear}`}
                        data={states.years} 
                        getSelected={actions.yearHandler}
                        error={states.selectedYear.error}
                        helperText={states.selectedYear.helperText}            
                    />               
                </Box>
                <Box sx={style.inputContainer}>
                    <Typography variant='h5' color={mainColors.primary.dark}>
                        الصف الدراسي الخاص بالمجموعة
                    </Typography>
                    <MySelect 
                        value={states.selectedClassroom.name}
                        placeholder={data.level}
                        data={states.classrooms} 
                        getSelected={actions.classroomHandler}
                        error={states.selectedClassroom.error}
                        helperText={states.selectedClassroom.helperText}            
                    />
                </Box>
                <Box sx={style.inputContainer}>
                    <Typography variant='h5' color={mainColors.primary.dark}>
                        المقر الخاص بالمجموعة   
                    </Typography>
                    <MySelect  
                        error={states.selectedHeadquarter.error}  
                        data={states.headquarters} 
                        placeholder={data.headQuarter}
                        value={states.selectedHeadquarter.name}
                        getSelected={actions.headquarterHandler}
                        helperText={states.selectedHeadquarter.helperText}            
                    />
                </Box>
                <Box sx={style.inputContainer}>
                    <Typography variant='h5' color={mainColors.primary.dark}>
                        الحد القصى للطلاب   
                    </Typography>
                    <MyInput    
                        value={states.limit.value}
                        error={states.limit.error}
                        placeholder='الحد الاقصى لعدد الطلاب' 
                        onChange={actions.limitHandler}
                        type='number'
                        helperText={states.limit.helperText}
                    />
                </Box>
            </Box>
            <FormTimeInputs data={data} states={states} actions={actions} dialogs={dialogs} />
        </Box>
    );
}

export default EditGroupC;