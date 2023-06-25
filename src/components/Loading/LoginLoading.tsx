import { IStyle } from 'styles/IStyle'
import { useTheme } from 'context/ThemeContext'

// MUI
import Box from '@mui/system/Box'
// import CircularProgress from '@mui/material/CircularProgress'
import { AtomSpinner } from 'react-epic-spinners'

type IProps = {
    small?: boolean
    inside?: boolean
}

const LoginLoading: React.FC<IProps> = ({}) => {
    const { mainColors } = useTheme()
    const styles: IStyle = {
        container: {
            width: '100%',
            height: '100%',
            position: 'absolute',
            zIndex: '100',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
    }

    return (
        <Box sx={styles.container}>
            {/* <CircularProgress color='primary' size={small ? 30 : 75} /> */}
            <AtomSpinner color={mainColors.primary.main} size={100} animationDuration={1200} />
        </Box>
    )
}

export default LoginLoading
