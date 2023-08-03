import InputError from './Shared/InputError'
import { useTheme } from 'context/ThemeContext'

// MUI
import DateFnsUtils from '@date-io/date-fns'
import TextField from '@mui/material/TextField'
import { FormControl, SxProps } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'

type Props = {
    name?: string
    error?: boolean
    helperText: string
    placeholder: string
    dateValue?: Date | string
    extraData?: any
    handleDateValue: Function
}

const MyDatePicker: React.FC<Props> = ({
    placeholder,
    dateValue,
    handleDateValue,
    helperText,
    error,
    name,
    extraData,
}) => {
    const { darkMode } = useTheme()
    const classes: SxProps = {
        root: {
            width: '255px',
            fontSize: '14px',
            fontWeight: '400',
            backgroundColor: darkMode ? '#1C364F' : '#E8F3FF',
            borderRadius: '7px',
            '.MuiOutlinedInput-root': {
                color: darkMode ? '#B6D5F0' : 'rgba(63, 114, 164, 1)',
                borderRadius: '7px',
                height: '46px',
                boxShadow: darkMode ? 'none' : '0px 0px 10px 1px #B6D5F0',
                backgroundColor: darkMode ? '#1C364F' : '#E8F3FF',
                transition: '.2s ease-out',
                border: 'none',
                '.MuiOutlinedInput-input': {
                    '&::placeholder': {
                        fontSize: '14px',
                        fontWeight: '400',
                        color: darkMode ? '#B6D5F0' : '#3F72A4',
                        opacity: 0.65,
                    },
                },
                '.MuiOutlinedInput-notchedOutline': {
                    transition: '.2s ease-out',
                    border: darkMode ? '1px solid #3F72A4' : 'none',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'unset',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    border: darkMode ? '1px solid #B6D5F0' : 'none',
                    boxShadow: darkMode ? '0px 0px 7px -1px #3F72A4' : '0px 0px 0px 1px #3F72A4',
                },
            },
            '.Mui-error': {
                borderColor: '#9C1414 !important',
            },
            '.MuiSvgIcon-root ': {
                width: '25px ',
                height: '25px',
                fill: '#81acd1',
            },
            '@media(max-width: 300px)': {
                width: '200px',
            },
            '@media(max-width: 250px)': {
                width: '150px',
            },
        },
    }

    const popperStyle: SxProps = {
        '& .MuiPaper-root': {
            color: '#E8F3FF',
            backgroundColor: '#3F72A4',
            borderRadius: '20px',
            boxShadow: '0px 0px 10px 1px #B6D5F0',
        },
        '.MuiSvgIcon-root': {
            color: '#E8F3FF',
        },
        '& .MuiDayPicker-weekDayLabel': {
            color: '#E8F3FF',
        },
        '.MuiDayPicker-monthContainer': {
            top: '15px',
        },
        '& .PrivatePickersSlideTransition-root': {
            backgroundColor: '#E8F3FF',
            borderRadius: '20px',
        },
        '& .MuiPickersDay-dayWithMargin': {
            color: 'rgba(63, 114, 164, .65)',
        },
        '& .Mui-selected': {
            color: '#E8F3FF',
            backgroundColor: '#3F72A4',
            ':hover': {
                backgroundColor: '#3F72A4',
            },
        },
    }

    return (
        <FormControl>
            <LocalizationProvider dateAdapter={DateFnsUtils}>
                <DatePicker
                    value={dateValue}
                    onChange={(newValue: any) => {
                        handleDateValue(newValue, name, extraData)
                    }}
                    renderInput={(params: any) => (
                        <TextField
                            name={name}
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
                />
            </LocalizationProvider>
            {helperText && <InputError content={helperText} type="error" />}
        </FormControl>
    )
}

export default MyDatePicker
