import Link from 'next/link'
import { Routes } from 'routes/Routes'
import { IStyle } from 'styles/IStyle'
import { useTheme } from 'context/ThemeContext'

// MUI
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import Urls from 'constant/urls'
import Loading from 'components/Loading/Loading'

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
        teacherImage: {
            borderRadius: '20px',
            border: `2px solid ${mainColors.primary.main} !important`,
        },
        card: {
            boxShadow: '0px 0px 15px 0px #B6D5F0',
        },
        cardTitle: {},
        cardBody: {},
    }

    return (
        <Box sx={style.container}>
            <Box>
                {data?.image && (
                    <Image
                        width={'362'}
                        height={'362'}
                        objectFit="cover"
                        placeholder="blur"
                        style={style.teacherImage}
                        alt={data.firstName + data.lastName}
                        src={`${Urls.URL_MAIN}/${data.image}`}
                        blurDataURL={`${Urls.URL_MAIN}/${data.image}`}
                    />
                )}
                <Box>
                    <Box sx={style.cardTitle}></Box>
                    <Box sx={style.cardBody}></Box>
                </Box>
            </Box>
        </Box>
    )
}

export default ProfileC
