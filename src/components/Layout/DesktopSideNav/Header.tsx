import { DarkThemeContext } from 'context/ThemeContext'
import { useContext } from 'react'

// MUI
import Box from '@mui/material/Box'
import InlineLogo from 'components/Svgs/InlineLogo'

type Props = {
    controleSideNav: any
    sideNavState: Boolean
}

const Header: React.FC<Props> = ({ controleSideNav, sideNavState }) => {
    const { darkMode, mainColors } = useContext(DarkThemeContext)

    const classes = {
        container: {
            width: '100%',
            height: '94px',
            padding: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '30px',
            background: mainColors.linerGradient.primary,
            borderBottom: `solid 1px ${darkMode ? 'none' : mainColors.primary.main}`,
            transition: '.2s',
        },
        menuIcon: {
            cursor: 'pointer',
        },
        logo: {
            display: sideNavState ? 'block' : 'none',
        },
    }

    return (
        <Box sx={classes.container}>
            <Box sx={classes.logo}>{sideNavState && <InlineLogo />}</Box>
            <Box sx={classes.menuIcon}>
                <svg
                    width="28"
                    height="19"
                    viewBox="0 0 39 27"
                    fill={mainColors.primary.main}
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={controleSideNav}
                >
                    <rect width="39" height="4.17857" rx="2.08929" fill="inherit" />
                    <rect y="11.1421" width="39" height="4.17857" rx="2.08929" fill="inherit" />
                    <rect y="22.2869" width="39" height="4.17857" rx="2.08929" fill="inherit" />
                </svg>
            </Box>
        </Box>
    )
}

export default Header
