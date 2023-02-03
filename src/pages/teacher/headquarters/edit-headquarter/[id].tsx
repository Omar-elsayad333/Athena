import { NextPage } from "next";
import { useContext } from "react";
import { withProtected } from "routes/withRouts";
import { DarkThemeContext } from "context/ThemeContext";
import PageHead from "components/Shared/PageHead";
import DesktopNavbar from 'components/Layout/DesktopNavbar';
import PageTitle from 'components/Shared/PageTitle';
import ThemeSwitcher from "components/ThemeSwitcher";
import PageFooter from "components/Shared/PageFooter";
import EditHeadquarterC from 'components/Teacher/Headquarters/EditHeadquarter';
import useEditHeadquarter from "container/headquarters/useEditHeadquarter";
import AlertNotify from "components/AlertNotify";
import Loading from "components/Loading/Loading";
import { useError } from "context/ErrorContext";

// MUI
import Box from "@mui/material/Box";

const EditHeadquarter: NextPage = () => {

    const {
        msg,
        state,
        msgType,
        handleState
    } = useError();
    const {
        data,
        dataHandlers,
        thirdPhone,
        oldData,
        loading,
        submitActions,
        dialog
    } = useEditHeadquarter();
    const { mainColors } = useContext(DarkThemeContext);
    
    const style = {
        root: {
            width: '100%',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: mainColors.backgroundColor.main,
            transition: '.2s',
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
        },
        footerContainer: {
            marginTop: 'auto',
        },
    }
    
    return (
        <Box sx={style.root}>
            <PageHead title='Edit Headquarter' />
            <DesktopNavbar 
                firstPath='/teacher/headquarters' 
                firstContent='جميع المقرات' 
                secondPath='/teacher/headquarters/add-headquarter'
                secondContent='اضافة مقر'
            /> 
            { 
                loading ?
                <Loading /> :
                oldData && thirdPhone &&
                <Box sx={style.container}>
                    <PageTitle content='تعديل بيانات المقر'>
                        <svg width="35" height="35" viewBox="0 0 16 25" fill={mainColors.primary.main} xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.99485 0.03099C5.87867 0.0336607 3.84961 0.90505 2.3514 2.4546C0.853199 4.00414 0.00776901 6.10575 0 8.29982C0.0440607 9.656 0.378742 10.985 0.979761 12.1904C3.10054 16.5945 5.45897 20.8711 8.04384 25C10.6294 20.8697 12.9911 16.5932 15.1177 12.1904C15.661 10.9682 15.9609 9.64497 15.9995 8.29982C16.0113 7.20654 15.8123 6.12183 15.4142 5.10938C15.0162 4.09693 14.427 3.17715 13.6813 2.40403C12.9357 1.63092 12.0485 1.02006 11.072 0.607315C10.0955 0.194572 9.04932 -0.011732 7.99485 0.00051498V0.03099ZM7.99485 11.7739C7.32037 11.7739 6.66115 11.5658 6.10105 11.1762C5.54095 10.7866 5.10528 10.233 4.84946 9.58596C4.59364 8.9389 4.52924 8.22757 4.66444 7.54245C4.79964 6.85733 5.12833 6.2294 5.60871 5.73851C6.08909 5.24762 6.69944 4.91598 7.36213 4.78576C8.02482 4.65554 8.70988 4.73263 9.33019 5.00723C9.9505 5.28183 10.478 5.74152 10.8456 6.32783C11.2132 6.91414 11.4043 7.60058 11.3946 8.29982C11.3843 9.22669 11.0212 10.1118 10.3845 10.7625C9.74775 11.4131 8.88888 11.7767 7.99485 11.7739Z" fill="inherit"/>
                        </svg>
                    </PageTitle>
                    <EditHeadquarterC 
                        data={data}
                        dataHandlers={dataHandlers} 
                        oldData={oldData} 
                        thirdPhone={thirdPhone} 
                        dialog={dialog}
                        submitActions={submitActions}
                        loading={loading}
                    />
                </Box>
            }
            <Box sx={style.footerContainer}>
                <PageFooter />
            </Box>
            <ThemeSwitcher />
            <AlertNotify msg={msg} state={state} handleState={handleState} msgType={msgType} />
        </Box> 
    );
}
 
export default withProtected(EditHeadquarter);