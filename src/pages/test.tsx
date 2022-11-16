// import MyInput from "../components/MyInput";
// import LogButS from '../components/LogButS';
// import LogButL from '../components/LoginButDark';
// import MyDropDown from '../components/MyDropDown';
import {useState} from 'react';

// MUI
// import { Typography, Button, Box} from "@mui/material";
import Box from "@mui/material/Box";
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
// import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';


const classes = {
    root: {
        width:'100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
    },
    dropMenu: {
        height: '46px',
        width: '255px',
        padding: '0 12px',
        fontSize: '14px',
        borderRadius: '7px',
        border: 'none',
        boxShadow: '0px 0px 10px 1px #B6D5F0',
        backgroundColor: '#E8F3FF',
        color: '#3F72A4',
        opacity: '0.65',
        outline: 'none',
    },
    menuItems: {
        margin: '12px',
        color: '#3F72A4',
    }
}

const Test = () => {

    const [age, setAge] = useState('omar');


    
    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };

    return (
        <Box sx={classes.root}>
            {/* <select style={classes.dropMenu} name="" id="">
                <option style={classes.menuItems} value="رجل">رجل</option>
                <option value="مرأه">مرأه</option>
                <option value="اخري">اخري</option>  
            </select> */}

            <FormControl required sx={{ m: 1, minWidth: 120 }}>
                {/* <InputLabel>omar</InputLabel> */}
                <Select
                    labelId="demo-simple-select-required-label"
                    id="demo-simple-select-required"
                    value={age}
                    // label="Age *"
                    onChange={handleChange}
                    // placeholder='omar'
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <FormHelperText>Required</FormHelperText>
            </FormControl>
        </Box>
    );
}

export default Test;