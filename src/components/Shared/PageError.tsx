import { useTheme } from "context/ThemeContext";

// MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

type Props = {
    errors: any;
}

const PageError: React.FC<Props> = ({ errors }) => {

    const { mainColors } = useTheme()
    const style = {
        container: {
            width: '100%',
            flex: '100%'
        },
        error: {
            color: mainColors.error.main, 
            fontSize: '14px',
            fontWeight: 700
        }
    }
    
    return (
        <Box sx={style.container}>
            {
                errors.map((error: any, index: number) => (
                    <Typography 
                        key={index} variant='h4' 
                        color={'error'} 
                    >
                        {error.value}
                    </Typography>
                ))
            }
        </Box>
    );
}
 
export default PageError;