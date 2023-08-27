import { useTheme } from 'context/ThemeContext'

// MUI
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

type Props = {
    content: string
    onClick?: any
    loading?: boolean
}

const MyButton: React.FC<Props> = ({ content, onClick, loading }) => {
    const { mainColors } = useTheme()
    const style = {
        root: {
            boxShadow: 'none',
            padding: '9px 16px',
            borderRadius: '5px',
        },
    }

    return (
        <Button
            onClick={onClick}
            sx={style.root}
            variant="contained"
            color="primary"
            disabled={loading}
        >
            <Typography variant="h4" color={mainColors.backgroundColor.main} fontWeight={700}>
                {content}
            </Typography>
        </Button>
    )
}

export default MyButton
