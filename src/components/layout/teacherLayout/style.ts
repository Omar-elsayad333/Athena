import colors from "../../../styles/colors";

const style: any = {
    container: {
        width: '308px',
        height: '100vh',
        '@media (max-width: 1440px)': {
            width: '250px',
        },
    },
    header: {
        width: '100%',
        background: 'linear-gradient(90deg, #B6D5F0 0%, #DFEFFF 100%)',
        height: '123px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap:'20px',
        menuIcon: { 
            cursor: 'pointer',
            display: 'none',
        },
    },
    menu: {   
        width: '100%',
        height: 'calc(100% - (95px + 123px))',
        paddingY: '17px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: '40px',
        backgroundColor: '#B6D5F0',
        borderTop: `solid 1px ${colors.primary.main}`,
        borderBottom: `solid 1px ${colors.primary.dark}`,
        borderLeft: `solid 1px ${colors.primary.dark}`,
        overflowY: 'auto',
        '&::-webkit-scrollbar': {
            width: '7px'
        },
        '&::-webkit-scrollbar-track': {
            boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
            webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
        },
        '&::-webkit-scrollbar-thumb': {
            border: `1px solid ${colors.primary.main}`,
        },
    },
    footer: {
        width: '100%',
        height: '95px',
        padding: '20px',
        borderLeft: `solid 1px ${colors.primary.dark}`,
        overflowY: 'hidden',
        background: 'linear-gradient(90deg, #B6D5F0 0%, #DFEFFF 100%)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'centre',
        privacy: {
            fontSize: '12px',
            fontWeight: '700',
            color: colors.primary.dark,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            justifyContent: 'center',
            gap: '7px',
        }
    },
}

export default style;