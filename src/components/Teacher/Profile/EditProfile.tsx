import Urls from 'constant/urls'
import MyAvatar from 'components/MyAvatar'
import { useTheme } from 'context/ThemeContext'
import MyUploadFile from 'components/MyUploadFile'

// MUI
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

type Props = {
    data: any;
    states: any;
    actions: any;
}

const EditProfileC: React.FC<Props> = ({ data, states, actions }) => {
    const { mainColors, darkMode } = useTheme()

    const style = {
        container: {
            position: 'relative',
            display: 'flex',
            alignItems: 'start',
            flexDirection: 'column',
            flexWrap: 'wrap',
            gap: '55px',
        },
        row: {
            gap: '59px',
            display: 'flex',
            alignItems: 'start',
            flexWrap: 'wrap',
        },
        column: {
            gap: '25px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            flexWrap: 'wrap',
        },
        teacherImage: {
            borderRadius: '20px',
            border: `2px solid ${mainColors.primary.main} !important`,
        },
        card: {
            boxShadow: darkMode ? 'none' : '0px 0px 15px 0px #B6D5F0',
            padding: '27px 29px',
            backgroundColor: mainColors.paper.main,
            borderRadius: '12px',
            border: `2px solid ${mainColors.paper.border}`,
            display: 'flex',
            flexDirection: 'column',
            gap: '27px',
            width: 'fit-content'
        },
        line: {
            width: '100%',
            border: `1px solid ${mainColors.primary.main}`
        },
        cardTitle: {
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '20px'
        },
        cardBody: {
            display: 'flex',
            alignItems: 'start',
            flexWrap: 'wrap',
            gap: '24px'
        },
        cardItem: {
            flex: '40%',
            gap: '15px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            width: 'fit-content'
        },
        fullCardItem: {
            flex: '100%',
            gap: '15px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            width: 'fit-content'
        },
        icons: {
            display: 'flex',
            flexWarp: 'warp',
            gap: '10px',
            alignItems: 'start',
            justifyContent: 'center',
        },
        coverButton: {
            padding: '5px 40px',
            borderRadius: '5px',
        },
        coverBox: {
            width: '504px',
            height: '170px',
            maxWidth: '504px',
            display: 'flex',
            borderRadius: '12px',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            boxShadow: darkMode ? null : '0px 0px 15px 0px #B6D5F0'
        }
    }

    return (
        <Box sx={style.container}>
            <Typography variant='h4' fontWeight={700} color={mainColors.title.main}>
                هوية المدرس الشخصية :- 
            </Typography>
            {
                data ?
                <>
                    <Box sx={style.card}>
                        <Box sx={style.cardTitle}>
                            <MyAvatar 
                                width='140'
                                height='140'
                                alt={data.firstName + data.lastName} 
                                src={states.profileImage || `${Urls.URL_MAIN}/${data.image}`}
                            />
                            <Box sx={style.column}>
                                <Typography variant='h3' color={'primary'}>
                                    {'الصورة الشخصية:- '}
                                </Typography>
                                <MyUploadFile content='تعديل' valueSetter={actions.ProfileImageHandler} />
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={style.card}>
                        <Box sx={style.cardTitle}>
                            <Box sx={style.column}>
                                <Typography variant='h3' color={'primary'}>
                                    صورة رأس الملف الشخصي:- 
                                </Typography>
                                <Box>
                                    <Typography variant='h5' maxWidth={280} color={mainColors.title.main}>
                                        تظهر صورة رأس الملف في الصفحة الشخصية بالمدرس الموجودة داخل البوابة الخاصة بالطالب                                  </Typography>
                                    <Typography variant='h6' color={mainColors.title.main}>
                                        ينصح بشدة تحميل صور مقاس 1512*510 px
                                    </Typography>
                                </Box>
                            </Box>
                            {
                                data && 
                                <Box sx={[
                                    style.coverBox, 
                                    {
                                        backgroundImage: `url(${states.coverImage})` || `url(${Urls.URL_MAIN}/${data.coverImage})`, 
                                    }
                                ]}>
                                    <Button 
                                        component="label"
                                        variant="outlined"
                                        sx={style.coverButton}
                                        color={'primary'}
                                    >
                                        <input
                                            hidden
                                            type="file"
                                            accept="image/png, image/jpeg"
                                            onChange={(e) => actions.CoverImageHandler(e.target.files)} 
                                        />
                                        <Typography fontWeight={700} variant='h4'>
                                            تحميل
                                        </Typography>
                                    </Button>
                                </Box>
                            }
                        </Box>
                    </Box>
                </>
                // <Box sx={style.card}>
                //     <Box sx={style.cardTitle}>
                //         <Typography variant='h3' color={'primary'}>
                //             بيانات الاتصال
                //         </Typography>
                //     </Box>
                //     <hr style={style.line} />
                //     <Box sx={style.cardBody}>
                //         <Box sx={style.fullCardItem}>
                //             <Typography variant='h5' color={'primary'}>
                //                 الهاتف المحمول
                //             </Typography>
                //             <MyChip content={data.phone} />
                //         </Box>
                //         <Box sx={style.fullCardItem}>
                //             <Typography variant='h5' color={'primary'}>
                //                 البريد الالكتروني
                //             </Typography>
                //             <MyChip content={data.email} />
                //         </Box>
                //         <Box sx={style.icons}>
                //             {
                //                 data.webSite &&
                //                 <Link href={data.webSite}>
                //                     <svg width="29" height="29" viewBox="0 0 29 29" fill={mainColors.primary.main} xmlns="http://www.w3.org/2000/svg">
                //                         <path id="Vector" d="M20.822 17.4C20.938 16.443 21.025 15.486 21.025 14.5C21.025 13.514 20.938 12.557 20.822 11.6H25.723C25.955 12.528 26.1 13.4995 26.1 14.5C26.1 15.5005 25.955 16.472 25.723 17.4M18.2555 25.462C19.1255 23.8525 19.7925 22.1125 20.2565 20.3H24.534C23.1292 22.719 20.9005 24.5514 18.2555 25.462ZM17.893 17.4H11.107C10.962 16.443 10.875 15.486 10.875 14.5C10.875 13.514 10.962 12.5425 11.107 11.6H17.893C18.0235 12.5425 18.125 13.514 18.125 14.5C18.125 15.486 18.0235 16.443 17.893 17.4ZM14.5 26.042C13.2965 24.302 12.325 22.3735 11.7305 20.3H17.2695C16.675 22.3735 15.7035 24.302 14.5 26.042ZM8.7 8.7H4.466C5.85634 6.27446 8.08345 4.43916 10.73 3.538C9.86 5.1475 9.2075 6.8875 8.7 8.7ZM4.466 20.3H8.7C9.2075 22.1125 9.86 23.8525 10.73 25.462C8.089 24.5509 5.86503 22.7182 4.466 20.3ZM3.277 17.4C3.045 16.472 2.9 15.5005 2.9 14.5C2.9 13.4995 3.045 12.528 3.277 11.6H8.178C8.062 12.557 7.975 13.514 7.975 14.5C7.975 15.486 8.062 16.443 8.178 17.4M14.5 2.9435C15.7035 4.6835 16.675 6.6265 17.2695 8.7H11.7305C12.325 6.6265 13.2965 4.6835 14.5 2.9435ZM24.534 8.7H20.2565C19.8027 6.90411 19.1307 5.17055 18.2555 3.538C20.9235 4.4515 23.142 6.293 24.534 8.7ZM14.5 0C6.4815 0 0 6.525 0 14.5C0 18.3456 1.52767 22.0338 4.24695 24.753C5.5934 26.0995 7.19187 27.1676 8.95109 27.8963C10.7103 28.6249 12.5958 29 14.5 29C18.3456 29 22.0338 27.4723 24.753 24.753C27.4723 22.0338 29 18.3456 29 14.5C29 12.5958 28.6249 10.7103 27.8963 8.95109C27.1676 7.19187 26.0995 5.5934 24.753 4.24695C23.4066 2.9005 21.8081 1.83244 20.0489 1.10375C18.2897 0.375054 16.4042 0 14.5 0Z" fill="inherit"/>
                //                     </svg>
                //                 </Link>
                //             }
                //             {
                //                 data.facebook &&
                //                 <Link href={data.facebook}>
                //                     <svg width="29" height="29" viewBox="0 0 29 29" fill={mainColors.primary.main} xmlns="http://www.w3.org/2000/svg">
                //                         <path id="Vector" d="M16.9212 14.2478L13.5288 12.6648C13.2328 12.5274 12.9896 12.6815 12.9896 13.0092V15.9908C12.9896 16.3185 13.2328 16.4726 13.5288 16.3352L16.9197 14.7522C17.2172 14.6133 17.2172 14.3867 16.9212 14.2478ZM14.5 0C6.49177 0 0 6.49177 0 14.5C0 22.5082 6.49177 29 14.5 29C22.5082 29 29 22.5082 29 14.5C29 6.49177 22.5082 0 14.5 0ZM14.5 20.3906C7.07781 20.3906 6.94792 19.7215 6.94792 14.5C6.94792 9.27849 7.07781 8.60937 14.5 8.60937C21.9222 8.60937 22.0521 9.27849 22.0521 14.5C22.0521 19.7215 21.9222 20.3906 14.5 20.3906Z" fill="inherit"/>
                //                     </svg>
                //                 </Link>
                //             }
                //             {
                //                 data.twitter &&
                //                 <Link href={data.twitter}>
                //                     <svg width="29" height="29" viewBox="0 0 29 29" fill={mainColors.primary.main} xmlns="http://www.w3.org/2000/svg">
                //                         <path id="Vector" d="M14.5 0C6.49263 0 0 6.49263 0 14.5C0 22.5074 6.49263 29 14.5 29C22.5074 29 29 22.5074 29 14.5C29 6.49263 22.5074 0 14.5 0ZM21.4684 10.93C21.4781 11.0821 21.4781 11.2407 21.4781 11.3961C21.4781 16.1474 17.8596 21.6205 11.2472 21.6205C9.20815 21.6205 7.31797 21.0282 5.72556 20.0087C6.01685 20.0411 6.2952 20.054 6.59297 20.054C8.276 20.054 9.8231 19.4844 11.0563 18.5199C9.47679 18.4875 8.14978 17.4518 7.69665 16.0277C8.25011 16.1086 8.74855 16.1086 9.31819 15.9629C8.50492 15.7977 7.77393 15.356 7.24941 14.7129C6.72488 14.0698 6.43919 13.2649 6.44085 12.435V12.3897C6.91663 12.6584 7.47656 12.8234 8.06239 12.8461C7.56991 12.5179 7.16604 12.0732 6.88657 11.5515C6.60709 11.0299 6.46067 10.4473 6.46027 9.85547C6.46027 9.18549 6.63504 8.57377 6.949 8.04297C7.85169 9.15421 8.97812 10.0631 10.2551 10.7105C11.532 11.3579 12.9309 11.7293 14.3608 11.8007C13.8527 9.35703 15.6781 7.37946 17.8725 7.37946C18.9083 7.37946 19.8404 7.81317 20.4974 8.51228C21.3098 8.36016 22.0866 8.05591 22.7792 7.6481C22.5106 8.47991 21.9474 9.18225 21.1998 9.62567C21.9248 9.54799 22.6239 9.34732 23.2712 9.06574C22.7825 9.78426 22.1708 10.4219 21.4684 10.93Z" fill="inherit"/>
                //                     </svg>
                //                 </Link>
                //             }
                //             {
                //                 data.youtube &&
                //                 <Link href={data.youtube}>
                //                     <svg width="29" height="29" viewBox="0 0 29 29" fill={mainColors.primary.main} xmlns="http://www.w3.org/2000/svg">
                //                         <path id="Vector" d="M29 14.5C29 6.496 22.504 0 14.5 0C6.496 0 0 6.496 0 14.5C0 21.518 4.988 27.3615 11.6 28.71V18.85H8.7V14.5H11.6V10.875C11.6 8.0765 13.8765 5.8 16.675 5.8H20.3V10.15H17.4C16.6025 10.15 15.95 10.8025 15.95 11.6V14.5H20.3V18.85H15.95V28.9275C23.2725 28.2025 29 22.0255 29 14.5Z" fill="inherit"/>
                //                     </svg>
                //                 </Link>
                //             }
                //         </Box>
                //     </Box>
                // </Box>
                // <Box sx={style.card}>
                //     <Box sx={style.cardTitle}>
                //         <Typography variant='h3' color={'primary'}>
                //             المجز التعريفي
                //         </Typography>
                //     </Box>
                //     <hr style={style.line} />
                //     <Box sx={style.cardBody}>
                //         <Typography variant='h5' color={'primary'}>
                //             {data.summary}
                //         </Typography>
                //     </Box>
                // </Box> 
                :
                <Typography variant='h2' color={'primary'}>
                    لا يوجد بيانات
                </Typography>
            }
        </Box>
    )
}

export default EditProfileC
