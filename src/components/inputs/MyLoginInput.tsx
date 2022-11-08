import colors from '../../styles/colors';

// MUI
import styled from '@mui/material/styles/styled';
import TextField from '@mui/material/TextField';

type Props = {
    Id?: any;
    Name?: any;
    Value?: any;
    OnChange?: any;
    error?: any;
    HelperText?: any;
    Type?: any;
    Placeholder?: any;
}

const MyTextField = styled(TextField)({
    width: '100%',
    height: '80px',
    '& .MuiOutlinedInput-root': {
        borderRadius: '12px',
        width: '100%',
        height: '80px',
        fontSize: '16px',
        fontWeight: '400',
        color: colors.secondary,
        border: '1px solid transparent',
        backgroundColor: 'rgba(232, 243, 255, 0.25)',
        transition: '.2s ease-out',
        boxShadow: '0px 0px 10px 0px #1C364F40',
        '&.Mui-focused': {
            backgroundColor: 'rgba(232, 243, 255, 0.5)',
            boxShadow: 'none',
            border: '2.5px solid rgba(63, 114, 164, 1)',
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

const MyLoginInput: React.FC<Props> = ({Id, Name, Value, OnChange, error, HelperText, Type, Placeholder}) => {
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
    )
}

export default MyLoginInput;