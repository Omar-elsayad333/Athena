import { NextPage } from "next";
import { useContext } from "react";
import { DarkThemeContext } from "context/ThemeContext";
import { lightColors, darkColors } from "styles/colors";
import DesktopNavbar from 'components/Layout/DesktopNavbar';
import PageTitle from 'components/Shared/PageTitle';
import FormSection from 'components/Teacher/AddGroup/FormSection';

// MUI
import Box from "@mui/material/Box";

const addGroup: NextPage = () => {

    const {darkMode} = useContext(DarkThemeContext);

    const style = {
        root: {
            width: '100%',
            minHeight: '200vh',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: darkMode ? darkColors.backgroundColor.main : lightColors.backgroundColor.main,
        },
        container: {
            display: 'flex',
            flexDirection: 'column',
            gap: '60px',
        }
    }

    return (
        <Box sx={style.root}>
            <DesktopNavbar /> 
            <Box p={8} sx={style.container}>
                <PageTitle icon='/images/groups-icon' content='اضافة مجموعة جديدة' />
                <FormSection />
            </Box>
        </Box>    
    );
}
 
export default addGroup;
