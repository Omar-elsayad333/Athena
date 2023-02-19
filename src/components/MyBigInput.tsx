import { useContext } from "react";
import { IStyle } from "styles/IStyle";
import InputError from "components/Shared/InputError";
import { DarkThemeContext } from "context/ThemeContext";

// MUI
import TextField from "@mui/material/TextField";
import FormControl from '@mui/material/FormControl';

type Props = {
    indexes?: any;
    name?: string;
    value?: string;
    onChange: Function;
    error?: boolean;
    helperText: string;
    placeholder: string;
    type?: string;
}

const MyBigInput: React.FC<Props> = ({type, placeholder, helperText, error, onChange, value, name, indexes}) => {

    const { mainColors, darkMode } = useContext(DarkThemeContext);
    const classes: IStyle = {
        root: {
            '.MuiOutlinedInput-root': {
                gap: '20px',
                padding: '15px 18px',
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
                    transition: '.2s ease-out',
                    border: darkMode ? '1px solid #3F72A4' : 'none',
                    boxShadow: darkMode ? 'none' : '0px 0px 10px 1px #B6D5F0',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    border: darkMode ? '1px solid #B6D5F0' : 'none',
                    boxShadow: darkMode ? '0px 0px 7px -1px #3F72A4' : '0px 0px 0px 1px #3F72A4',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'unset',
                },
                '.MuiInputAdornment-root': {
                    width: '30px',
                    height: '30px',
                    alignSelf: 'end'
                }
            },  
            '.Mui-error': {
                transition: '.2s ease-out',
                border: darkMode ? 'none' : `solid 1px ${mainColors.error.main} !important`,
            },
            '.Mui-focused': {
                '&.Mui-error': {
                    border: darkMode ? 'none' : '1px solid transparent !important',
                },
            },
            "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
                display: "none",
            },
            "& input[type=number]": {
                MozAppearance: "textfield",
            },
        }
    };

    return (
        <FormControl required fullWidth>
            <TextField  
                autoComplete='off'   
                variant="outlined"
                sx={classes.root}
                name={name}
                value={value}
                onChange={e => onChange(e.target.value, indexes)}
                error={error}
                placeholder={placeholder}
                type={type}
            />
            {
                helperText &&
                <InputError content={helperText} type='error' />
            }
        </FormControl>
    );
}

export default MyBigInput;