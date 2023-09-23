import { NextPage } from 'next'
import { withAuth } from 'routes/withRoute'
import { useAlert } from 'context/AlertContext'
import { useTheme } from 'context/ThemeContext'
import useGlobalStyle from 'styles/globalStyle'
import AlertNotify from 'components/AlertNotify'
import Loading from 'components/Loading/Loading'
import PageHead from 'components/Shared/PageHead'
import PageTitle from 'components/Shared/PageTitle'
import ThemeSwitcher from 'components/ThemeSwitcher'
import PageFooter from 'components/Shared/PageFooter'
import DesktopNavbar from 'components/Layout/DesktopNavbar'
import NotificationsC from 'components/Teacher/Notifications'
import useShowNotifications from 'container/notifications/useShowNotifications'

// MUI
import Box from '@mui/material/Box'

const Notifications: NextPage = () => {
    const { mainColors } = useTheme()
    const { data, states, actions } = useShowNotifications()
    const { pageStructureStyle } = useGlobalStyle()
    const { msg, state, msgType, handleState } = useAlert()

    return (
        <Box sx={pageStructureStyle.root}>
            <PageHead title="Years" />
            <DesktopNavbar firstPath="" firstContent="" secondPath="" secondContent="" />
            {states.loading ? (
                <Loading />
            ) : (
                <Box sx={pageStructureStyle.container}>
                    <PageTitle content="جميع الاشعارات الواردة">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill={mainColors.primary.main}
                        >
                            <path
                                d="M34.2002 25.3487L31.2002 22.3321V14.8987C31.2402 12.1385 30.28 9.45694 28.4971 7.34932C26.7142 5.2417 24.229 3.85032 21.5003 3.4321C19.9166 3.22354 18.3067 3.35512 16.7779 3.81806C15.2492 4.28099 13.8367 5.06463 12.6348 6.1167C11.4329 7.16876 10.4692 8.46505 9.80796 9.91908C9.14673 11.3731 8.80319 12.9514 8.80028 14.5487V22.3321L5.80028 25.3487C5.42346 25.7318 5.16792 26.2175 5.06562 26.745C4.96331 27.2726 5.01878 27.8186 5.22508 28.3148C5.43138 28.811 5.77937 29.2353 6.22553 29.5348C6.6717 29.8343 7.19625 29.9957 7.73361 29.9987H13.3336V30.5654C13.4115 32.2574 14.1569 33.8495 15.4065 34.9929C16.6561 36.1363 18.308 36.7377 20.0003 36.6654C21.6925 36.7377 23.3444 36.1363 24.594 34.9929C25.8437 33.8495 26.5891 32.2574 26.6669 30.5654V29.9987H32.2669C32.8043 29.9957 33.3288 29.8343 33.775 29.5348C34.2212 29.2353 34.5691 28.811 34.7754 28.3148C34.9817 27.8186 35.0372 27.2726 34.9349 26.745C34.8326 26.2175 34.5771 25.7318 34.2002 25.3487ZM23.3336 30.5654C23.2412 31.367 22.843 32.1021 22.222 32.6175C21.6011 33.1329 20.8052 33.3889 20.0003 33.332C19.1953 33.3889 18.3994 33.1329 17.7785 32.6175C17.1575 32.1021 16.7594 31.367 16.6669 30.5654V29.9987H23.3336V30.5654ZM9.18361 26.6654L11.1503 24.6987C11.4622 24.3886 11.7097 24.0199 11.8785 23.6137C12.0472 23.2075 12.134 22.7719 12.1336 22.3321V14.5487C12.1345 13.4244 12.3759 12.3133 12.8416 11.2899C13.3073 10.2666 13.9865 9.35467 14.8336 8.61542C15.6693 7.85823 16.6596 7.29167 17.7358 6.95498C18.8121 6.61828 19.9487 6.51948 21.0669 6.66543C22.9944 6.97839 24.7439 7.97711 25.9934 9.47772C27.2429 10.9783 27.9082 12.8798 27.8669 14.8321V22.3321C27.8644 22.7707 27.9485 23.2056 28.1143 23.6117C28.2802 24.0179 28.5246 24.3873 28.8336 24.6987L30.8169 26.6654H9.18361Z"
                                fill="inherit"
                            />
                            <path
                                d="M10.9998 17.5L7.49984 27.5H32.9998L29.4998 23V17.5L27.4998 9.5L19.4998 4.5L11.4998 9.5L10.9998 17.5Z"
                                fill="inherit"
                            />
                        </svg>
                    </PageTitle>
                    <NotificationsC data={data} states={states} actions={actions} />
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

export default withAuth(Notifications)
