import useEditGroup from 'container/useEditGroup';
import FormBasicInputs from './FormBasicInputs';
import FormTimeInputs from './FormTimeInputs';

// MUI
import Box from '@mui/material/Box';

const EditGroupC: React.FC = () => {

    const {
        data,
        states,
        func
    } = useEditGroup();
    
    const style = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            gap: '60px',
        },
    }

    return (
        <Box sx={style.container}>
            <FormBasicInputs data={data} />
            <FormTimeInputs data={data.schedule} states={states} func={func} />
        </Box>
    );
}

export default EditGroupC;