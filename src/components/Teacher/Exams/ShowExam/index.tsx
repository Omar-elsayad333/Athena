import ShowGroups from './ShowGroups'
import { IStyle } from 'styles/IStyle'
import ShowSection from './ShowSection'
import ShowDetails from './ShowDetails'
import { useTheme } from 'context/ThemeContext'

// MUI
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import { Typography } from '@mui/material'

type Props = {
    data: any
    states: any
    actions: any
}

const ShowExamC: React.FC<Props> = ({ data, states, actions }) => {
    const { mainColors } = useTheme()
    const style: IStyle = {
        container: {
            gap: '95px',
            width: 'fit-content',
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
            <Divider sx={{ width: '100%', borderColor: mainColors.primary.main }} color="primary" />
            <Typography variant="h3" color={'primary'} fontWeight={700}>
                المجموعات:-
            </Typography>
            <ShowGroups data={data} states={states} actions={actions} />
        </Box>
    )
}

export default ShowExamC
