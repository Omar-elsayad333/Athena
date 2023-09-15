import { lightColors } from '../../styles/colors'

const style: any = {
    TeacherLoginCard: {
        width: '500px',
        maxWidth: '100%',
        minHeight: 'auto',
        margin: '30px 10px',
        borderRadius: '30px',
        background: 'rgba(232, 243, 255, 0.4)',
        boxShadow: '0px 0px 45px rgba(28, 54, 79, 0.35)',
        backdropFilter: 'blur(15px)',
        color: lightColors.primary.main,
    },
    container: {
        maxWidth: '100%',
        padding: '40px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'top',
        alignItems: 'center',
        '@media screen and  (max-width: 600px)': {
            padding: '30px',
        },
    },
    imageContainer: {
        width: '60%',
    },
    headerText: {
        textAlign: 'center',
        fontSize: '30px',
        paddingBottom: '20px',
        '@media screen and (max-width: 500px)': {
            fontSize: '15px',
        },
    },
    form: {
        width: '450px',
        maxWidth: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
    },
    formLabels: {
        fontSize: '20px',
        padding: '13px 0',
        '@media screen and (max-width: 500px)': {
            fontSize: '13px',
        },
    },
    formOptions: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '20px',
        paddingTop: '16px',
        color: lightColors.primary.main,
    },
    checkContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkBox: {
        '.MuiSvgIcon-root': {
            color: '#3F72A4',
        },
    },
    logContainer: {
        width: '100%',
    },
}

export default style
