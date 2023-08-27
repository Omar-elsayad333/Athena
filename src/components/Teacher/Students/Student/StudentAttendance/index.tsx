import { IStyle } from 'styles/IStyle'

// MUI
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

type Props = {
    data: any
    states: any
    actions: any
}

const StudentAttendance: React.FC<Props> = ({}) => {
    const style: IStyle = {
        container: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '40px',
            flex: '100%',
            columnGap: '104px',
        },
    }
    return (
        <Box sx={style.container}>
            <Typography color={'primary'} variant="h2">
                Comming Soon...
            </Typography>
        </Box>
    )
}

export default StudentAttendance
