import { useContext } from "react";
import { IStyle } from "styles/IStyle";
import InputError from "./Shared/InputError";
import { DarkThemeContext } from "context/ThemeContext";

// MUI
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';

type Props = {
    name?: string;
    indexes?: any;
    value?: string;
    onChange: Function;
    error?: boolean;
    helperText: string;
    placeholder: string;
    type?: string;
    addImage: Function;
}

const MyInputWithImage: React.FC<Props> = ({type, placeholder, helperText, error, onChange, value, name, indexes, addImage}) => {

    const { mainColors, darkMode } = useContext(DarkThemeContext);
    const classes: IStyle = {
        root: {
            '.MuiOutlinedInput-root': {
                paddingLeft: '5px',
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
                '@media(max-width: 300px)': {
                    width: '200px',
                },
                '@media(max-width: 250px)': {
                    width: '150px',
                },
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
        <FormControl  required>
            <TextField  
                autoComplete='off'   
                variant="outlined"
                name={name}
                type={type}
                value={value}
                error={error}
                sx={classes.root}
                placeholder={placeholder}
                onChange={e => onChange(e.target.value, indexes)}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="start">
                            <IconButton component="label">
                                <input
                                    hidden 
                                    type="file"  
                                    accept="image/png, image/jpeg, image/jpg" 
                                    onChange={(e) => addImage(e, indexes)} 
                                />
                                <svg width="20" height="20" viewBox="0 0 20 20" fill={mainColors.primary.main} xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.8837 2.48047H4.96125C4.30334 2.48047 3.67239 2.74182 3.20718 3.20703C2.74197 3.67223 2.48062 4.30319 2.48062 4.96109V14.8836C2.48062 15.5415 2.74197 16.1725 3.20718 16.6377C3.67239 17.1029 4.30334 17.3642 4.96125 17.3642H14.8837C15.5416 17.3642 16.1726 17.1029 16.6378 16.6377C17.103 16.1725 17.3644 15.5415 17.3644 14.8836V4.96109C17.3644 4.30319 17.103 3.67223 16.6378 3.20703C16.1726 2.74182 15.5416 2.48047 14.8837 2.48047ZM4.96125 4.13422H14.8837C15.103 4.13422 15.3134 4.22134 15.4684 4.3764C15.6235 4.53147 15.7106 4.74179 15.7106 4.96109V11.8738L13.0646 9.6164C12.6547 9.27907 12.1402 9.09464 11.6093 9.09464C11.0784 9.09464 10.564 9.27907 10.154 9.6164L4.13437 14.6355V4.96109C4.13437 4.74179 4.22149 4.53147 4.37656 4.3764C4.53163 4.22134 4.74195 4.13422 4.96125 4.13422ZM14.8837 15.7105H5.4243L11.2124 10.8815C11.3236 10.799 11.4584 10.7544 11.5969 10.7544C11.7354 10.7544 11.8702 10.799 11.9814 10.8815L15.7106 14.0567V14.8836C15.7106 15.1029 15.6235 15.3132 15.4684 15.4683C15.3134 15.6234 15.103 15.7105 14.8837 15.7105Z" fill="inherit"/>
                                    <path d="M6.61501 8.26969C7.30001 8.26969 7.85532 7.71438 7.85532 7.02937C7.85532 6.34437 7.30001 5.78906 6.61501 5.78906C5.93 5.78906 5.37469 6.34437 5.37469 7.02937C5.37469 7.71438 5.93 8.26969 6.61501 8.26969Z" fill="inherit"/>
                                </svg>
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
            <InputError content={helperText} type='error' />
        </FormControl>
    );
}
 
export default MyInputWithImage;