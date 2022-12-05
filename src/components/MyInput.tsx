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
                color: darkMode ? '#B6D5F0' : 'rgba(63, 114, 164, 1)',
                borderRadius: '7px',
                borderColor: '#E8F3FF',
                backgroundColor: darkMode ? 'rgb(63 114 164 / 0%)' : '#E8F3FF',
                '.MuiOutlinedInput-input': {
                    '&::placeholder': {
                        color: darkMode ? '#B6D5F0' :  'rgb(63, 114, 164)',
                        opacity: .65,
                    }
                },
                '.MuiOutlinedInput-notchedOutline': {
                    transition: '.2s ease-out',
                    boxShadow: darkMode ? 'none' : '0px 0px 10px 1px #B6D5F0',
                    borderColor: darkMode ? '#B6D5F0' : '#E8F3FF',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    boxShadow: darkMode ? '0px 0px 8px 0px #B6D5F0BF' : '0px 0px 0px 1px #3F72A4',
                    borderColor: darkMode ? '#E0EEFF' : '#E8F3FF',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#E8F3FF',
                },
                '@media(max-width: 300px)': {
                    width: '200px',
                },
                '@media(max-width: 250px)': {
                    width: '150px',
                },
            },
        }
    };

    return (
        <FormControl  required>
            <TextField     
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
            {/* <FormHelperText>Required</FormHelperText>  */}
        </FormControl>
    );
}

export default MyInput;