import { NextPage } from "next";
import { useContext } from "react";
import { DarkThemeContext } from "context/ThemeContext";
import { lightColors, darkColors } from "styles/colors";
import PageHead from "components/Shared/PageHead";
import DesktopNavbar from 'components/Layout/DesktopNavbar';
import PageTitle from 'components/Shared/PageTitle';
import AddGroupC from 'components/Teacher/AddGroup';
import ThemeSwitcher from "components/ThemeSwitcher";

// MUI
import Box from "@mui/material/Box";

const AddGroup: NextPage = () => {

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
            <PageHead title='Add Groups' />
            <DesktopNavbar 
                firstPath='/teacher/groups' 
                firstContent='جميع المجموعات' 
                secondPath='/teacher/addGroup'
                secondContent='اضافة مجموعة'
            /> 
            <Box sx={style.container}>
                <PageTitle icon='/images/groups-icon.svg' content='اضافة مجموعة جديدة' />
                <AddGroupC />
            </Box>
            <ThemeSwitcher />
        </Box>    
    );
}

export default AddGroup;
