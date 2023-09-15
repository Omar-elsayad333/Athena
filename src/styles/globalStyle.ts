import { useTheme } from 'context/ThemeContext'

const useGlobalStyle = () => {
    const { mainColors } = useTheme()

    const pageStructureStyle = {
        root: {
            width: '100%',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: mainColors.backgroundColor.main,
            transition: '.2s',
        },
        container: {
            padding: '60px',
            display: 'flex',
            flexDirection: 'column',
            gap: '60px',
            '@media screen and (max-width: 450px)': {
                padding: '40px',
            },
            '@media screen and (max-width: 350px)': {
                padding: '20px',
            },
        },
        header: {
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '32px',
        },
        footerContainer: {
            marginTop: 'auto',
        },
    }

    return {
        pageStructureStyle,
    }
}

export default useGlobalStyle
