import colors from 'styles/colors';
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
        borderLeft: `solid 1px ${colors.primary.dark}`,
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

type Props = {
    sideNavState: Boolean;
}

const Footer: React.FC<Props> = ({sideNavState}) => {
    return (
        <Box sx={classes.footer}>
            <Box sx={classes.footer.logout}>
                <Image src={logOut} alt='تسجيل الخروج' style={{cursor: 'pointer'}}/>
                {
                    sideNavState &&
                    <Typography fontSize={20} fontWeight={700} color={'#3F72A4'} sx={{whiteSpace: 'noWrap'}}>
                        تسجيل الخروج    
                    </Typography>
                }
            </Box>
            <Box>
                {
                    sideNavState &&
                    <Image src={askIcon} alt='ask' style={{cursor: 'pointer'}}/>
                }
            </Box>
        </Box>
    );
}
 
export default Footer;