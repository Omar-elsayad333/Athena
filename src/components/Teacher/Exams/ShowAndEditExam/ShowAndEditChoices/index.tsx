import { useTheme } from 'context/ThemeContext'
import MyButton from 'components/Buttons/MyButton'
import MyInputWithImage from 'components/MyInputWithImage'
import { examChoicesPlaceholder } from 'constant/staticData'

// MUI
import Box from '@mui/material/Box'
import Checkbox from '@mui/material/Checkbox'
import Typography from '@mui/material/Typography'

type Props = {
    data: any
    actions: any
    grandParentIndex: number
    parentIndex: number
}

const ShowAndEditChoices: React.FC<Props> = ({ actions, grandParentIndex, parentIndex, data }) => {
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
                                value={
                                    choice.editedChoice.name
                                        ? choice.editedChoice.name
                                        : choice.name
                                }
                                helperText=""
                                onChange={actions.choiceNameHandler}
                                addImage={actions.choiceImagesHandler}
                                placeholder={examChoicesPlaceholder[index]}
                                indexes={{
                                    grandParent: grandParentIndex,
                                    parent: parentIndex,
                                    child: index,
                                }}
                            />
                            {choice.editedChoice.image ? (
                                <Box
                                    sx={{
                                        backgroundImage: `url('${choice.editedChoice.image.data}')`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        minWidth: '46px',
                                        height: '46px',
                                        border: '2px solid #3F72A4',
                                        borderRadius: '10px',
                                    }}
                                />
                            ) : (
                                choice.image && (
                                    <Box
                                        sx={{
                                            backgroundImage: `url('${choice.image}')`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            minWidth: '46px',
                                            height: '46px',
                                            border: '2px solid #3F72A4',
                                            borderRadius: '10px',
                                        }}
                                    />
                                )
                            )}
                            <Checkbox
                                checked={
                                    choice.editedChoice.isRightChoice
                                        ? choice.editedChoice.isRightChoice
                                        : choice.isRightChoice
                                }
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

export default ShowAndEditChoices
