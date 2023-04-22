import Link from 'next/link'
import { NextPage } from 'next'
import { Routes } from 'routes/Routes'
import { useTheme } from 'context/ThemeContext'
import PageHead from 'components/Shared/PageHead'
import SecondaryIogo from 'assets/images/SecondaryIogo'
import LoginButDark from '../components/LoginButDark'

// MUI
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const Home: NextPage = () => {
    const { mainColors } = useTheme()

    return (
        <Box
            sx={{
                width: '100%',
                background: mainColors.backgroundColor.main,
            }}
        >
            <PageHead title="Athena" description="Athena website" />
            <Box
                sx={{
                    gap: '100px',
                    minHeight: '100vh',
                    width: '100vw',
                    padding: '50px',
                    display: 'flex',
                    alignItems: 'start',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}
            >
                <Box
                    sx={{
                        alignSelf: 'flex-end',
                    }}
                >
                    <SecondaryIogo />
                </Box>
                <Box
                    sx={{
                        gap: '106px',
                        display: 'flex',
                        alignItems: 'start',
                        flexDirection: 'column',
                        maxWidth: '100%',
                    }}
                >
                    <Box
                        sx={{
                            gap: '55px',
                            width: '100%',
                            display: 'flex',
                            alignItems: 'start',
                            flexDirection: 'column',
                            maxWidth: '100%',
                        }}
                    >
                        <Typography variant="h3" color="primary">
                            انا مدرس
                        </Typography>
                        <Link href={Routes.teacherHome}>
                            <a style={{ width: '400px', maxWidth: '100%' }}>
                                <LoginButDark content="قسم المدرس" />
                            </a>
                        </Link>
                    </Box>
                    <Box
                        sx={{
                            gap: '55px',
                            display: 'flex',
                            alignItems: 'start',
                            flexDirection: 'column',
                            maxWidth: '100%',
                        }}
                    >
                        <Typography variant="h3" color="primary">
                            انا طالب
                        </Typography>
                        <Link href={Routes.dashboard}>
                            <a style={{ width: '400px', maxWidth: '100%' }}>
                                <LoginButDark content="قسم الطالب" />
                            </a>
                        </Link>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Home
