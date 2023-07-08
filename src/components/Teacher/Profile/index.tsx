import Link from 'next/link'
import { Routes } from 'routes/Routes'
import { IStyle } from 'styles/IStyle'
import { useTheme } from 'context/ThemeContext'

// MUI
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import Urls from 'constant/urls'

type Props = {
    data: any
}

const ProfileC: React.FC<Props> = ({ data }) => {
    const { mainColors } = useTheme()

    const style = {
        container: {
            position: 'relative',
            display: 'flex',
            alignItems: 'start',
            flexWrap: 'wrap',
            gap: '55px',
        },
        card: {
            boxShadow: '0px 0px 15px 0px #B6D5F0'
        },
        teacherImage: {
            width: '362px',
            height: '362px',
            backgroundColor: mainColors.primary.main,
            objectFit: 'cover'
        }
    }

    return (
        <Box sx={style.container}>
            <Box sx={style.teacherImage}>
                {data?.image && <img src={`${Urls.URL_MAIN}/${data.image}`} style={style.teacherImage} /> }
            </Box>
        </Box>
    )
}

export default ProfileC
