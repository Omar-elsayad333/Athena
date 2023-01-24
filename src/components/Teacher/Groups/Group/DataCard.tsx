import { useContext } from 'react';
import { DarkThemeContext } from 'context/ThemeContext';

// MUI
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

type Props = {
    data: any;
}

const DataCard: React.FC<Props> = ({data}) => {

    const { mainColors } = useContext(DarkThemeContext);

    const style = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            gap: '23px',
        },
        card: {
            width: 'fit-content',
            padding: '14px 24px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '32px',
            background: mainColors.paper.main,
            border: `2px solid ${mainColors.paper.border}`,
            borderRadius: '10px',
        },
        innerCard: {
            padding: '9px 10px',
            background: mainColors.backgroundColor.main,
            border: `1px solid ${mainColors.paper.border}`,
            borderRadius: '8px',
        }
    }

    return (
        <Box sx={style.container}>
            <Box sx={style.card}>
                <Typography variant='h3' color='primary' fontWeight={700}>
                    الصف الدراسي الخاص بالمجموعة
                </Typography>
                <Box sx={style.innerCard}>
                    <Typography variant='h3' color='primary' fontWeight={400}>
                        {data.level}
                    </Typography>
                </Box>
            </Box>
            <Box sx={style.card}>
                <Typography variant='h3' color='primary' fontWeight={700}>
                    المقر الخاص بالمجموعة 
                </Typography>
                <Box sx={style.innerCard}>
                    <Typography variant='h3' color='primary' fontWeight={400}>
                        {data.headQuarter}
                    </Typography>
                </Box>
            </Box>
            <Box sx={style.card}>
                <Typography variant='h3' color='primary' fontWeight={700}>
                    الحد الاقصى لعدد الطلاب
                </Typography>
                <Box sx={style.innerCard}>
                    <Typography variant='h3' color='primary' fontWeight={400}>
                        {data.limit}
                    </Typography>
                </Box>
            </Box>
            <Box sx={style.card}>
                <Typography variant='h3' color='primary' fontWeight={700}>
                    عدد الطلاب الحاليين
                </Typography>
                <Box sx={style.innerCard}>
                    <Typography variant='h3' color='primary' fontWeight={400}>
                        {data.studentsCount}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default DataCard;