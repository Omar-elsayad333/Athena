import DataCard from './DataCard';
import TimeCard from './TimeCard';
// import MyTable from 'components/MyTable';
import { useTheme } from 'context/ThemeContext';

// MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

type Props = {
    data: any;
}

const GroupC: React.FC<Props> = ({ data }) => {

    const { mainColors } = useTheme()
    const style = {
        inputsContainer: {
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
        <Box sx={style.inputsContainer}>
            <Typography variant="h3" color={mainColors.title.main}>
                بيانات المجموعة:-
            </Typography>
            <DataCard data={data.groupData} />
            <TimeCard data={data.groupData.groupScaduals} />
            {/* <MyTable headerData={} bodyData={} /> */}
        </Box>
    );
}

export default GroupC;