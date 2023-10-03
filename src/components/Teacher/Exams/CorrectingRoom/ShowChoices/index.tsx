import Urls from 'constant/urls'
import { useTheme } from 'context/ThemeContext'

// MUI
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

type Props = {
    data: any
    studentAnswer: any
}

const ShowChoices: React.FC<Props> = ({ data, studentAnswer }) => {
    const { mainColors } = useTheme()
    const style = {
        flexColumn: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'start',
            gap: '34px',
        },
        choicesContainer: {
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '25px',
        },
        imageBox: {
            display: 'flex',
        },
        choiceContainer: {
            width: '289px',
            maxWidth: '100%',
            height: '46px',
            borderRadius: '7px',
            padding: '16px 17px',
            backgroundColor: mainColors.paper.main,
            boxShadow: `0px 0px 10px 1px ${mainColors.icons.roundedAdd}`,
        },
    }

    return (
        <Box sx={style.flexColumn}>
            <Typography variant="h4" fontWeight={700} color={mainColors.title.main}>
                الاختيارات والاجابة الصحيحة:-
            </Typography>
            <Box sx={style.flexColumn}>
                {data &&
                    data.map((choice: any, index: number) => (
                        <Box key={index} sx={style.choicesContainer}>
                            <Typography variant="h3" color={mainColors.title.main} fontWeight={700}>
                                {`${index + 1} -`}
                            </Typography>
                            <Box
                                sx={[
                                    style.choiceContainer,
                                    {
                                        border: `1px solid ${
                                            choice.isRightChoice
                                                ? mainColors.success.main
                                                : mainColors.error.main
                                        }`,
                                    },
                                ]}
                            >
                                <Typography variant="h5" fontWeight={700} color={'primary'}>
                                    {choice.name && choice.name}
                                </Typography>
                            </Box>

                            {choice.image && (
                                <Box sx={style.imageBox}>
                                    <Box
                                        sx={{
                                            backgroundImage: `url('${Urls.URL_MAIN}/${choice.image}')`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            minWidth: '46px',
                                            height: '46px',
                                            border: '2px solid #3F72A4',
                                            borderRadius: '10px',
                                        }}
                                    />
                                </Box>
                            )}
                            {studentAnswer === choice.id ? (
                                choice.isRightChoice ? (
                                    <svg
                                        width="30"
                                        height="30"
                                        viewBox="0 0 30 30"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            opacity="0.4"
                                            d="M14.75 29.8908C22.8963 29.8908 29.5 23.1994 29.5 14.9454C29.5 6.69127 22.8963 0 14.75 0C6.60381 0 0 6.69127 0 14.9454C0 23.1994 6.60381 29.8908 14.75 29.8908Z"
                                            fill="#29D277"
                                        />
                                        <path
                                            d="M14.7763 21.2658C18.2222 21.2658 21.0156 18.4355 21.0156 14.9439C21.0156 11.4525 18.2222 8.62207 14.7763 8.62207C11.3305 8.62207 8.53711 11.4525 8.53711 14.9439C8.53711 18.4355 11.3305 21.2658 14.7763 21.2658Z"
                                            fill="#29D277"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        width="30"
                                        height="30"
                                        viewBox="0 0 30 30"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            opacity="0.4"
                                            d="M14.75 29.8908C22.8963 29.8908 29.5 23.1994 29.5 14.9454C29.5 6.69127 22.8963 0 14.75 0C6.60381 0 0 6.69127 0 14.9454C0 23.1994 6.60381 29.8908 14.75 29.8908Z"
                                            fill="#AE0000"
                                        />
                                        <path
                                            d="M14.7763 21.2658C18.2222 21.2658 21.0156 18.4355 21.0156 14.9439C21.0156 11.4525 18.2222 8.62207 14.7763 8.62207C11.3305 8.62207 8.53711 11.4525 8.53711 14.9439C8.53711 18.4355 11.3305 21.2658 14.7763 21.2658Z"
                                            fill="#AE0000"
                                        />
                                    </svg>
                                )
                            ) : null}
                        </Box>
                    ))}
            </Box>
        </Box>
    )
}

export default ShowChoices
