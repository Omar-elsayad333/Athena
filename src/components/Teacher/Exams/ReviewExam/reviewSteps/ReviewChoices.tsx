import { useTheme } from "context/ThemeContext";

// MUI
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

type Props = {
    data: any;
}

const ReviewChoices: React.FC<Props> = ({ data }) => {

    const { mainColors, darkMode } = useTheme()
    const style = {
        flexColumn: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'start',
            gap: '34px'
        },
        choicesContainer: {
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
            flexWrap: 'wrap',
            columnGap: '32px',
            rowGap: '5px'
        },
        choiceDataBox: {
            width: '290px',
            padding: '16px 16px',
            borderRadius: '7px',
            border: '1px solid',
            background: mainColors.paper.main,
            boxShadow: darkMode ? 'none' : '0px 0px 10px 1px #B6D5F0'
        }
    }

    return (
        <Box sx={style.flexColumn}>
            <Typography 
                variant='h4' 
                fontWeight={700} 
                color={mainColors.title.main}
            >
                الاختيارات والاجابة الصحيحة:-
            </Typography>   
            <Box sx={style.flexColumn}>
                {
                    data &&
                    data.map((choice: any, index: number) => (
                        <Box key={index} sx={style.choicesContainer}>
                            <Box sx={[style.choiceDataBox, {borderColor: choice.isRightChoice ? '#29D277' : '#9C1313'}]}>
                                <Typography variant="h5" color={'primary'} fontWeight={700}>
                                    {choice.name}
                                </Typography>
                            </Box>
                            {
                                choice.image &&
                                <Box sx={
                                        {
                                            backgroundImage: `url('${choice.image.image.data}')`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            minWidth: '46px',
                                            height: '46px',
                                            border: '2px solid #3F72A4',
                                            borderRadius: '10px'            
                                        }
                                    }
                                />   
                            }
                        </Box>
                    ))
                }
            </Box>
        </Box>
    );
}
 
export default ReviewChoices;