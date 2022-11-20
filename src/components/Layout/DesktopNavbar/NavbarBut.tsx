// MUI
import { styled } from '@mui/material/styles';
import Button from "@mui/material/Button";
import colors from 'styles/colors';

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
    backgroundColor: colors.primary.dark,
    '&:hover': {
        backgroundColor: colors.primary.main,
    },
    '@media(max-width: 1200px)': {
        width: '170px',
        height: '40px',
        padding: '9px 5px',
        borderRadius: '21px',
    },
    // '@media(max-width: 500px)': {
    //     width: '160px',
    //     fontSize: '16px',
    // }
});

const NavbarBut: React.FC<Props> = ({content, onClick}) => {
    return (
        <MyButton variant="contained" onClick={onClick}>
            {content}
        </MyButton>
    );
}
 
export default NavbarBut;