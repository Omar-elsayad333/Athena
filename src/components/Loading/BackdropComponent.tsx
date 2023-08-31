import { useTheme } from 'context/ThemeContext'

// MUI
import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'

type Props = {
    open: boolean
}

const BackdropComponent: React.FC<Props> = ({ open }) => {
    const { mainColors } = useTheme()
    return (
        <div>
            <Backdrop
                open={open}
                sx={{ color: mainColors.primary.main, zIndex: (theme) => theme.zIndex.drawer + 1 }}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    )
}

export default BackdropComponent
