import { useContext } from 'react';
import { DarkThemeContext } from 'context/ThemeContext';
import MyInput from 'components/MyInput';
import MyInputSmall from 'components/MyInputSmall';
import MyButton from 'components/Buttons/MyButton';
import MyButtonError from 'components/Buttons/MyButtonError';
import BasicDialog from 'components/Dialogs/BasicDialogs';
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
    thirdPhoneInput: {
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
    },
    thirdPhoneContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
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

type Props = {
    oldData: any;
    thirdPhone: any;
    data: any;
    dataHandlers: any;
    dialog: any;
    submitActions: any;
    loading: boolean;
}

const EditHeadquarterC: React.FC<Props> = ({oldData, data, dataHandlers, thirdPhone, submitActions, dialog, loading}) => {

    const {mainColors} = useContext(DarkThemeContext);

    return (
        <Box sx={style.container}>
            <Typography sx={style.title} variant="h3" color={mainColors.title.main}>
                بيانات المقر:- 
            </Typography>
            <Box sx={style.inputContainer}>
                <Typography variant='h5' color={mainColors.primary.dark}>
                    أسم المقر
                </Typography>
                <MyInput
                    helperText=''
                    value={data.name.value} 
                    placeholder={oldData.name}
                    onChange={dataHandlers.nameHandle} 
                />
            </Box>
            <Typography sx={style.title} variant="h3" color={mainColors.title.main}>
                عنوان المقر:-  
            </Typography>
            <Box sx={style.inputContainer}>
                <Typography variant='h5' color={mainColors.primary.dark}>
                    المدينة
                </Typography>
                <MyInputSmall 
                    value={data.city.value}
                    placeholder={oldData.city}
                    onChange={dataHandlers.cityHandle} 
                />
            </Box>
            <Box sx={style.inputContainer}>
                <Typography variant='h5' color={mainColors.primary.dark}>
                    أسم المنطقة 
                </Typography>
                <MyInputSmall 
                    value={data.region.value}
                    placeholder={oldData.region}
                    onChange={dataHandlers.regionHandle} 
                />
            </Box>
            <Box sx={style.inputContainer}>
                <Typography variant='h5' color={mainColors.primary.dark}>
                    أسم الشارع
                </Typography>
                <MyInputSmall
                    value={data.street.value}
                    placeholder={oldData.street}
                    onChange={dataHandlers.streetHandle} 
                />
            </Box>
            <Box sx={style.inputContainer}>
                <Typography variant='h5' color={mainColors.primary.dark}>
                    رقم المبنى
                </Typography>
                <MyInputSmall
                    value={data.building.value} 
                    placeholder={oldData.building}
                    onChange={dataHandlers.buildingHandle} 
                />
            </Box>
            <Typography sx={style.title} variant="h3" color={mainColors.title.main}>
                بيانات الاتصال:-  
            </Typography>
            <Box sx={style.inputContainer}>
                <Typography variant='h5' color={mainColors.primary.dark}>
                    رقم الهاتف الأول
                </Typography>
                <MyInput
                    helperText=''
                    value={data.firstPhone.value}
                    placeholder={oldData.headQuarterPhones[0].phone}
                    onChange={dataHandlers.firstPhonesHandle} 
                />
            </Box>
            <Box sx={style.inputContainer}>
                <Typography variant='h5' color={mainColors.primary.dark}>
                    رقم الهاتف الثاني
                </Typography>
                <MyInput
                    helperText=''
                    value={data.secondPhone.value}
                    placeholder={oldData.headQuarterPhones[1].phone}
                    onChange={dataHandlers.secondPhonesHandle} 
                />
            </Box>
            <Box sx={style.thirdPhoneContainer}>
                {
                    thirdPhone.thirdPhoneState && 
                    <Box sx={style.inputContainer}>
                        <Typography variant='h5' color={mainColors.primary.dark}>
                            رقم الهاتف الثالث
                        </Typography>
                        <Box sx={style.thirdPhoneInput}>
                            {
                                oldData.headQuarterPhones[2] ?
                                <MyInput 
                                    helperText=''
                                    value={data.thirdPhone.value}
                                    placeholder={oldData.headQuarterPhones[2].phone} 
                                    onChange={dataHandlers.thirdPhonesHandle} 
                                /> :
                                <MyInput 
                                    helperText=''
                                    value={data.thirdPhone.value}
                                    placeholder='رقم الهاتف' 
                                    onChange={dataHandlers.thirdPhonesHandle} 
                                /> 
                            }
                        </Box>
                    </Box>  
                }
                <svg style={{alignSelf: 'center', marginTop: '30px'}} onClick={() => thirdPhone.thirdPhoneHandle()} width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.28 2L2 17.28" stroke="#3F72A4" strokeWidth="2.38" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 2L17.28 17.28" stroke="#3F72A4" strokeWidth="2.38" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </Box>
            <PageError errorInfo={submitActions.submitError} />
            <Box sx={style.buttonsContainer}>
                <Box sx={style.submitButton}>
                    <MyButton content='حفظ التعديلات' loading={loading} onClick={submitActions.submit} />
                </Box>
                <Box sx={style.submitButton}>
                    <MyButtonError content="حذف المقر" loading={loading} onClick={dialog.actions.handleDialogState} />
                </Box>
            </Box>
            <BasicDialog state={dialog.content.state} content={dialog.content} actions={dialog.actions} />
        </Box>
    );
}
 
export default EditHeadquarterC;