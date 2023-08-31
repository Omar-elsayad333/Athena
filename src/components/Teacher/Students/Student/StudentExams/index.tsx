import { IStyle } from 'styles/IStyle'
import MyTable from 'components/MyTable'
import { useTheme } from 'context/ThemeContext'
import { StudentExamsTable } from 'content/tableHeaders'

// MUI
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

type Props = {
    data: any
    states: any
    actions: any
}

const StudentExams: React.FC<Props> = ({}) => {
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
            <MyTable headerData={StudentExamsTable} bodyData={[]} />
        </Box>
    )
}

export default StudentExams
