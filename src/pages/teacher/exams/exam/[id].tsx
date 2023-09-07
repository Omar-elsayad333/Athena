import { NextPage } from 'next'
import { Routes } from 'routes/Routes'
import { withAuth } from 'routes/withRoute'
import { useAlert } from 'context/AlertContext'
import { useTheme } from 'context/ThemeContext'
import Loading from 'components/Loading/Loading'
import AlertNotify from 'components/AlertNotify'
import PageHead from 'components/Shared/PageHead'
import MyIconButton from 'components/MyIconButton'
import PageTitle from 'components/Shared/PageTitle'
import ThemeSwitcher from 'components/ThemeSwitcher'
import PageFooter from 'components/Shared/PageFooter'
import DesktopNavbar from 'components/Layout/DesktopNavbar'
import ExamC from 'components/Teacher/Exams/ShowAndEditExam'
import useEditAndShowExam from 'container/exams/useEditAndShowExam'

// MUI
import Box from '@mui/material/Box'

const Exam: NextPage = () => {
    const { mainColors } = useTheme()
    const { data, states, actions, dialogs } = useEditAndShowExam()
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
            '@media(max-width: 450px)': {
                padding: '40px',
            },
            '@media(max-width: 350px)': {
                padding: '20px',
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
            <PageHead title={data.examData.name} />
            <DesktopNavbar
                firstContent="الامتحانات المقررة "
                firstPath={Routes.teacherExams}
                secondContent="إنشاء امتحان"
                secondPath={Routes.teacherAddHeadquarter}
            />
            {states.loading ? (
                <Loading />
            ) : (
                <Box sx={style.container}>
                    <Box sx={style.header}>
                        <PageTitle content={data.examData.name}>
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
                        </PageTitle>
                        {states.isEditDetails == false && (
                            <MyIconButton
                                event={actions.openEditDetails}
                                content="تعديل"
                                icon={
                                    <svg
                                        width="17"
                                        height="17"
                                        viewBox="0 0 15 15"
                                        fill={mainColors.primary.main}
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M14.3646 3.06073L11.8095 0.505645C11.476 0.192411 11.039 0.0126817 10.5817 0.000646004C10.1243 -0.0113897 9.67851 0.145108 9.32902 0.44037L0.93643 8.83297C0.63501 9.13693 0.447332 9.53534 0.404899 9.96131L0.0039193 13.8499C-0.00864259 13.9865 0.00908012 14.1241 0.0558239 14.2531C0.102568 14.382 0.177182 14.4991 0.274347 14.5959C0.361481 14.6823 0.464818 14.7507 0.578433 14.7971C0.692048 14.8435 0.813705 14.867 0.93643 14.8663H1.02036L4.90892 14.512C5.33489 14.4695 5.7333 14.2818 6.03726 13.9804L14.4299 5.58783C14.7556 5.2437 14.9316 4.78448 14.9194 4.31079C14.9072 3.8371 14.7077 3.38758 14.3646 3.06073ZM4.74107 12.6469L1.94354 12.908L2.19532 10.1105L7.464 4.9071L9.98178 7.42488L4.74107 12.6469ZM11.194 6.17531L8.69492 3.67618L10.5133 1.81116L13.0591 4.35691L11.194 6.17531Z"
                                            fill="inherit"
                                        />
                                    </svg>
                                }
                            />
                        )}
                    </Box>
                    <ExamC data={data} states={states} actions={actions} dialogs={dialogs} />
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

export default withAuth(Exam)
