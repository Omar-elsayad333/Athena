import {useState} from 'react'

// MUI
import TextField from '@mui/material/TextField';
import DateFnsUtils from '@date-io/date-fns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

const classes = {
    root: {
        width: '255px',
        height: '46px',
        color: 'rgba(63, 114, 164, .65)',
        borderRadius: '7px',
        fontSize: '14px',
        fontWeight: '400',
        backgroundColor: '#E8F3FF',
        '.MuiOutlinedInput-input': {
            backgroundColor: '#E8F3FF',
        },
        '.MuiOutlinedInput-notchedOutline': {
            backgroundColor: '#E8F3FF',
            zIndex: '-1',
            transition: '.2s ease-out',
            border: '1px solid #E8F3FF !important',
            boxShadow: '0px 0px 10px 1px #B6D5F0',
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            boxShadow: '0px 0px 0px 1px #3F72A4',
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
            
        },
        '.MuiSvgIcon-root ': {
            width: '25px ',
            height: '25px',
            fill: "#3F72A4",
        },
        '@media(max-width: 300px)': {
            width: '200px',
        },
        '@media(max-width: 250px)': {
            width: '150px',
        },
    },
};

const MyDatePicker: React.FC = () => {

    const [ dateValue, setDateValue] = useState<any>(new Date());

    return (
        <LocalizationProvider error dateAdapter={DateFnsUtils}>
            <DesktopDatePicker
                value={dateValue}
                onChange={(newValue: any) => {
                    setDateValue(newValue);
                }}
                renderInput={(params: any) => (
                    <TextField  
                        {...params} 
                        sx={classes.root}                    
                    />
                )}
            />
        </LocalizationProvider>
    );
}
 
export default MyDatePicker;