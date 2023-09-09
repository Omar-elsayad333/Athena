import Urls from 'constant/urls'
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
    openToEdit: boolean
    question: any
}

const ShowAndEditChoices: React.FC<Props> = ({
    actions,
    grandParentIndex,
    parentIndex,
    data,
    openToEdit,
    question,
}) => {
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
                                disabled={!openToEdit}
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
                                <Box sx={style.imageBox}>
                                    {openToEdit && (
                                        <CloseIcon
                                            onClick={() =>
                                                actions.deleteChoiceNewImageHandler({
                                                    grandParent: grandParentIndex,
                                                    parent: parentIndex,
                                                    child: index,
                                                })
                                            }
                                            fontSize="medium"
                                            color="error"
                                        />
                                    )}
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
                                </Box>
                            ) : (
                                choice.image && (
                                    <Box sx={style.imageBox}>
                                        {openToEdit && (
                                            <CloseIcon
                                                onClick={() =>
                                                    actions.deleteChoiceImageHandler(choice.id)
                                                }
                                                fontSize="medium"
                                                color="error"
                                            />
                                        )}
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
                                )
                            )}
                            <Checkbox
                                disabled={!openToEdit}
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
                                    onClick={() => actions.deleteChoiceHandler(choice.id)}
                                >
                                    <Typography variant="h5" color={'error'} fontWeight={700}>
                                        حذف الاختيار
                                    </Typography>
                                </Box>
                            )}
                        </Box>
                    ))}
                {question?.editedQuestion?.newChoices.length > 0 &&
                    question.editedQuestion.newChoices.map(
                        (newChoice: any, newChoiceIndex: number) => (
                            <Box key={newChoiceIndex} sx={style.choicesContainer}>
                                <Typography
                                    variant="h3"
                                    color={mainColors.title.main}
                                    fontWeight={700}
                                >
                                    {`${data.length + 1} -`}
                                </Typography>
                                <MyInputWithImage
                                    helperText=""
                                    value={newChoice.name}
                                    disabled={!openToEdit}
                                    onChange={actions.newChoiceNameHandler}
                                    addImage={actions.newChoiceImagesHandler}
                                    placeholder={examChoicesPlaceholder[data.length]}
                                    indexes={{
                                        grandParent: grandParentIndex,
                                        parent: parentIndex,
                                        child: newChoiceIndex,
                                    }}
                                />
                                {newChoice.image && (
                                    <Box sx={style.imageBox}>
                                        {openToEdit && (
                                            <CloseIcon
                                                onClick={() =>
                                                    actions.deleteNewChoiceImageHandler({
                                                        grandParent: grandParentIndex,
                                                        parent: parentIndex,
                                                        child: newChoiceIndex,
                                                    })
                                                }
                                                fontSize="medium"
                                                color="error"
                                            />
                                        )}
                                        <Box
                                            sx={{
                                                backgroundImage: `url('${newChoice.image.data}')`,
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
                                <Checkbox
                                    disabled={!openToEdit}
                                    checked={newChoice.isRightChoice}
                                    sx={{
                                        color: '#3F72A4',
                                        '&.Mui-checked': {
                                            color: '#3F72A4',
                                        },
                                    }}
                                    onChange={(e) =>
                                        actions.newChoiceIsRightHandler(e, {
                                            grandParent: grandParentIndex,
                                            parent: parentIndex,
                                            child: newChoiceIndex,
                                        })
                                    }
                                />
                                {data.length + (newChoiceIndex - 1) > 1 && (
                                    <Box
                                        sx={{ cursor: 'pointer' }}
                                        onClick={() =>
                                            actions.deleteNewChoiceHandler({
                                                grandParent: grandParentIndex,
                                                parent: parentIndex,
                                                child: newChoiceIndex,
                                            })
                                        }
                                    >
                                        <Typography variant="h5" color={'error'} fontWeight={700}>
                                            حذف الاختيار
                                        </Typography>
                                    </Box>
                                )}
                            </Box>
                        ),
                    )}
            </Box>
            {data.length + question.editedQuestion?.newChoices?.length < 4 && openToEdit ? (
                <MyButton
                    content="أضافة أختيار"
                    onClick={() =>
                        actions.addNewChoiceHandler({
                            grandParent: grandParentIndex,
                            parent: parentIndex,
                        })
                    }
                />
            ) : null}
        </Box>
    )
}

export default ShowAndEditChoices
