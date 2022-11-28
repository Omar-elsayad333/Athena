
// MUI
import Button from "@mui/material/Button";

type Props = {
    content: string;
}

const MyButton: React.FC<Props> = ({content}) => {

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
        <Button sx={style.root} variant='contained' color='secondary'>
            {content}
        </Button>
    );
}

export default MyButton;