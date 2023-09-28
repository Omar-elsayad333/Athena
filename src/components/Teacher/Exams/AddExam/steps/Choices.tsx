import { useTheme } from 'context/ThemeContext'
import MyButton from 'components/Buttons/MyButton'
import MyInputWithImage from 'components/MyInputWithImage'
import { examChoicesPlaceholder } from 'constant/staticData'

// MUI
import Box from '@mui/material/Box'
import Checkbox from '@mui/material/Checkbox'
import Typography from '@mui/material/Typography'
import CloseIcon from '@mui/icons-material/Close'

type Props = {
    data: any
    actions: any
    grandParentIndex: number
    parentIndex: number
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
            gap: '34px',
        },
        choicesContainer: {
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
            flexWrap: 'wrap',
            columnGap: '32px',
            rowGap: '5px',
        },
        deleteImageToggle: {
            position: 'absloute',
        },
    }

    return (
        <Box sx={style.flexColumn}>
            <Typography variant="h4" fontWeight={700} color={mainColors.title.main}>
                حدد الاختيارات والاجابة الصحيحة:-
            </Typography>
            <Box sx={style.flexColumn}>
                {data &&
                    data.map((choice: any, index: number) => (
                        <Box key={index} sx={style.choicesContainer}>
                            <Typography variant="h3" color={mainColors.title.main} fontWeight={700}>
                                {`${index + 1} -`}
                            </Typography>
                            <MyInputWithImage
                                value={choice.name}
                                error={choice.error.error}
                                helperText={choice.error.helperText}
                                onChange={actions.choiceNameHandler}
                                addImage={actions.choiceImagesHandler}
                                placeholder={examChoicesPlaceholder[index]}
                                indexes={{
                                    grandParent: grandParentIndex,
                                    parent: parentIndex,
                                    child: index,
                                }}
                            />
                            {choice.image != null && (
                                <Box
                                    sx={{
                                        backgroundImage: `url('${choice.image.data}')`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        minWidth: '46px',
                                        height: '46px',
                                        border: '2px solid #3F72A4',
                                        borderRadius: '10px',
                                        position: 'relative',
                                    }}
                                >
                                    <CloseIcon
                                        sx={style.deleteImageToggle}
                                        onClick={() =>
                                            actions.deleteChoiceImageHandler({
                                                grandParent: grandParentIndex,
                                                parent: parentIndex,
                                                child: index,
                                            })
                                        }
                                        color="primary"
                                    />
                                </Box>
                            )}
                            <Checkbox
                                checked={choice.isRightChoice}
                                sx={{
                                    color: '#3F72A4',
                                    '&.Mui-checked': {
                                        color: '#3F72A4',
                                    },
                                }}
                                onChange={(e) =>
                                    actions.choiceIsRightHandler(e, {
                                        grandParent: grandParentIndex,
                                        parent: parentIndex,
                                        child: index,
                                    })
                                }
                            />
                            {index > 1 && (
                                <Box
                                    sx={{ cursor: 'pointer' }}
                                    onClick={() =>
                                        actions.deleteChoice({
                                            grandParent: grandParentIndex,
                                            parent: parentIndex,
                                            child: index,
                                        })
                                    }
                                >
                                    <Typography variant="h5" color={'error'} fontWeight={700}>
                                        حذف الاختيار
                                    </Typography>
                                </Box>
                            )}
                        </Box>
                    ))}
            </Box>
            {data.length < 4 && (
                <MyButton
                    content="أضافة أختيار"
                    onClick={() =>
                        actions.addChoice({
                            grandParent: grandParentIndex,
                            parent: parentIndex,
                        })
                    }
                />
            )}
        </Box>
    )
}

export default Choices
