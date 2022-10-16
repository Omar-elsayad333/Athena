import colors from "../../styles/colors";

const style: any = {
    loginCard: {
        margin: '30px 10px',
        padding: '25px',
        backgroundColor: 'rgba(182, 213, 240, 0.25)',
        width: '500px',
        maxWidth: '100%',
        minHeight: '800px',
        borderRadius: '30px',
        backdropFilter: 'blur(10px)',
        borderWidth: '10px 0px',
        borderStyle: 'solid',
        borderColor: `${colors.primary}`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'top',
        alignItems: 'center',
        color: colors.primary,
    },
    headerText: {
        fontSize: '34px',
        fontWeight: '700',
        textAlign: 'center',
        paddingY: '20px',
    },
    form: {
        width: '450px',
        maxWidth: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '30px'
    },
    formLabels: {
        fontWeight: '400',
        fontSize: '20px',
        padding: '12px 0'
    },
    formInputs: {
        width: '100%',
        height: '80px',
        fontSize: '25px',
        color: colors.primary,
        borderRadius: '12px',
        border: 'none',
        outline: 'none',
        background: 'rgba(232, 243, 255, 0.25)',
        boxShadow: '0px 0px 10px rgba(28, 54, 79, 0.25)',
    },
    formOptions: {
        width: '450px',
        maxWidth: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: '10px',
        paddingTop: '5px'
    },
    logContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    signupBut: {
        maxWidth: '100%',
        fontSize: '14px',
        fontWeight: '400',
    }
}

export default style;