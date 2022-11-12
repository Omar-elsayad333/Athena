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
    backgroundColor: colors.primary.dark,
    '&:hover': {
        backgroundColor: colors.primary.main,
    },
});

const NavbarBut: React.FC<Props> = ({content, onClick}) => {
    return (
        <MyButton variant="contained" onClick={onClick}>
            {content}
        </MyButton>
    );
}
 
export default NavbarBut;