import Urls from 'constant/urls'
import { IStyle } from 'styles/IStyle'
import { useTheme } from 'context/ThemeContext'

// MUI
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

type Props = {
    studentData: any
    stateAvailable?: boolean
    resultAvailable: boolean
}

const StudentCard: React.FC<Props> = ({ studentData, stateAvailable, resultAvailable }) => {
    const { mainColors } = useTheme()

    const cardStateHandler = () => {
        if (!resultAvailable) {
            if (stateAvailable) {
                if (studentData.isFinish) {
                    return `2px solid ${mainColors.success.main}`
                } else {
                    return `2px solid ${mainColors.error.main}`
                }
            } else {
                return `2px solid ${mainColors.paper.border}`
            }
        } else {
            if (studentData.state === 'Excellent') {
                return `2px solid ${mainColors.warning.main}`
            } else if (studentData.state === 'Successful') {
                return `2px solid ${mainColors.success.main}`
            } else {
                return `2px solid ${mainColors.error.main}`
            }
        }
    }

    const style: IStyle = {
        card: {
            display: 'flex',
            flexWrap: 'wrap',
            width: '500px',
            maxWidth: '100%',
            height: '100px',
            overflow: 'hidden',
            borderRadius: '11px',
            border: cardStateHandler,
            cursor: 'pointer',
        },
        cardBody: {
            gap: '16px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
        },
        detailedData: {
            gap: '25px',
            display: 'flex',
            flexWrap: 'wrap',
        },
    }
    return (
        <Box sx={style.card}>
            {studentData.image ? (
                <img
                    style={{ objectFit: 'cover' }}
                    width={100}
                    height={100}
                    src={`${Urls.URL_MAIN}/${studentData.image}`}
                    alt={studentData.name}
                />
            ) : (
                <Box width={100} height={100} sx={{ backgroundColor: mainColors.secondary.main }} />
            )}
            <Box sx={style.cardBody} px={3} py={2}>
                <Typography variant="h3" color={'primary'}>
                    {studentData.name}
                </Typography>
                {resultAvailable && (
                    <Box sx={style.detailedData}>
                        <Typography
                            color={'primary'}
                            fontWeight={700}
                            variant="h5"
                        >{`الدرجة: ${studentData.studentDegree} / ${studentData.finalDegree}`}</Typography>
                        <Typography
                            color={'primary'}
                            fontWeight={700}
                            variant="h5"
                        >{`النسبة المئوية: ${studentData.percentage}%`}</Typography>
                    </Box>
                )}
            </Box>
        </Box>
    )
}

export default StudentCard
