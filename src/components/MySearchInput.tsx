import Image from "next/image";
import { ChangeEventHandler, useContext } from "react";
import { DarkThemeContext } from "context/ThemeContext";

// MUI
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';

type Props = {
    value?: string;
    onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    error?: boolean;
    helperText?: string;
    placeholder?: string;
}

const MySearchInput: React.FC<Props> = ({value, onChange, error, placeholder}) => {

    const {mainColors} = useContext(DarkThemeContext);

    const classes = {
        root: {
            width: '767px',
            height: '59px',
            paddingRight: '10px',
            fontSize: '20px',
            fontWeight: '400',
            color: mainColors.input.main,
            borderRadius: '7px',
            borderColor: '#E8F3FF',
            backgroundColor: mainColors.input.background,
            transition: '.3s',
            '&::placeholder': {
                color: mainColors.input.main,
                opacity: .65,
            },
            '.MuiOutlinedInput-notchedOutline': {
                transition: '.2s ease-out',
                boxShadow: '0px 0px 10px 0px rgba(28, 54, 79, 0.25)',
                border: '1px solid #3F72A4',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                boxShadow: 'none',
                border: '1px solid #3F72A4',
            },
            ':hover .MuiOutlinedInput-notchedOutline': {
                border: '1px solid #3F72A4',
            },
            '@media(max-width: 300px)': {
                width: '200px',
            },
            '@media(max-width: 250px)': {
                width: '150px',
            },
        }
    };

    return (
        <OutlinedInput
            sx={classes.root}
            value={value}
            error={error}
            onChange={onChange}
            placeholder={placeholder}
            startAdornment={
                <InputAdornment position="start">
                    <Image src='/images/search-icon.svg' className="svg" alt="search" width={30} height={30} />
                </InputAdornment>
            }            
        />
    );
}
 
export default MySearchInput;