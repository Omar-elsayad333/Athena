import { useTheme } from 'context/ThemeContext'
import { IStyle } from 'styles/IStyle'

const useStyle = () => {
    const { mainColors } = useTheme()

    const styles: IStyle = {
        levelsContianer: {
            gap: '42px',
            display: 'flex',
            alignItems: 'start',
            flexDirection: 'column',
        },
        levelCard: {
            width: '592px',
            height: '91px',
            display: 'flex',
            alignItems: 'center',
            paddingRight: '34px',
            borderRadius: '12px',
            backgroundColor: '#e8f3ff',
            border: '2px solid #b6d5f0',
            justifyContent: 'space-between',
        },
        cardButton: {
            width: '79px',
            height: '100%',
            display: 'grid',
            placeItems: 'center',
            borderRadius: '12px 0 0 12px',
            borderRight: '2px solid #b6d5f0',
            backgroundColor: mainColors.backgroundColor.main,
        },
    }

    return styles
}

export default useStyle
