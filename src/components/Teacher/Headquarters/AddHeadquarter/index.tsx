import { useContext } from 'react';
import { DarkThemeContext } from 'context/ThemeContext';
import MyInput from 'components/MyInput';
import MyInputSmall from 'components/MyInputSmall';
import MyButton from 'components/Buttons/MyButton';
import MyButtonError from 'components/Buttons/MyButtonError';
import useAddHeadquarter from 'container/headquarters/useAddHeadquarter';
import BasicDialog from 'components/Dialogs/BasicDialogs';
import Loading from 'components/Loading/Loading';
import PageError from 'components/Shared/PageError';

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

const AddHeadquarterC: React.FC = () => {
    
    const {mainColors} = useContext(DarkThemeContext);
    const {       
        data,
        dataHandlers,
        submitActions,
        loading,
        dialog
    } = useAddHeadquarter();          

    return (
        <Box sx={style.container}>
            {
                loading &&
                <Loading inside={true} />
            }
            <Typography sx={style.title} variant="h3" color={mainColors.title.main}>
                بيانات المقر:- 
            </Typography>
            <MyInput 
                placeholder='أسم المقر' 
                name='headquarter name' 
                value={data.name.value} 
                error={data.name.error} 
                helperText={data.name.helperText} 
                onChange={dataHandlers.nameHandle} 
            />
            <Typography sx={style.title} variant="h3" color={mainColors.title.main}>
                عنوان المقر:-  
            </Typography>
            <MyInputSmall 
                placeholder='المدينة' 
                name='headquarter city' 
                value={data.city.value} 
                error={data.city.error}
                helperText={data.city.helperText} 
                onChange={dataHandlers.cityHandle} 
            />
            <MyInputSmall 
                placeholder='أسم المنطقة'
                name='headquarter region' 
                value={data.region.value} 
                error={data.region.error} 
                helperText={data.region.helperText} 
                onChange={dataHandlers.regionHandle} 
            />
            <MyInputSmall 
                placeholder='أسم الشارع' 
                name='headquarter street' 
                value={data.street.value} 
                error={data.street.error} 
                helperText={data.street.helperText} 
                onChange={dataHandlers.streetHandle} 
            />
            <MyInputSmall 
                placeholder='رقم المبنى' 
                name='headquarter bulding' 
                value={data.building.value} 
                error={data.building.error} 
                helperText={data.building.helperText} 
                onChange={dataHandlers.buildingHandle} 
            />
            <Typography sx={style.title} variant="h3" color={mainColors.title.main}>
                بيانات الاتصال:-  
            </Typography>
            <Box sx={style.inputContainer}>
                <Typography variant='h5' color={mainColors.primary.dark}>
                    رقم الهاتف الأول
                </Typography>
                <MyInput 
                    type='number'
                    placeholder='رقم الهاتف' 
                    name='headquarter phone 1' 
                    value={data.firstPhone.value} 
                    error={data.firstPhone.error} 
                    helperText={data.firstPhone.helperText} 
                    onChange={dataHandlers.firstPhonesHandle} 
                />
            </Box>
            <Box sx={style.inputContainer}>
                <Typography variant='h5' color={mainColors.primary.dark}>
                    رقم الهاتف الثاني
                </Typography>
                <MyInput 
                    type='number'
                    placeholder='رقم الهاتف' 
                    name='headquarter phone 2' 
                    value={data.secondPhone.value} 
                    error={data.secondPhone.error} 
                    helperText={data.secondPhone.helperText} 
                    onChange={dataHandlers.secondPhonesHandle} 
                />
            </Box>
            <Box sx={style.inputContainer}>
                <Typography variant='h5' color={mainColors.primary.dark}>
                    رقم الهاتف الثالث
                </Typography>
                <MyInput 
                    type='number'
                    placeholder='رقم الهاتف' 
                    name='headquarter phone 3' 
                    value={data.thirdPhone.value}
                    onChange={dataHandlers.thirdPhonesHandle} 
                />
            </Box>
            <PageError errorInfo={submitActions.submitError} />
            <Box sx={style.buttonsContainer}>
                <Box sx={style.submitButton}> 
                    <MyButton content='تأكيد واضافة' loading={loading} onClick={submitActions.submit} />
                </Box>
                <Box sx={style.submitButton}>
                    <MyButtonError loading={loading} content='إلغاء العملية' onClick={dialog.actions.handleDialogState} />
                </Box>
            </Box>
            <BasicDialog state={dialog.content.state} content={dialog.content} actions={dialog.actions} />
        </Box>
    );
}
 
export default AddHeadquarterC;