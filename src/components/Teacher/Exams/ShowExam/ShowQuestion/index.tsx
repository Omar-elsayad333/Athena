import Urls from 'constant/urls'
import ShowWritten from '../ShowWritten'
import ShowChoices from '../ShowChoices'
import styles from './ShowQuestion.module.css'
import { useTheme } from 'context/ThemeContext'

// MUI
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

type Props = {
    data: any
}

const ShowQuestion: React.FC<Props> = ({ data }) => {
    const { mainColors } = useTheme()
    const style: any = {
        container: {
            width: '675px',
            display: 'flex',
            flexDirection: 'column',
            gap: '45px',
        },
        questionContainer: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            gap: '60px',
            marginTop: '50px',
        },
        flexColumn: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'start',
            flexWrap: 'wrap',
            gap: '34px',
        },
        questionImages: {
            maxWidth: '100%',
            display: 'flex',
            overflow: 'auto',
            gap: '35px',
        },
        imageBox: {
            display: 'flex',
        },
        imageStyle: {
            objectFit: 'cover',
            borderRadius: '10px',
            border: '2px solid #3F72A4',
        },
        questionCard: {
            display: 'flex',
            gap: '15px',
            alignItems: 'start',
            width: '100%',
        },
        questionNameContainer: {
            width: '100%',
            maxWidth: '100%',
            minHeight: '80px',
            display: 'flex',
            alignItems: 'center',
            borderRadius: '10px',
            padding: '19px 25px',
            backgroundColor: mainColors.paper.main,
            boxShadow: `0px 0px 10px 1px ${mainColors.icons.roundedAdd}`,
        },
        degreeBox: {
            width: '80px',
            height: '80px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            padding: '15px',
            justifyContent: 'center',
            borderRadius: '10px',
            backgroundColor: mainColors.title.main,
        },
    }

    return (
        <Box sx={style.container}>
            {data.map((question: any, index: number) => (
                <Box sx={style.questionContainer} key={index}>
                    <Box sx={style.flexColumn}>
                        <Box sx={style.questionCard}>
                            <Box
                                className={styles['questionNameContainer']}
                                sx={style.questionNameContainer}
                            >
                                <Typography variant="h4" fontWeight={700} color={'primary'}>
                                    {question.name && `${index + 1} - ${question.name}`}
                                </Typography>
                            </Box>
                            <Box sx={style.degreeBox}>
                                <Typography
                                    variant="h3"
                                    fontWeight={700}
                                    color={mainColors.backgroundColor.main}
                                >
                                    {question.degree && question.degree}
                                </Typography>
                                <Typography
                                    variant="h4"
                                    fontWeight={700}
                                    color={mainColors.backgroundColor.main}
                                >
                                    درجات
                                </Typography>
                            </Box>
                        </Box>
                        {question.images?.length > 0 && (
                            <Box sx={style.questionImages}>
                                {question.images.map((image: any) => (
                                    <Box key={image.id} sx={style.imageBox}>
                                        <img
                                            width={100}
                                            height={100}
                                            src={`${Urls.URL_MAIN}/${image.image}`}
                                            alt="Question Image"
                                            style={style.imageStyle}
                                        />
                                    </Box>
                                ))}
                            </Box>
                        )}
                    </Box>
                    {question.type == 'MCQ' ? (
                        <ShowChoices data={question.choices} />
                    ) : (
                        <ShowWritten data={question} />
                    )}
                </Box>
            ))}
        </Box>
    )
}

export default ShowQuestion
