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
    color: '#3F72A4',
    backgroundColor: '#E8F3FF',
    border: '1.5px solid #3F72A4',
    '&:hover': {
        color: colors.primary.contrastText,
        backgroundColor: colors.primary.dark,
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

const NavbarSecBut: React.FC<Props> = ({content, onClick}) => {
    return (
        <MyButton variant="contained" onClick={onClick}>
            {content}
        </MyButton>
    );
}
 
export default NavbarSecBut;