import { NextPage } from 'next'
import { withAuth } from 'routes/withRoute'
import { useTheme } from 'context/ThemeContext'
import { useAlert } from 'context/AlertContext'
import AlertNotify from 'components/AlertNotify'
import Loading from 'components/Loading/Loading'
import PageHead from 'components/Shared/PageHead'
import PageTitle from 'components/Shared/PageTitle'
import ThemeSwitcher from 'components/ThemeSwitcher'
import PageFooter from 'components/Shared/PageFooter'
import useTeacherHome from 'container/home/useTeacherHome'
import DesktopNavbar from 'components/Layout/DesktopNavbar'
import HomeGarphComponent from 'components/Teacher/Home/HomeGarphComponent'

// MUI
import Box from '@mui/material/Box'

const TeacherHome: NextPage = () => {
    const { mainColors } = useTheme()
    const { data, states } = useTeacherHome()
    const { msg, state, msgType, handleState } = useAlert()

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
            '@media screen and (max-width: 450px)': {
                padding: '40px',
            },
            '@media screen and (max-width: 350px)': {
                padding: '20px',
            },
        },
        footerContainer: {
            marginTop: 'auto',
        },
    }

    return (
        <Box sx={style.root}>
            <PageHead title="Athena Home" />
            <DesktopNavbar firstPath={''} firstContent="" secondPath={''} secondContent="" />
            {states.loading ? (
                <Loading />
            ) : (
                <Box sx={style.container}>
                    <PageTitle content="الرئيسية">
                        <svg
                            width="34"
                            height="36"
                            viewBox="0 0 34 36"
                            fill={mainColors.primary.main}
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M16.0798 0.303845C16.6264 -0.101282 17.3736 -0.101282 17.9202 0.303845L33.3748 11.7582C33.7681 12.0497 34 12.5103 34 12.9998V30.9995C34 32.3021 33.4563 33.5353 32.5148 34.4325C31.5758 35.3273 30.3175 35.8177 29.0202 35.8177H4.9798C3.68247 35.8177 2.42418 35.3273 1.4852 34.4325C0.543687 33.5353 0 32.3021 0 30.9995L0 12.9998C0 12.5103 0.23193 12.0497 0.625218 11.7582L16.0798 0.303845ZM3.09091 13.778V30.9995C3.09091 31.4329 3.27088 31.8645 3.6175 32.1948C3.96665 32.5276 4.45543 32.7267 4.9798 32.7267H29.0202C29.5446 32.7267 30.0333 32.5276 30.3825 32.1948C30.7291 31.8645 30.9091 31.4329 30.9091 30.9995V13.778L17 3.46911L3.09091 13.778Z"
                                fill="inherit"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M10.3052 17.9101C10.3052 17.0565 10.9971 16.3646 11.8506 16.3646H22.1536C23.0072 16.3646 23.6991 17.0565 23.6991 17.9101V34.2734C23.6991 35.127 23.0072 35.8189 22.1536 35.8189C21.3001 35.8189 20.6082 35.127 20.6082 34.2734V19.4555H13.3961V34.2734C13.3961 35.127 12.7042 35.8189 11.8506 35.8189C10.9971 35.8189 10.3052 35.127 10.3052 34.2734V17.9101Z"
                                fill="inherit"
                            />
                        </svg>
                    </PageTitle>
                    <HomeGarphComponent data={data} states={states} />
                </Box>
            )}
            <Box sx={style.footerContainer}>
                <PageFooter />
            </Box>
            <ThemeSwitcher />
            <AlertNotify msg={msg} state={state} handleState={handleState} msgType={msgType} />
        </Box>
    )
}

export default withAuth(TeacherHome)
