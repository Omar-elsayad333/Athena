import { useContext } from "react";
import { DarkThemeContext } from "context/ThemeContext";

// MUI
import TextField from "@mui/material/TextField";
import FormControl from '@mui/material/FormControl';

type Props = {
    Id?: any;
    Name?: any;
    Value?: any;
    OnChange?: any;
    error?: any;
    HelperText?: any;
    Type?: any;
    Placeholder: any;
}

const MyInput: React.FC<Props> = ({Type, Placeholder, HelperText, error, OnChange, Value, Name, Id}) => {

    const {darkMode} = useContext(DarkThemeContext);

    const classes = {
        root: {
            '.MuiOutlinedInput-root': {
                width: '255px',
                height: '46px',
                fontSize: '14px',
                fontWeight: '400',
                border: 'none',
                borderRadius: '7px',
                color: darkMode ? '#B6D5F0' : 'rgba(63, 114, 164, 1)',
                backgroundColor: darkMode ? '#1C364F' : '#E8F3FF',
                '.MuiOutlinedInput-input': {
                    '&::placeholder': {
                        opacity: .65,
                        color: darkMode ? '#B6D5F0' :  '#3F72A4',
                    }
                },
                '.MuiOutlinedInput-notchedOutline': {
                    border: darkMode ? '1px solid #3F72A4' : 'none',
                    transition: '.2s ease-out',
                    boxShadow: darkMode ? 'none' : '0px 0px 10px 1px #B6D5F0',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    border: darkMode ? '1px solid #B6D5F0' : 'none',
                    boxShadow: darkMode ? '0px 0px 7px -1px #3F72A4' : '0px 0px 0px 1px #3F72A4',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'unset',
                },
                '@media(max-width: 300px)': {
                    width: '200px',
                },
                '@media(max-width: 250px)': {
                    width: '150px',
                },
            },
            '.Mui-error': {
                border: darkMode ? 'none' : 'solid 1px red !important',
                transition: '.2s ease-out',
            },
            '.Mui-focused': {
                '&.Mui-error': {
                    border: darkMode ? 'none' : '1px solid transparent !important',
                },
            },
        }
    };

    return (
        <FormControl  required>
            <TextField  
                autoComplete='off'   
                variant="outlined"
                sx={classes.root}
                id={Id}
                name={Name}
                value={Value}
                onChange={OnChange}
                error={error}
                helperText={HelperText}
                type={Type}
                placeholder={Placeholder}
            />
        </FormControl>
    );
}

export default MyInput;