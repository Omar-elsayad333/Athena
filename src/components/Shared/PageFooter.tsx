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
            paddingX: '50px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '43px',
            borderTop: '1px solid #3F72A4',
            background: mainColors.paper.main,
        },
        miniContainer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',   
            gap: '43px',
        },
        spcial: {
            '@media(max-width: 500px)': {
                display: 'none',
            }
        }
    }

    return (
        <Box sx={style.container}>
            <Box sx={style.miniContainer}>
                <Typography variant="h5" color='primary'>
                        جميع الحقوق محفوظة
                    <span>
                        - برنامج أثينا لادارة المؤسسات التعليمية
                    </span>
                </Typography>
            </Box>
            <Box sx={style.miniContainer}>
                <Box sx={style.miniContainer}>
                    <Typography variant="h5" color='primary'>
                        نبذة عن المشروع 
                    </Typography>
                    <Typography variant="h5" color='primary'>
                        تواصل معنا
                    </Typography>
                    <Typography variant="h5" color='primary'>
                        إرسال ملاحظات
                    </Typography>
                </Box>
                <Box sx={style.miniContainer}>
                    <Typography variant="h5" color='primary'>
                        شروط الاستخدام وسياسة الخصوصية 
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}
 
export default PageFooter;