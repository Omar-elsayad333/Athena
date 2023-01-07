import { useContext } from "react";
import { DarkThemeContext } from "context/ThemeContext";

// MUI
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const PageFooter: React.FC = () => {

    const { mainColors } = useContext(DarkThemeContext);

    const style = {
        container: {
            width: '100%',
            minHeight: '67px',
            paddingX: '60px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '43px',
            borderTop: '1px solid #3F72A4',
            background: mainColors.paper.main,
            transition: '.2s',
            '@media(max-width: 1430px)': {
                justifyContent: 'center',
                paddingY: '20px'
            },
            '@media(max-width: 450px)': {
                padding: '40px'
            },
            '@media(max-width: 350px)': {   
                padding: '20px'
            },
        },
        miniContainer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',   
            gap: '43px',
        },
        logoContainer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '8px',
            '@media(max-width: 1430px)': {
                order: '99',
            },
        },
        spcial: {
            display: 'inline',
            '@media(max-width: 500px)': {
                display: 'none',
            }
        }
    }

    return (
        <Box sx={style.container}>
            <Box sx={style.logoContainer}>
                <svg width="32" height="27" viewBox="0 0 32 27" fill={mainColors.primary.main} xmlns="http://www.w3.org/2000/svg">
                    <path d="M29.912 7.71582L29.6927 8.0904H1.77676L1.55292 7.71582H29.912Z" fill="inherit"/>
                    <path d="M29.912 26.8384H1.55292L1.88639 26.272H29.5831L29.912 26.8384Z" fill="inherit"/>
                    <path d="M7.66081 8.80811L7.48265 9.18726H2.72723L2.54907 8.80811H7.66081Z" fill="inherit"/>
                    <path d="M7.3911 9.3833L7.12158 9.94974H3.08789L2.82294 9.3833H7.3911Z" fill="inherit"/>
                    <path d="M3.19757 10.2549H4.1112V24.3475H3.19757V10.2549Z" fill="inherit"/>
                    <path d="M4.65942 10.2549H5.54565V24.3475H4.65942V10.2549Z" fill="inherit"/>
                    <path d="M6.1167 10.2549H7.00292V24.3475H6.1167V10.2549Z" fill="inherit"/>
                    <path d="M10.2923 10.2549H11.1785V24.3475H10.2923V10.2549Z" fill="inherit"/>
                    <path d="M11.7492 10.2549H12.6354V24.3475H11.7492V10.2549Z" fill="inherit"/>
                    <path d="M13.2063 10.2549H14.0925V24.3475H13.2063V10.2549Z" fill="inherit"/>
                    <path d="M17.359 10.2549H18.2726V24.3475H17.359V10.2549Z" fill="inherit"/>
                    <path d="M18.8344 10.2549H19.7206V24.3475H18.8344V10.2549Z" fill="inherit"/>
                    <path d="M20.292 10.2549H21.1782V24.3475H20.292V10.2549Z" fill="inherit"/>
                    <path d="M24.4671 10.2549H25.3533V24.3475H24.4671V10.2549Z" fill="inherit"/>
                    <path d="M25.9241 10.2549H26.8103V24.3475H25.9241V10.2549Z" fill="inherit"/>
                    <path d="M27.377 10.2549H28.2632V24.3475H27.377V10.2549Z" fill="inherit"/>
                    <path d="M15.7327 0L0 7.13077H31.47L15.7327 0ZM15.7327 5.59132C15.5068 5.59132 15.286 5.52435 15.0982 5.39886C14.9104 5.27337 14.764 5.09501 14.6776 4.88634C14.5912 4.67766 14.5686 4.44804 14.6126 4.22651C14.6567 4.00498 14.7655 3.80149 14.9252 3.64178C15.0849 3.48206 15.2884 3.3733 15.5099 3.32923C15.7314 3.28517 15.9611 3.30778 16.1698 3.39422C16.3784 3.48065 16.5568 3.62703 16.6823 3.81483C16.8078 4.00264 16.8748 4.22344 16.8748 4.44931C16.8748 4.59928 16.8452 4.74778 16.7878 4.88634C16.7304 5.02489 16.6463 5.15079 16.5403 5.25683C16.4342 5.36288 16.3083 5.447 16.1698 5.50439C16.0312 5.56179 15.8827 5.59132 15.7327 5.59132Z" fill="inherit"/>
                    <path d="M7.66081 25.7961L7.48265 25.417H2.72723L2.54907 25.7961H7.66081Z" fill="inherit"/>
                    <path d="M7.3911 25.2203L7.12158 24.6538H3.08789L2.82294 25.2203H7.3911Z" fill="inherit"/>
                    <path d="M14.7504 8.80811L14.5722 9.18726H9.81682L9.63409 8.80811H14.7504Z" fill="inherit"/>
                    <path d="M14.4765 9.3833L14.2115 9.94518H10.1778L9.90833 9.3833H14.4765Z" fill="inherit"/>
                    <path d="M10.2923 10.2549H11.1785V24.3475H10.2923V10.2549Z" fill="inherit"/>
                    <path d="M11.7492 10.2549H12.6354V24.3475H11.7492V10.2549Z" fill="inherit"/>
                    <path d="M13.2021 10.2549H14.0884V24.3475H13.2021V10.2549Z" fill="inherit"/>
                    <path d="M14.7504 25.7961L14.5722 25.417H9.81682L9.63409 25.7961H14.7504Z" fill="inherit"/>
                    <path d="M14.4765 25.2203L14.2115 24.6538H10.1778L9.90833 25.2203H14.4765Z" fill="inherit"/>
                    <path d="M21.8357 8.80811L21.6575 9.18726H16.9021L16.7194 8.80811H21.8357Z" fill="inherit"/>
                    <path d="M21.5618 9.3833L21.2969 9.94518H17.2632L16.9937 9.3833H21.5618Z" fill="inherit"/>
                    <path d="M17.359 10.2549H18.2726V24.3475H17.359V10.2549Z" fill="inherit"/>
                    <path d="M18.8344 10.2549H19.7206V24.3475H18.8344V10.2549Z" fill="inherit"/>
                    <path d="M20.2871 10.2549H21.1733V24.3475H20.2871V10.2549Z" fill="inherit"/>
                    <path d="M21.8357 25.7961L21.6575 25.417H16.9021L16.7194 25.7961H21.8357Z" fill="inherit"/>
                    <path d="M21.5618 25.2203L21.2969 24.6538H17.2632L16.9937 25.2203H21.5618Z" fill="inherit"/>
                    <path d="M28.9255 8.80811L28.7474 9.18726H23.9919L23.8138 8.80811H28.9255Z" fill="inherit"/>
                    <path d="M28.6517 9.3833L28.3867 9.94518H24.353L24.0835 9.3833H28.6517Z" fill="inherit"/>
                    <path d="M24.4671 10.2549H25.3533V24.3475H24.4671V10.2549Z" fill="inherit"/>
                    <path d="M25.9241 10.2549H26.8103V24.3475H25.9241V10.2549Z" fill="inherit"/>
                    <path d="M27.3816 10.2549H28.2632V24.3475H27.3816V10.2549Z" fill="inherit"/>
                    <path d="M28.9255 25.7961L28.7474 25.417H23.9919L23.8138 25.7961H28.9255Z" fill="inherit"/>
                    <path d="M28.6517 25.2203L28.3867 24.6538H24.353L24.0835 25.2203H28.6517Z" fill="inherit"/>
                </svg>
                <Typography variant="h5" color='primary' fontWeight={700}>
                        جميع الحقوق محفوظة
                    <Box sx={style.spcial}>
                        - برنامج أثينا لادارة المؤسسات التعليمية
                    </Box>
                </Typography>
            </Box>
            <Box sx={style.miniContainer}>
                <Box sx={style.miniContainer}>
                    <Typography variant="h5" color='primary' fontWeight={700}>
                        نبذة عن المشروع 
                    </Typography>
                    <Typography variant="h5" color='primary' fontWeight={700}>
                        تواصل معنا
                    </Typography>
                    <Typography variant="h5" color='primary' fontWeight={700}>
                        إرسال ملاحظات
                    </Typography>
                </Box>
                <Box sx={style.miniContainer}>
                    <Typography variant="h5" color='primary' fontWeight={700}>
                        شروط الاستخدام وسياسة الخصوصية 
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}
 
export default PageFooter;