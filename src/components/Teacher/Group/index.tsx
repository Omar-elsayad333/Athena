import { useContext } from 'react';
import { DarkThemeContext } from 'context/ThemeContext';
import useEditGroup from 'container/useEditGroup';
import DataCard from './DataCard';
import TimeCard from './TimeCard';

// MUI
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MyTable from 'components/MyTable';

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

const GroupC: React.FC = () => {

    const {mainColors} = useContext(DarkThemeContext);

    const {
        data,
        states,
        func
    } = useEditGroup();

    return (
        <Box sx={style.inputsContainer}>
            <Typography variant="h3" color={mainColors.title.main}>
                بيانات المجموعة:-
            </Typography>
            <DataCard data={data} />
            <TimeCard data={data.schedule} states={states} func={func} />
            <Typography variant="h3" color={mainColors.title.main}>
                الطلاب الحاليين بالمجموعة:-
            </Typography>
            <MyTable />
        </Box>
    );
}

export default GroupC;