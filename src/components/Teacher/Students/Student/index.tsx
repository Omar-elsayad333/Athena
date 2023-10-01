import { IStyle } from 'styles/IStyle'
import StudentInfo from './StudentInfo'
import StudentExams from './StudentExams'
import FilterWedgit from 'components/FilterWedgit'

// MUI
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

type Props = {
    data: any
    states: any
    actions: any
}

const StudentC: React.FC<Props> = ({ data, states, actions }) => {
    const style: IStyle = {
        container: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '40px',
            columnGap: '104px',
        },
    }

    return (
        <Box sx={style.container}>
            <FilterWedgit
                selected={states.selectedSection}
                getSelected={actions.selectedSectionHandler}
                filters={data.studentSections}
            />
            {states.selectedSection?.id === '1' && data.studentData && (
                <StudentInfo data={data} states={states} actions={actions} />
            )}
            {states.selectedSection?.id === '2' && <StudentExams data={data.studentExamsData} />}
        </Box>
    )
}

export default StudentC
