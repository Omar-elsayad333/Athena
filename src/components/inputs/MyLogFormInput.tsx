import Box from '@mui/material/Box';
import style from './style'

const MyLogFormInput = () => {
    return (
        <Box sx={style.inputsContainer}>
            <input style={style.logFormInputs}/>
        </Box>
    )
}

export default MyLogFormInput;