import { IStyle } from 'styles/IStyle'
import ShowSection from './ShowSection'
import ShowDetails from './ShowDetails'

// MUI
import Box from '@mui/material/Box'

type Props = {
    data: any
    states: any
    actions: any
}

const ShowExamC: React.FC<Props> = ({ data, states, actions }) => {
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
            <ShowDetails data={data} states={states} actions={actions} />
            <ShowSection data={data} states={states} actions={actions} />
        </Box>
    )
}

export default ShowExamC
