import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import style from './style'

type Props = {
    content: any;
}

const MyButton: React.FC<Props> = ({content}) => {
    return (
        <Button variant="contained" sx={style.root}>
            <Typography variant='h3'>
                {content}
            </Typography>
        </Button>
        
    );
}

export default MyButton;