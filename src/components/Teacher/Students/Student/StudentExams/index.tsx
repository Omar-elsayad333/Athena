import ExamTable from './ExamTable'
import { IStyle } from 'styles/IStyle'
import { useTheme } from 'context/ThemeContext'
import { StudentExamsTable } from 'content/tableHeaders'

// MUI
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

type Props = {
    data: any
}

const StudentExams: React.FC<Props> = ({ data }) => {
    const { mainColors } = useTheme()
    const style: IStyle = {
        container: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '40px',
            flex: '100%',
            columnGap: '104px',
        },
        title: {
            flex: '100%',
        },
    }
    return (
        <Box sx={style.container}>
            <Typography sx={style.title} variant="h3" color={mainColors.title.main}>
                نتائج الامتحانات الشهرية:-
            </Typography>
            {data.length > 0 ? (
                <ExamTable headerData={StudentExamsTable} bodyData={data} />
            ) : (
                <Typography>لا يوجدامتحانات للطالب</Typography>
            )}
        </Box>
    )
}

export default StudentExams
