import Box from '@mui/material/Box';
import style from './style'

type Props = {
    inputType: any;
}

const MyLogFormInput: React.FC<Props> = ({inputType}) => {
    return (
        <Box sx={style.inputsContainer}>
            <input type={inputType} style={style.logFormInputs}/>
        </Box>
    )
}

export default MyLogFormInput;