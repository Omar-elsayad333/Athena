import { useContext } from "react";
import { IStyle } from "styles/IStyle";
import { DarkThemeContext } from "context/ThemeContext";

// MUI
import TextField from "@mui/material/TextField";
import FormControl from '@mui/material/FormControl';

type Props = {
    name?: string;
    value?: string;
    onChange: Function;
    error?: boolean;
    helperText?: string;
    placeholder: string;
    type?: string;
}

const SInput: React.FC<Props> = ({type= 'text', placeholder, helperText, error, onChange, value, name}) => {

    const { mainColors } = useContext(DarkThemeContext);

    const classes: IStyle = {
        root: {
            '.MuiOutlinedInput-root': {
                width: '255px',
                height: '46px',
                fontSize: '14px',
                fontWeight: '400',
                borderRadius: '7px',
                color: 'rgba(63, 114, 164, 1)',
                backgroundColor: '#E8F3FF',
                '.MuiOutlinedInput-input': {
                    '&::placeholder': {
                        opacity: .65,
                        color: '#3F72A4',
                    }
                },
                '.MuiOutlinedInput-notchedOutline': {
                    border: 'none',
                    transition: '.2s ease-out',
                    boxShadow: '0px 0px 10px 1px #B6D5F0',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    boxShadow: '0px 0px 0px 1px #3F72A4',
                },
                '@media(max-width: 300px)': {
                    width: '200px',
                },
                '@media(max-width: 250px)': {
                    width: '150px',
                },
            },  
            '.Mui-error': {
                transition: '.2s ease-out',
                border: `solid 1px ${mainColors.error.main} !important`,
            },
            '.Mui-focused': {
                '&.Mui-error': {
                    border: '1px solid transparent !important',
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

    const errorStyle = {
        root: {
            marginTop: '10px',
            fontSize: '14px', 
            color: mainColors.error.main,
        },
    }

    return (
        <FormControl  required>
            <TextField  
                autoComplete='off'   
                variant="outlined"
                sx={classes.root}
                name={name}
                value={value}
                onChange={e => onChange(e.target.value)}
                error={error}
                placeholder={placeholder}
                type={type}
            />
            <label style={errorStyle.root}>
                {helperText}
            </label>
        </FormControl>
    );
}

export default SInput;