import { useContext } from 'react';
import { DarkThemeContext } from 'context/ThemeContext';

// MUI
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

type Props = {
    content: string;
    children: any;
}

const PageTitle:React.FC<Props> = ({children, content}) => {

    const {darkMode, mainColors} = useContext(DarkThemeContext);

    const style = {
        container: {
            width: 'fit-content',
            padding: '16px 19px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px',
            borderRadius: '10px',
            border: darkMode ? '1px solid #B6D5F0' : 'none',
            background: mainColors.secondary.main,
            boxShadow: darkMode ? 'none' : '0px 5px 15px 0px #1C364F33',
        }
    }

    return (
        <Box sx={style.container}>
            <Typography color='primary' variant='h1'>
                {content}
            </Typography>
            { children }
        </Box>
    );
}
 
export default PageTitle;