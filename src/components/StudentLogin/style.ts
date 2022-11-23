import {lightColors} from "../../styles/colors";

const style: any = {
    StudentLoginCard: {
        margin: '30px 10px',
        backgroundColor: 'rgba(182, 213, 240, 0.25)',
        width: '500px',
        maxWidth: '100%',
        minHeight: 'auto',
        borderRadius: '30px',
        backdropFilter: 'blur(10px)',
        borderWidth: '10px 0px',
        borderStyle: 'solid',
        borderColor: `${lightColors.primary.main}`,   
        color: lightColors.primary.main,
    },
    container: {
        maxWidth: '100%',
        padding: '40px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'top',
        alignItems: 'center',
        '@media (max-width: 600px)': {
            padding: '30px'
        },
        '@media (max-width: 400px)': {
            padding: '20px'
        }
    },
    headerText: {
        textAlign: 'center',
        paddingY: '20px',
    },
    form: {
        width: '450px',
        maxWidth: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
    },
    formLabels: {
        padding: '13px 0'
    },
    formOptions: {
        width: '450px',
        maxWidth: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: '16px'
    },
    checkContainer: {
        fontWeight: '400',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '11px'
    },
    link: {
        cursor: 'pointer',
        color: lightColors.primary.dark
    }
}

export default style;