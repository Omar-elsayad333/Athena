import { useState } from 'react';

// MUI
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { SxProps, Typography } from '@mui/material';

const classes = {
    root: {
        width: '255px',
        height: '46px',
        color: 'rgba(63, 114, 164, 1)',
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
            width: '33px ',
            height: '33px',
            fill: "#3F72A4",
            top: '15%',
            left: '10px',
            right: 'auto',
        },
        '@media(max-width: 300px)': {
            width: '200px',
        },
        '@media(max-width: 250px)': {
            width: '150px',
        },
    },
};

const menuStyle: SxProps = {
    '.MuiPaper-root': {
        borderRadius: '10px',
        backgroundColor: '#E8F3FF',
        boxShadow: '0px 0px 10px 1px #B6D5F0',
        // first number is item height, second number is item top padding
        maxHeight: 48 * 4.5 + 8,
    },
    '.MuiMenuItem-root': {
        color: '#3F72A4',
        ':hover': {
            backgroundColor: '#B6D5F0',
            color: '#1C364F',
        }
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
                    if (selected.length === 0) {
                        return (
                            <Typography fontSize={14} fontWeight={400} color={'rgba(63, 114, 164, .65)'}>
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