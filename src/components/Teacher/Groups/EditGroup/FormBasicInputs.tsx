import { useContext } from 'react';
import { DarkThemeContext } from 'context/ThemeContext';
import MySelect from 'components/MySelect';
import MyInput from 'components/MyInput';

// MUI
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

type Props = {
    data: any;
}

const style = {
    container: {
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

const FormBasicInputs: React.FC<Props> = ({data}) => {

    const {mainColors} = useContext(DarkThemeContext);

    return (
        <Box sx={style.container}>
            <Typography sx={style.title} variant="h3" color={mainColors.title.main}>
                بيانات المجموعة:-
            </Typography>
            <Box sx={style.inputContainer}>
                <Typography variant='h5' color={mainColors.primary.dark}>
                    أسم المجموعة    
                </Typography>
                <MyInput Placeholder={data.name} />
            </Box>
            <Box sx={style.inputContainer}>
                <Typography variant='h5' color={mainColors.primary.dark}>
                    الصف الدراسي الخاص بالمجموعة   
                </Typography>
                <MySelect placeholder={data.level} data={[]} />
            </Box>
            <Box sx={style.inputContainer}>
                <Typography variant='h5' color={mainColors.primary.dark}>
                    المقر الخاص بالمجموعة   
                </Typography>
                <MySelect placeholder={data.location} data={[]} />
            </Box>
            <Box sx={style.inputContainer}>
                <Typography variant='h5' color={mainColors.primary.dark}>
                    الحد القصى للطلاب   
                </Typography>
                <MyInput Placeholder={data.limit} />
            </Box>
        </Box>
    );
}

export default FormBasicInputs;