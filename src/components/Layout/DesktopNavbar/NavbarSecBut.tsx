// MUI
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { useContext } from 'react';
import { DarkThemeContext } from 'context/ThemeContext';

type Props = {
    content?: any;
    onClick?: any;
}

const NavbarSecBut: React.FC<Props> = ({content, onClick}) => {

    const {darkMode} = useContext(DarkThemeContext);

    const MyButton = styled(Button)({
        width: '202px',
        height: '46px',
        fontSize: '20px',
        fontWeight: '700',
        borderRadius: '7px',
        boxShadow: 'none',
        border: darkMode ? '1.5px solid #E0EEFF' : '1.5px solid #3F72A4',
        '&:hover': {
            color: darkMode ? '#1C364F' : '#E8F3FF',
        },
        '@media(max-width: 1200px)': {
            width: '170px',
            height: '40px',
            fontSize: '16px',
            padding: '9px 5px',
            borderRadius: '21px',
        },
        '@media(max-width: 400px)': {
            fontSize: '13px',
        },
    });

    return (
        <MyButton variant="contained" color='secondary' onClick={onClick}>
            {content}
        </MyButton>
    );
}
 
export default NavbarSecBut;