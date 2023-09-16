import Link from 'next/link'
import { Routes } from 'routes/Routes'
import { IStyle } from 'styles/IStyle'
import { useTheme } from 'context/ThemeContext'
import { convertDateToShortDateNoAwait, getTimePeriod } from 'utils/converters'

// MUI
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

type Props = {
    data: any
    states: any
    actions: any
}

const ShowDetails: React.FC<Props> = ({ data }) => {
    const { mainColors, darkMode } = useTheme()
    const style: IStyle = {
        container: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'start',
            gap: '60px',
        },
        inputsContainer: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            rowGap: '70px',
            columnGap: '70px',
            '@media screen and  (max-width: 700px)': {
                gridTemplateColumns: '1fr',
            },
        },
        formContainer: {
            display: 'flex',
            flexDirection: 'column',
            gap: '75px',
        },
        inputWithLabel: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            gap: '25px',
        },
        dataContainer: {
            width: '255px',
            maxWidth: '100%',
            height: '46px',
            display: 'flex',
            alignItems: 'center',
            borderRadius: '7px',
            padding: '16px 17px',
            backgroundColor: mainColors.paper.main,
            border: darkMode ? `1px solid ${mainColors.primary.main}` : 'none',
            boxShadow: `0px 0px 10px 1px ${mainColors.icons.roundedAdd}`,
        },
        examCard: {
            width: '580px',
            maxWidth: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'start',
            gap: '20px',
            cursor: 'pointer',
            overflow: 'hidden',
            borderRadius: '12px',
            border: '1px solid #3F72A4',
            background: mainColors.backgroundColor.sideNav,
        },
        cardTitle: {
            width: '100%',
            padding: '18px 25px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '10px',
        },
        cardBody: {
            paddingX: '25px',
        },
        cardFooter: {
            width: '100%',
            padding: '18px 25px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '10px',
            borderTop: '0.6px solid #3F72A4',
            background: mainColors.linerGradient.primary,
        },
        stateBox: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
        },
    }

    return (
        <Box sx={style.container}>
            {data.examData && (
                <Link
                    key={data.examData.id}
                    href={`${
                        data.examData.state == 'Correcting'
                            ? Routes.teacherCorrectingStudentsList
                            : ''
                    }${data.examData.id}`}
                >
                    <Box sx={style.examCard}>
                        <Box sx={style.cardTitle}>
                            <Typography
                                variant="h2"
                                fontWeight={700}
                                color={mainColors.primary.main}
                                textOverflow={'ellipsis'}
                                overflow={'hidden'}
                            >
                                {data.examData.name}
                            </Typography>
                            {data.examData.isPrime ? (
                                <svg
                                    width="39"
                                    height="39"
                                    viewBox="0 0 39 39"
                                    fill={mainColors.warning.main}
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M28.1838 33.7047C27.9271 33.7058 27.674 33.6452 27.4455 33.5282L19.26 29.2428L11.0745 33.5282C10.8087 33.6679 10.509 33.7303 10.2095 33.7083C9.91005 33.6862 9.62275 33.5805 9.38032 33.4033C9.13789 33.2261 8.95004 32.9844 8.83813 32.7057C8.72622 32.427 8.69474 32.1225 8.74726 31.8269L10.3523 22.7907L3.73966 16.3707C3.53335 16.1648 3.387 15.9067 3.31631 15.6239C3.24562 15.3411 3.25326 15.0445 3.33841 14.7657C3.43144 14.4805 3.60256 14.227 3.83235 14.0341C4.06215 13.8412 4.34141 13.7165 4.63846 13.6743L13.787 12.3422L17.8155 4.10852C17.9469 3.83716 18.1521 3.60831 18.4076 3.44818C18.6631 3.28805 18.9585 3.20312 19.26 3.20312C19.5615 3.20312 19.8569 3.28805 20.1124 3.44818C20.3679 3.60831 20.5731 3.83716 20.7045 4.10852L24.7812 12.3261L33.9297 13.6583C34.2268 13.7005 34.506 13.8251 34.7358 14.018C34.9656 14.211 35.1367 14.4644 35.2298 14.7497C35.3149 15.0284 35.3226 15.3251 35.2519 15.6079C35.1812 15.8906 35.0348 16.1488 34.8285 16.3547L28.2159 22.7747L29.8209 31.8108C29.8782 32.1117 29.8482 32.4227 29.7345 32.7071C29.6207 32.9915 29.4279 33.2374 29.1789 33.4158C28.8883 33.6195 28.5383 33.7211 28.1838 33.7047Z"
                                        fill="inherit"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    width="39"
                                    height="39"
                                    viewBox="0 0 39 39"
                                    fill={mainColors.primary.main}
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M28.1838 33.7057C27.9271 33.7067 27.6739 33.6462 27.4455 33.5291L19.26 29.2438L11.0745 33.5291C10.8087 33.6689 10.509 33.7313 10.2095 33.7092C9.91003 33.6872 9.62274 33.5815 9.38031 33.4043C9.13787 33.227 8.95002 32.9854 8.83811 32.7067C8.7262 32.428 8.69472 32.1235 8.74725 31.8278L10.3522 22.7917L3.73965 16.3717C3.53334 16.1658 3.38698 15.9076 3.31629 15.6249C3.2456 15.3421 3.25324 15.0454 3.3384 14.7667C3.43142 14.4814 3.60254 14.228 3.83234 14.0351C4.06213 13.8422 4.3414 13.7175 4.63845 13.6753L13.7869 12.3431L17.8155 4.1095C17.9469 3.83814 18.1521 3.60929 18.4076 3.44916C18.6631 3.28903 18.9585 3.2041 19.26 3.2041C19.5615 3.2041 19.8569 3.28903 20.1124 3.44916C20.3679 3.60929 20.5731 3.83814 20.7045 4.1095L24.7812 12.3271L33.9297 13.6592C34.2267 13.7015 34.506 13.8261 34.7358 14.019C34.9656 14.2119 35.1367 14.4654 35.2297 14.7506C35.3149 15.0294 35.3225 15.3261 35.2519 15.6088C35.1812 15.8916 35.0348 16.1498 34.8285 16.3556L28.2159 22.7756L29.8209 31.8118C29.8782 32.1127 29.8482 32.4237 29.7344 32.7081C29.6207 32.9925 29.4279 33.2384 29.1789 33.4168C28.8883 33.6205 28.5383 33.7221 28.1838 33.7057ZM19.26 25.8412C19.5173 25.8347 19.7718 25.8956 19.9983 26.0177L26.0491 29.2277L24.8935 22.4707C24.8487 22.2127 24.8677 21.9476 24.9488 21.6987C25.0299 21.4497 25.1708 21.2243 25.359 21.0422L30.174 16.3396L23.433 15.3445C23.1858 15.2947 22.9538 15.1874 22.7558 15.0313C22.5578 14.8751 22.3994 14.6745 22.2934 14.4457L19.26 8.42695L16.2265 14.4457C16.1104 14.6763 15.9404 14.8756 15.7308 15.0264C15.5212 15.1773 15.2784 15.2754 15.0228 15.3124L8.2818 16.3075L13.0968 21.0101C13.285 21.1922 13.4258 21.4176 13.507 21.6665C13.5881 21.9155 13.6071 22.1806 13.5622 22.4386L12.4066 29.1154L18.4575 25.9054C18.7139 25.8101 18.9917 25.7879 19.26 25.8412Z"
                                        fill="inherit"
                                    />
                                </svg>
                            )}
                        </Box>
                        <Box sx={style.cardBody}>
                            <Typography
                                variant="h5"
                                color={mainColors.primary.main}
                                fontWeight={700}
                            >
                                {data.examData.levelName}
                            </Typography>
                        </Box>
                        <Box sx={style.cardFooter}>
                            {data.examData.state == 'Upcoming' && (
                                <Box sx={style.stateBox}>
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                        fill={mainColors.primary.main}
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M8.75 0C3.92875 0 0 3.92875 0 8.75C0 13.5712 3.92875 17.5 8.75 17.5C13.5712 17.5 17.5 13.5712 17.5 8.75C17.5 3.92875 13.5712 0 8.75 0ZM12.5563 11.8737C12.4338 12.0837 12.215 12.1975 11.9875 12.1975C11.8737 12.1975 11.76 12.1713 11.655 12.1012L8.9425 10.4825C8.26875 10.08 7.77 9.19625 7.77 8.4175V4.83C7.77 4.47125 8.0675 4.17375 8.42625 4.17375C8.785 4.17375 9.0825 4.47125 9.0825 4.83V8.4175C9.0825 8.7325 9.345 9.19625 9.61625 9.35375L12.3288 10.9725C12.6438 11.1562 12.7488 11.5588 12.5563 11.8737Z"
                                            fill="inherit"
                                        />
                                    </svg>
                                    <Typography
                                        variant="h6"
                                        color={mainColors.primary.main}
                                        fontWeight={700}
                                    >
                                        معلق
                                    </Typography>
                                </Box>
                            )}
                            {data.examData.state == 'Finished' && (
                                <Box sx={style.stateBox}>
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M8.75 0C3.92875 0 0 3.92875 0 8.75C0 13.5712 3.92875 17.5 8.75 17.5C13.5712 17.5 17.5 13.5712 17.5 8.75C17.5 3.92875 13.5712 0 8.75 0ZM12.9325 6.7375L7.97125 11.6987C7.84875 11.8212 7.6825 11.8913 7.5075 11.8913C7.3325 11.8913 7.16625 11.8212 7.04375 11.6987L4.5675 9.2225C4.31375 8.96875 4.31375 8.54875 4.5675 8.295C4.82125 8.04125 5.24125 8.04125 5.495 8.295L7.5075 10.3075L12.005 5.81C12.2587 5.55625 12.6788 5.55625 12.9325 5.81C13.1863 6.06375 13.1863 6.475 12.9325 6.7375Z"
                                            fill="#29D277"
                                        />
                                    </svg>
                                    <Typography
                                        variant="h6"
                                        color={mainColors.success.main}
                                        fontWeight={700}
                                    >
                                        تم تصحيحه
                                    </Typography>
                                </Box>
                            )}
                            {data.examData.state == 'Active' && (
                                <Box sx={style.stateBox}>
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            opacity="0.4"
                                            d="M8.75 17.7318C13.5825 17.7318 17.5 13.7624 17.5 8.8659C17.5 3.9694 13.5825 0 8.75 0C3.91752 0 0 3.9694 0 8.8659C0 13.7624 3.91752 17.7318 8.75 17.7318Z"
                                            fill="#29D277"
                                        />
                                        <path
                                            d="M8.76959 12.6187C10.8138 12.6187 12.4708 10.9397 12.4708 8.86842C12.4708 6.79722 10.8138 5.11816 8.76959 5.11816C6.72547 5.11816 5.06836 6.79722 5.06836 8.86842C5.06836 10.9397 6.72547 12.6187 8.76959 12.6187Z"
                                            fill="#29D277"
                                        />
                                    </svg>
                                    <Typography
                                        variant="h6"
                                        color={mainColors.success.main}
                                        fontWeight={700}
                                    >
                                        نشط الأن
                                    </Typography>
                                </Box>
                            )}
                            {data.examData.state == 'Correcting' && (
                                <Box sx={style.stateBox}>
                                    <svg
                                        width="19"
                                        height="18"
                                        viewBox="0 0 19 18"
                                        fill={mainColors.primary.main}
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            opacity="0.4"
                                            d="M8.92 17.84C13.8464 17.84 17.84 13.8463 17.84 8.92C17.84 3.99362 13.8464 0 8.92 0C3.99363 0 0 3.99362 0 8.92C0 13.8463 3.99363 17.84 8.92 17.84Z"
                                            fill="inherit"
                                        />
                                        <path
                                            d="M17.5029 1.00061C16.1908 -0.318835 14.908 -0.348156 13.5592 1.00061L12.7309 1.8216C12.6576 1.8949 12.6356 1.99752 12.6649 2.09281C13.178 3.88872 14.6148 5.32545 16.4107 5.83857C16.4327 5.8459 16.4693 5.8459 16.4913 5.8459C16.5646 5.8459 16.6379 5.81658 16.6892 5.76527L17.5029 4.94428C18.1699 4.27723 18.4998 3.6395 18.4998 2.9871C18.4998 2.32738 18.1699 1.67499 17.5029 1.00061Z"
                                            fill="inherit"
                                        />
                                        <path
                                            d="M15.1905 6.44151C14.9926 6.34622 14.802 6.25092 14.6261 6.14097C14.4795 6.05304 14.3328 5.95774 14.1936 5.85512C14.0763 5.78182 13.9443 5.67186 13.8124 5.56191C13.7977 5.55458 13.7538 5.51793 13.6951 5.45929C13.4679 5.27603 13.226 5.0268 12.9987 4.75558C12.9841 4.74092 12.9401 4.69694 12.9035 4.63097C12.8302 4.55033 12.7202 4.41106 12.6249 4.25712C12.5443 4.1545 12.449 4.0079 12.361 3.85396C12.2511 3.67071 12.1558 3.48745 12.0678 3.29686C11.9725 3.09162 11.8992 2.90103 11.8332 2.71777L7.88958 6.66142C7.63302 6.91797 7.38379 7.40177 7.33248 7.76095L7.01728 9.94537C6.95131 10.4072 7.07592 10.8397 7.3618 11.1255C7.6037 11.3674 7.93356 11.492 8.30007 11.492C8.38071 11.492 8.46134 11.4847 8.54197 11.4774L10.719 11.1695C11.0782 11.1182 11.562 10.8763 11.8186 10.6124L15.7622 6.66875C15.579 6.6101 15.3957 6.52947 15.1905 6.44151Z"
                                            fill="inherit"
                                        />
                                    </svg>
                                    <Typography
                                        variant="h6"
                                        color={mainColors.primary.main}
                                        fontWeight={700}
                                    >
                                        قيد التصحيح
                                    </Typography>
                                </Box>
                            )}
                            <Typography
                                variant="h6"
                                color={mainColors.primary.main}
                                fontWeight={700}
                            >
                                {`تاريخ الأنشاء : ${convertDateToShortDateNoAwait(
                                    data.examData.createdOn,
                                )}`}
                            </Typography>
                        </Box>
                    </Box>
                </Link>
            )}
            <Box sx={style.formContainer}>
                <Box sx={style.inputsContainer}>
                    <Box sx={style.inputWithLabel}>
                        <Typography variant="h3" fontWeight={700} color={mainColors.title.main}>
                            أسم النموذج:-
                        </Typography>
                        <Box sx={style.dataContainer}>
                            <Typography variant="h5" fontWeight={700} color={'primary'}>
                                {data.examData.name}
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={style.inputWithLabel}>
                        <Typography variant="h3" fontWeight={700} color={mainColors.title.main}>
                            الصف الدراسي:-
                        </Typography>
                        <Box sx={style.dataContainer}>
                            <Typography variant="h5" fontWeight={700} color={'primary'}>
                                {data.examData.levelName}
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={style.inputWithLabel}>
                        <Typography variant="h3" fontWeight={700} color={mainColors.title.main}>
                            تاريخ الاصدار:-
                        </Typography>
                        <Box sx={style.dataContainer}>
                            <Typography variant="h5" fontWeight={700} color={'primary'}>
                                {convertDateToShortDateNoAwait(data.examData.publishedDate)}
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={style.inputWithLabel}>
                        <Typography variant="h3" fontWeight={700} color={mainColors.title.main}>
                            وقت بدأ الامتحان:-
                        </Typography>
                        <Box sx={style.dataContainer}>
                            <Typography variant="h5" fontWeight={700} color={'primary'}>
                                {`${data.examData.publishedTime} ${getTimePeriod(
                                    data.examData.publishedTime,
                                )}`}
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={style.inputWithLabel}>
                        <Typography variant="h3" fontWeight={700} color={mainColors.title.main}>
                            المدة الزمنية:-
                        </Typography>
                        <Box sx={style.dataContainer}>
                            <Typography variant="h5" fontWeight={700} color={'primary'}>
                                {data.examData.allowedTime}
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={style.inputWithLabel}>
                        <Typography variant="h3" fontWeight={700} color={mainColors.title.main}>
                            الدرجة الكلية:-
                        </Typography>
                        <Box sx={style.dataContainer}>
                            <Typography variant="h5" fontWeight={700} color={'primary'}>
                                {data.examData.finalDegree}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default ShowDetails
