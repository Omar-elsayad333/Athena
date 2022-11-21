import Image from 'next/image';
import logOut from '../../../../public/images/LogOutIcon.svg';
import askIcon from '../../../../public/images/askIcon.svg';

// MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const classes = {
    footer: {
        width: '100%',
        height: '66px',
        paddingLeft: '20px',
        paddingRight: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '20px',
        background: 'linear-gradient(90deg, #B6D5F0 0%, #DFEFFF 100%)',
        overflow: 'hidden',
        logout: {
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px'
        },
    },
}

const Footer: React.FC = () => {
    return (
        <Box sx={classes.footer}>
            <Box sx={classes.footer.logout}>
                <Image src={logOut} alt='تسجيل الخروج' style={{cursor: 'pointer'}}/>
                <Typography fontSize={20} fontWeight={700} color={'#3F72A4'} sx={{whiteSpace: 'noWrap'}}>
                    تسجيل الخروج    
                </Typography>
            </Box>
            <Box>
                <Image src={askIcon} alt='ask' style={{cursor: 'pointer'}}/>
            </Box>
        </Box>
    );
}

export default Footer;