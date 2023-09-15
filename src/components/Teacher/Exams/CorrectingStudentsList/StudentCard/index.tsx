import Urls from 'constant/urls'
import { IStyle } from 'styles/IStyle'
import { useTheme } from 'context/ThemeContext'

// MUI
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'

type Props = {
    name: string
    image: string
    cardState?: boolean
    stateAvailable?: boolean
}

const StudentCard: React.FC<Props> = ({ name, image, cardState, stateAvailable }) => {
    const { mainColors } = useTheme()

    const cardStateHandler = () => {
        if (stateAvailable) {
            if (cardState) {
                return `2px solid ${mainColors.success.main}`
            } else {
                return `2px solid ${mainColors.error.main}`
            }
        } else {
            return `2px solid ${mainColors.paper.border}`
        }
    }

    const style: IStyle = {
        card: {
            display: 'flex',
            flexWrap: 'wrap',
            maxWidth: '100%',
            width: '500px',
            minHeight: '100px',
            overflow: 'hidden',
            borderRadius: '11px',
            border: cardStateHandler(),
            cursor: 'pointer',
        },
    }
    return (
        <Box sx={style.card}>
            {image ? (
                <img
                    style={{ objectFit: 'cover', flex: '1' }}
                    width={100}
                    height={100}
                    src={`${Urls.URL_MAIN}/${image}`}
                    alt={name}
                />
            ) : (
                <Box width={100} height={100} sx={{ backgroundColor: mainColors.secondary.main }} />
            )}
            <Box p={3}>
                <Typography variant="h3" color={'primary'}>
                    {name}
                </Typography>
            </Box>
        </Box>
    )
}

export default StudentCard
