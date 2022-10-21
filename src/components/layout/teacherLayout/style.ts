import colors from "../../../styles/colors";

const style: any = {
    container: {
        width: '300px',
        height: '100vh',
        
    },
    meSec: {
        width: '100%',
        background: `linear-gradient(180deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
        height: '20vh',
    },
    menuSec: {
        width: '100%',
        backgroundColor: colors.primary,
        height: '70vh',
        borderTop: 'solid 2px #FFC045',
        borderBottom: 'solid 2px #FFC045',
    },
    footerSec: {
        boxSizing: 'border-box',
        width: '100%',
        height: '10vh',
        background: `linear-gradient(90deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'centre',
    }
}

export default style;