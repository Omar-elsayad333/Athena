import { IStyle } from 'styles/IStyle'
import Box from '@mui/material/Box'
import { useTheme } from 'context/ThemeContext'

import Typography from '@mui/material/Typography'
type Props = {
    data?: any
}

const HomeGraphComponent: React.FC<Props> = ({ data }) => {
    const { mainColors } = useTheme()
    const style: IStyle = {}
    return (
        <Box>
            <Typography>x</Typography>
        </Box>
    )
}
export default HomeGraphComponent
