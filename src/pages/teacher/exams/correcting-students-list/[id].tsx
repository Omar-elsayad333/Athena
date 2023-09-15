import { NextPage } from 'next'
import { Routes } from 'routes/Routes'
import { useTheme } from 'context/ThemeContext'
import { useAlert } from 'context/AlertContext'
import { withAuth } from 'routes/withRoute'
import Loading from 'components/Loading/Loading'
import AlertNotify from 'components/AlertNotify'
import PageHead from 'components/Shared/PageHead'
import PageTitle from 'components/Shared/PageTitle'
import ThemeSwitcher from 'components/ThemeSwitcher'
import PageFooter from 'components/Shared/PageFooter'
import DesktopNavbar from 'components/Layout/DesktopNavbar'
import useCorrectingStudentsList from 'container/exams/useCorrectingStudentsList'
import CorrectingStudentsListC from 'components/Teacher/Exams/CorrectingStudentsList'

// MUI
import Box from '@mui/material/Box'

const CorrectingStudentsList: NextPage = () => {
    const { mainColors } = useTheme()
    const { data, states, actions } = useCorrectingStudentsList()
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
            <PageHead title="Add Exam" />
            <DesktopNavbar
                firstContent="الامتحانات المقررة"
                firstPath={Routes.teacherExams}
                secondContent="إنشاء امتحان"
                secondPath={Routes.teacherAddExam}
            />
            {states.loading ? (
                <Loading />
            ) : (
                <Box sx={style.container}>
                    <PageTitle content="قائمة تصحيح الامتحانات">
                        <Box>
                            <svg
                                width="25"
                                height="25"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 25"
                                fill={mainColors.primary.main}
                            >
                                <path
                                    className="cls-1"
                                    d="M4,5.42a1,1,0,1,0,1,1A1,1,0,0,0,4,5.42Zm0,0a1,1,0,1,0,1,1A1,1,0,0,0,4,5.42Zm0,0a1,1,0,1,0,1,1A1,1,0,0,0,4,5.42Zm3.35,0a1,1,0,1,0,1,1A1,1,0,0,0,7.32,5.42Zm3.36,0a1,1,0,1,0,1,1A1,1,0,0,0,10.68,5.42Zm0,1.82a.79.79,0,1,1,.79-.79A.79.79,0,0,1,10.68,7.24Zm0-1.82a1,1,0,1,0,1,1A1,1,0,0,0,10.68,5.42Zm0,1.82a.79.79,0,1,1,.79-.79A.79.79,0,0,1,10.68,7.24ZM7.32,5.42a1,1,0,1,0,1,1A1,1,0,0,0,7.32,5.42ZM4,5.42a1,1,0,1,0,1,1A1,1,0,0,0,4,5.42ZM4,13.2a1,1,0,1,0,1,1A1,1,0,0,0,4,13.2ZM4,5.42a1,1,0,1,0,1,1A1,1,0,0,0,4,5.42Zm3.35,0a1,1,0,1,0,1,1A1,1,0,0,0,7.32,5.42Zm3.36,0a1,1,0,1,0,1,1A1,1,0,0,0,10.68,5.42Zm0,1.82a.79.79,0,1,1,.79-.79A.79.79,0,0,1,10.68,7.24ZM14,5.42a1,1,0,1,0,1,1A1,1,0,0,0,14,5.42Zm0,0a1,1,0,1,0,1,1A1,1,0,0,0,14,5.42Zm-3.35,0a1,1,0,1,0,1,1A1,1,0,0,0,10.68,5.42Zm0,1.82a.79.79,0,1,1,.79-.79A.79.79,0,0,1,10.68,7.24ZM7.32,5.42a1,1,0,1,0,1,1A1,1,0,0,0,7.32,5.42ZM4,5.42a1,1,0,1,0,1,1A1,1,0,0,0,4,5.42ZM4,13.2a1,1,0,1,0,1,1A1,1,0,0,0,4,13.2Zm0,0a1,1,0,1,0,1,1A1,1,0,0,0,4,13.2ZM4,5.42a1,1,0,1,0,1,1A1,1,0,0,0,4,5.42ZM7.32,13.2a1,1,0,1,0,1,1A1,1,0,0,0,7.32,13.2Zm0,1.81a.79.79,0,1,1,0-1.57.79.79,0,1,1,0,1.57Zm0-9.59a1,1,0,1,0,1,1A1,1,0,0,0,7.32,5.42Zm3.36,7.78a1,1,0,1,0,1,1A1,1,0,0,0,10.68,13.2Zm0-7.78a1,1,0,1,0,1,1A1,1,0,0,0,10.68,5.42Zm0,1.82a.79.79,0,1,1,.79-.79A.79.79,0,0,1,10.68,7.24ZM14,5.42a1,1,0,1,0,1,1A1,1,0,0,0,14,5.42Zm0,0a1,1,0,1,0,1,1A1,1,0,0,0,14,5.42Zm-3.35,0a1,1,0,1,0,1,1A1,1,0,0,0,10.68,5.42Zm0,1.82a.79.79,0,1,1,.79-.79A.79.79,0,0,1,10.68,7.24ZM7.32,5.42a1,1,0,1,0,1,1A1,1,0,0,0,7.32,5.42ZM4,5.42a1,1,0,1,0,1,1A1,1,0,0,0,4,5.42Zm6.71,7.78a1,1,0,1,0,1,1A1,1,0,0,0,10.68,13.2Zm-3.36,0a1,1,0,1,0,1,1A1,1,0,0,0,7.32,13.2Zm0,1.81a.79.79,0,1,1,0-1.57.79.79,0,1,1,0,1.57ZM4,13.2a1,1,0,1,0,1,1A1,1,0,0,0,4,13.2ZM19.53.43a1.46,1.46,0,0,0-1-.43h-17a1.44,1.44,0,0,0-1,.43,1.44,1.44,0,0,0-.43,1V23a1.46,1.46,0,0,0,.43,1,1.49,1.49,0,0,0,1,.42h13V21.63A2.29,2.29,0,0,1,15.17,20a2.26,2.26,0,0,1,1.61-.67H20V1.47A1.46,1.46,0,0,0,19.53.43ZM4,15.44a1.22,1.22,0,1,1,1.21-1.21A1.21,1.21,0,0,1,4,15.44Zm3.35,0a1.22,1.22,0,1,1,1.22-1.21A1.21,1.21,0,0,1,7.32,15.44Zm3.36,0a1.22,1.22,0,1,1,1.21-1.21A1.21,1.21,0,0,1,10.68,15.44Zm3.35,0a1.22,1.22,0,1,1,1.21-1.21A1.22,1.22,0,0,1,14,15.44Zm3.73-4.15H2.2a.56.56,0,0,1,0-1.11H17.76a.56.56,0,1,1,0,1.11Zm-15-4.84A1.21,1.21,0,1,1,4,7.66,1.22,1.22,0,0,1,2.76,6.45Zm3.35,0A1.22,1.22,0,1,1,7.32,7.66,1.22,1.22,0,0,1,6.11,6.45Zm3.36,0a1.21,1.21,0,1,1,1.21,1.21A1.22,1.22,0,0,1,9.47,6.45Zm3.34,0A1.22,1.22,0,1,1,14,7.66,1.22,1.22,0,0,1,12.81,6.45Zm5-2.94H2.2a.56.56,0,0,1,0-1.11H17.76a.56.56,0,1,1,0,1.11ZM15.05,6.45a1,1,0,1,0-1,1A1,1,0,0,0,15.05,6.45ZM14,13.2a1,1,0,1,0,1,1A1,1,0,0,0,14,13.2ZM11.7,6.45a1,1,0,1,0-1,1A1,1,0,0,0,11.7,6.45Zm-1.81,0a.79.79,0,1,1,.79.79A.79.79,0,0,1,9.89,6.45Zm.79,6.75a1,1,0,1,0,1,1A1,1,0,0,0,10.68,13.2ZM8.35,6.45a1,1,0,1,0-1,1A1,1,0,0,0,8.35,6.45Zm-1,6.75a1,1,0,1,0,1,1A1,1,0,0,0,7.32,13.2Zm0,1.81a.79.79,0,1,1,0-1.57.79.79,0,1,1,0,1.57ZM5,6.45a1,1,0,1,0-1,1A1,1,0,0,0,5,6.45ZM4,13.2a1,1,0,1,0,1,1A1,1,0,0,0,4,13.2Zm0,0a1,1,0,1,0,1,1A1,1,0,0,0,4,13.2Zm3.35,0a1,1,0,1,0,1,1A1,1,0,0,0,7.32,13.2Zm0,1.81a.79.79,0,1,1,0-1.57.79.79,0,1,1,0,1.57ZM4,5.42a1,1,0,1,0,1,1A1,1,0,0,0,4,5.42Zm3.35,0a1,1,0,1,0,1,1A1,1,0,0,0,7.32,5.42Zm3.36,0a1,1,0,1,0,1,1A1,1,0,0,0,10.68,5.42Zm0,1.82a.79.79,0,1,1,.79-.79A.79.79,0,0,1,10.68,7.24ZM14,5.42a1,1,0,1,0,1,1A1,1,0,0,0,14,5.42Zm0,0a1,1,0,1,0,1,1A1,1,0,0,0,14,5.42Zm-3.35,0a1,1,0,1,0,1,1A1,1,0,0,0,10.68,5.42Zm0,1.82a.79.79,0,1,1,.79-.79A.79.79,0,0,1,10.68,7.24ZM7.32,5.42a1,1,0,1,0,1,1A1,1,0,0,0,7.32,5.42Zm0,7.78a1,1,0,1,0,1,1A1,1,0,0,0,7.32,13.2Zm0,1.81a.79.79,0,1,1,0-1.57.79.79,0,1,1,0,1.57ZM4,5.42a1,1,0,1,0,1,1A1,1,0,0,0,4,5.42ZM4,13.2a1,1,0,1,0,1,1A1,1,0,0,0,4,13.2ZM4,5.42a1,1,0,1,0,1,1A1,1,0,0,0,4,5.42Zm3.35,0a1,1,0,1,0,1,1A1,1,0,0,0,7.32,5.42Zm3.36,0a1,1,0,1,0,1,1A1,1,0,0,0,10.68,5.42Zm0,1.82a.79.79,0,1,1,.79-.79A.79.79,0,0,1,10.68,7.24ZM14,5.42a1,1,0,1,0,1,1A1,1,0,0,0,14,5.42Zm0,0a1,1,0,1,0,1,1A1,1,0,0,0,14,5.42Zm-3.35,0a1,1,0,1,0,1,1A1,1,0,0,0,10.68,5.42Zm0,1.82a.79.79,0,1,1,.79-.79A.79.79,0,0,1,10.68,7.24ZM7.32,5.42a1,1,0,1,0,1,1A1,1,0,0,0,7.32,5.42ZM4,5.42a1,1,0,1,0,1,1A1,1,0,0,0,4,5.42Zm0,0a1,1,0,1,0,1,1A1,1,0,0,0,4,5.42Zm3.35,0a1,1,0,1,0,1,1A1,1,0,0,0,7.32,5.42Zm0,0a1,1,0,1,0,1,1A1,1,0,0,0,7.32,5.42ZM4,5.42a1,1,0,1,0,1,1A1,1,0,0,0,4,5.42Z"
                                    fill="inherit"
                                />
                                <path
                                    className="cls-1"
                                    d="M15.36,21.63V24l4-3.78H16.78a1.45,1.45,0,0,0-1.42,1.46Z"
                                    fill="inherit"
                                />
                            </svg>
                        </Box>
                    </PageTitle>
                    <CorrectingStudentsListC data={data} states={states} actions={actions} />
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

export default withAuth(CorrectingStudentsList)
