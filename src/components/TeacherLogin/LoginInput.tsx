import { lightColors } from '../../styles/colors'

// MUI
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import InputError from 'components/Shared/InputError'

type Props = {
    value?: any
    error?: any
    onChange?: any
    helperText?: any
    placeholder?: any
}

const LoginInput: React.FC<Props> = ({ value, onChange, error, helperText }) => {
    const classes = {
        root: {
            width: '100%',
            '.MuiOutlinedInput-root': {
                height: '80px',
                borderRadius: '12px',
                fontSize: '18px',
                fontWeight: '400',
                color: lightColors.primary.main,
                backgroundColor: 'rgba(232, 243, 255, 0.25)',
                border: '2.5px solid rgba(63, 114, 164, 0)',
                boxShadow: '0px 0px 10px 0px #1C364F40',
                transition: '.2s ease-out',
                '&.Mui-focused': {
                    boxShadow: 'none',
                    border: '2.5px solid rgba(63, 114, 164, 1)',
                    backgroundColor: 'rgba(232, 243, 255, 0.5)',
                },
                '.MuiOutlinedInput-notchedOutline': {
                    fontSize: '20px',
                    border: 'none',
                },
                '@media screen and (max-width: 500px)': {
                    fontSize: '13px',
                    height: '53px',
                },
            },
            '.Mui-error': {
                borderColor: '#9C1414 !important',
            },
        },
    }

    return (
        <FormControl fullWidth>
            <TextField
                autoComplete="off"
                value={value}
                error={error}
                sx={classes.root}
                onChange={(e) => onChange(e.target.value)}
            />
            <InputError content={helperText} type="error" />
        </FormControl>
    )
}

export default LoginInput
