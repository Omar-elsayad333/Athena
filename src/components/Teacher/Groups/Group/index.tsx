import { useContext } from 'react';
import DataCard from './DataCard';
import TimeCard from './TimeCard';
import { DarkThemeContext } from 'context/ThemeContext';

// MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

type Props = {
    data: any;
    actions: any;
}

const GroupC: React.FC<Props> = ({data, actions}) => {

    const {mainColors} = useContext(DarkThemeContext);

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
            <TimeCard data={data.groupData.groupScaduals} actions={actions} />
        </Box>
    );
}

export default GroupC;