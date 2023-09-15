import { useTheme } from 'context/ThemeContext'

// MUI
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

type Props = {
    data: any
}

const ShowWritten: React.FC<Props> = ({ data }) => {
    const { mainColors } = useTheme()
    const style = {
        flexColumn: {
            width: '580px',
            maxWidth: '100%',
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
        paragraphContainer: {
            width: '100%',
            borderRadius: '10px',
            padding: '19px 25px',
            backgroundColor: mainColors.paper.main,
            boxShadow: `0px 0px 10px 1px ${mainColors.icons.roundedAdd}`,
        },
    }

    return (
        <Box sx={style.flexColumn}>
            <Typography variant="h4" fontWeight={700} color={mainColors.title.main}>
                الاجابة الصحيحة (التقريبية):-
            </Typography>
            <Box sx={style.paragraphContainer}>
                <Typography variant="h4" fontWeight={700} color={'primary'}>
                    {data.answer && data.answer}
                </Typography>
            </Box>
        </Box>
    )
}

export default ShowWritten
