import colors from "styles/colors"

const style: any = {
    container: {
        width: '100%',
        height: '123px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '25px',
        backgroundColor: '#B6D5F0',
        borderBottom: `solid 1px ${colors.primary.dark}`,
        '@media(max-width: 1200px)': {
            width: '100%',
            height: 'auto',

        }
    },
    navItems: {
        height: '100%',
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
        header: {
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'linear-gradient(90deg, #B6D5F0 0%, #DFEFFF 100%)',
            menuIcon: { 
                width: '28px',
                height: '19px', 
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
            },
            '@media(max-width: 1200px)': {
                width: '100%',
                height: '97px',
                justifyContent: 'space-around',
                borderBottom: '2px solid #3F72A4',  
            }
        },
        logo: {
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        },
        buttonsContainer: {
            marginRight: '28px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '35px',
            '@media(max-width: 1200px)': {
                width: '100%',
                height: '75px',
                marginRight: '0',
                justifyContent: 'space-around',
                borderBottom: '3px solid #3F72A4',  
            }
        },
        '@media(max-width: 1200px)': {
            flexDirection: 'column',
            width: '100%'
        }
    },
    teacherInfo: {
        marginX: '55px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '25px',
        profile: {
            width: '170px',
            heigth: '60px',
            padding: '10px 12px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '15px',
            border: '1px solid #E8F3FF',
            borderRadius: '10px',
            boxShadow: '0px 0px 10px 0px #3F72A440',
        },
        photo: {
            display: 'flex',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            border: '1px solid #3F72A4',
        },
        '@media(max-width: 1200px)': {
            display: 'none'   
        }
    },
}

export default style