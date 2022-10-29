import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import style from './style'

type Props = {
    content: any;
    color: any;
    onClick: any;
}

const MyButton: React.FC<Props> = ({content, color, onClick}) => {
    return (
        <Button variant="contained" sx={style.root} color={color} onClick={onClick}>
            <Typography variant='h3'>
                {content}
            </Typography>
        </Button>
        
    );
}

export default MyButton;