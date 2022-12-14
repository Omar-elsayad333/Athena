import { useContext } from 'react';
import { DarkThemeContext } from 'context/ThemeContext';

// MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const Footer: React.FC = () => {

    const {mainColors} = useContext(DarkThemeContext)

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
            background: mainColors.linerGradient.secondary,
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

    return (
        <Box sx={classes.footer}>
            <Box sx={classes.footer.logout}>
                <svg width="25" height="25" viewBox="0 0 22 25" fill={mainColors.primary.main} xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.15857 0V12.2114H12.2114V0H9.15857ZM5.25091 4.39611L4.09083 5.3425C1.61801 7.29632 0 10.3492 0 13.7378C0 19.6299 4.79299 24.4228 10.685 24.4228C16.577 24.4228 21.37 19.6299 21.37 13.7378C21.37 10.3492 19.752 7.29632 17.2792 5.3425L16.1191 4.39611L14.1958 6.77734L15.3559 7.72372C17.1265 9.12804 18.3171 11.2956 18.3171 13.7378C18.3171 17.9813 14.9285 21.37 10.685 21.37C6.44153 21.37 3.05286 17.9813 3.05286 13.7378C3.05286 11.2956 4.15189 9.12804 5.92254 7.72372L7.17421 6.77734L5.25091 4.39611Z" fill="inherit"/>
                </svg>                
                <Typography fontSize={20} fontWeight={700} color={mainColors.primary.main} sx={{whiteSpace: 'noWrap'}}>
                    تسجيل الخروج    
                </Typography>
            </Box>
            <Box>
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12.5" cy="12.5" r="12" fill="#3F72A4" stroke="#E0EEFF"/>
                    <path d="M13.3 16.214H10.738V15.731C10.752 15.017 10.913 14.387 11.221 13.841C11.529 13.295 12.054 12.721 12.796 12.119C13.398 11.629 13.79 11.244 13.972 10.964C14.154 10.67 14.245 10.285 14.245 9.809C14.245 9.137 14.035 8.577 13.615 8.129C13.209 7.667 12.698 7.436 12.082 7.436C11.424 7.436 10.878 7.695 10.444 8.213C10.024 8.717 9.814 9.368 9.814 10.166V10.439H7C7.028 8.871 7.35 7.674 7.966 6.848C8.876 5.616 10.227 5 12.019 5C13.657 5 14.952 5.497 15.904 6.491C16.73 7.359 17.143 8.458 17.143 9.788C17.143 10.642 16.968 11.349 16.618 11.909C16.282 12.455 15.631 13.071 14.665 13.757C14.021 14.205 13.629 14.555 13.489 14.807C13.363 15.045 13.3 15.514 13.3 16.214ZM12.061 17.663C12.453 17.663 12.775 17.796 13.027 18.062C13.293 18.314 13.426 18.629 13.426 19.007C13.426 19.385 13.293 19.707 13.027 19.973C12.761 20.239 12.439 20.372 12.061 20.372C11.697 20.372 11.382 20.239 11.116 19.973C10.85 19.707 10.717 19.385 10.717 19.007C10.717 18.629 10.85 18.314 11.116 18.062C11.382 17.796 11.697 17.663 12.061 17.663Z" fill="#E8F3FF"/>
                </svg>           
            </Box>
        </Box>
    );
}

export default Footer;