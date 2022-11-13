const style: any = {
    container: {
        width: '100%',
        height: 'auto',
        alignItems: 'center',
        '@media(min-width: 1200px)': {
            display: 'none',
        }
    },
    navItems: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        header: {
            width: '100%',
            height: '97px',
            paddingX: '50px',
            gap: '35px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '2px solid #3F72A4',  
            background: 'linear-gradient(90deg, #B6D5F0 0%, #DFEFFF 100%)',
            menuIcon: { 
                width: '28px',
                height: '19px', 
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
            },
            '@media(max-width: 500px)': {
                gap: '15px',
                paddingX: '20px',
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
            width: '100%',
            height: '75px',
            paddingX: '50px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '35px',
            background: '#B6D5F0',
            borderBottom: '3px solid #3F72A4',  
            borderRadius: '0px 0px 25px 25px',
            boxShadow: '0px 5px 20px 2px #1C364F40',
            '@media(max-width: 500px)': {
                gap: '15px',
                paddingX: '20px',
            }
        },
    },
    profile: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '40px',
        '@media(max-width: 400px)': {
            gap: '20px',
        },
        '@media(max-width: 250px)': {
            gap: '10px',
        },
        meImage: {
            width: '60px',
            height: '60px',
            display: 'flex',
            '@media(max-width: 500px)': {
                width: '53px',
                height: '53px',
            }
        }
        
    }
}

export default style