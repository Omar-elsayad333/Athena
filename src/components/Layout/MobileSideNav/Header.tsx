import Link from 'next/link'
import Urls from 'constant/urls'
import Avatar from '../../MyAvatar'
import { Routes } from 'routes/Routes'
import { useUser } from 'context/userContext'
import { useTheme } from 'context/ThemeContext'
import InlineLogo from 'components/Svgs/InlineLogo'
import { useNotifications } from 'context/NotificationContext'
import useNotificationsMenu from 'container/notifications/useNotificationsMenu'
import NotificationsMenu from 'components/Teacher/Notifications/NotificationsMenu'

// MUI
import Box from '@mui/material/Box'
import Badge from '@mui/material/Badge'
import IconButton from '@mui/material/IconButton'

type Props = {
    controleMobileSideNav: any
    mobileSideNavState: any
}

const Header: React.FC<Props> = ({ controleMobileSideNav, mobileSideNavState }) => {
    const { userState } = useUser()
    const { mainColors } = useTheme()
    const { notificationsData } = useNotifications()
    const { states, actions } = useNotificationsMenu()

    const style = {
        container: {
            width: '100%',
            height: '80px',
            paddingX: '50px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '35px',
            borderBottom: `2px solid ${mainColors.primary.main}`,
            background: mainColors.linerGradient.primary,
            '@media screen and (max-width: 500px)': {
                paddingX: '20px',
            },
        },
        menuIcon: {
            width: '28px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
        },
        profile: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '20px',
            '@media screen and (max-width: 250px)': {
                gap: '10px',
            },
            meImage: {
                width: '50px',
                height: '50px',
                display: 'flex',
            },
        },
    }

    return (
        <>
            {!mobileSideNavState ? (
                <Box sx={style.container}>
                    <Box sx={style.menuIcon}>
                        <svg
                            width="28"
                            height="19"
                            viewBox="0 0 39 27"
                            fill={mainColors.primary.main}
                            xmlns="http://www.w3.org/2000/svg"
                            onClick={controleMobileSideNav}
                        >
                            <rect width="39" height="4.17857" rx="2.08929" fill="inherit" />
                            <rect
                                y="11.1421"
                                width="39"
                                height="4.17857"
                                rx="2.08929"
                                fill="inherit"
                            />
                            <rect
                                y="22.2869"
                                width="39"
                                height="4.17857"
                                rx="2.08929"
                                fill="inherit"
                            />
                        </svg>
                    </Box>
                    <Box>
                        <InlineLogo />
                    </Box>
                </Box>
            ) : (
                <Box sx={style.container}>
                    <Box sx={style.menuIcon}>
                        <svg
                            width="29"
                            height="29"
                            viewBox="0 0 29 29"
                            stroke={mainColors.primary.main}
                            onClick={controleMobileSideNav}
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M26.28 2L2 26.28"
                                stroke="inherit"
                                strokeWidth="4"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M2 2L14.14 14.14L26.28 26.28"
                                stroke="inhherit"
                                strokeWidth="4"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </Box>
                    <Box sx={style.profile}>
                        <IconButton
                            aria-label="more"
                            id="basic-button"
                            aria-haspopup="true"
                            aria-controls={states.open ? 'basic-menu' : undefined}
                            aria-expanded={states.open ? 'true' : undefined}
                            onClick={actions.handleClick}
                        >
                            <Badge
                                color="primary"
                                badgeContent={notificationsData.length}
                                max={999}
                            >
                                <svg
                                    width="33"
                                    height="33"
                                    viewBox="0 0 33 33"
                                    fill={mainColors.primary.main}
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M27.5644 20.43L25.1464 17.9986V12.0074C25.1786 9.78257 24.4047 7.62127 22.9677 5.92253C21.5307 4.22379 19.5276 3.10234 17.3282 2.76525C16.0518 2.59716 14.7542 2.70321 13.5221 3.07633C12.2899 3.44946 11.1514 4.08107 10.1827 4.92904C9.21396 5.777 8.4372 6.82181 7.90425 7.99375C7.37129 9.1657 7.09441 10.4378 7.09206 11.7253V17.9986L4.67406 20.43C4.37034 20.7388 4.16438 21.1303 4.08192 21.5555C3.99946 21.9807 4.04417 22.4208 4.21045 22.8207C4.37673 23.2206 4.6572 23.5627 5.01681 23.8041C5.37642 24.0455 5.79921 24.1755 6.23232 24.1779H10.7459V24.6347C10.8087 25.9984 11.4095 27.2817 12.4167 28.2033C13.4238 29.1249 14.7553 29.6096 16.1192 29.5513C17.4832 29.6096 18.8146 29.1249 19.8218 28.2033C20.829 27.2817 21.4298 25.9984 21.4926 24.6347V24.1779H26.0062C26.4393 24.1755 26.8621 24.0455 27.2217 23.8041C27.5813 23.5627 27.8618 23.2206 28.028 22.8207C28.1943 22.4208 28.239 21.9807 28.1566 21.5555C28.0741 21.1303 27.8681 20.7388 27.5644 20.43V20.43ZM18.8059 24.6347C18.7314 25.2808 18.4105 25.8733 17.91 26.2887C17.4095 26.7041 16.7681 26.9104 16.1192 26.8646C15.4704 26.9104 14.829 26.7041 14.3285 26.2887C13.828 25.8733 13.5071 25.2808 13.4326 24.6347V24.1779H18.8059V24.6347ZM7.40102 21.4913L8.98615 19.9061C9.23758 19.6562 9.43706 19.359 9.57309 19.0316C9.70911 18.7042 9.779 18.3531 9.77872 17.9986V11.7253C9.77945 10.8191 9.97402 9.92349 10.3494 9.09866C10.7247 8.27384 11.2721 7.53885 11.9549 6.94301C12.6285 6.33271 13.4266 5.87607 14.2941 5.60469C15.1616 5.33331 16.0777 5.25368 16.979 5.37131C18.5325 5.62356 19.9426 6.42853 20.9497 7.63802C21.9568 8.84751 22.4931 10.3801 22.4598 11.9536V17.9986C22.4577 18.3522 22.5255 18.7027 22.6592 19.03C22.7929 19.3574 22.9899 19.6551 23.2389 19.9061L24.8375 21.4913H7.40102Z"
                                        fill="inherit"
                                    />
                                </svg>
                            </Badge>
                        </IconButton>
                        <NotificationsMenu states={states} actions={actions} />
                        <Link href={Routes.teacherProfile}>
                            <a>
                                <Box onClick={controleMobileSideNav} sx={style.profile.meImage}>
                                    <Avatar
                                        alt={`أ / ${userState.user?.firstName} ${userState.user?.lastName}`}
                                        src={`${Urls.URL_MAIN}/${userState.user?.imagePath}`}
                                        width={50}
                                        height={50}
                                    />
                                </Box>
                            </a>
                        </Link>
                    </Box>
                </Box>
            )}
        </>
    )
}

export default Header
