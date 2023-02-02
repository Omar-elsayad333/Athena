import style from './style';
import Link from 'next/link';
import { useContext } from 'react';
import SInput from './Inputs/SInput';
import MyPhotoInput from '../MyPhotoInput';
import MyDatePicker from 'components/MyDatePicker';
import MyPassInput from 'components/MyPassInput';
import SButtonSubmit from './Inputs/SButtonSubmit';
import { DarkThemeContext } from 'context/ThemeContext';
import useStudentSignUp from 'container/useStudentSignUp';

// MUI
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import SDropDown from './Inputs/SDropDown';

const FormSection: React.FC = () => {

    const { mainColors } = useContext(DarkThemeContext);
    const { data, states, actions } = useStudentSignUp();
    
    return (
        <Container sx={style.formSec}>
            <Box sx={style.formSec.headerContainer}>
                <Box sx={style.formSec.formHeader}>
                    <Typography fontSize={35} fontWeight={700} color={'#1C364F'}>
                        انشاء حساب جديد  
                    </Typography>
                    <Typography pb={1} variant='h5' color={'#1C364F'} sx={style.formSec.formHeader.link}>
                        لدي حساب بالفعل
                        <Link href='/studentLogin'>
                            <a className='dark-link'>
                                &nbsp;تسجيل الدخول
                            </a>
                        </Link>
                    </Typography>
                </Box>
                <Box sx={style.formSec.headerPhotoInput}>
                    <MyPhotoInput
                        value={states.image.mainImage}
                        error={states.image.error}
                        helperText={states.image.helperText}
                        changeHandler={actions.imageHandler}
                    />
                </Box>
            </Box>

            <Box sx={style.formSec.formLayout}>
                <Box sx={style.formSec.stepLayout}>
                    <Typography variant='h4' fontWeight={700} color={'#1C364F'}>
                        معلومات الطالب الشخصية
                    </Typography>
                    <Box sx={style.formSec.photoInput}>
                        <MyPhotoInput
                            value={states.image}
                            error={states.image.error}
                            helperText={states.image.helperText}
                            changeHandler={actions.imageHandler}
                        />                 
                    </Box>
                    <Box sx={style.formSec.inputsLayout}>
                        <SInput 
                            placeholder='الاسم الأول' 
                            value={states.firstName.value}
                            error={states.firstName.error}
                            onChange={actions.firstNameHandler}
                            helperText={states.firstName.helperText}
                        />
                        <SInput 
                            placeholder='الاسم الأخير'  
                            value={states.lastName.value}
                            error={states.lastName.error}
                            onChange={actions.lastNameHandler} 
                            helperText={states.lastName.helperText}
                        />
                        <SInput 
                            placeholder='الاسم الأوسط' 
                            value={states.middleName.value}
                            error={states.middleName.error}
                            onChange={actions.middleNameHandler}
                            helperText={states.middleName.helperText}
                        />
                        <SDropDown 
                            placeholder='حدد النوع' 
                            data={data.genders} 
                            value={states.gender.value}
                            error={states.gender.error}
                            helperText={states.gender.helperText}
                            getSelected={actions.genderHandler}
                        />
                        <MyDatePicker 
                            placeholder='حدد تاريخ ميلادك ' 
                            dateValue={states.birthDate}
                            // error={states.birthDate.error}
                            // helperText={states.birthDate.helperText}
                            handleDateValue={actions.birthDateHandler}
                        />
                        <SInput 
                            placeholder='أكتب عنوانك بالكامل' 
                            value={states.address.value}
                            error={states.address.error}
                            onChange={actions.addressHandler}
                            helperText={states.address.helperText}
                        />
                        <SInput 
                            type='email' 
                            placeholder='البريد الإلكتروني الخاص بك' 
                            value={states.email.value}
                            error={states.email.error}
                            onChange={actions.emailHandler}
                            helperText={states.email.helperText} 
                        />
                        <SInput 
                            type='number'
                            placeholder='رقم الهاتف الخاص بك' 
                            value={states.phoneNumber.value}
                            error={states.phoneNumber.error}
                            onChange={actions.phoneNumberHandler}
                            helperText={states.phoneNumber.helperText} 
                        />
                        <SInput 
                            type='number' 
                            placeholder='رقم الهاتف المنزلي' 
                            value={states.homePhone.value}
                            error={states.homePhone.error}
                            onChange={actions.homePhoneHandler}
                            helperText={states.homePhone.helperText} 
                        />
                    </Box>
                </Box>
                <Box sx={style.formSec.stepLayout}>
                    <Typography variant='h4' fontWeight={700} color={'#1C364F'}>
                        معلومات الطالب الدراسية
                    </Typography>
                    <Box sx={style.formSec.inputsLayout}>                        
                        <SInput 
                            placeholder='المدرسة' 
                            value={states.school.value}
                            error={states.school.error}
                            onChange={actions.schoolHandler}
                            helperText={states.school.helperText}  
                        />
                        <SDropDown 
                            placeholder='الصف الدراسي الخاص بك'
                            data={data.levels} 
                            value={states.level.value}
                            error={states.level.error}
                            helperText={states.level.helperText}
                            getSelected={actions.levelHandler}
                        />
                        <SDropDown 
                            placeholder='الشعبة العلمية'
                            data={data.classifications} 
                            value={states.classification.value}
                            error={states.classification.error}
                            helperText={states.classification.helperText}
                            getSelected={actions.classificationHandler}
                            disabled={data.classifications.length > 0 ? false : true}
                        />
                    </Box>
                </Box>
                <Box sx={style.formSec.stepLayout}>
                    <Typography variant='h4' fontWeight={700} color={'#1C364F'}>
                        معلومات ولي الأمر
                    </Typography>
                    <Box sx={style.formSec.inputsLayout}>                        
                        <SInput 
                            placeholder='أسم ولي الأمر' 
                            value={states.parentName.value}
                            error={states.parentName.error}
                            onChange={actions.parentNameHandler}
                            helperText={states.parentName.helperText}  
                        />
                        <SInput 
                            placeholder='وظيفة ولي الأمر' 
                            value={states.parentJob.value}
                            error={states.parentJob.error}
                            onChange={actions.parentJobHandler}
                            helperText={states.parentJob.helperText}  
                        />
                        <SInput 
                            type='number' 
                            placeholder='رقم هاتف ولي الأمر' 
                            value={states.parentPhone.value}
                            error={states.parentPhone.error}
                            onChange={actions.parentPhoneHandler}
                            helperText={states.parentPhone.helperText}   
                        />
                    </Box>
                </Box>

                <Box sx={style.formSec.stepLayout}>
                    <Typography variant='h4' fontWeight={700} color={'#1C364F'}>
                        معلومات الحساب
                    </Typography>
                    <Box sx={style.formSec.inputsLayout}>
                        <SInput 
                            placeholder='أسم المستخدم' 
                            value={states.userName.value}
                            error={states.userName.error}
                            onChange={actions.userNameHandler}
                            helperText={states.userName.helperText}  
                        />
                        <MyPassInput
                            placeholder='كلمة السر' 
                            show={states.password.show}
                            value={states.password.value}
                            error={states.password.error}
                            onChange={actions.passwordHandler}
                            helperText={states.password.helperText}
                            showHandler={actions.passwordShowHandler}
                        />
                        <MyPassInput 
                            placeholder='تأكيد كلمة السر' 
                            show={states.confirmPassword.show}
                            value={states.confirmPassword.value}
                            error={states.confirmPassword.error}
                            onChange={actions.confirmPasswordHandler}
                            helperText={states.confirmPassword.helperText}
                            showHandler={actions.confirmPasswordShowHandler}
                        />
                    </Box>
                </Box>
            </Box>
            
            <Box sx={style.formSec.privacy}>
                <Checkbox 
                    sx={{
                        color: states.ageCheck.error ? mainColors.error.main : '#3F72A4',
                        '&.Mui-checked': {
                            color: '#3F72A4',
                        },
                    }}
                    onChange={e => actions.ageCheckHandler(e)}
                />
                <Typography variant="h5" color={states.ageCheck.error ? mainColors.error.main : '#3F72A4'}>
                    عمري 13 عاما أو أكثر وأوافق على سياسة الخصوصية وشروط الخدمة     
                </Typography>
            </Box>
            
            <Box sx={style.formSec.submitButton}>
                <SButtonSubmit content='انشاء الحساب' onClick={actions.submit}/>
            </Box>
        </Container>
    );
}

export default FormSection;