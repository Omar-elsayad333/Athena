import { IStyle } from 'styles/IStyle'
import ShowAndEditDetails from './ShowAndEditDetails'
import ShowAndEditSection from './ShowAndEditSection'

// MUI
import Box from '@mui/material/Box'

type Props = {
    data: any
    states: any
    actions: any
    dialogs: any
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
            <ShowAndEditDetails data={data} states={states} actions={actions} />
            <ShowAndEditSection data={data} states={states} actions={actions} />
        </Box>
    )
}

export default ShowExamC
