import { useState } from 'react';
import { useContext } from "react";
import { DarkThemeContext } from "context/ThemeContext";

// MUI
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { SxProps, Typography } from '@mui/material';

type Props = {
    placeholder: string;
    data: any;
}

const MySelect: React.FC<Props> = ({placeholder, data}) => {

    const {darkMode} = useContext(DarkThemeContext);
    const [item, setItem] = useState<string>('');

    const handleChange = (event: SelectChangeEvent<typeof item>) => {
        const {
            target: { value },
        } = event;
        setItem(value);
    };

    const classes = {
        root: {
            width: '255px',
            height: '46px',
            color: darkMode ? '#B6D5F0' : 'rgba(63, 114, 164, 1)',
            backgroundColor: darkMode ? '#1C364F' : '#E8F3FF',
            borderRadius: '7px',
            fontSize: '14px',
            fontWeight: '400',
            '.MuiSelect-select': {
                paddingRight: '14px !important',
            },
            '.MuiOutlinedInput-notchedOutline': {
                transition: '.2s ease-out',
                border: darkMode ? '1px solid #3F72A4' : 'none',
                boxShadow: darkMode ? 'none' : '0px 0px 10px 1px #B6D5F0',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                border: darkMode ? '1px solid #B6D5F0' : 'none',
                boxShadow: darkMode ? '0px 0px 7px -1px #3F72A4' : '0px 0px 0px 1px #3F72A4',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: 'unset',
            },
            '.MuiSvgIcon-root ': {
                width: '33px ',
                height: '33px',
                fill: "#81acd1",
                top: '15%',
                left: '10px',
                right: 'auto',
            },
        },
    };

    const menuStyle: SxProps = {
        '.MuiPaper-root': {
            borderRadius: '10px',
            backgroundColor: darkMode ? '#1C364F' : '#E8F3FF',
            boxShadow: darkMode ? '0px 0px 7px -1px #3F72A4' : '0px 0px 0px 1px #3F72A4',
            border: darkMode ? '1px solid #B6D5F0' : 'none',
            // first number is item height, second number is item top padding
            maxHeight: 48 * 4.5 + 8,
        },
        '.MuiMenuItem-root': {
            color: darkMode ? '#B6D5F0' : 'rgba(63, 114, 164, 1)',
            ':hover': {
                backgroundColor: darkMode ? '#162A3E' : '#B6D5F0',
                color: darkMode ? '#B6D5F0' : 'rgba(63, 114, 164, 1)',
            }
        },
    }

    return (
        <FormControl required>
            <Select
                fullWidth
                displayEmpty
                IconComponent={KeyboardArrowDownIcon}
                sx={classes.root}
                value={item}
                onChange={handleChange}
                renderValue={(selected) => {
                    if (selected.length === 0) {
                        return (
                            <Typography fontSize={14} fontWeight={400} color={ darkMode ? 'rgb(182 213 240 / 65%)': 'rgba(63, 114, 164, .65)'}>
                                {placeholder}
                            </Typography>);
                    }
                    return selected;
                }}
                MenuProps={{
                    sx: menuStyle
                }}
            >
                {data.map((item: any) => (
                    <MenuItem
                        key={item}
                        value={item}
                    >
                        {item}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}

export default MySelect;