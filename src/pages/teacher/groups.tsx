import { NextPage } from "next";
import DesktopNavbar from 'components/Layout/DesktopNavbar';
import { useContext } from "react";
import { lightColors, darkColors } from "styles/colors";
import { DarkThemeContext } from "context/ThemeContext";

// MUI
import Box from "@mui/material/Box";

const Groups: NextPage = () => {

    const {darkMode} = useContext(DarkThemeContext);

    const style = {
        root: {
            width: '100%',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: darkMode ? darkColors.backgroundColor.main : lightColors.backgroundColor.main,
        },
        screenContainer: {
            display: 'flex',
            flexDirection: 'column',
            gap: '60px',
        }
    }

    return (
        <Box sx={style.root}>
            <DesktopNavbar 
                firstPath='/teacher/groups' 
                firstContent='جميع المجموعات' 
                secondPath='/teacher/addGroup' 
                secondContent='اضافة مجموعة' 
            /> 
            <Box p={8}>
            
            </Box>
        </Box>    
    );
}
 
export default Groups;