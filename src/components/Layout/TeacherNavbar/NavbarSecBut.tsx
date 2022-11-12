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
});

const NavbarSecBut: React.FC<Props> = ({content, onClick}) => {
    return (
        <MyButton variant="contained" onClick={onClick}>
            {content}
        </MyButton>
    );
}
 
export default NavbarSecBut;