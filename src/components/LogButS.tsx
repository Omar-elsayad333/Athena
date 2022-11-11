// MUI
import { styled } from '@mui/material/styles';
import Button from "@mui/material/Button";

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
    '&:hover': {
        color: '#E8F3FF',
    },
});

const LogButS: React.FC<Props> = ({content, onClick}) => {
    return (
        <MyButton variant="contained" color='secondary' onClick={onClick}>
            {content}
        </MyButton>
    );
}

export default LogButS;