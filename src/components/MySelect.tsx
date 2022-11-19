import { useState } from 'react';

// MUI
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const classes = {
    root: {
        width: '255px',
        height: '46px',
        color: 'rgba(63, 114, 164, .65)',
        backgroundColor: '#E8F3FF',
        borderRadius: '7px',
        fontSize: '14px',
        fontWeight: '400',
        '.MuiSelect-select': {
            paddingRight: '14px !important',
        },
        '.MuiOutlinedInput-notchedOutline': {
            transition: '.2s ease-out',
            borderColor: '#E8F3FF',
            boxShadow: '0px 0px 10px 1px #B6D5F0',
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#E8F3FF',
            boxShadow: '0px 0px 0px 1px #3F72A4',
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#E8F3FF',
        },
        '.MuiSvgIcon-root ': {
            fill: "#3F72A4",
            position: 'absolute',
            left: '15px',
            right: 'auto'
        },
        '@media(max-width: 500px)': {
            width: '214px',
        },
        '@media(max-width: 250px)': {
            width: '170px',
        },
    },
};

const MenuProps = {
    PaperProps: {
        style: {
            boxShadow: '0px 0px 10px 1px #B6D5F0',
            color: '#3F72A4',
            backgroundColor: '#E8F3FF',
            // first number is item height, second number is item top padding
            maxHeight: 48 * 4.5 + 8,
        },
    },
}

type Props = {
    placeholder: string;
    data: any;
}

const MySelect: React.FC<Props> = ({placeholder, data}) => {

    const [item, setItem] = useState<string>('');

    const handleChange = (event: SelectChangeEvent<typeof item>) => {
        const {
            target: { value },
        } = event;
        setItem(value);
    };

    return (
        <FormControl required>
            <Select
                displayEmpty
                IconComponent={KeyboardArrowDownIcon}
                sx={classes.root}
                value={item}
                onChange={handleChange}
                renderValue={(selected) => {
                    if (selected.length === 0) return placeholder;
                    return selected;
                }}
                MenuProps={MenuProps}
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
            <FormHelperText>Required</FormHelperText> 
        </FormControl>
    );
}

export default MySelect;