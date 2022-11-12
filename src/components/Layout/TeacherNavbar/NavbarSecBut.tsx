// MUI
import { styled } from '@mui/material/styles';
import Button from "@mui/material/Button";
import colors from 'styles/colors';

type Props = {
    content?: any;
    onClick?: any;
}

const MyButton = styled(Button)({
    width: '261px',
    height: '59px',
    fontSize: '25px',
    fontWeight: '700',
    borderRadius: '7px',
    boxShadow: 'none',
    color: '#3F72A4',
    backgroundColor: '#E8F3FF',
    border: '2px solid #3F72A4',
    '&:hover': {
        color: colors.primary.contrastText,
        backgroundColor: colors.primary.dark,
    },
    '@media(max-width: 1400px)': {
        width: '200px',
        height: '50px',
        fontSize: '20px',
    },
    '@media(max-width: 1200px)': {
        padding: '9px 5px',
        borderRadius: '30px',
    }
});

const NavbarSecBut: React.FC<Props> = ({content, onClick}) => {
    return (
        <MyButton variant="contained" onClick={onClick}>
            {content}
        </MyButton>
    );
}
 
export default NavbarSecBut;