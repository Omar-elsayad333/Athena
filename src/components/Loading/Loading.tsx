import { IStyle } from 'styles/IStyle'
import { useTheme } from 'context/ThemeContext'
import { AtomSpinner } from 'react-epic-spinners'

// MUI
import Box from '@mui/system/Box'

type IProps = {
    small?: boolean
    inside?: boolean
}

const Loading: React.FC<IProps> = ({}) => {
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
            <AtomSpinner color={mainColors.primary.main} size={100} animationDuration={1200} />
        </Box>
    )
}

export default Loading
