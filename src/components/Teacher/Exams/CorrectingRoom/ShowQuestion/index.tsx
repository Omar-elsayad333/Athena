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
    actions: any
    parentIndex: number
}

const ShowQuestion: React.FC<Props> = ({ data, actions, parentIndex }) => {
    const { mainColors } = useTheme()
    const style: any = {
        container: {
            width: '770px',
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
            maxWidth: '100%',
        },
        questionNameContainer: {
            width: '100%',
            maxWidth: '100%',
            minHeight: '80px',
            display: 'flex',
            alignItems: 'center',
            borderRadius: '10px',
            padding: '19px 25px',
            border: `2px solid ${mainColors.paper.border}`,
            backgroundColor: mainColors.backgroundColor.main,
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
        typeBox: {
            width: '80px',
            height: '80px',
            display: 'flex',
            flexDirection: 'column',
            padding: '15px',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '10px',
            background: mainColors.linerGradient.third,
            border: `2px solid ${mainColors.paper.border}`,
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
                            <Box sx={style.typeBox}>
                                {question.type == 'MCQ' ? (
                                    <svg
                                        width="44"
                                        height="44"
                                        viewBox="0 0 44 44"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            opacity="0.4"
                                            d="M21.5845 15.4971C25.8639 15.4971 29.333 12.0279 29.333 7.74853C29.333 3.46913 25.8639 0 21.5845 0C17.3051 0 13.8359 3.46913 13.8359 7.74853C13.8359 12.0279 17.3051 15.4971 21.5845 15.4971Z"
                                            fill="#29D277"
                                        />
                                        <path
                                            d="M21.5964 12.7231C24.342 12.7231 26.5678 10.4973 26.5678 7.75167C26.5678 5.00605 24.342 2.78027 21.5964 2.78027C18.8508 2.78027 16.625 5.00605 16.625 7.75167C16.625 10.4973 18.8508 12.7231 21.5964 12.7231Z"
                                            fill="#29D277"
                                        />
                                        <path
                                            opacity="0.4"
                                            d="M7.74853 29.3486C12.0279 29.3486 15.4971 25.8795 15.4971 21.6001C15.4971 17.3207 12.0279 13.8516 7.74853 13.8516C3.46913 13.8516 0 17.3207 0 21.6001C0 25.8795 3.46913 29.3486 7.74853 29.3486Z"
                                            fill="#9C1313"
                                        />
                                        <path
                                            d="M7.74093 26.5688C10.4866 26.5688 12.7123 24.343 12.7123 21.5974C12.7123 18.8517 10.4866 16.626 7.74093 16.626C4.9953 16.626 2.76953 18.8517 2.76953 21.5974C2.76953 24.343 4.9953 26.5688 7.74093 26.5688Z"
                                            fill="#9C1313"
                                        />
                                        <path
                                            opacity="0.4"
                                            d="M21.5845 43.2012C25.8639 43.2012 29.333 39.732 29.333 35.4526C29.333 31.1732 25.8639 27.7041 21.5845 27.7041C17.3051 27.7041 13.8359 31.1732 13.8359 35.4526C13.8359 39.732 17.3051 43.2012 21.5845 43.2012Z"
                                            fill="#9C1313"
                                        />
                                        <path
                                            d="M21.5964 40.4213C24.342 40.4213 26.5678 38.1955 26.5678 35.4499C26.5678 32.7043 24.342 30.4785 21.5964 30.4785C18.8508 30.4785 16.625 32.7043 16.625 35.4499C16.625 38.1955 18.8508 40.4213 21.5964 40.4213Z"
                                            fill="#9C1313"
                                        />
                                        <path
                                            opacity="0.4"
                                            d="M35.4517 29.3486C39.731 29.3486 43.2002 25.8795 43.2002 21.6001C43.2002 17.3207 39.731 13.8516 35.4517 13.8516C31.1723 13.8516 27.7031 17.3207 27.7031 21.6001C27.7031 25.8795 31.1723 29.3486 35.4517 29.3486Z"
                                            fill="#9C1313"
                                        />
                                        <path
                                            d="M35.4421 26.5688C38.1877 26.5688 40.4135 24.343 40.4135 21.5974C40.4135 18.8517 38.1877 16.626 35.4421 16.626C32.6965 16.626 30.4707 18.8517 30.4707 21.5974C30.4707 24.343 32.6965 26.5688 35.4421 26.5688Z"
                                            fill="#9C1313"
                                        />
                                    </svg>
                                ) : (
                                    <Typography
                                        variant="h5"
                                        fontWeight={700}
                                        textAlign={'center'}
                                        color={'primary'}
                                    >
                                        سؤال مقالي
                                    </Typography>
                                )}
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
                        <ShowChoices
                            data={question.choices}
                            studentAnswer={question.studentAnswer}
                        />
                    ) : (
                        <ShowWritten
                            data={question}
                            actions={actions}
                            grandParentIndex={parentIndex}
                            parentIndex={index}
                        />
                    )}
                </Box>
            ))}
        </Box>
    )
}

export default ShowQuestion
