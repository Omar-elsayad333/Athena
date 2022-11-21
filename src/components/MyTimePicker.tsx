import {useState} from 'react'

// MUI
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { SxProps } from '@mui/material';
import { DesktopTimePicker } from '@mui/x-date-pickers/DesktopTimePicker';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';


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
            fill: "#3F72A4",
        },
        '.MuiIconButton-root': {
            width: '17px ',
            height: '17px',
            fill: "#3F72A4",
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
        backgroundColor: '#3F72A4',
    },
    '.MuiClockNumber-root': {
        color: '#E8F3FF',
    },
    '.MuiPickersArrowSwitcher-root': {
        color: '#E8F3FF',
    },
    '.MuiClock-amButton:hover': {
        color: '#E8F3FF',
        backgroundColor: '#1C364F'
    },
    '.MuiClock-pmButton:hover': {
        color: '#E8F3FF',
        backgroundColor: '#1C364F'
    },
};

const MyTimePicker: React.FC = () => {

    const [ timeValue, setTimeValue] = useState<any>(new Date());

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopTimePicker
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
                components={{
                    OpenPickerIcon: AccessAlarmIcon
                }}            
            />
        </LocalizationProvider>
    );
}

export default MyTimePicker;