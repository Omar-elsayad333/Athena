import { useContext } from 'react';
import { DarkThemeContext } from 'context/ThemeContext';

// MUI
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import DataCard from './DataCard';
// import TimeCard from './TimeCard';

type Props = {
    data: any;
}

const style = {
    inputsContainer: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        gap: '40px',
    },
    title: {
        flex: '100%',
    },
}

const GroupC: React.FC<Props> = ({data}) => {

    const {mainColors} = useContext(DarkThemeContext);

    return (
        <Box sx={style.inputsContainer}>
            <Typography variant="h3" color={mainColors.title.main}>
                بيانات المجموعة:-
            </Typography>
            <DataCard data={data} />
            {/* <TimeCard selectedDays={} getSelectedTime={} /> */}
        </Box>
    );
}

export default GroupC;