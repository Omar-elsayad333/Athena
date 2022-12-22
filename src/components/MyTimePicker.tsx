import {useEffect, useState} from 'react'

// MUI
import TextField from '@mui/material/TextField';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { SxProps } from '@mui/material';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';


const classes = {
    root: {
        width: '103px',
        backgroundColor: '#E8F3FF',
        borderRadius: '6px',
        '.MuiOutlinedInput-root': {
            color: 'rgba(63, 114, 164, 1)',
            borderRadius: '7px',
            height: '37px',
            boxShadow: '0px 0px 10px 1px #B6D5F0',
            backgroundColor: '#E8F3FF',
            transition: '.2s ease-out',
            border: '1px solid #E8F3FF !important',
            paddingRight: '6px',
            '&.Mui-focused': {
                boxShadow: '0px 0px 0px 1px #3F72A4',
                borderColor: '#E8F3FF',
            },
        },
        '.MuiOutlinedInput-input': {
            textTransform: 'uppercase',
            fontSize: '14px',
            fontWeight: '400',
        },
        '.MuiOutlinedInput-notchedOutline': {
            border: '1px solid #E8F3FF !important',
        },
        '.Mui-error': {
            borderColor: 'red !important',
        },
        '.MuiSvgIcon-root': {
            width: '18px ',
            height: '18px',
            fill: "#81acd1",
        },
        '.MuiIconButton-root': {
            width: '18px ',
            height: '18px',
        },
    },
};

const popperStyle: SxProps = {
    '.MuiPaper-root': {
        backgroundColor: '#E8F3FF',
        borderRadius: '20px',
        boxShadow: '0px 0px 10px 1px #B6D5F0',
    },
    '.MuiClock-squareMask': {
        backgroundColor: '#B6D5F0',
        borderRadius: '50%',
    },
    '.MuiClockNumber-root': {
        color: '#3F72A4',
    },
    '.Mui-selected': {
        color: '#E8F3FF',
    },
    '.MuiTypography-root': {
        color: '#3F72A4',
    },
    '.MuiPickersArrowSwitcher-spacer': {
        width: '5px',
    },
    '.MuiSvgIcon-root': {
        color: '#3F72A4',
    },
    '.MuiClock-amButton:hover': {
        color: '#E8F3FF',
        backgroundColor: '#3F72A4'
    },
    '.MuiClock-pmButton:hover': {
        color: '#E8F3FF',
        backgroundColor: '#3F72A4'
    },
};

type Props = {
    getSelectedTime: Function;
    name: string;
    day: string;
    value?: any;
}

const MyTimePicker: React.FC<Props> = ({getSelectedTime, name, day, value}) => {

    const [ timeValue, setTimeValue] = useState<any>(value || new Date());

    useEffect(() => {
        getSelectedTime({
            time: timeValue.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
            name: name,
            day: day
        });
    }, [timeValue]);

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <TimePicker
                value={timeValue}
                onChange={(newValue) => {
                    setTimeValue(newValue);
                }}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        error={false}
                        sx={classes.root} 
                        inputProps={{...params.inputProps,}}      
                    />                
                )}
                PopperProps={{
                    sx: popperStyle
                }}
                DialogProps={{
                    sx: popperStyle
                }}
                components={{
                    OpenPickerIcon: AccessAlarmIcon
                }}            
            />
        </LocalizationProvider>
    );
}

export default MyTimePicker;