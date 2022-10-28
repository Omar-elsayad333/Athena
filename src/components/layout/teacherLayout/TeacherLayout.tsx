import style from './style';
import logo from '../../../../public/images/whiteLogoText.svg';
import Image from 'next/image';
import me from '../../../../public/images/me.jpg';
import menuIcon from '../../../../public/images/menu icon.svg';
import homeIcon from '../../../../public/images/icon test.svg';
import NavLink from './NavLink';

// MUI
import Box from '@mui/material/Box';
import MyAvatar from '../../Avatar';
import { Typography } from '@mui/material';

const TeacherLayout: React.FC = () => {
    return (
        <Box sx={style.container}>
            <Box sx={style.meContainer}>
                <Box sx={style.menuIcon}>
                    <Image src={menuIcon} layout='intrinsic' alt='menu icon' />
                </Box>
                <Box sx={style.meSec}>   
                    <MyAvatar alt='omar' src={me} style={style.meSec.avatar} />
                    <Typography sx={style.meSec.name}>
                        أ / محمد خليل   
                    </Typography>
                    <Typography sx={style.meSec.jobTitle}>
                        أستاذ اللغة العربية 
                    </Typography>
                </Box>
            </Box>
            <Box sx={style.menuSec}>
                <Box>
                    <NavLink style={style.navLink} icon={homeIcon} content='الطلاب' />
                    <NavLink style={style.navLink} icon={homeIcon} content='الطلاب' />
                    <NavLink style={style.navLink} icon={homeIcon} content='الطلاب' />
                    <NavLink style={style.navLink} icon={homeIcon} content='الطلاب' />
                    <NavLink style={style.navLink} icon={homeIcon} content='الطلاب' />
                    <NavLink style={style.navLink} icon={homeIcon} content='الطلاب' />
                    <NavLink style={style.navLink} icon={homeIcon} content='الطلاب' />
                    <NavLink style={style.navLink} icon={homeIcon} content='الطلاب' />
                </Box>
                <Box>
                    <NavLink style={style.navLink} icon={homeIcon} content='الطلاب' />
                    <NavLink style={style.navLink} icon={homeIcon} content='الطلاب' />
                </Box>
            </Box>
            <Box sx={style.footerSec}>
                <Image alt='Athena' src={logo} layout='intrinsic' />
            </Box>
        </Box>
    );
}

export default TeacherLayout;