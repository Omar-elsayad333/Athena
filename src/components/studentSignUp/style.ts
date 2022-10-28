const style: any = {
    layerSec: {
        backgroundColor: '#F4F9FF',
        boxShadow: '0px 0px 20px 0px #3F72A440',
        boxSizing: 'border-box',
        width: '50%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'start',
        '@media (max-width: 1440px)': {
            paddingY: '20px',
        },
        '@media (max-width: 1000px)': {
            width: '100%',
        },
        logo: {
            width: '100%',
            height: '8vh',
            marginLeft: '25px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'end',
            alignItems: 'end',
        },
        layer: {    
            boxSizing: 'border-box',
            height: '92vh',
            width: '100%',
            padding: '20px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '30px',
            privacy: {
                lineHeight: '20px',
            }
        }
    },
    formSec: {
        backgroundColor: '#E8F3FF',
        boxShadow: '0px 0px 39px -10px #1C364F',
        boxSizing: 'border-box',
        width: '50%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '@media (max-width: 1000px)': {
            width: '100%',
        }
    }
}

export default style;