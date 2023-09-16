import Urls from 'constant/urls'
import { useTheme } from 'context/ThemeContext'

// MUI
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

type Props = {
    data: any
}

const ShowChoices: React.FC<Props> = ({ data }) => {
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
                        </Box>
                    ))}
            </Box>
        </Box>
    )
}

export default ShowChoices
