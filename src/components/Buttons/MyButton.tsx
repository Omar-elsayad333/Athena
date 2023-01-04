
// MUI
import Button from "@mui/material/Button";

type Props = {
    content: string;
    onClick?: any;
}

const MyButton: React.FC<Props> = ({content, onClick}) => {

    const style = {
        root: {
            width: 'inherit',
            height: 'inherit',
            fontSize: '20px',
            fontWeight: '700',
            borderRadius: '5px',
        }
    }

    return (
        <Button onClick={onClick} sx={style.root} variant='contained' color='primary'>
            {content}
        </Button>
    );  
}

export default MyButton;