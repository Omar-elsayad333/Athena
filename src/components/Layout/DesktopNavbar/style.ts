const style: any = {
    container: {
        width: '100%',
        height: '95px',
        padding: '0 55px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '25px',
        backgroundColor: '#B6D5F0',
        borderBottom: '1px solid #3F72A4',
        '@media(max-width: 1200px)': {
            height: '75px',
            justifyContent: 'center',
            borderBottom: '3px solid #3F72A4',
            borderRadius: '0 0 20px 20px',
        },   
        '@media(max-width: 500px)': {
            padding: '0 20px',
        },   
    },
    buttonsContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '30px',
        '@media(max-width: 1200px)': {
            width: '100%',
            justifyContent: 'space-between',
        },
    },
    teacherInfo: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
        profile: {
            width: '150px',
            heigth: '46px',
            padding: '6px 9px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '9px',
            border: '1px solid #E8F3FF',
            borderRadius: '7px',
            boxShadow: '0px 0px 10px 0px #3F72A440',
            background: 'linear-gradient(90deg, #B6D5F0  0%, #DFEFFF 100%)',
        },
        photo: {
            display: 'flex',
            width: '34px',
            height: '34px',
            borderRadius: '50%',
            border: '1px solid #3F72A4',
        },
        '@media(max-width: 1200px)': {
            display: 'none',
        },
    },
}

export default style