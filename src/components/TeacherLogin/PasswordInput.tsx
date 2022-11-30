import { useState } from 'react';
import {lightColors} from '../../styles/colors';

// MUI
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';

const classes = {
    root: {
        width: '100%',
        height: '80px',
        fontSize: '18px',
        fontWeight: '400',
        color: lightColors.primary.main,
        backgroundColor: 'rgba(232, 243, 255, 0.25)',
        border: '2.5px solid rgba(63, 114, 164, 0)',
        borderRadius: '12px',
        boxShadow: '0px 0px 10px 0px #1C364F40',
        transition: '.2s ease-out',
        '&.Mui-focused': {
            boxShadow: 'none',
            border: '2.5px solid rgba(63, 114, 164, 1)',
            backgroundColor: 'rgba(232, 243, 255, 0.5)',
        },
        '.MuiOutlinedInput-notchedOutline': {
            border: 'none',
        },
        '.MuiSvgIcon-root': {
            color: lightColors.primary.main
        },
        '&.Mui-error': {
            borderColor: '#9C1414 !important',
        },
        '@media(max-width: 500px)': {   
            fontSize: '13px',
            height: '53px',
        },
    }
};

const PasswordInput: React.FC = () => {

    const [values, setValues] = useState<any>({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });
    
    const handleChange = (prop: any) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    
    return (
        <OutlinedInput
            sx={classes.root}
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
                <InputAdornment position="end">
                    <IconButton
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                    >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                </InputAdornment>
            }
        />
    );
}

export default PasswordInput;