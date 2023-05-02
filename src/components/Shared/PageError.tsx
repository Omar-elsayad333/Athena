// MUI
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

type Props = {
    errors: any
}

const PageError: React.FC<Props> = ({ errors }) => {
    const style = {
        container: {
            width: '100%',
            flex: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
        },
    }

    return (
        <Box sx={style.container}>
            {errors.map((error: any, index: number) => (
                <Typography key={index} fontWeight={700} variant="h5" color={'error'}>
                    {error.value}
                </Typography>
            ))}
        </Box>
    )
}

export default PageError
