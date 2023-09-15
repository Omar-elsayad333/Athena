// MUI
import Button from '@mui/material/Button'

type Props = {
    type?: any
    content: any
    onClick?: any
}

const LoginButDark: React.FC<Props> = ({ content, onClick, type }) => {
    const classes = {
        height: '80px',
        maxWidth: '100%',
        fontSize: '34px',
        fontWeight: '700',
        boxShadow: 'none',
        borderRadius: '6px',
        '@media screen and (max-width: 600px)': {
            fontSize: '27px',
        },
        '@media screen and (max-width: 400px)': {
            fontSize: '25px',
        },
        '@media screen and (max-width: 350px)': {
            fontSize: '20px',
        },
    }

    return (
        <Button
            fullWidth
            type={type}
            sx={classes}
            color="primary"
            onClick={onClick}
            variant="contained"
        >
            {content}
        </Button>
    )
}

export default LoginButDark
