import Link from 'next/link'
import { Routes } from 'routes/Routes'
import { IStyle } from 'styles/IStyle'
import ShowSection from './ShowSection'
import { useTheme } from 'context/ThemeContext'
import MyButton from 'components/Buttons/MyButton'

// MUI
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

type Props = {
    data: any
    states: any
    actions: any
}

const CorrectingRoomC: React.FC<Props> = ({ data, states, actions }) => {
    const { mainColors } = useTheme()
    const style: IStyle = {
        container: {
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'start',
            flexDirection: 'column',
        },
        containerBody: {
            width: '100%',
            padding: '50px',
            borderRadius: '0px 0px 10px 10px',
            backgroundColor: mainColors.paper.main,
            border: `1px solid ${mainColors.paper.border}`,
            '@media screen and (max-width: 700px)': {
                padding: '30px',
            },
        },
        containerHeader: {
            width: '100%',
            minHeight: '50px',
            padding: '20px 45px',
            borderRadius: '10px 10px 0px 0px',
            border: `1px solid ${mainColors.paper.border}`,
            background: mainColors.linerGradient.primary,
        },
        actionsContainer: {
            width: '100%',
            padding: '80px 20px',
            display: 'grid',
            placeItems: 'center',
        },
    }

    return (
        <Box sx={style.container}>
            <Box sx={style.containerHeader}>
                <Typography color="primary" fontWeight={700} variant="h2">
                    {`${data.examData.gender === 'male' ? 'الطالب' : 'الطالبه'} / ${
                        data.examData.studentName
                    }`}
                </Typography>
            </Box>
            <Box sx={style.containerBody}>
                <ShowSection data={data} states={states} actions={actions} />
            </Box>

            <Box sx={style.actionsContainer}>
                <Link href={`${Routes.teacherCorrectingStudentsList}${data.examData.id}`}>
                    <a>
                        <MyButton content="الخروج من غرفه تصحيح الطالب" />
                    </a>
                </Link>
            </Box>
        </Box>
    )
}

export default CorrectingRoomC
