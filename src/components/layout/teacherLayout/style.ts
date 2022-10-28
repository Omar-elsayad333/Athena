import colors from "../../../styles/colors";

const style: any = {
    container: {
        width: '300px',
        height: '100vh',
        '@media (max-width: 1440px)': {
            width: '250px',
        },
    },
    meContainer: {
        boxSizing: 'border-box',
        width: '100%',
        background: `linear-gradient(180deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
        height: '335px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'end',
        paddingLeft: '20px',
        paddingRight: '20px',
        '@media (max-width: 1440px)': {
            height: '250px'
        },
    },
    menuIcon: {
        width: '30px',
        height: '20px',
        cursor: 'pointer',
        '@media (max-width: 1440px)': {
            width: '25px',
            height: '10px',
        },
    },
    meSec: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',   
        alignItems: 'center',
        gap: '16px',
        '@media (max-width: 1440px)': {
            gap: '12px',
        },
        iconContainer: {
            width: '100%',
        },
        avatar: {
            boxSizing: 'border-box',
            width: '140px',
            height: '140px',
            border: 'solid 2.5px #8CC3F2',
            '@media (max-width: 1440px)': {
                width: '100px',
                height: '100px',
            },
        },
        name: {
            fontSize: '41px',
            color: '#E8F3FF',
            fontWeight: '700',
            '@media (max-width: 1440px)': {
                fontSize: '35px',
            },
        },
        jobTitle: {
            fontSize: '17px',
            color: '#E8F3FF',
            fontWeight: '400',
            '@media (max-width: 1440px)': {
                fontSize: '15px',
            },
        },   
    },
    menuSec: {   
        display: 'flex',
        flexDirection: 'column',
        gap: '90px',
        boxSizing: 'border-box',
        paddingY: '10px',
        width: '100%',
        backgroundColor: colors.primary,
        height: 'calc(100% - 420px)',
        borderTop: `solid 2px ${colors.third}`,
        borderBottom: `solid 2px ${colors.third}`,
        overflowY: 'auto',
        '&::-webkit-scrollbar': {
            width: '7px'
        },
        '&::-webkit-scrollbar-track': {
            boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
            webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: colors.third,
            border: `1px solid ${colors.secondary}`,
            borderRadius: '10px',
        },
        '@media (max-width: 1440px)': {
            height: 'calc(100% - 320px)'
        },
    },
    footerSec: {
        boxSizing: 'border-box',
        padding: '20px',
        width: '100%',
        height: '85px',
        background: `linear-gradient(90deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'centre',
        '@media (max-width: 1440px)': {
            height: '70px',
        }
    },
    navLink: {
        width: '100%',
        display: 'flex',
        justifyContent: 'start',
        fontSize: '23px',
        fontWeight: '700',
        padding: '14px 0 14px 20px',
        border: 'none',
        color: '#E8F3FF',
        icon: {
            display: 'flex',
            justifyContent: 'center',   
            alignItems: 'center',
            marginX: '20px',
        },
        iconBackground: {
            width: '40px',
            height: '40px',
            backgroundColor: colors.third,
            borderRadius: '50%',
            boxSizing: 'border-box',
            display: 'flex',
            padding: '7px',
            justifyContent: 'center',
            alignItems: 'center',
        },
        active: {
            backgroundColor: 'rgba(20, 37, 54, 0.65)',
            color: colors.third,
        }
    },

}

export default style;