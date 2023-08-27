import { IStyle } from 'styles/IStyle'
import StudentInfo from './StudentInfo'
import FilterWedgit from 'components/FilterWedgit'

// MUI
import Box from '@mui/material/Box'
import StudentAttendance from './StudentAttendance'
import StudentExams from './StudentExams'

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
            {states.selectedSection?.id === '1' && (
                <StudentInfo data={data} states={states} actions={actions} />
            )}
            {states.selectedSection?.id === '2' && (
                <StudentAttendance data={data} states={states} actions={actions} />
            )}
            {states.selectedSection?.id === '3' && (
                <StudentExams data={data} states={states} actions={actions} />
            )}
        </Box>
    )
}

export default StudentC
