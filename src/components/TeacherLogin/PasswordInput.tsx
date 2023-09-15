import { lightColors } from '../../styles/colors'

// MUI
import IconButton from '@mui/material/IconButton'
import FormControl from '@mui/material/FormControl'
import InputError from 'components/Shared/InputError'
import Visibility from '@mui/icons-material/Visibility'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

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
            color: lightColors.primary.main,
        },
        '&.Mui-error': {
            borderColor: '#9C1414 !important',
        },
        '@media screen and (max-width: 500px)': {
            fontSize: '13px',
            height: '53px',
        },
    },
}

type Props = {
    value: any
    show: boolean
    error: boolean
    helperText: string
    onChange: Function
    showHandler: Function
}

const PasswordInput: React.FC<Props> = ({
    value,
    onChange,
    show,
    error,
    helperText,
    showHandler,
}) => {
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
    }

    return (
        <FormControl fullWidth>
            <OutlinedInput
                autoComplete="off"
                error={error}
                sx={classes.root}
                value={value.password}
                onChange={(e) => onChange(e.target.value)}
                type={show ? 'text' : 'password'}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            edge="end"
                            onClick={() => showHandler()}
                            onMouseDown={handleMouseDownPassword}
                        >
                            {value.showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                }
            />
            <InputError content={helperText} type="error" />
        </FormControl>
    )
}

export default PasswordInput
