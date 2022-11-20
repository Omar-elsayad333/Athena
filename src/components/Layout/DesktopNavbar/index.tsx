import style from './style';
import Image from 'next/image';
import me from '../../../../public/images/me.jpg';
import iconBell from '../../../../public/images/iconBell.svg';
import iconEmail from '../../../../public/images/iconEmail.svg';
import NavbarBut from './NavbarBut';
import NavbarSecBut from './NavbarSecBut';
import Avatar from 'components/Avatar';

// MUI
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

const DesktopNavbar: React.FC = () => {
    
    return (
        <Box sx={style.container}>
            <Box sx={style.buttonsContainer}>
                <NavbarBut content='جميع المجموعات' />
                <NavbarSecBut content='اضافة مجموعة' />
            </Box>
            <Box sx={style.teacherInfo}>
                <Image src={iconEmail} alt='Notifications' />
                <Image src={iconBell} alt='Messages' />
                <Box sx={style.teacherInfo.profile}>
                    <Box sx={style.teacherInfo.photo}>
                        <Avatar alt='أ / محمد خليل' src={me} />
                    </Box>
                    <Box>
                        <Typography fontWeight={700} fontSize={14} color='#3F72A4'>
                            أ / محمد خليل
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );  
}
 
export default DesktopNavbar;