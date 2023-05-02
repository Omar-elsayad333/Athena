import { useTheme } from 'context/ThemeContext'

const useStyle = () => {
    const { mainColors } = useTheme()

    const styles = {
        levelsContianer: {
            gap: '42px',
            maxWidth: '100%',
            display: 'flex',
            alignItems: 'start',
            flexDirection: 'column',
        },
        levelContainer: {
            maxWidth: '100%',
            display: 'flex',
            gap: '18px',
            flexDirection: 'column',
        },
        levelCard: {
            width: '592px',
            maxWidth: '100%',
            height: '91px',
            display: 'flex',
            alignItems: 'center',
            paddingRight: '34px',
            borderRadius: '12px',
            backgroundColor: mainColors.paper.main,
            border: '2px solid #b6d5f0',
            justifyContent: 'space-between',
        },
        cardController: {
            width: '79px',
            height: '100%',
            display: 'grid',
            placeItems: 'center',
            borderRadius: '12px 0 0 12px',
            borderRight: '2px solid #b6d5f0',
            backgroundColor: mainColors.backgroundColor.main,
        },
        cardDetails: {
            width: '100%',
            padding: '34px',
            gap: '28px',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '12px',
            backgroundColor: mainColors.paper.main,
            border: '2px solid #b6d5f0',
        },
        semestersContainer: {
            gap: '16px',
            display: 'flex',
            flexDirection: 'column',
        },
        semesterChips: {
            gap: '52px',
            display: 'flex',
            padding: '31px',
            borderRadius: '12px',
            flexDirection: 'column',
            border: '2px solid #b6d5f0',
            justifyContent: 'space-between',
        },
        semesterBox: {
            gap: '20px',
            display: 'flex',
            flexDirection: 'column',
        },
        semesterDetials: {
            display: 'flex',
            gap: '40px',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
        },
        inputContaienr: {
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
        },
    }

    return styles
}

export default useStyle
