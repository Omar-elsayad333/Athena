import { useTheme } from "context/ThemeContext";

// MUI
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

type Props = {
    data: any;
}

const ReviewWritten: React.FC<Props> = ({ data }) => {

    const { mainColors, darkMode } = useTheme()
    const style = {
        flexColumn: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'start',
            gap: '34px'
        },
        dataBox: {
            width: '100%',
            padding: '19px 25px',
            borderRadius: '10px',
            background: mainColors.paper.main,
            boxShadow: darkMode ? 'none' : '0px 0px 10px 1px #B6D5F0'
        },
    }

    return (
        <Box sx={style.flexColumn}>
            <Typography 
                variant='h4' 
                fontWeight={700} 
                color={mainColors.title.main}
            >
                الاجابة الصحيحة (التقريبية):-
            </Typography> 
            <Box sx={style.dataBox}>
                <Typography variant="h5" color={'primary'} fontWeight={700}>
                    {data}
                </Typography>
            </Box>
        </Box>
    );
}
 
export default ReviewWritten;