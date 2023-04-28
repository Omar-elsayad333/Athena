import { NextPage } from 'next'
import { lightColors, darkColors } from 'styles/colors'
import { useContext } from 'react'
import { DarkThemeContext } from 'context/ThemeContext'
import PageHead from 'components/Shared/PageHead'
import DesktopNavbar from 'components/Layout/DesktopNavbar'
import ThemeSwitcher from 'components/ThemeSwitcher'
import { withAuth } from 'routes/withRoute'

// MUI
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const Home: NextPage = () => {
    const { darkMode } = useContext(DarkThemeContext)

    return (
        <Box
            sx={{
                width: '100%',
                minHeight: '100vh',
                backgroundColor: darkMode
                    ? darkColors.backgroundColor.main
                    : lightColors.backgroundColor.main,
            }}
        >
            <PageHead title="Home" />
            <DesktopNavbar />
            <Typography variant="h1" color="primary" p={5}>
                home
            </Typography>
            <ThemeSwitcher />
        </Box>
    )
}

export default withAuth(Home)
