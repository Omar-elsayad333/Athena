
// MUI
import Box from '@mui/material/Box';
import MyDatePicker from 'components/MyDatePicker';
import MyInput from 'components/MyInput';
import MySelect from 'components/MySelect';

const classes = {
    root: {
        width:'100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '200px',
    },
}

const Test = () => {
    return (
        <Box sx={classes.root}>
            <MyInput Placeholder='omar' />
            <MyDatePicker placeholder='opmar' />
            <MySelect placeholder='my name' data={['ahmed', 'omar']}/>
        </Box>
    );
}

export default Test;