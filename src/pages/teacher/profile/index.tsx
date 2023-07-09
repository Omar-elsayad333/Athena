import Link from 'next/link'
import { NextPage } from 'next'
import { Routes } from 'routes/Routes'
import { withAuth } from 'routes/withRoute'
import useGlobalStyle from 'styles/globalStyle'
import { useTheme } from 'context/ThemeContext'
import { useAlert } from 'context/AlertContext'
import Loading from 'components/Loading/Loading'
import AlertNotify from 'components/AlertNotify'
import PageHead from 'components/Shared/PageHead'
import ProfileC from 'components/Teacher/Profile'
import MyIconButton from 'components/MyIconButton'
import PageTitle from 'components/Shared/PageTitle'
import ThemeSwitcher from 'components/ThemeSwitcher'
import useProfile from 'container/Profile/useProfile'
import PageFooter from 'components/Shared/PageFooter'
import DesktopNavbar from 'components/Layout/DesktopNavbar'

// MUI
import Box from '@mui/material/Box'

const Profile: NextPage = () => {
    const { mainColors } = useTheme()
    const { data, states } = useProfile()
    const { pageStructureStyle } = useGlobalStyle()
    const { msg, state, msgType, handleState } = useAlert()

    return (
        <Box sx={pageStructureStyle.root}>
            <PageHead title="Years" />
            <DesktopNavbar
                firstPath={Routes.teacherYears}
                firstContent="ملف المدرس"
                secondPath={Routes.teacherAddYear}
                secondContent="تعديل البيانات"
            />
            {states.loading ? (
                <Loading />
            ) : (
                <Box sx={pageStructureStyle.container}>
                    <Box sx={pageStructureStyle.header}>
                        <PageTitle content="معلومات المدرس">
                            <svg
                                width="28"
                                height="36"
                                viewBox="0 0 28 36"
                                fill={mainColors.primary.main}
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M21.7417 18.9244L21.4602 19.1589L21.3195 19.2762C19.6664 20.5641 17.7135 21.4114 15.6437 21.7388C15.3706 21.7618 15.096 21.7618 14.8228 21.7388H14.1192C13.2825 21.7405 12.4483 21.646 11.6331 21.4574C9.79334 20.958 8.08191 20.0703 6.61402 18.854H6.44985C-0.0937421 24.5064 7.28931e-05 34.3804 7.28931e-05 34.8025V35.1543H27.91V34.8729C27.4175 23.4509 22.8675 19.6749 21.7417 18.9244ZM17.8484 26.6641L13.9081 24.6471L9.99136 26.6641V21.7388L13.9081 23.8496L17.8484 21.7388V26.6641Z"
                                    fill="#inherit"
                                />
                                <path
                                    d="M3.6814 10.1283C3.68761 12.9109 4.79736 15.5774 6.76719 17.5429C8.73701 19.5083 11.406 20.6121 14.1887 20.6121V20.6121C15.5753 20.6122 16.9483 20.3371 18.2279 19.803C19.5076 19.2688 20.6686 18.4861 21.6436 17.5001C22.6187 16.5141 23.3884 15.3445 23.9084 14.059C24.4283 12.7735 24.688 11.3976 24.6725 10.011C24.5449 7.31322 23.3834 4.76816 21.4291 2.90407C19.4748 1.03997 16.8777 0 14.1769 0C11.4762 0 8.87909 1.03997 6.92476 2.90407C4.97044 4.76816 3.80896 7.31322 3.6814 10.011V10.1283Z"
                                    fill="#inherit"
                                />
                            </svg>
                        </PageTitle>
                        <Link href={Routes.teacherEditProfile}>
                            <a>
                                <MyIconButton
                                    content="تعديل"
                                    icon={
                                        <svg
                                            width="15"
                                            height="15"
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
                            </a>
                        </Link>
                    </Box>
                    <ProfileC data={data.pageData} />
                </Box>
            )}
            <Box sx={pageStructureStyle.footerContainer}>
                <PageFooter />
            </Box>
            <ThemeSwitcher />
            <AlertNotify msg={msg} state={state} handleState={handleState} msgType={msgType} />
        </Box>
    )
}

export default withAuth(Profile)
