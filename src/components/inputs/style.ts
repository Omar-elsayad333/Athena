import colors from "../../styles/colors"

const style: any = {
    logFormInputs: {
        width: 'calc(100% - 20px)',
        height: '100%',
        fontSize: 'inherit',
        color: colors.primary,
        borderRadius: '12px',
        border: 'none',
        outline: 'none',
        background: 'rgba(232, 243, 255, 0.25)',
        boxShadow: '0px 0px 10px rgba(28, 54, 79, 0.25)',
        padding: '0 10px',
        direction: 'ltr',
    },
    inputsContainer: {
        width: '100%',
        height: '80px',
        fontSize: '23px',
        '@media (max-width: 600px)': {
            height: '50px',
            fontSize: '18px'
        }
    },
};

export default style;