import { styled } from '@mui/material/styles';
import colors from '../../styles/colors';
import TextField from "@mui/material/TextField";


type Props = {
    Id: any;
    Name: any;
    Value: any;
    OnChange: any;
    error: any;
    HelperText: any;
    Type: any;
    Placeholder: any;
}

const CssTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
        width: '265px',
        height: '46px',
        fontSize: '14px',
        fontWeight: '400',
        borderRadius: '6px',
        color: colors.secondary,
        backgroundColor: '#E8F3FF',
        border: '1px transparent solid',
        '& fieldset': {
            transition: '.2s ease-out',
            boxShadow: '0px 0px 10px 1px #B6D5F0',
            borderColor: 'inherit',
        },
        '&:hover fieldset': {
            borderColor: 'inherit',
        },
        '&.Mui-focused fieldset': {
            boxShadow: '0px 0px 0px 1px #3F72A4',
        },
    },
});

const MyInput: React.FC<Props> = ({Type, Placeholder, HelperText, error, OnChange, Value, Name, Id}) => {
    return (
        <CssTextField     
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