import DataCard from './DataCard';
import TimeCard from './TimeCard';
import MyTable from 'components/MyTable';
import { useTheme } from 'context/ThemeContext';
import { GroupStudentTable } from 'content/tableHeaders' 

// MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

type Props = {
    data: any;
}

const GroupC: React.FC<Props> = ({ data }) => {

    const { mainColors } = useTheme()
    const style = {
        container: {
            maxWidth: '100%',
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            gap: '60px',
        },
        title: {
            flex: '100%',
        },
    }
    
    return (
        <Box sx={style.container}>
            <Typography variant="h3" color={mainColors.title.main}>
                بيانات المجموعة:-
            </Typography>
            <DataCard data={data.groupData} />
            <TimeCard data={data.groupData.groupScaduals} />
            <Typography variant="h3" color={mainColors.title.main}>
                الطلاب الحاليين بالمجموعة:-
            </Typography>
            <MyTable headerData={GroupStudentTable} bodyData={data.groupStudents} />
        </Box>
    );
}

export default GroupC;