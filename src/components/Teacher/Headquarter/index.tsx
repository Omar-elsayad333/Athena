import { useContext } from 'react';
import { DarkThemeContext } from 'context/ThemeContext';
import MyInput from 'components/MyInput';
import MyInputSmall from 'components/MyInputSmall';
import MyButton from 'components/Buttons/MyButton';
import MyButtonError from 'components/Buttons/MyButtonError';
import EmployeCard from './EmployeCard';

// MUI
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import DataCard from './DataCard';

const HeadquarterC = () => {

    const {mainColors} = useContext(DarkThemeContext);
    const data: any = {
        name: 'مقر الشعبية',
        city: 'المحلة الكبري',
        area: 'منشية البكري',
        street: 'شارع الحرية',
        building: '25',
        firstPhoneNumber: '01154688380',
        secondPhoneNumber: '01154688380',
        employee: [
            {
                name: 'باكينام السيد',
                jobTitle: 'سكرتارية',
            },
            {
                name: 'عمر الصياد',
                jobTitle: 'سكرتير',
            },
        ],
        groups: [
            {
                firstClass: [
                    {
                        name: 'مجموعه قاسم'
                    },
                    {
                        name: 'مجموعة عمر'
                    },
                    {
                        name: 'مجموعة احمد'
                    },
                    {
                        name: 'مجموعة مروان'
                    },
                ]
            }
        ]
    }

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
            <DataCard data={data.area} title='أسم المنطقة' />
            <DataCard data={data.street} title='أسم الشارع' />
            <DataCard data={data.building} title='رقم المبنى' />
            <Typography sx={style.title} variant="h3" color={mainColors.title.main}>
                بيانات الاتصال:-  
            </Typography>
            <DataCard data={data.firstPhoneNumber} title='تليفون 1' />
            <DataCard data={data.secondPhoneNumber} title='تليفون 2' />
            <Typography sx={style.title} variant="h3" color={mainColors.title.main}>
                الموظفيين:-  
            </Typography>
            <EmployeCard />
            <EmployeCard />
        </Box>
    );
}
 
export default HeadquarterC;