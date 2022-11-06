import colors from '../../styles/colors';

// MUI
import { styled } from '@mui/material/styles';
import TextField from "@mui/material/TextField";

type Props = {
    Id?: any;
    Name?: any;
    Value?: any;
    OnChange?: any;
    error?: any;
    HelperText?: any;
    Type: any;
    Placeholder: any;
}

const MyTextField = styled(TextField)({
    borderRadius: '6px',
    width: '255px',
    height: '46px',
    '& .MuiOutlinedInput-root': {
        width: '255px',
        height: '46px',
        fontSize: '14px',
        fontWeight: '400',
        color: colors.secondary,
        border: '1px solid transparent',
        backgroundColor: '#E8F3FF',
        transition: '.2s ease-out',
        boxShadow: '0px 0px 10px 1px #B6D5F0',
        '&.Mui-focused': {
            boxShadow: '0px 0px 0px 1px #3F72A4',
        },
        '& fieldset': {
            border: '1px transparent solid',
        },
        '&:hover fieldset': {
            border: 'inherit',
        },
        '&.Mui-focused fieldset': {
            border: '1px transparent solid',
        },
    },
});

const MyInput: React.FC<Props> = ({Type, Placeholder, HelperText, error, OnChange, Value, Name, Id}) => {
    return (
        <MyTextField     
            variant="outlined"
            id={Id}
            name={Name}
            value={Value}
            onChange={OnChange}
            error={error}
            helperText={HelperText}
            type={Type}
            placeholder={Placeholder}
        />
    );
}

export default MyInput;