import { useTheme } from 'context/ThemeContext';

// MUI
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';

const classes = {
    root: {
        width: '255px',
        height: '46px',
        fontSize: '14px',
        fontWeight: '400',
        color: 'rgba(63, 114, 164, 1)',
        borderRadius: '7px',
        borderColor: '#E8F3FF',
        backgroundColor: '#E8F3FF',
        '.MuiOutlinedInput-input': {
            '&::placeholder': {
                color: 'rgb(63, 114, 164)',
                opacity: .65,
            }
        },
        '.MuiOutlinedInput-notchedOutline': {
            transition: '.2s ease-out',
            boxShadow: '0px 0px 10px 1px #B6D5F0',
            borderColor: '#E8F3FF',
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            boxShadow: '0px 0px 0px 1px #3F72A4',
            borderColor: '#E8F3FF',
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#E8F3FF',
        },
        '.MuiSvgIcon-root': {
            color: '#81acd1'
        },
        '@media(max-width: 300px)': {
            width: '200px',
        },
        '@media(max-width: 250px)': {
            width: '150px',
        },
    }
};

type Props = {
    value: string;
    show: boolean;
    placeholder: string;
    helperText: string;
    showHandler: Function;
    onChange: Function;
    error: boolean;
}

const MyPassInput: React.FC<Props> = ({placeholder, helperText, value, showHandler, show, onChange, error}) => {

    const { mainColors } = useTheme()

    const errorStyle = {
        root: {
            marginTop: '10px',
            fontSize: '14px', 
            color: mainColors.error.main,
        },
    }

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    
    return (
        <FormControl>
            <OutlinedInput
                autoComplete='off'
                error={error} 
                sx={classes.root}
                placeholder={placeholder}
                type={show ? 'text' : 'password'}
                value={value}
                onChange={e => onChange(e.target.value)}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            onClick={() => showHandler()}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                        >
                            {show ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                }
            />
            <label style={errorStyle.root}>
                {helperText}
            </label>
        </FormControl>
    );
}

export default MyPassInput;