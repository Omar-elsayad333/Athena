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
            border: `1px solid ${darkMode ? mainColors.paper.border : 'unset'}`,
            background: mainColors.paper.main,
            boxShadow: darkMode ? 'none' : '0px 5px 15px 0px #B6D5F0',
        }
    }

    return (
        <Box sx={style.container}>
            <Typography color='primary' variant='h1'>
                { content }
            </Typography>
            { children }
        </Box>
    );
}
 
export default PageTitle;