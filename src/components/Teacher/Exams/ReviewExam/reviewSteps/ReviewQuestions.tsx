import ReviewChoices from "./ReviewChoices";
import ReviewWritten from "./ReviewWritten";
import { useTheme } from "context/ThemeContext";

// MUI
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

type Props = {
    data: any;
}

const ReviewQuestions: React.FC<Props> = ({ data }) => {

    const { mainColors, darkMode } = useTheme()
    const style = {
        container: {
            width: '580px',
            maxWidth: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '45px'
        },
        questionContainer: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            gap: '60px'
        },  
        cardName: {
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '30px',
            padding: '16px 33px',
            borderRadius: '12px',
            background: mainColors.paper.main,
            border: `2px solid ${mainColors.paper.border}`
        },
        questionDegree: {
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '40px'
        },
        flexColumn: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'start',
            flexWrap: 'wrap',
            gap: '34px'
        },
        dataBox: {
            width: '100%',
            padding: '19px 25px',
            borderRadius: '10px',
            background: mainColors.paper.main,
            boxShadow: darkMode ? 'none' : '0px 0px 10px 1px #B6D5F0'
        },
        breaker: {
            border: `1px solid ${mainColors.paper.border}`,
            width: '100%'
        },
        sectionButtons: {
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '42px'
        },
        questionImages: {
            maxWidth: '100%',
            display: 'flex',
            overflow: 'auto',
            gap: '35px',
        },
    }

    return (
        <Box sx={style.container}>
            {
                data.map((question: any, index: number) => (
                    <Box sx={style.questionContainer} key={index}>
                        <Box sx={style.flexColumn}>
                            {
                                question.name &&
                                <Box sx={style.dataBox}>
                                    <Typography variant="h4" color={'primary'} fontWeight={700}>
                                        {`${index + 1}- ${question.name}`}
                                    </Typography>
                                </Box>
                            }
                            <Box sx={style.questionImages}>
                                {
                                    question.images.map((image: any, index: number) => (
                                        <Box 
                                            key={index}
                                            sx={
                                                {
                                                    backgroundImage: `url('${image.image.data}')`,
                                                    backgroundSize: 'cover',
                                                    backgroundPosition: 'center',
                                                    minWidth: '100px',
                                                    height: '100px',
                                                    border: '2px solid #3F72A4',
                                                    borderRadius: '10px'            
                                                }
                                            }
                                        />
                                    ))
                                }
                            </Box>
                        </Box>
                        {
                            question.type == 'MCQ' ?
                            <ReviewChoices
                                data={question.choices} 
                            /> : 
                            <ReviewWritten
                                data={question.answer}
                            />
                        }
                        {
                            index+1 != data.length &&
                            <hr style={style.breaker}></hr>
                        }
                    </Box>
                ))
            }
        </Box>
    );
}

export default ReviewQuestions;