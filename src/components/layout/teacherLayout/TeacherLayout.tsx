import style from './style';
import logo from '../../../../public/images/whiteLogoText.svg';
import Image from 'next/image';

// MUI
import Box from '@mui/material/Box';

const TeacherLayout = () => {
    return (
        <Box sx={style.container}>
            <Box sx={style.meSec}>   
                photo
            </Box>
            <Box sx={style.menuSec}>
                buttons
            </Box>
            <Box sx={style.footerSec}>
                <Image alt='Athena' src={logo} layout='intrinsic' />
            </Box>
        </Box>
    );
}

export default TeacherLayout;