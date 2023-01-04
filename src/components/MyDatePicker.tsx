// MUI
import TextField from '@mui/material/TextField';
import DateFnsUtils from '@date-io/date-fns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { SxProps } from '@mui/material';

const classes: SxProps = {
    root: {
        width: '255px',
        fontSize: '14px',
        fontWeight: '400',
        backgroundColor: '#E8F3FF',
        borderRadius: '7px',
        '.MuiOutlinedInput-root': {
            color: 'rgba(63, 114, 164, 1)',
            borderRadius: '7px',
            height: '46px',
            boxShadow: '0px 0px 10px 1px #B6D5F0',
            backgroundColor: '#E8F3FF',
            transition: '.2s ease-out',
            border: '1px solid #E8F3FF !important',
            '&.Mui-focused': {
                boxShadow: '0px 0px 0px 1px #3F72A4',
            },
            '.MuiOutlinedInput-input': {
                '&::placeholder': {
                    fontSize: '14px',
                    fontWeight: '400',
                    color: 'rgb(63, 114, 164)',
                    opacity: .65,
                }
            },
        },
        '.MuiOutlinedInput-notchedOutline': {
            border: '1px solid #E8F3FF !important',
        },
        '.Mui-error': {
            borderColor: '#9C1414 !important',
        },
        '.MuiSvgIcon-root ': {
            width: '25px ',
            height: '25px',
            fill: "#81acd1",
        },
        '@media(max-width: 300px)': {
            width: '200px',
        },
        '@media(max-width: 250px)': {
            width: '150px',
        },
    },
};

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
        borderRadius: '20px'
    },
    '& .MuiPickersDay-dayWithMargin': {
        color: 'rgba(63, 114, 164, .65)',
    },
    '& .Mui-selected': {
        color: '#E8F3FF',
        backgroundColor: '#3F72A4',
        ':hover': {
            backgroundColor: '#3F72A4',
        }
    }
};

type Props = {
    placeholder: string;
    dateValue: string;
    handleDateValue: Function;
}

const MyDatePicker: React.FC<Props> = ({placeholder, dateValue, handleDateValue}) => {

    return (
        <LocalizationProvider dateAdapter={DateFnsUtils}>
            <DatePicker
                value={dateValue}
                onChange={(newValue: any) => {
                    handleDateValue(newValue);
                }}
                renderInput={(params: any) => (
                    <TextField  
                        {...params}
                        error={false}
                        sx={classes.root} 
                        inputProps={{
                            ...params.inputProps,
                            placeholder: placeholder
                        }}      
                    />
                )}
                PopperProps={{
                    sx: popperStyle
                }}
                DialogProps={{
                    sx: popperStyle
                }}
            />
        </LocalizationProvider>
    );
}

export default MyDatePicker;