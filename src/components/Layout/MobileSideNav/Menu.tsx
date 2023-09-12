import Footer from './Footer'
import NavLink from './NavLink'
import { useContext } from 'react'
import { DarkThemeContext } from 'context/ThemeContext'

// MUI
import Box from '@mui/material/Box'

type Props = {
    controleMobileSideNav: Function
    mobileSideNavState: Boolean
    currentPath: any
}

const Menu: React.FC<Props> = ({ currentPath, controleMobileSideNav, mobileSideNavState }) => {
    const { mainColors } = useContext(DarkThemeContext)

    const style: any = {
        container: {
            width: '100%',
            position: 'absolute',
            top: '80px',
            overflow: 'hidden',
            zIndex: '100',
            transition: '.3s linear',
        },
        menu: {
            width: '100%',
            height: 'calc(100vh - (80px + 66px))',
            paddingY: '17px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            backgroundColor: mainColors.backgroundColor.sideNav,
            borderBottom: `solid 1px ${mainColors.primary.dark}`,
            overflowY: 'auto',
            overflowX: 'hidden',
            '&::-webkit-scrollbar': {
                width: '7px',
            },
            '&::-webkit-scrollbar-track': {
                boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
                webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
            },
            '&::-webkit-scrollbar-thumb': {
                border: `1px solid ${mainColors.primary.main}`,
            },
        },
    }

    const classes = {
        container: {
            height: mobileSideNavState ? 'calc(100vh - 80px)' : '0px',
        },
    }

    return (
        <Box sx={[style.container, classes.container]}>
            <Box sx={style.menu}>
                <Box>
                    <NavLink
                        currentPath={currentPath}
                        controleMobileSideNav={controleMobileSideNav}
                        path="/teacher/teacher-home"
                        content="الرئيسية"
                    >
                        <svg
                            width="25"
                            height="25"
                            viewBox="0 0 22 24"
                            fill="transparent"
                            stroke={mainColors.primary.main}
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1 8.41165L11 1L21 8.41165V20.0585C21 20.6201 20.7659 21.1588 20.3491 21.5559C19.9324 21.953 19.3671 22.1761 18.7778 22.1761H3.22222C2.63285 22.1761 2.06762 21.953 1.65087 21.5559C1.23413 21.1588 1 20.6201 1 20.0585V8.41165Z"
                                stroke="inherit"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M7.66626 22.1769V11.5889H14.3329V22.1769"
                                stroke="inherit"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </NavLink>
                    <NavLink
                        currentPath={currentPath}
                        controleMobileSideNav={controleMobileSideNav}
                        path="/teacher/students"
                        content="الطلاب"
                    >
                        <svg
                            width="25"
                            height="25"
                            viewBox="0 0 22 27"
                            fill={mainColors.primary.main}
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M0 23.8004V27H22V23.8004C21.9921 22.9257 21.8102 22.0611 21.4646 21.2559C21.119 20.4508 20.6165 19.7209 19.9857 19.1079C19.355 18.4949 18.6084 18.0108 17.7886 17.6833C16.9688 17.3558 16.0918 17.1913 15.2077 17.1991H14.835C15.7156 16.7289 16.4932 16.0904 17.1226 15.3207C17.752 14.551 18.2208 13.6653 18.5016 12.715H18.6098C18.8565 12.7213 19.1021 12.6791 19.3321 12.5907C19.5622 12.5024 19.7723 12.3697 19.9501 12.2004C20.1279 12.0311 20.27 11.8286 20.3681 11.6045C20.4661 11.3804 20.5182 11.1393 20.5213 10.8952V10.3123C20.5183 9.88749 20.3672 9.4767 20.0934 9.14944C19.8195 8.82217 19.4399 8.59852 19.0186 8.5163C19.0369 8.25494 19.0369 7.99264 19.0186 7.73128V7.6837C19.0301 7.48563 19.0301 7.28706 19.0186 7.08899C18.8544 5.3503 18.0517 3.7315 16.7622 2.53907C15.4728 1.34663 13.7863 0.66332 12.0219 0.618502H11.9377C11.9105 0.588398 11.8771 0.564352 11.8398 0.547949C11.8025 0.531546 11.7621 0.52316 11.7213 0.523347C11.6633 0.527801 11.6068 0.54379 11.5551 0.570359C11.5035 0.596927 11.4578 0.633528 11.4208 0.677973C11 0.249779 10.6874 0 10.4109 0C9.74924 0.142679 9.11568 0.391803 8.53552 0.737445L8.247 0.97533C6.7532 1.41197 5.4424 2.3153 4.5106 3.55023C3.5788 4.78516 3.07607 6.28534 3.0776 7.82643V7.96916C3.0776 8.19515 3.0776 8.40925 3.0776 8.61145C2.64727 8.67614 2.25408 8.88972 1.96792 9.21422C1.68177 9.53872 1.52119 9.9531 1.51475 10.3837V10.8952C1.51945 11.1373 1.5723 11.3761 1.67031 11.598C1.76831 11.8199 1.90954 12.0205 2.08593 12.1884C2.26232 12.3563 2.47041 12.4882 2.69832 12.5765C2.92623 12.6648 3.16949 12.7078 3.41421 12.7031H3.53443C3.81344 13.6574 4.28265 14.5468 4.91444 15.319C5.54622 16.0912 6.32779 16.7304 7.21312 17.1991H6.84044C5.95275 17.1865 5.07128 17.3475 4.2466 17.6727C3.42192 17.998 2.67026 18.4811 2.03474 19.0944C1.39921 19.7077 0.892323 20.4392 0.543154 21.2467C0.193985 22.0543 0.00940402 22.9221 0 23.8004ZM18.8142 9.61057C18.9787 9.64762 19.126 9.73795 19.2327 9.86724C19.3394 9.99652 19.3995 10.1574 19.4033 10.3242V10.8952C19.399 11.0775 19.3286 11.2522 19.2051 11.3876C19.0815 11.5229 18.9129 11.6099 18.7301 11.6326C18.7684 11.3407 18.7885 11.0468 18.7902 10.7524C18.784 10.4697 18.7599 10.1877 18.718 9.90793C18.7566 9.811 18.7888 9.71167 18.8142 9.61057ZM2.63279 10.8952V10.3123C2.63708 10.1331 2.70614 9.96142 2.82746 9.8283C2.94877 9.69518 3.11429 9.60949 3.29399 9.58678V10.0031C3.29399 10.2529 3.29399 10.5026 3.29399 10.7524C3.29566 11.0468 3.31574 11.3407 3.3541 11.6326C3.16161 11.6235 2.97984 11.5422 2.84583 11.4052C2.71181 11.2682 2.63563 11.0858 2.63279 10.8952ZM11.0481 20.9458C10.0916 20.9458 9.17423 20.5699 8.49787 19.9007C7.82151 19.2315 7.44153 18.3239 7.44153 17.3775V17.2943L7.88634 17.5084C8.88654 17.9285 9.96147 18.1469 11.0481 18.1507C12.1356 18.1552 13.2122 17.9365 14.2098 17.5084L14.6546 17.2943C14.6546 17.2943 14.6546 17.2943 14.6546 17.3775C14.6563 17.8501 14.563 18.3184 14.3802 18.755C14.1974 19.1917 13.9288 19.588 13.5899 19.9211C13.251 20.2542 12.8486 20.5173 12.4061 20.6953C11.9635 20.8732 11.4897 20.9624 11.012 20.9577L11.0481 20.9458ZM4.6765 12.5485C4.56244 12.1843 4.48591 11.8098 4.44809 11.4304C4.42935 11.2048 4.42935 10.978 4.44809 10.7524C4.45173 10.4375 4.47987 10.1234 4.53224 9.81277C4.53224 9.67004 4.59235 9.52731 4.61639 9.38458C5.60035 8.74989 6.45979 7.94389 7.15301 7.00573C7.15301 7.00573 14.5344 8.7185 17.2153 8.9207H17.4437C17.5396 9.22488 17.6158 9.53475 17.6721 9.84846C17.7245 10.1591 17.7526 10.4732 17.7563 10.7881C17.7691 11.0139 17.7691 11.2403 17.7563 11.4661C17.7185 11.8454 17.6419 12.22 17.5279 12.5841C17.0769 13.9039 16.219 15.0505 15.075 15.8626C13.931 16.6748 12.5583 17.1116 11.1503 17.1116C9.74221 17.1116 8.36959 16.6748 7.22556 15.8626C6.08152 15.0505 5.22366 13.9039 4.77268 12.5841L4.6765 12.5485Z"
                                fill="inherit"
                            />
                            <path
                                d="M10.0262 9.7064C10.0019 9.67593 9.97083 9.65147 9.93535 9.63495C9.89988 9.61843 9.861 9.61032 9.82181 9.61125H5.12126C5.07902 9.60974 5.03707 9.61875 4.99926 9.63745C4.96145 9.65616 4.929 9.68395 4.90487 9.71829C4.87481 9.79069 4.87481 9.87189 4.90487 9.94429L5.53001 12.1209C5.54373 12.1764 5.57629 12.2256 5.62223 12.2603C5.66817 12.2949 5.72473 12.3129 5.78247 12.3112H9.38902C9.44842 12.3123 9.50631 12.2926 9.55248 12.2556C9.59866 12.2187 9.63018 12.1668 9.64148 12.109L9.89394 10.8958C9.98492 10.7853 10.1059 10.7028 10.2426 10.6579C10.493 10.5681 10.7577 10.5238 11.024 10.5271C11.2865 10.5228 11.5474 10.5672 11.7934 10.6579C11.9233 10.7035 12.0392 10.7813 12.13 10.8839L12.3825 12.1447C12.3963 12.2034 12.4301 12.2556 12.4783 12.2924C12.5265 12.3292 12.5861 12.3485 12.6469 12.3469H16.2535C16.3112 12.3486 16.3678 12.3306 16.4137 12.2959C16.4597 12.2613 16.4922 12.2121 16.506 12.1566L17.1191 9.97997C17.137 9.94495 17.1464 9.90624 17.1464 9.86697C17.1464 9.82771 17.137 9.789 17.1191 9.75398C17.0936 9.72108 17.0608 9.69434 17.0233 9.67579C16.9859 9.65725 16.9446 9.64738 16.9027 9.64693H12.2021C12.1368 9.64505 12.0729 9.66612 12.0218 9.7064C12.0039 9.74142 11.9945 9.78013 11.9945 9.8194C11.9945 9.85866 12.0039 9.89737 12.0218 9.93239V10.1227C11.7152 10.0058 11.3885 9.94924 11.0601 9.95618C10.7277 9.9495 10.3971 10.006 10.0863 10.1227V9.93239C10.0947 9.89269 10.0936 9.85161 10.0832 9.81239C10.0727 9.77317 10.0532 9.73688 10.0262 9.7064ZM9.40104 10.6342C9.39876 10.6619 9.39876 10.6897 9.40104 10.7174L9.18465 11.776H5.93875L5.4699 10.1227H9.50924L9.40104 10.6342ZM16.6142 10.1346L16.1453 11.7879H12.8633L12.6469 10.7293C12.6532 10.7019 12.6532 10.6735 12.6469 10.646L12.5508 10.1465L16.6142 10.1346Z"
                                fill="inherit"
                            />
                            <path
                                d="M13.2239 14.071C13.1558 14.5928 12.898 15.0722 12.4986 15.4195C12.0993 15.7669 11.5857 15.9584 11.054 15.9584C10.5222 15.9584 10.0087 15.7669 9.60935 15.4195C9.21 15.0722 8.95216 14.5928 8.88403 14.071H13.2239Z"
                                fill="inherit"
                            />
                        </svg>
                    </NavLink>
                    <NavLink
                        currentPath={currentPath}
                        controleMobileSideNav={controleMobileSideNav}
                        path="/teacher/groups"
                        content="المجموعات"
                    >
                        <svg
                            width="25"
                            height="25"
                            viewBox="0 0 24 20"
                            fill={mainColors.primary.main}
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M9.04185 2.27904e-08H15.0666C15.16 2.27904e-08 15.2496 0.04109 15.3157 0.114229C15.3818 0.187368 15.4189 0.286566 15.4189 0.39V5.52C15.4189 5.62078 15.3827 5.71744 15.3184 5.7887C15.254 5.85997 15.1667 5.9 15.0756 5.9H9.04185C8.95081 5.9 8.86351 5.85997 8.79914 5.7887C8.73477 5.71744 8.69861 5.62078 8.69861 5.52V0.39C8.6974 0.339263 8.70539 0.288772 8.72209 0.241508C8.7388 0.194243 8.76389 0.151164 8.79589 0.114812C8.82788 0.0784597 8.86613 0.049571 8.90837 0.0298519C8.95062 0.0101329 8.996 -1.75548e-05 9.04185 2.27904e-08Z"
                                fill="inherit"
                            />
                            <path
                                d="M17.623 13.8501H23.6478C23.7412 13.8501 23.8308 13.8912 23.8969 13.9643C23.963 14.0375 24.0001 14.1367 24.0001 14.2401V19.3701C24.0001 19.4735 23.963 19.5727 23.8969 19.6459C23.8308 19.719 23.7412 19.7601 23.6478 19.7601H17.623C17.532 19.7601 17.4447 19.7201 17.3803 19.6488C17.3159 19.5775 17.2798 19.4809 17.2798 19.3801V14.2401C17.2798 14.1384 17.3156 14.0407 17.3797 13.9678C17.4439 13.8949 17.5312 13.8527 17.623 13.8501Z"
                                fill="inherit"
                            />
                            <path
                                d="M9.04173 13.8501H15.0665C15.1599 13.8501 15.2495 13.8912 15.3156 13.9643C15.3817 14.0375 15.4188 14.1367 15.4188 14.2401V19.3701C15.4188 19.4735 15.3817 19.5727 15.3156 19.6459C15.2495 19.719 15.1599 19.7601 15.0665 19.7601H9.04173C8.95069 19.7601 8.86339 19.7201 8.79902 19.6488C8.73465 19.5775 8.69849 19.4809 8.69849 19.3801V14.2401C8.69846 14.1384 8.73433 14.0407 8.79845 13.9678C8.86257 13.8949 8.94987 13.8527 9.04173 13.8501Z"
                                fill="inherit"
                            />
                            <path
                                d="M0.34324 13.8501H6.36801C6.45904 13.8501 6.54635 13.8901 6.61072 13.9614C6.67509 14.0327 6.71125 14.1293 6.71125 14.2301V19.3601C6.71125 19.4609 6.67509 19.5575 6.61072 19.6288C6.54635 19.7001 6.45904 19.7401 6.36801 19.7401H0.34324C0.252207 19.7401 0.164903 19.7001 0.100533 19.6288C0.0361628 19.5575 1.90661e-08 19.4609 1.90661e-08 19.3601V14.2401C-3.01911e-05 14.1384 0.0358414 14.0407 0.0999643 13.9678C0.164087 13.8949 0.251386 13.8527 0.34324 13.8501Z"
                                fill="inherit"
                            />
                            <path
                                d="M21.3621 9.43004C21.3598 9.32835 21.3216 9.2317 21.2558 9.16071C21.19 9.08972 21.1017 9.05001 21.0098 9.05004H12.754V6.93004C12.7517 6.8274 12.7139 6.72967 12.6483 6.65707C12.5827 6.58448 12.4944 6.54257 12.4017 6.54004H11.7062C11.6144 6.54265 11.5271 6.58489 11.463 6.65774C11.3988 6.7306 11.363 6.82831 11.363 6.93004V9.05004H3.08006C3.03423 9.0487 2.98862 9.05755 2.94593 9.07604C2.90324 9.09454 2.86432 9.12232 2.83149 9.15774C2.79865 9.19316 2.77256 9.2355 2.75475 9.28227C2.73694 9.32904 2.72777 9.37928 2.72778 9.43004V9.57004V12.66C2.72778 12.7635 2.7649 12.8627 2.83096 12.9358C2.89703 13.009 2.98663 13.05 3.08006 13.05H3.77557C3.86742 13.0474 3.95472 13.0052 4.01885 12.9323C4.08297 12.8595 4.11884 12.7618 4.11881 12.66V10.58H11.3449V12.7C11.3449 12.8018 11.3808 12.8995 11.4449 12.9723C11.509 13.0452 11.5963 13.0874 11.6882 13.09H12.3837C12.4764 13.0875 12.5647 13.0456 12.6302 12.973C12.6958 12.9004 12.7337 12.8027 12.7359 12.7V10.58H19.9621V12.77C19.9609 12.8208 19.9688 12.8713 19.9855 12.9185C20.0023 12.9658 20.0274 13.0089 20.0593 13.0452C20.0913 13.0816 20.1296 13.1105 20.1718 13.1302C20.2141 13.1499 20.2595 13.1601 20.3053 13.16H21.0008C21.0474 13.1614 21.0938 13.1523 21.1371 13.1332C21.1804 13.114 21.2197 13.0854 21.2527 13.0489C21.2856 13.0124 21.3115 12.9688 21.3288 12.9209C21.3461 12.873 21.3543 12.8216 21.3531 12.77V9.54004L21.3621 9.43004Z"
                                fill="inherit"
                            />
                        </svg>
                    </NavLink>
                    <NavLink
                        currentPath={currentPath}
                        controleMobileSideNav={controleMobileSideNav}
                        path="/teacher/exams"
                        content="الامتحانات"
                    >
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
                    </NavLink>
                    <NavLink
                        currentPath={currentPath}
                        controleMobileSideNav={controleMobileSideNav}
                        path="/teacher/headquarters"
                        content="المقرات"
                    >
                        <svg
                            width="25"
                            height="25"
                            viewBox="0 0 16 25"
                            fill={mainColors.primary.main}
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M7.99485 0.03099C5.87867 0.0336607 3.84961 0.90505 2.3514 2.4546C0.853199 4.00414 0.00776901 6.10575 0 8.29982C0.0440607 9.656 0.378742 10.985 0.979761 12.1904C3.10054 16.5945 5.45897 20.8711 8.04384 25C10.6294 20.8697 12.9911 16.5932 15.1177 12.1904C15.661 10.9682 15.9609 9.64497 15.9995 8.29982C16.0113 7.20654 15.8123 6.12183 15.4142 5.10938C15.0162 4.09693 14.427 3.17715 13.6813 2.40403C12.9357 1.63092 12.0485 1.02006 11.072 0.607315C10.0955 0.194572 9.04932 -0.011732 7.99485 0.00051498V0.03099ZM7.99485 11.7739C7.32037 11.7739 6.66115 11.5658 6.10105 11.1762C5.54095 10.7866 5.10528 10.233 4.84946 9.58596C4.59364 8.9389 4.52924 8.22757 4.66444 7.54245C4.79964 6.85733 5.12833 6.2294 5.60871 5.73851C6.08909 5.24762 6.69944 4.91598 7.36213 4.78576C8.02482 4.65554 8.70988 4.73263 9.33019 5.00723C9.9505 5.28183 10.478 5.74152 10.8456 6.32783C11.2132 6.91414 11.4043 7.60058 11.3946 8.29982C11.3843 9.22669 11.0212 10.1118 10.3845 10.7625C9.74775 11.4131 8.88888 11.7767 7.99485 11.7739Z"
                                fill="inherit"
                            />
                        </svg>
                    </NavLink>
                    <NavLink
                        currentPath={currentPath}
                        controleMobileSideNav={controleMobileSideNav}
                        path="/teacher/years"
                        content="العام الدراسي"
                    >
                        <svg
                            width="25"
                            height="25"
                            viewBox="0 0 22 23"
                            fill={mainColors.primary.main}
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M18.9697 2.92525C18.9697 2.14324 18.3335 1.50706 17.5515 1.50706H16.7128V2.6551C16.7128 2.85064 16.5529 3.01051 16.3573 3.01051C16.1618 3.01051 16.0019 2.85064 16.0019 2.6551V0.355413C16.0019 0.15987 15.8421 0 15.6465 0C15.451 0 15.2911 0.15987 15.2911 0.355413V1.50345H14.2498V2.6515C14.2498 2.84704 14.0899 3.00691 13.8943 3.00691C13.6988 3.00691 13.5389 2.84704 13.5389 2.6515L13.5388 1.50345V0.355413C13.5388 0.15987 13.3789 0 13.1834 0C12.9878 0 12.8279 0.15987 12.8279 0.355413V1.50345H11.7866V2.6515C11.7866 2.84704 11.6267 3.00691 11.4312 3.00691C11.2356 3.00691 11.0758 2.84704 11.0758 2.6515V0.355413C11.0758 0.15987 10.9159 0 10.7204 0C10.5248 0 10.365 0.15987 10.365 0.355413V1.50345H9.32361V2.6515C9.32361 2.84704 9.16374 3.00691 8.9682 3.00691C8.77265 3.00691 8.61278 2.84704 8.61278 2.6515L8.61262 1.50345V0.355413C8.61262 0.15987 8.45275 0 8.25721 0C8.06166 0 7.9018 0.15987 7.9018 0.355413V1.50345H6.86045V2.6515C6.86045 2.84704 6.70058 3.00691 6.50504 3.00691C6.30949 3.00691 6.14963 2.84704 6.14963 2.6515L6.14946 1.50345V0.355413C6.14946 0.15987 5.98959 0 5.79405 0C5.59851 0 5.43864 0.15987 5.43864 0.355413V1.50345H4.39729V2.6515C4.39729 2.84704 4.23742 3.00691 4.04188 3.00691C3.84634 3.00691 3.68647 2.84704 3.68647 2.6515L3.6863 1.50345V0.355413C3.6863 0.15987 3.52644 0 3.33089 0C3.13535 0 2.97548 0.15987 2.97548 0.355413V1.50345H1.41868C0.636673 1.50345 0.000488281 2.13968 0.000488281 2.92165V4.33984H18.9733V2.92521L18.9697 2.92525Z"
                                fill="inherit"
                            />
                            <path
                                d="M10.1067 8.52803L15.1004 10.0636L20.0979 8.52803L15.1004 6.99268L10.1067 8.52803Z"
                                fill="inherit"
                            />
                            <path
                                d="M21.4142 21.2434H10.0154C9.35437 21.2434 8.83188 20.6391 8.97409 19.9531C9.07718 19.4555 9.53927 19.1107 10.0475 19.1107H21.4178C21.7341 19.1107 21.99 18.8548 21.99 18.5385C21.99 18.2222 21.7341 17.9663 21.4178 17.9663H10.0903C8.91373 17.9663 7.88302 18.8514 7.80477 20.0278C7.71952 21.3144 8.74303 22.3915 10.012 22.3915H21.4107C21.727 22.3915 21.9829 22.1355 21.9829 21.8192C21.9865 21.5029 21.7306 21.2434 21.4143 21.2434L21.4142 21.2434Z"
                                fill="inherit"
                            />
                            <path
                                d="M10.4533 12.8335C10.137 12.8335 9.8811 13.0894 9.8811 13.4057C9.8811 13.722 10.137 13.9779 10.4533 13.9779H19.7764C20.4374 13.9779 20.9599 14.5822 20.8177 15.2682C20.7146 15.7658 20.2525 16.1105 19.7443 16.1105H10.4535C10.1372 16.1105 9.88127 16.3665 9.88127 16.6828C9.88127 16.9991 10.1372 17.255 10.4535 17.255H19.6982C20.8747 17.255 21.9054 16.3699 21.9837 15.1935C22.069 13.9069 21.0454 12.8298 19.7765 12.8298L10.4534 12.83L10.4533 12.8335Z"
                                fill="inherit"
                            />
                            <path
                                d="M19.7413 9.37844V10.0893C19.5636 10.2066 19.4426 10.4056 19.4426 10.6366C19.4426 10.9956 19.7341 11.2906 20.0967 11.2906C20.4557 11.2906 20.7507 10.9992 20.7507 10.6366C20.7507 10.4092 20.6334 10.2066 20.4521 10.0893V9.16162L19.7413 9.37844Z"
                                fill="inherit"
                            />
                            <path
                                d="M10.0454 19.8245C9.8641 19.8245 9.70063 19.9418 9.66872 20.0982C9.64025 20.2404 9.69 20.3435 9.73974 20.4039C9.80732 20.4857 9.90681 20.5355 10.0135 20.5355H20.7545C20.719 20.3008 20.719 20.0627 20.7545 19.8281H10.0453L10.0454 19.8245Z"
                                fill="inherit"
                            />
                            <path
                                d="M15.0988 10.8097L11.7151 9.76831V12.1248H18.4862V9.76831L15.0988 10.8097Z"
                                fill="inherit"
                            />
                            <path
                                d="M9.35847 17.3472C9.22691 17.1304 9.15229 16.8745 9.17013 16.5973C9.21627 15.9077 9.8384 15.3995 10.5279 15.3995H19.7442C19.9255 15.3995 20.089 15.2822 20.1209 15.1257C20.1493 14.9835 20.0996 14.8804 20.0499 14.8201C19.9823 14.7382 19.8828 14.6885 19.7761 14.6885L10.4886 14.6887C9.8773 14.6887 9.31932 14.2729 9.19479 13.6756C9.02412 12.851 9.65687 12.1224 10.453 12.1224H11.0075V9.54547L8.79323 8.86312C8.45909 8.76003 8.45909 8.2873 8.79323 8.18421L15.1023 6.24352L18.9728 7.43429V5.04932H0V18.1329C0 18.9149 0.636226 19.5511 1.41819 19.5511H7.16174C7.40358 18.4704 8.26725 17.6174 9.35837 17.3473L9.35847 17.3472ZM6.2059 11.0599H8.69036V13.5444H6.2059V11.0599ZM4.60998 17.4255H2.12895V14.9411H4.61341V17.4255H4.60998ZM4.60998 13.5443H2.12895V11.0599H4.61341V13.5443H4.60998ZM4.60998 9.66296H2.12895V7.1785H4.61341V9.66296H4.60998ZM6.2059 17.4256V14.9412H8.69036V17.4256H6.2059Z"
                                fill="inherit"
                            />
                        </svg>
                    </NavLink>
                </Box>
            </Box>
            <Footer />
        </Box>
    )
}

export default Menu
