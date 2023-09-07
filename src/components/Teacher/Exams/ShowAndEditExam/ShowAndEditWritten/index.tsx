import MyTextArea from 'components/MyTextArea'
import { useTheme } from 'context/ThemeContext'

// MUI
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

type Props = {
    data: any
    actions: any
    grandParentIndex: number
    parentIndex: number
    openToEdit: boolean
}

const ShowAndEditWritten: React.FC<Props> = ({
    data,
    actions,
    grandParentIndex,
    parentIndex,
    openToEdit,
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
            columnGap: '32px',
            rowGap: '5px',
        },
    }

    return (
        <Box sx={style.flexColumn}>
            <Typography variant="h4" fontWeight={700} color={mainColors.title.main}>
                الاجابة الصحيحة (التقريبية):-
            </Typography>
            <MyTextArea
                helperText=""
                placeholder=""
                disabled={!openToEdit}
                onChange={actions.questionAnswerHandler}
                value={data.editedQuestion.answer ? data.editedQuestion.answer : data.answer}
                indexes={{
                    grandParent: grandParentIndex,
                    parent: parentIndex,
                }}
            />
        </Box>
    )
}

export default ShowAndEditWritten
