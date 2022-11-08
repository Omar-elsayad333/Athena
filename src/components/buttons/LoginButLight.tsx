import colors from '../../styles/colors';

// MUI
import { styled } from '@mui/material/styles';
import Button from "@mui/material/Button";

type Props = {
    content: any;
    onClick?: any;
    type?: any;
}

const MyButton = styled(Button)({
    borderRadius: '6px',
    width: '100%',
    height: '80px',
    fontSize: '34px',
    fontWeight: '700',
    boxShadow: 'none',
    backgroundColor: colors.primary.dark,
    '&:hover': {    
        backgroundColor: colors.primary.main,
    },
    '@media(max-width: 500px)': {
        fontSize: '27px'
    },
    '@media(max-width: 400px)': {
        fontSize: '25px'
    },
    '@media(max-width: 350px)': {
        fontSize: '20px'
    },
});

const LoginButLight: React.FC<Props> = ({content, onClick, type}) => {
    return (
        <MyButton variant="contained" type={type} onClick={onClick}>
            {content}
        </MyButton>  
    );
}

export default LoginButLight;