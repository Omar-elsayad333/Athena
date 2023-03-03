import MyInput from 'components/MyInput';
import { useTheme } from 'context/ThemeContext';
import MyInputSmall from 'components/MyInputSmall';
import MyButton from 'components/Buttons/MyButton';
import MyButtonError from 'components/Buttons/MyButtonError';
import WarningDialog from 'components/Dialogs/WarningDialog';

// MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

type Props = {
    data: any;
    states: any;
    actions: any;
    dialogs: any;
}

const EditHeadquarterC: React.FC<Props> = ({ data, states, actions, dialogs }) => {

    const {mainColors} = useTheme()
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
        thirdPhoneContainer: {
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
        },
        addPhoneBut: {
            width: '255px',
            height: '46px',
            paddingX: '11px',
            alignSelf: 'end',
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
            gap: '8px',
            cursor: 'pointer',
            borderRadius: '5px',
            background: mainColors.chips.main,
            border: `1.5px solid ${mainColors.chips.border}`,
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
            <Box sx={style.inputContainer}>
                <Typography variant='h5' color={mainColors.primary.dark}>
                    أسم المقر
                </Typography>
                <MyInput
                    value={states.name.value}
                    error={states.name.error} 
                    onChange={actions.nameHandler} 
                    helperText={states.name.helperText}
                    placeholder={data.originalData.name}
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
                    value={states.city.value}
                    error={states.city.error}
                    onChange={actions.cityHandler} 
                    helperText={states.city.helperText}
                    placeholder={data.originalData.city}
                />
            </Box>
            <Box sx={style.inputContainer}>
                <Typography variant='h5' color={mainColors.primary.dark}>
                    أسم المنطقة 
                </Typography>
                <MyInputSmall 
                    value={states.region.value}
                    error={states.region.error}
                    onChange={actions.regionHandler} 
                    helperText={states.region.helperText}
                    placeholder={data.originalData.region}
                />
            </Box>
            <Box sx={style.inputContainer}>
                <Typography variant='h5' color={mainColors.primary.dark}>
                    أسم الشارع
                </Typography>
                <MyInputSmall
                    value={states.street.value}
                    error={states.street.error}
                    onChange={actions.streetHandler} 
                    helperText={states.street.helperText}
                    placeholder={data.originalData.street}
                />
            </Box>
            <Box sx={style.inputContainer}>
                <Typography variant='h5' color={mainColors.primary.dark}>
                    رقم المبنى
                </Typography>
                <MyInputSmall
                    value={states.building.value} 
                    error={states.building.error}
                    onChange={actions.buildingHandler} 
                    helperText={states.building.helperText}
                    placeholder={data.originalData.building}
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
                    type='number'
                    value={states.firstPhone.value}
                    error={states.firstPhone.error}
                    onChange={actions.firstPhoneHandler} 
                    helperText={states.firstPhone.helperText}
                    placeholder={data.originalData.phones[0].phone}
                />
            </Box>
            <Box sx={style.inputContainer}>
                <Typography variant='h5' color={mainColors.primary.dark}>
                    رقم الهاتف الثاني
                </Typography>
                <MyInput
                    type='number'
                    value={states.secondPhone.value}
                    error={states.secondPhone.error}
                    onChange={actions.secondPhoneHandler} 
                    helperText={states.secondPhone.helperText}
                    placeholder={data.originalData.phones[1] ? data.originalData.phones[1].phone : 'رقم الهاتف'}
                />
            </Box>
            <Box sx={style.inputContainer}>
                <Typography variant='h5' color={mainColors.primary.dark}>
                    رقم الهاتف الثالث
                </Typography>
                {
                    states.thirdPhoneState ?
                    <Box sx={style.thirdPhoneContainer}>
                        <MyInput 
                            type='number'
                            value={states.thirdPhone.value}
                            error={states.thirdPhone.error}
                            onChange={actions.thirdPhoneHandler} 
                            helperText={states.thirdPhone.helperText}
                            placeholder={data.originalData.phones[2] ? data.originalData.phones[2].phone : 'رقم الهاتف'} 
                        />
                        <svg onClick={() => actions.hideThirdPhone()} width="19" height="19" viewBox="0 0 19 19" fill="none" stroke={mainColors.primary.main} xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.28 2L2 17.28" stroke="inherit" stroke-width="2.38" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M2 2L17.28 17.28" stroke="inherit" stroke-width="2.38" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </Box> :
                    <Box sx={style.addPhoneBut} onClick={() => actions.showThirdPhone()}>
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" stroke={mainColors.primary.main} xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.52 20.04C15.7778 20.04 20.04 15.7778 20.04 10.52C20.04 5.26225 15.7778 1 10.52 1C5.26225 1 1 5.26225 1 10.52C1 15.7778 5.26225 20.04 10.52 20.04Z" stroke="inherit" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M10.52 6.71045V14.3264" stroke="inherit" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M6.71231 10.52H14.3283" stroke="inherit" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <Typography variant='h5' color={'primary'} fontWeight={700}>
                            اضافة رقم هاتف آخر  
                        </Typography>
                    </Box>
                }
            </Box>
            <Box sx={style.buttonsContainer}>
                <Box sx={style.submitButton}>
                    <MyButton content='حفظ التعديلات' loading={states.loading} onClick={actions.submit} />
                </Box>
                <Box sx={style.submitButton}>
                    <MyButtonError content="حذف المقر" loading={states.loading} onClick={actions.openWarningDialogState} />
                </Box>
            </Box>
            <WarningDialog 
                state={dialogs.warningDialog.state} 
                content={dialogs.warningDialog.content} 
                close={dialogs.warningDialog.close}
                submit={dialogs.warningDialog.submit}
            />
        </Box>
    );
}
 
export default EditHeadquarterC;