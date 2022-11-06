import { Box,Button,Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import colors from '../../styles/colors';

type Props = {
    content: any;
    onClick: any;
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
        <Box>
            <MyButton variant="contained" color='secondary' onClick={onClick}>
                {content}
            </MyButton>
        </Box>
    );
}

export default LogButS;