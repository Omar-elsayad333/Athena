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
