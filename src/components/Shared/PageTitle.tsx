import Image from 'next/image';
import { lightColors, darkColors } from 'styles/colors';
import { useContext } from 'react';
import { DarkThemeContext } from 'context/ThemeContext';

// MUI
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

type Props = {
    content: String;
    icon: String;
}

const PageTitle:React.FC<Props> = ({content, icon}) => {

    const {darkMode} = useContext(DarkThemeContext);

    const style = {
        container: {
            width: 'fit-content',
            padding: '16px 19px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px',
            borderRadius: '10px',
            border: darkMode ? '1px solid #B6D5F0' : 'none',
            background: darkMode ? darkColors.secondary.main : lightColors.secondary.main,
            boxShadow: darkMode ? 'none' : '0px 5px 15px 0px #1C364F33',
        }
    }

    return (
        <Box sx={style.container}>
            <Typography color='primary' variant='h1'>
                {content}
            </Typography>
            <Image src={`${icon}`} width={36} height={27} alt='اضافة مجموعة جديدة' />
        </Box>
    );
}
 
export default PageTitle;