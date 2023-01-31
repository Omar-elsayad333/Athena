// MUI
import Button from "@mui/material/Button";
import { styled } from '@mui/material/styles';

type Props = {
    content?: any;
    onClick?: any;
}

const MyButton = styled(Button)({
    borderRadius: '6px',
    width: '255px',
    height: '46px',
    fontSize: '26px',
    fontWeight: '700',
    boxShadow: 'none',
    background: '#B6D5F0',
    color: '#1C364F',
    '&:hover': {
        color: '#E8F3FF',
        background: '#3F72A4',
    },
    '@media screen and (max-width: 300px)': {
        width: '170px',
        fontSize: '20px',
    }
});

const SButtonSubmit: React.FC<Props> = ({content, onClick}) => {
    return (
        <MyButton variant="contained" onClick={onClick}>
            {content}
        </MyButton>
    );
}

export default SButtonSubmit;