import { useTheme } from "context/ThemeContext";

// MUI
import Box from "@mui/material/Box";
import Checkbox from '@mui/material/Checkbox';
import Typography from "@mui/material/Typography";
import MyInputWithImage from "components/MyInputWithImage";
import { examChoicesPlaceholder } from "constant/staticData";

type Props = {
    data: any;
    actions: any;
    grandParentIndex: number;
    parentIndex: number;
}

const Choices: React.FC<Props> = ({ actions, grandParentIndex, parentIndex, data }) => {

    const { mainColors } = useTheme()
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
        }
    }

    return (
        <Box sx={style.flexColumn}>
            <Typography 
                variant='h4' 
                fontWeight={700} 
                color={mainColors.title.main}
            >
                حدد الاختيارات والاجابة الصحيحة:-
            </Typography>   
            <Box sx={style.flexColumn}>
                {
                    data &&
                    data.map((choice: any, index: number) => (
                        <Box key={index} sx={style.choicesContainer}>
                            <MyInputWithImage 
                                helperText=''
                                placeholder={examChoicesPlaceholder[index]}
                                value={choice.name}
                                onChange={actions.choiceNameHandler}
                                addImage={actions.choiceImagesHandler}
                                indexes={
                                    {
                                        grandParent: grandParentIndex, 
                                        parent: parentIndex,
                                        child: index
                                    }
                                }
                            />
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
                            <Checkbox
                                checked={choice.isRightChoice}
                                sx={
                                    {
                                        color: '#3F72A4',
                                        '&.Mui-checked': {
                                            color: '#3F72A4',
                                        },
                                    }  
                                }
                                onChange={e => 
                                    actions.choiceIsRightHandler(
                                        e, 
                                        {
                                            grandParent: grandParentIndex,
                                            parent: parentIndex, 
                                            child: index
                                        }
                                    )
                                }
                                
                            />
                            {
                                index > 1 &&
                                <Typography variant='h5' color={mainColors.error.main}>
                                    حذف الاختيار
                                </Typography>
                            }
                        </Box>
                    ))
                }
            </Box>
        </Box>
    );
}
 
export default Choices;