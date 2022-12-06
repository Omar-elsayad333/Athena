import { NextPage } from "next";
import DesktopNavbar from 'components/Layout/DesktopNavbar';
import { useContext } from "react";
import { lightColors, darkColors } from "styles/colors";
import { DarkThemeContext } from "context/ThemeContext";
import PageTitle from 'components/Shared/PageTitle';
import ThemeSwitcher from "components/ThemeSwitcher";
import GroupsC from "components/Teacher/Groups";
import MySearchInput from "components/MySearchInput";

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
        container: {
            width: '100%',
            padding: '60px',
            display: 'flex',
            flexDirection: 'column',
            gap: '60px',
            '@media(max-width: 450px)': {
                padding: '40px'
            },
            '@media(max-width: 350px)': {
                padding: '20px'
            },
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
            <Box sx={style.container}>
                <PageTitle icon='/images/groups-icon.svg' content='جميع المجموعات الحاليه' />
                <MySearchInput placeholder="هل تبحث عن مجموعة معينة ؟" />
                <GroupsC />
            </Box>
            <ThemeSwitcher />
        </Box>    
    );
}
 
export default Groups;