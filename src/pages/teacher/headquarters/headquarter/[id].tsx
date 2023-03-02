import Link from "next/link";
import { NextPage } from "next";
import { useAlert } from "context/AlertContext";
import { useTheme } from "context/ThemeContext";
import { withProtected } from "routes/withRouts";
import Loading from "components/Loading/Loading";
import AlertNotify from "components/AlertNotify";
import PageHead from "components/Shared/PageHead";
import MyIconButton from "components/MyIconButton";
import PageTitle from 'components/Shared/PageTitle';
import ThemeSwitcher from "components/ThemeSwitcher";
import PageFooter from "components/Shared/PageFooter";
import DesktopNavbar from 'components/Layout/DesktopNavbar';
import useHeadquarter from "container/headquarters/useHeadquarter";
import HeadquarterC from 'components/Teacher/Headquarters/Headquarter';

// MUI
import Box from "@mui/material/Box";
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import { Routes } from "routes/Routes";

const Headquarter: NextPage = () => {

    const { data, states } = useHeadquarter();
    const { msg, state, msgType, handleState } = useAlert();
    const { mainColors } = useTheme();
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
        header: {
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '32px',
        },
        footerContainer: {
            marginTop: 'auto',
        },
    }

    return (
        <Box sx={style.root}>
            <PageHead title={data.headquarterData.name} />
            <DesktopNavbar 
                firstPath='/teacher/headquarters' 
                firstContent='جميع المقرات' 
                secondPath='/teacher/headquarters/add-headquarter'
                secondContent='اضافة مقر'
            /> 
            { 
                states.loading ?
                <Loading /> :
                <Box sx={style.container}>
                    <Box sx={style.header}>
                        <PageTitle content={data.headquarterData.name}>
                            <svg width="35" height="35" viewBox="0 0 16 25" fill={mainColors.primary.main} xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.99485 0.03099C5.87867 0.0336607 3.84961 0.90505 2.3514 2.4546C0.853199 4.00414 0.00776901 6.10575 0 8.29982C0.0440607 9.656 0.378742 10.985 0.979761 12.1904C3.10054 16.5945 5.45897 20.8711 8.04384 25C10.6294 20.8697 12.9911 16.5932 15.1177 12.1904C15.661 10.9682 15.9609 9.64497 15.9995 8.29982C16.0113 7.20654 15.8123 6.12183 15.4142 5.10938C15.0162 4.09693 14.427 3.17715 13.6813 2.40403C12.9357 1.63092 12.0485 1.02006 11.072 0.607315C10.0955 0.194572 9.04932 -0.011732 7.99485 0.00051498V0.03099ZM7.99485 11.7739C7.32037 11.7739 6.66115 11.5658 6.10105 11.1762C5.54095 10.7866 5.10528 10.233 4.84946 9.58596C4.59364 8.9389 4.52924 8.22757 4.66444 7.54245C4.79964 6.85733 5.12833 6.2294 5.60871 5.73851C6.08909 5.24762 6.69944 4.91598 7.36213 4.78576C8.02482 4.65554 8.70988 4.73263 9.33019 5.00723C9.9505 5.28183 10.478 5.74152 10.8456 6.32783C11.2132 6.91414 11.4043 7.60058 11.3946 8.29982C11.3843 9.22669 11.0212 10.1118 10.3845 10.7625C9.74775 11.4131 8.88888 11.7767 7.99485 11.7739Z" fill="inherit"/>
                            </svg>
                        </PageTitle>
                        <Link href={`${Routes.teacherEditHeadquarters}${data.headquarterData.id}`}>
                            <a>
                                <MyIconButton 
                                    content='تعديل' 
                                    icon={
                                        <svg width="17" height="17" viewBox="0 0 15 15" fill={mainColors.primary.main} xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.3646 3.06073L11.8095 0.505645C11.476 0.192411 11.039 0.0126817 10.5817 0.000646004C10.1243 -0.0113897 9.67851 0.145108 9.32902 0.44037L0.93643 8.83297C0.63501 9.13693 0.447332 9.53534 0.404899 9.96131L0.0039193 13.8499C-0.00864259 13.9865 0.00908012 14.1241 0.0558239 14.2531C0.102568 14.382 0.177182 14.4991 0.274347 14.5959C0.361481 14.6823 0.464818 14.7507 0.578433 14.7971C0.692048 14.8435 0.813705 14.867 0.93643 14.8663H1.02036L4.90892 14.512C5.33489 14.4695 5.7333 14.2818 6.03726 13.9804L14.4299 5.58783C14.7556 5.2437 14.9316 4.78448 14.9194 4.31079C14.9072 3.8371 14.7077 3.38758 14.3646 3.06073ZM4.74107 12.6469L1.94354 12.908L2.19532 10.1105L7.464 4.9071L9.98178 7.42488L4.74107 12.6469ZM11.194 6.17531L8.69492 3.67618L10.5133 1.81116L13.0591 4.35691L11.194 6.17531Z" fill="inherit"/>
                                        </svg>
                                    }
                                />
                            </a>
                        </Link>
                    </Box>
                    <HeadquarterC 
                        data={data}
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
 
export default withProtected(Headquarter);