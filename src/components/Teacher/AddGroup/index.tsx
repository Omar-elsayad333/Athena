import useAddGroup from 'container/useAddGroup';
import FormBasicInputs from './FormBasicInputs';
import FormTimeInputs from './FormTimeInputs';

// MUI
import Box from '@mui/material/Box';

const style = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: '60px',
    },
}

const AddGroupC = () => {

    const {
        selectedDays,
        getSelectedDays,
        dialogState,
        handleDialogState,
        getSelectedTime,
    } = useAddGroup();


    return (
        <Box sx={style.container}>
            <FormBasicInputs />
            <FormTimeInputs 
                selectedDays={selectedDays}
                getSelectedDays={getSelectedDays}
                dialogState={dialogState}
                handleDialogState={handleDialogState}
                getSelectedTime={getSelectedTime}
            />
        </Box>
    );
}

export default AddGroupC;