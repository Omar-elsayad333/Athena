import InputError from './Shared/InputError'
import { useTheme } from 'context/ThemeContext'

// MUI
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import { SxProps, Typography } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

type Props = {
    data: any[]
    value: string
    getSelected: Function
    placeholder: string
    error: boolean
    disabled?: boolean
    helperText?: string
}

const MySelect: React.FC<Props> = ({
    value,
    getSelected,
    placeholder,
    data,
    error,
    disabled = false,
    helperText,
}) => {
    const { mainColors, darkMode } = useTheme()
    const style = {
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
                fill: '#81acd1',
                top: '15%',
                left: '10px',
                right: 'auto',
            },
            '&.Mui-error': {
                transition: '.2s ease-out',
                border: darkMode ? 'none' : `solid 1px ${mainColors.error.main} !important`,
            },
            '&.Mui-focused': {
                '&.Mui-error': {
                    border: darkMode ? 'none' : '1px solid transparent !important',
                },
            },
            '@media(max-width: 300px)': {
                width: '200px',
            },
            '@media(max-width: 250px)': {
                width: '150px',
            },
        },
    }
    const menuStyle: SxProps = {
        '.MuiPaper-root': {
            // borderRadius: '10px',
            '::-webkit-scrollbar': {
                width: '10px',
                backgroundColor: 'transparent',
            },
            '::-webkit-scrollbar-track': {
                boxShadow: 'none',
            },
            '::-webkit-scrollbar-thumb': {
                border: '2px solid transparent',
            },
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
            },
        },
    }

    const handleChange = (e: any) => {
        if (data) {
            let selected = ''
            for (let i = 0; i < data.length; i++) {
                if (data[i].name == e.target.value) {
                    selected = data[i].id
                }
            }
            getSelected({
                id: selected,
                name: e.target.value,
            })
        }
    }

    return (
        <FormControl required>
            <Select
                displayEmpty
                disabled={disabled}
                IconComponent={KeyboardArrowDownIcon}
                sx={style.root}
                value={value}
                error={error}
                onChange={handleChange}
                renderValue={(selected) => {
                    if (selected?.length == 0) {
                        return (
                            <Typography
                                fontSize={14}
                                fontWeight={400}
                                color={
                                    darkMode ? 'rgb(182 213 240 / 65%)' : 'rgba(63, 114, 164, .65)'
                                }
                            >
                                {placeholder}
                            </Typography>
                        )
                    }
                    return selected
                }}
                MenuProps={{
                    sx: menuStyle,
                }}
            >
                {data?.length > 0 &&
                    data.map((item: any) => (
                        <MenuItem key={item.id} value={item.name}>
                            {item.name}
                        </MenuItem>
                    ))}
            </Select>
            {helperText && <InputError content={helperText} type="error" />}
        </FormControl>
    )
}

export default MySelect
