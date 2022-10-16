import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import style from './style'

type Props = {
    content: any;
}

const MyButton: React.FC<Props> = ({content}) => {
    return (
        <Button variant="contained" style={style.root}>
            <Typography variant='h2'>
                {content}
            </Typography>
        </Button>
        
    );
}

export default MyButton;