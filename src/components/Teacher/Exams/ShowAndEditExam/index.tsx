import { IStyle } from 'styles/IStyle'

// MUI
import Box from '@mui/material/Box'
import EditDetails from './EditDetails'
// import ExamCard from './ExamCard'

type Props = {
    data: any
    states: any
    actions: any
    dialogs: any
}

const ExamC: React.FC<Props> = ({ data, states, actions }) => {
    const style: IStyle = {
        container: {
            gap: '95px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'start',
            flexDirection: 'column',
        },
        buttonsContainer: {
            gap: '35px',
            display: 'flex',
            flexWrap: 'wrap',
            marginTop: '30px',
        },
        submitButton: {
            width: '170px',
            height: '40px',
        },
    }
    return (
        <Box sx={style.container}>
            <EditDetails data={data} states={states} actions={actions} />
            {/* {data.examData && <ExamCard data={data} states={states} actions={actions} />} */}
        </Box>
    )
}

export default ExamC
