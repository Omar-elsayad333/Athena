import colors from "../../../styles/colors";

const style: any = {
    container: {
        height: 'calc(100vh - 123px)',
        transition: '.5s',
        '@media(max-width: 1200px)': {
            display: 'none'
        },
    },
    menu: {
        width: '100%',
        height: 'calc(100% - 95px)',
        paddingY: '17px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: '40px',
        backgroundColor: '#B6D5F0',
        borderBottom: `solid 1px ${colors.primary.dark}`,
        borderLeft: `solid 1px ${colors.primary.dark}`,
        overflowY: 'auto',
        overflowX: 'hidden',
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