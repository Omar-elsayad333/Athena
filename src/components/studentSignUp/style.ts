const style: any = {
    layerSec: {
        zIndex: '2',
        backgroundColor: '#F4F9FF',
        boxShadow: '0px 0px 20px 0px #3F72A440',
        width: '50%',
        height: '100vh',
        position: 'sticky',
        top: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'start',
        '@media (max-width: 1440px)': {
            paddingY: '20px',
            position: 'unset',
        },
        '@media (max-width: 1000px)': {
            width: '100%',
            justifyContent: 'space-between',
        },
        logo: {
            width: '100%',
            height: '8vh',
            marginLeft: '25px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'end',
            alignItems: 'end',
            '@media (max-width: 1000px)': {
                height: '5vh',
                alignItems: 'center',
                marginLeft: '0',
            },
        },
        layer: {    
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
            },
            link: {
                cursor: 'pointer',
            },
            '@media (max-width: 1000px)': {
                height: '50vh',
                padding: '0',
            },
        },
        scrollBut: {
            display: 'none',
            '@media (max-width: 1000px)': {
                height: '20vh',
                width: '255px',
                paddingX: '20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10px',
            },
            '@media (max-width: 300px)': {
                width: '200px',
            },
            link: {
                cursor: 'pointer',
            }
        }
    },
    formSec: {
        backgroundColor: '#E8F3FF',
        width: '50%',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
        '@media (max-width: 1000px)': {
            width: '100%',
            flexDirection: 'column',
        },
        formLayout: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItem: 'center',
            gap: '50px',
        },
        stepLayout: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'start',
            alignItem: 'center',
            gap: '20px'
        },
        inputsLayout: {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'start',
            alignItem: 'center',
            gap: '40px',
        }
    },
}

export default style;