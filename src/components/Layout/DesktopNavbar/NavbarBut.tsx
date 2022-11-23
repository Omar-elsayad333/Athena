// MUI
import { styled } from '@mui/material/styles';
import Button from "@mui/material/Button";

type Props = {
    content?: any;
    onClick?: any;
}

const MyButton = styled(Button)({
    width: '202px',
    height: '46px',
    fontSize: '20px',
    fontWeight: '700',
    borderRadius: '7px',
    boxShadow: 'none',
    '@media(max-width: 1200px)': {
        width: '170px',
        height: '40px',
        padding: '9px 5px',
        borderRadius: '21px',
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