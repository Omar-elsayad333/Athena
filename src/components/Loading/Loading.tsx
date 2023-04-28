import { IStyle } from 'styles/IStyle'
import { useTheme } from 'context/ThemeContext'

// MUI
import { Box } from '@mui/system'
import CircularProgress from '@mui/material/CircularProgress'

type IProps = {
    small?: boolean
    inside?: boolean
}

const Loading: React.FC<IProps> = ({ small }) => {
    const { mainColors } = useTheme()
    const styles: IStyle = {
        container: {
            width: '100%',
            height: '100vh',
            position: 'abslout',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: mainColors.loader.main,
        },
    }

    return (
        <Box sx={styles.container}>
            <CircularProgress color="primary" size={small ? 30 : 75} />
        </Box>
    )
}

export default Loading
