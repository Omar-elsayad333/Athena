import me from '../../../../public/images/me.jpg';
import NavbarBut from './NavbarBut';
import NavbarSecBut from './NavbarSecBut';
import Avatar from 'components/Avatar';
import { useContext } from 'react';
import { DarkThemeContext } from 'context/ThemeContext';

// MUI
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

type Props = {
    firstPath?: any;
    secondPath?: any
    firstContent?: any;
    secondContent?: any;
}

const DesktopNavbar: React.FC<Props> = ({firstPath, secondPath, firstContent, secondContent}) => {

    const {mainColors} = useContext(DarkThemeContext);

    const style: any = {
        container: {
            width: '100%',
            height: '95px',
            padding: '0 55px',
            position: 'sticky',
            top: '0',
            zIndex: '99',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '25px',
            background: mainColors.linerGradient.primary,
            borderBottom: `1px solid ${mainColors.primary.main}`,
            transition: '.2s',
            '@media(max-width: 1200px)': {
                top: '80px',
                height: '75px',
                justifyContent: 'center',
                borderBottom: `3px solid ${mainColors.primary.main}`,
                borderRadius: '0 0 20px 20px',
                background: mainColors.linerGradient.secondary,
            },   
            '@media(max-width: 500px)': {
                padding: '0 20px',
            },   
        },
        buttonsContainer: {
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '25px',
            '@media(max-width: 1200px)': {
                width: '100%',
                justifyContent: 'space-between',
            },
            '@media(max-width: 300px)': {
                gap: '15px',
            },
        },
        teacherInfo: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '20px',
            profile: {
                width: 'fit-content',
                heigth: '46px',
                padding: '6px 9px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '9px',
                border: '1px solid #E8F3FF',
                borderRadius: '7px',
                boxShadow: '0px 0px 10px 0px #3F72A440',
                background: mainColors.linerGradient.primary,
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
    
    return (
        <Box sx={style.container}>
            <Box sx={style.buttonsContainer}>
                <NavbarBut content={firstContent} path={firstPath} />
                <NavbarSecBut content={secondContent} path={secondPath} />
            </Box>
            <Box sx={style.teacherInfo}>
                <svg width="33" height="33" viewBox="0 0 33 33" fill={mainColors.primary.main} xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.5224 5.37231H6.71573C5.64691 5.37231 4.62186 5.7969 3.86609 6.55267C3.11032 7.30844 2.68573 8.33349 2.68573 9.40231V22.8356C2.68573 23.9045 3.11032 24.9295 3.86609 25.6853C4.62186 26.441 5.64691 26.8656 6.71573 26.8656H25.5224C26.5912 26.8656 27.6163 26.441 28.372 25.6853C29.1278 24.9295 29.5524 23.9045 29.5524 22.8356V9.40231C29.5524 8.33349 29.1278 7.30844 28.372 6.55267C27.6163 5.7969 26.5912 5.37231 25.5224 5.37231V5.37231ZM24.6224 8.05898L16.1191 14.4398L7.61576 8.05898H24.6224ZM25.5224 24.179H6.71573C6.35945 24.179 6.01777 24.0374 5.76585 23.7855C5.51392 23.5336 5.3724 23.1919 5.3724 22.8356V9.73814L15.3131 17.1936C15.5456 17.368 15.8284 17.4623 16.1191 17.4623C16.4097 17.4623 16.6925 17.368 16.9251 17.1936L26.8657 9.73814V22.8356C26.8657 23.1919 26.7242 23.5336 26.4723 23.7855C26.2203 24.0374 25.8787 24.179 25.5224 24.179Z" fill="inherit"/>
                </svg>
                <svg width="33" height="33" viewBox="0 0 33 33" fill={mainColors.primary.main} xmlns="http://www.w3.org/2000/svg">
                    <path d="M27.5644 20.43L25.1464 17.9986V12.0074C25.1786 9.78257 24.4047 7.62127 22.9677 5.92253C21.5307 4.22379 19.5276 3.10234 17.3282 2.76525C16.0518 2.59716 14.7542 2.70321 13.5221 3.07633C12.2899 3.44946 11.1514 4.08107 10.1827 4.92904C9.21396 5.777 8.4372 6.82181 7.90425 7.99375C7.37129 9.1657 7.09441 10.4378 7.09206 11.7253V17.9986L4.67406 20.43C4.37034 20.7388 4.16438 21.1303 4.08192 21.5555C3.99946 21.9807 4.04417 22.4208 4.21045 22.8207C4.37673 23.2206 4.6572 23.5627 5.01681 23.8041C5.37642 24.0455 5.79921 24.1755 6.23232 24.1779H10.7459V24.6347C10.8087 25.9984 11.4095 27.2817 12.4167 28.2033C13.4238 29.1249 14.7553 29.6096 16.1192 29.5513C17.4832 29.6096 18.8146 29.1249 19.8218 28.2033C20.829 27.2817 21.4298 25.9984 21.4926 24.6347V24.1779H26.0062C26.4393 24.1755 26.8621 24.0455 27.2217 23.8041C27.5813 23.5627 27.8618 23.2206 28.028 22.8207C28.1943 22.4208 28.239 21.9807 28.1566 21.5555C28.0741 21.1303 27.8681 20.7388 27.5644 20.43V20.43ZM18.8059 24.6347C18.7314 25.2808 18.4105 25.8733 17.91 26.2887C17.4095 26.7041 16.7681 26.9104 16.1192 26.8646C15.4704 26.9104 14.829 26.7041 14.3285 26.2887C13.828 25.8733 13.5071 25.2808 13.4326 24.6347V24.1779H18.8059V24.6347ZM7.40102 21.4913L8.98615 19.9061C9.23758 19.6562 9.43706 19.359 9.57309 19.0316C9.70911 18.7042 9.779 18.3531 9.77872 17.9986V11.7253C9.77945 10.8191 9.97402 9.92349 10.3494 9.09866C10.7247 8.27384 11.2721 7.53885 11.9549 6.94301C12.6285 6.33271 13.4266 5.87607 14.2941 5.60469C15.1616 5.33331 16.0777 5.25368 16.979 5.37131C18.5325 5.62356 19.9426 6.42853 20.9497 7.63802C21.9568 8.84751 22.4931 10.3801 22.4598 11.9536V17.9986C22.4577 18.3522 22.5255 18.7027 22.6592 19.03C22.7929 19.3574 22.9899 19.6551 23.2389 19.9061L24.8375 21.4913H7.40102Z" fill="inherit"/>
                </svg>  
                <Box sx={style.teacherInfo.profile}>
                    <Box sx={style.teacherInfo.photo}>
                        <Avatar alt='أ / محمد خليل' src={me} />
                    </Box>
                    <Box>
                        <Typography fontWeight={700} fontSize={14} color='primary'>
                            أ / محمد خليل
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );  
}

export default DesktopNavbar;