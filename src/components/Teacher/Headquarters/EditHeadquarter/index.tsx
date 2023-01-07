import { useContext } from 'react';
import { DarkThemeContext } from 'context/ThemeContext';
import MyInput from 'components/MyInput';
import MyInputSmall from 'components/MyInputSmall';
import MyButton from 'components/Buttons/MyButton';
import MyButtonError from 'components/Buttons/MyButtonError';
import AddCard from './AddCard';
import EmployeCard from './EmployeCard';

// MUI
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

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

const EditHeadquarterC = () => {

    const {mainColors} = useContext(DarkThemeContext);
    const data: any = {
        id: '1',
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

    console.log(data);

    return (
        <Box sx={style.container}>
            <Typography sx={style.title} variant="h3" color={mainColors.title.main}>
                بيانات المقر:- 
            </Typography>
            <Box sx={style.inputContainer}>
                <Typography variant='h5' color={mainColors.primary.dark}>
                    أسم المقر
                </Typography>
                <MyInput Placeholder={data.name} />
            </Box>
            <Typography sx={style.title} variant="h3" color={mainColors.title.main}>
                عنوان المقر:-  
            </Typography>
            <Box sx={style.inputContainer}>
                <Typography variant='h5' color={mainColors.primary.dark}>
                    المدينة
                </Typography>
                <MyInputSmall Placeholder={data.city} />
            </Box>
            <Box sx={style.inputContainer}>
                <Typography variant='h5' color={mainColors.primary.dark}>
                    أسم المنطقة 
                </Typography>
                <MyInputSmall Placeholder={data.area} />
            </Box>
            <Box sx={style.inputContainer}>
                <Typography variant='h5' color={mainColors.primary.dark}>
                    أسم الشارع
                </Typography>
                <MyInputSmall Placeholder={data.street} />
            </Box>
            <Box sx={style.inputContainer}>
                <Typography variant='h5' color={mainColors.primary.dark}>
                    رقم المبنى
                </Typography>
                <MyInputSmall Placeholder={data.building} />
            </Box>
            <Typography sx={style.title} variant="h3" color={mainColors.title.main}>
                بيانات الاتصال:-  
            </Typography>
            <Box sx={style.inputContainer}>
                <Typography variant='h5' color={mainColors.primary.dark}>
                    رقم الهاتف الأول
                </Typography>
                <MyInput Placeholder={data.firstPhoneNumber} />
            </Box>
            <Box sx={style.inputContainer}>
                <Typography variant='h5' color={mainColors.primary.dark}>
                    رقم الهاتف الثاني
                </Typography>
                <MyInput Placeholder={data.secondPhoneNumber} />
            </Box>
            <Typography sx={style.title} variant="h3" color={mainColors.title.main}>
                الموظفيين:-  
            </Typography>
            <EmployeCard />
            <EmployeCard />
            <AddCard />
            <Box sx={style.buttonsContainer}>
                <Box sx={style.submitButton}>
                    <MyButton content='حفظ التعديلات' />
                </Box>
                <Box sx={style.submitButton}>
                    <MyButtonError content='حذف المجموعة' />
                </Box>
            </Box>
        </Box>
    );
}
 
export default EditHeadquarterC;