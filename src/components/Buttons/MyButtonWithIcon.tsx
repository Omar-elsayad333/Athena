import { IStyle } from "styles/IStyle";
import { useTheme } from "context/ThemeContext";

// MUI
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

type Props = {
    content: string;
    onClick?: any;
    loading?: boolean;
    icon: any;
}

const MyButtonWithIcon: React.FC<Props> = ({content, onClick, loading, icon}) => {

    const { mainColors } = useTheme()
    const style: IStyle = {
        root: {
            padding: '9px 16px',
            fontSize: '20px',
            fontWeight: '700',
            borderRadius: '5px',
            boxShadow: 'none',
            gap: '10px',
            border: `1px solid ${mainColors.primary.main}`,
            background: mainColors.backgroundColor.main,
            ':hover': {
                background: mainColors.backgroundColor.main,
                boxShadow: 'none'
            },
            '.MuiButton-startIcon': {
                margin: '0'
            }
        }
    }

    return (
        <Button 
            onClick={onClick}
            sx={style.root} 
            variant='contained' 
            color='primary' 
            disabled={loading}
            startIcon={icon}
        >
            <Typography variant="h4" fontWeight={700} color={'primary'}>
                {content}
            </Typography>
        </Button>
    );  
}

export default MyButtonWithIcon;