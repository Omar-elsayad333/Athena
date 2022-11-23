// import colors from '../styles/colors';

// MUI
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';

type Props = {
    age?: any;
    handleChange?: any;
}

const MyMenuItem = styled(MenuItem)({
    // "& .MuiListItem-root": {
    //     borderTop: "1px solid rgb(3,15,252)",
    //     borderRadius: 20
    // },
    // "& .MuiListItem-root.Mui-selected, .MuiListItem-root.Mui-selected:hover": {
    //     backgroundColor: colors.secondary.main,
    // },
    // backgroundColor: colors.primary.main,
    // color: colors.primary.contrastText,
    // "& .MuiCheckbox-root": {
    //     color: "green"
    // },
    // "& .MuiCheckbox-colorSecondary": {
    //     "&.Mui-checked": {
    //         color: "orange"
    //     }
    // }
});

const MySelect = styled(Select)({
    width: '255px',
    height: '46px',
    borderRadius: '7px',
    backgroundColor: '#E8F3FF',
    // color: colors.primary.main,
    boxShadow: '0px 0px 10px 1px #B6D5F0',
    transition: '.2s',
    '& .MuiSelect-select': {
        backgroundColor: 'transparent',
        // color: colors.primary.main,
        fontSize: '14px',
        padding: '14px 16px',
        border: 'none',
    },
    '& .MuiOutlinedInput-notchedOutline': {
        width: '255px',
        height: '46px',
        border: 'none',
    },
    '&.Mui-focused': {
        boxShadow: '0px 0px 0px 1px #3F72A4',
    },
    "& .MuiSvgIcon-root": {
        // color: colors.primary.main,
    },
});

const MyDropDown: React.FC<Props> = ({age, handleChange}) => {
    return (
        <MySelect
            // displayEmpty
            variant="outlined"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            renderValue={age !== "" ? undefined : () => "placeholder text"}            
            onChange={handleChange}
        >
            <MyMenuItem value={10}>Ten</MyMenuItem>
            <MyMenuItem value={20}>Twenty</MyMenuItem>
            <MyMenuItem value={30}>Thirty</MyMenuItem>
        </MySelect>
    );
}

export default MyDropDown;