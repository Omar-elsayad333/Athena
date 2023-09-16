import useThemeSwitcher from 'container/useThemeSwitcher'

// MUI
import { Box } from '@mui/material'

const ThemeSwitcher = () => {
    const { handleSwitch } = useThemeSwitcher()

    const classes = {
        root: {
            position: 'fixed',
            bottom: 40,
            left: 40,
            zIndex: 50,
            '@media screen and (max-width: 600px)': {
                bottom: 20,
                left: 20,
            },
        },
        container: {
            width: 80,
            height: 40,
            paddingX: '5px',
            position: 'relative',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: '20px',
            transition: '.5s',
        },
        switcher: {
            width: 30,
            height: 30,
            position: 'absolute',
            zIndex: '5',
            borderRadius: '50%',
            transition: '.5s',
        },
        icon: {
            width: 30,
            height: 30,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
    }

    return (
        <Box sx={classes.root}>
            <Box sx={classes.container} id="container" onClick={() => handleSwitch()}>
                <Box sx={classes.switcher} id="switcher"></Box>
                <Box sx={classes.icon}>
                    <svg
                        width="25"
                        height="25"
                        viewBox="0 0 19 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.5236 21.0471C13.7695 21.0471 16.7341 19.5703 18.6981 17.1505C18.9887 16.7925 18.6719 16.2695 18.2228 16.355C13.1171 17.3274 8.42843 13.4127 8.42843 8.2587C8.42843 5.28982 10.0177 2.55973 12.6008 1.08976C12.999 0.863179 12.8988 0.259513 12.4464 0.175941C11.8121 0.0589867 11.1685 9.60414e-05 10.5236 0C4.71468 0 0 4.70728 0 10.5236C0 16.3325 4.70728 21.0471 10.5236 21.0471Z"
                            fill="#E8F3FF"
                        />
                    </svg>
                </Box>
                <Box sx={classes.icon}>
                    <svg
                        width="25"
                        height="25"
                        viewBox="0 0 19 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M9.40546 5.87841C7.46191 5.87841 5.87841 7.46191 5.87841 9.40546C5.87841 11.349 7.46191 12.9325 9.40546 12.9325C11.349 12.9325 12.9325 11.349 12.9325 9.40546C12.9325 7.46191 11.349 5.87841 9.40546 5.87841ZM18.4582 8.83599L14.9789 7.09818L16.2097 3.40948C16.375 2.90981 15.9011 2.43587 15.4051 2.60487L11.7164 3.83566L9.97493 0.352705C9.73979 -0.117568 9.07112 -0.117568 8.83599 0.352705L7.09818 3.83199L3.4058 2.6012C2.90614 2.43587 2.43219 2.90981 2.6012 3.4058L3.83199 7.09451L0.352705 8.83599C-0.117568 9.07112 -0.117568 9.73979 0.352705 9.97493L3.83199 11.7127L2.6012 15.4051C2.43587 15.9048 2.90981 16.3787 3.4058 16.2097L7.09451 14.9789L8.83231 18.4582C9.06745 18.9285 9.73612 18.9285 9.97125 18.4582L11.7091 14.9789L15.3978 16.2097C15.8974 16.375 16.3714 15.9011 16.2024 15.4051L14.9716 11.7164L18.4509 9.9786C18.9285 9.73979 18.9285 9.07112 18.4582 8.83599ZM12.7304 12.7304C10.8971 14.5638 7.91381 14.5638 6.08048 12.7304C4.24715 10.8971 4.24715 7.91381 6.08048 6.08048C7.91381 4.24715 10.8971 4.24715 12.7304 6.08048C14.5638 7.91381 14.5638 10.8971 12.7304 12.7304Z"
                            fill="#3F72A4"
                        />
                    </svg>
                </Box>
            </Box>
        </Box>
    )
}

export default ThemeSwitcher
