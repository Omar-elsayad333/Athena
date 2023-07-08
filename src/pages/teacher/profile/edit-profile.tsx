import { NextPage } from 'next'
import { Routes } from 'routes/Routes'
import { withAuth } from 'routes/withRoute'
import { useTheme } from 'context/ThemeContext'
import useGlobalStyle from 'styles/globalStyle'
import Loading from 'components/Loading/Loading'
import PageHead from 'components/Shared/PageHead'
import ProfileC from 'components/Teacher/Profile'
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
                        <PageTitle content="معلومات المدرس">
                            <svg width="28" height="36" viewBox="0 0 28 36" fill={mainColors.primary.main} xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.7417 18.9244L21.4602 19.1589L21.3195 19.2762C19.6664 20.5641 17.7135 21.4114 15.6437 21.7388C15.3706 21.7618 15.096 21.7618 14.8228 21.7388H14.1192C13.2825 21.7405 12.4483 21.646 11.6331 21.4574C9.79334 20.958 8.08191 20.0703 6.61402 18.854H6.44985C-0.0937421 24.5064 7.28931e-05 34.3804 7.28931e-05 34.8025V35.1543H27.91V34.8729C27.4175 23.4509 22.8675 19.6749 21.7417 18.9244ZM17.8484 26.6641L13.9081 24.6471L9.99136 26.6641V21.7388L13.9081 23.8496L17.8484 21.7388V26.6641Z" fill="#inherit"/>
                                <path d="M3.6814 10.1283C3.68761 12.9109 4.79736 15.5774 6.76719 17.5429C8.73701 19.5083 11.406 20.6121 14.1887 20.6121V20.6121C15.5753 20.6122 16.9483 20.3371 18.2279 19.803C19.5076 19.2688 20.6686 18.4861 21.6436 17.5001C22.6187 16.5141 23.3884 15.3445 23.9084 14.059C24.4283 12.7735 24.688 11.3976 24.6725 10.011C24.5449 7.31322 23.3834 4.76816 21.4291 2.90407C19.4748 1.03997 16.8777 0 14.1769 0C11.4762 0 8.87909 1.03997 6.92476 2.90407C4.97044 4.76816 3.80896 7.31322 3.6814 10.011V10.1283Z" fill="#inherit"/>
                            </svg>
                        </PageTitle>
                        <ProfileC data={data} />
                    </Box>
                )}
            <Box sx={pageStructureStyle.footerContainer}>
                <PageFooter />
            </Box>
            <ThemeSwitcher />
        </Box>
    )
}

export default withAuth(Profile)
