import { useContext } from 'react';
import { DarkThemeContext } from 'context/ThemeContext';

// MUI
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import DataCard from './DataCard';

type Props = {
    data: any;
}

const HeadquarterC: React.FC<Props> = ({data}) => {

    const {mainColors} = useContext(DarkThemeContext);

    const style = {
        container: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '40px',
        },
        inputContainer: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            gap: '13px',
        },
        title: {
            flex: '100%',
        },
        buttonsContainer: {
            marginTop: '30px',
            flex: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '35px'
        },
        submitButton: {
            width: '170px',
            height: '40px',
        }
    }

    return (
        <Box sx={style.container}>
            <Typography sx={style.title} variant="h3" color={mainColors.title.main}>
                بيانات المقر:- 
            </Typography>
            <DataCard data={data.name} title='أسم المقر' />
            <Typography sx={style.title} variant="h3" color={mainColors.title.main}>
                عنوان المقر:-  
            </Typography>
            <DataCard data={data.city} title='المدينة' />
            <DataCard data={data.region} title='أسم المنطقة' />
            <DataCard data={data.street} title='أسم الشارع' />
            <DataCard data={data.building} title='رقم المبنى' />
            <Typography sx={style.title} variant="h3" color={mainColors.title.main}>
                بيانات الاتصال:-    
            </Typography>
            <DataCard data={data.headQuarterPhones[0].phone} title='تليفون 1' />
            <DataCard data={data.headQuarterPhones[1].phone} title='تليفون 2' />
            {
                data.headQuarterPhones[2] &&
                <DataCard data={data.headQuarterPhones[2].phone} title='تليفون 3' />
            }
        </Box>
    );
}
 
export default HeadquarterC;