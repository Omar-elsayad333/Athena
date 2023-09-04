import { useContext } from 'react'
import InputError from './Shared/InputError'
import { DarkThemeContext } from 'context/ThemeContext'

// MUI
import { SxProps } from '@mui/material'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import { TimePicker } from '@mui/x-date-pickers/TimePicker'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'

type Props = {
    value: any
    day?: string
    name?: string
    readOnly?: boolean
    getSelectedTime: Function
    placeholder?: string
    error: boolean
    helperText: string
}

const MyBigTimePicker: React.FC<Props> = ({
    getSelectedTime,
    name,
    day,
    value,
    readOnly = false,
    placeholder,
    error,
    helperText,
}) => {
    const { mainColors, darkMode } = useContext(DarkThemeContext)
    const classes = {
        root: {
            '.MuiOutlinedInput-root': {
                width: '255px',
                height: '46px',
                padding: '10px',
                direction: 'rtl',
                borderRadius: '7px',
                color: darkMode ? '#E0EEFF' : 'rgba(63, 114, 164, 1)',
                border: darkMode ? '1px solid #3F72A4' : 'none',
                backgroundColor: darkMode ? '#1C364F' : '#E8F3FF',
                boxShadow: darkMode ? 'none' : '0px 0px 10px 1px #B6D5F0',
                transition: '.2s ease-out',
                '&.Mui-focused': {
                    border: darkMode ? '1px solid #B6D5F0' : 'none',
                    boxShadow: darkMode ? '0px 0px 7px -1px #3F72A4' : '0px 0px 0px 1px #3F72A4',
                },
                '.MuiOutlinedInput-input': {
                    textTransform: 'uppercase',
                    fontSize: '14px',
                    fontWeight: '400',
                    '&::placeholder': {
                        fontSize: '14px',
                        fontWeight: '400',
                        color: darkMode ? '#B6D5F0' : '#3F72A4',
                        opacity: 0.65,
                    },
                },
                '@media(max-width: 300px)': {
                    width: '200px',
                },
                '@media(max-width: 250px)': {
                    width: '150px',
                },
            },
            '.MuiOutlinedInput-notchedOutline': {
                border: 'none',
            },
            '.Mui-error': {
                borderColor: `${mainColors.error.main} !important`,
            },
            '.MuiSvgIcon-root': {
                fill: '#81acd1',
            },
            '.MuiIconButton-root': {
                width: '20px ',
                height: '20px',
            },
        },
    }

    const popperStyle: SxProps = {
        '.MuiPaper-root': {
            borderRadius: '20px',
            backgroundColor: darkMode ? '#1C364F' : '#E8F3FF',
            boxShadow: darkMode ? '0px 0px 7px -1px #3F72A4' : '0px 0px 10px 1px #B6D5F0',
        },
        '.MuiClock-squareMask': {
            borderRadius: '50%',
            backgroundColor: darkMode ? '#162A3E' : '#B6D5F0',
        },
        '.MuiClockNumber-root': {
            color: darkMode ? '#B6D5F0' : '#3F72A4',
        },
        '.Mui-selected': {
            color: darkMode ? '#3F72A4' : '#B6D5F0',
        },
        '.MuiTypography-root': {
            color: darkMode ? '#3F72A4' : '#B6D5F0',
        },
        '.MuiPickersArrowSwitcher-spacer': {
            width: '5px',
        },
        '.MuiSvgIcon-root': {
            color: darkMode ? '#B6D5F0' : '#3F72A4',
        },
        '.MuiClock-amButton:hover': {
            backgroundColor: darkMode ? '#E8F3FF' : '#3F72A4',
        },
        '.MuiClock-pmButton:hover': {
            backgroundColor: darkMode ? '#E8F3FF' : '#3F72A4',
        },
    }

    return (
        <FormControl>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <TimePicker
                    readOnly={readOnly}
                    value={value}
                    onChange={(newValue) => getSelectedTime(newValue, day, name)}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            autoComplete="off"
                            error={error}
                            sx={classes.root}
                            inputProps={{
                                ...params.inputProps,
                                placeholder: placeholder,
                            }}
                        />
                    )}
                    PopperProps={{
                        sx: popperStyle,
                    }}
                    DialogProps={{
                        sx: popperStyle,
                    }}
                    components={{
                        OpenPickerIcon: AccessAlarmIcon,
                    }}
                />
            </LocalizationProvider>
            {helperText && <InputError content={helperText} type="error" />}
        </FormControl>
    )
}

export default MyBigTimePicker
