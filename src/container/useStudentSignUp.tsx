import { useState, useEffect } from 'react';
import { genders } from "constant/staticData";
import { signUpHandler } from 'handlers/userHandler';
import { URL_LEVELS, URL_STUDENTS } from 'constant/url';
import { publicGetHandler } from 'handlers/requestHandler';
import { imageInitialValues, ImageProps } from 'interfaces/shared/image';
import { checkBoxInitialValues, CheckBoxProps } from 'interfaces/shared/checkBox';
import { datePickerInitialValues, DatePickerProps } from 'interfaces/shared/datePicker';
import { InputPasswordProps, passwordInitialValues } from 'interfaces/shared/inputPassword';
import {
    InputProps,
    inputInitialValues,
    DropMenuProps,
    dropMenuInitialValues
} from 'interfaces/student/studenSignUp';

const useStudentSignUp = () => {

    const [ loading, setLoading ] = useState<boolean>(false)
    const [ levels, setLevels ] = useState<any>('')
    const [ classifications, setClassifications ] = useState<any>([]) 
    const [ image, setImage ] = useState<ImageProps>(imageInitialValues)
    const [ firstName, setFirstName ] = useState<InputProps>(inputInitialValues)
    const [ lastName, setLastName ] = useState<InputProps>(inputInitialValues)
    const [ middleName, setMiddleName ] = useState<InputProps>(inputInitialValues)
    const [ gender, setGender ] = useState<DropMenuProps>(dropMenuInitialValues)
    const [ birthDate, setBirthDate ] = useState<DatePickerProps>(datePickerInitialValues)
    const [ address, setAddress ] = useState<InputProps>(inputInitialValues)
    const [ email, setEmail ] = useState<InputProps>(inputInitialValues)
    const [ phoneNumber, setPhoneNumber ] = useState<InputProps>(inputInitialValues)
    const [ homePhone, setHomePhone ] = useState<InputProps>(inputInitialValues)
    const [ school, setSchool ] = useState<InputProps>(inputInitialValues)
    const [ level, setLevel ] = useState<DropMenuProps>(dropMenuInitialValues)
    const [ classification, setClassification ] = useState<DropMenuProps>(dropMenuInitialValues)
    const [ parentName, setParentName ] = useState<InputProps>(inputInitialValues)
    const [ parentJob, setParentJop ] = useState<InputProps>(inputInitialValues)
    const [ parentPhone, setParentPhone ] = useState<InputProps>(inputInitialValues)
    const [ userName, setUserName ] = useState<InputProps>(inputInitialValues)
    const [ password, setPassword ] = useState<InputPasswordProps>(passwordInitialValues)
    const [ confirmPassword, setConfirmPassword ] = useState<InputPasswordProps>(passwordInitialValues)
    const [ ageCheck, setAgeCheck ] = useState<CheckBoxProps>(checkBoxInitialValues)

    // Get levels Data from api
    useEffect(() => {
        getLevel();
    }, [])
    
    // Update classification data based on selected level
    useEffect(() => {
        if(level.id) {
            const newClassificationData = []
            const index = levels.findIndex((x: any) => x.id == level.id)
            for(let item of levels[index]['classifications']){
                newClassificationData.push(
                    {
                        id: item.levelClassificationId,
                        name: item.name
                    }
                )
            }
            setClassifications(newClassificationData)
        }
    }, [level])

    // Call api to get levels data
    const getLevel = async () => {
        try {
            setLoading(true)
            const res = await publicGetHandler(URL_LEVELS);
            setLevels(res);
        }
        catch(error) {
            console.log(error)
        }
        finally {
            setLoading(false)
        }
    }

    const imageHandler = (e: any) => {
        const selectedfile = e.target.files;
        if (selectedfile.length > 0) {
            const [imageFile] = selectedfile;
            const fileReader = new FileReader();
            fileReader.onload = () => {
                const srcData = fileReader.result;
                setImage(
                    {
                        error: false,
                        helperText: '',
                        extension: `.${selectedfile[0].type.slice(6)}`,
                        base64Image: srcData,
                        mainImage: URL.createObjectURL(new Blob(selectedfile))
                    }
                )
            };
            fileReader.readAsDataURL(imageFile);
        }
    };

    // Get the first name from user
    const firstNameHandler = (selectedFirstName: any) => {
        setFirstName(
            firstName => (
                {
                    ...firstName, 
                    value: selectedFirstName,
                    length: selectedFirstName.length,
                    error: false,
                    helperText: ''
                }
            )
        )
    }

    // Get the last name from user
    const lastNameHandler = (selectedLastName: any) => {
        setLastName(
            lastName => (
                {
                    ...lastName, 
                    value: selectedLastName,
                    length: selectedLastName.length,
                    error: false,
                    helperText: ''
                }
            )
        )
    }

    // Get the middle name from user
    const middleNameHandler = (selectedMiddleName: any) => {
        setMiddleName(
            middleName => (
                {
                    ...middleName, 
                    value: selectedMiddleName,
                    length: selectedMiddleName.length,
                    error: false,
                    helperText: ''
                }
            )
        )
    }

    // Get the selected gender from user
    const genderHandler = (selectedGender: any) => {
        setGender(
            gender => (
                {
                    ...gender,
                    value: selectedGender.name,
                    id: selectedGender.id,
                    error: false,
                    helperText: ''
                }
            )
        )
    }

    // Get the selected birth date from user
    const birthDateHandler = (selectedBirthDate: any) => {
        setBirthDate(
            birthDate => (
                {
                    ...birthDate,
                    value: selectedBirthDate.toISOString(),
                    error: false,
                    helperText: ''
                }
            )
        )
    }

    // Get the address from user
    const addressHandler = (selectedAddress: any) => {
        setAddress(
            address => (
                {
                    ...address, 
                    value: selectedAddress,
                    length: selectedAddress.length,
                    error: false,
                    helperText: ''
                }
            )
        )
    }

    // Get the email from user
    const emailHandler = (selectedEmail: any) => {
        setEmail(
            email => (
                {
                    ...email, 
                    value: selectedEmail,
                    length: selectedEmail.length,
                    error: false,
                    helperText: ''
                }
            )
        )
    }

    // Get the phone number from user
    const phoneNumberHandler = (selectedPhoneNumber: any) => {
        setPhoneNumber(
            phoneNumber => (
                {
                    ...phoneNumber, 
                    value: selectedPhoneNumber,
                    length: selectedPhoneNumber.length,
                    error: false,
                    helperText: ''
                }
            )
        )
    }

    // Get the home phone from user
    const homePhoneHandler = (selectedHomePhone: any) => {
        setHomePhone(
            homePhone => (
                {
                    ...homePhone, 
                    value: selectedHomePhone,
                    length: selectedHomePhone.length,
                    error: false,
                    helperText: ''
                }
            )
        )
    }

    // Get the school from user
    const schoolHandler = (selectedSchool: any) => {
        setSchool(
            school => (
                {
                    ...school, 
                    value: selectedSchool,
                    length: selectedSchool.length,
                    error: false,
                    helperText: ''
                }
            )
        )
    }

    // Get the selected level from user
    const levelHandler = (selectedLevel: any) => {
        setLevel(
            level => (
                {
                    ...level,
                    value: selectedLevel.name,
                    id: selectedLevel.id,
                    error: false,
                    helperText: ''
                }
            )
        )
    }

    // Get the selected classifications from user
    const classificationHandler = (selectedClassification: any) => {
        setClassification(
            classification => (
                {
                    ...classification,
                    value: selectedClassification.name,
                    id: selectedClassification.id,
                    error: false,
                    helperText: ''
                }
            )
        )
    }

    // Get the parent name from user
    const parentNameHandler = (selectedParentName: any) => {
        setParentName(
            parentName => (
                {
                    ...parentName, 
                    value: selectedParentName,
                    length: selectedParentName.length,
                    error: false,
                    helperText: ''
                }
            )
        )
    }

    // Get the parent name from user
    const parentJobHandler = (selectedParentJob: any) => {
        setParentJop(
            parentJob => (
                {
                    ...parentJob, 
                    value: selectedParentJob,
                    length: selectedParentJob.length,
                    error: false,
                    helperText: ''
                }
            )
        )
    }

    // Get the parent name from user
    const parentPhoneHandler = (selecteParentPhone: any) => {
        setParentPhone(
            parentPhone => (
                {
                    ...parentPhone, 
                    value: selecteParentPhone,
                    length: selecteParentPhone.length,
                    error: false,
                    helperText: ''
                }
            )
        )
    }

    // Get the parent name from user
    const userNameHandler = (selecteUserName: any) => {
        setUserName(
            userName => (
                {
                    ...userName, 
                    value: selecteUserName,
                    length: selecteUserName.length,
                    error: false,
                    helperText: ''
                }
            )
        )
    }

    // Get the parent name from user
    const passwordHandler = (selectePassword: any) => {
        setPassword(
            password => (
                {
                    ...password, 
                    value: selectePassword,
                    length: selectePassword.length,
                    error: false,
                    helperText: ''
                }
            )
        )
    }

    // Show and hide password
    const passwordShowHandler = () => {
        setPassword(
            password => (
                {
                    ...password, 
                    show: !password.show,
                }
            )
        )
    }

    // Get the parent name from user
    const confirmPasswordHandler = (selectedConfirmPassword: any) => {
        setConfirmPassword(
            confirmPassword => (
                {
                    ...confirmPassword, 
                    value: selectedConfirmPassword,
                    length: selectedConfirmPassword.length,
                    error: false,
                    helperText: ''
                }
            )
        )
    }

    // Show and hide confirm password
    const confirmPasswordShowHandler = () => {
        setConfirmPassword(
            confirmPassword => (
                {
                    ...confirmPassword, 
                    show: !confirmPassword.show,
                }
            )
        )
    }

    // Get the age checking state from user
    const ageCheckHandler = (event: any) => {
        setAgeCheck(
            {
                ...ageCheck, 
                state: event.target.checked,
                error: false, 
                helperText: ''
            }
        )
    }

    // Validate the date before send it to db
    const validation = () => {

        let validationState = true

        if(!image.base64Image) {
            validationState = false
            setImage(image => ({...image, error: true, helperText: 'يجب رفع صوره شخصيه'}))
        }

        if(firstName.length == 0) {
            validationState = false
            setFirstName(firstName => ({...firstName, error: true, helperText: 'يجب ادخال الأسم الأول'}))
        }

        if(lastName.length == 0) {
            validationState = false
            setLastName(lastName => ({...lastName, error: true, helperText: 'يجب ادخال الأسم الأخير'}))
        }
            
        if(middleName.length == 0) {
            validationState = false
            setMiddleName(middleName => ({...middleName, error: true, helperText: 'يجب ادخال الأسم الأوسط'}))
        }

        if(!gender.id) {
            validationState = false
            setGender(gender => ({...gender, error: true, helperText: 'يجب تحديدالنوع'}))
        }

        if(parseInt(birthDate.value.slice(0,4)) == 2023) {
            validationState = false
            setBirthDate(({...birthDate, error: true, helperText: 'يجب ادخال تاريخ ميلادك'}))
        }
        
        if(address.length == 0) {
            validationState = false
            setAddress(address => ({...address, error: true, helperText: 'يجب أدخال عنوانك بالكامل'}))
        }

        if(email.length == 0) {
            validationState = false
            setEmail(email => ({...email, error: true, helperText: 'يجب أدخال البريد الألكتروني الخاص بك'}))
        }

        if(phoneNumber.length == 0) {
            validationState = false
            setPhoneNumber(phoneNumber => ({...phoneNumber, error: true, helperText: 'يجب أدخال رقم الهاتف الخاص بك'}))
        }

        if(homePhone.length == 0) {
            validationState = false
            setHomePhone(homePhone => ({...homePhone, error: true, helperText: 'يجب أدخال رقم الهاتف المنزلي'}))
        }

        if(school.length == 0) {
            validationState = false
            setSchool(school => ({...school, error: true, helperText: 'يجب ادخال المدرسه الخاصه بك'}))
        }

        if(!level.id) {
            validationState = false
            setLevel(level => ({...level, error: true, helperText: 'يجب اختيار الصف الدراسي'}))
        }

        if(!classification.id) {
            validationState = false
            setClassification(classification => ({...classification, error: true, helperText: 'يجب اختيار الشعبه العلميه'}))
        }

        if(parentName.length == 0) {
            validationState = false
            setParentName(parentName => ({...parentName, error: true, helperText: 'يجب ادخال اسم ولي الأمر'}))
        }

        if(parentJob.length == 0) {
            validationState = false
            setParentJop(parentJob => ({...parentJob, error: true, helperText: 'يجب ادخال وظيفة ولي الأمر'}))
        }

        if(parentPhone.length == 0) {
            validationState = false
            setParentPhone(parentPhone => ({...parentPhone, error: true, helperText: 'يجب ادخال رقم هاتف ولي الأمر'}))
        }

        if(userName.length == 0) {
            validationState = false
            setUserName(userName => ({...userName, error: true, helperText: 'يجب ادخال اسم المستخدم'}))
        }

        if(password.length == 0) {
            validationState = false
            setPassword(password => ({...password, error: true, helperText: 'كلمة السر لا يجب ان تقل عن 8 احرف'}))
        } else if(password.length < 8) {
            validationState = false
            setPassword(password => ({...password, error: true, helperText: 'يجب ادخال كلمة السر'}))
        }

        if(confirmPassword.length == 0) {
            validationState = false
            setConfirmPassword(confirmPassword => ({...confirmPassword, error: true, helperText: 'يجب ادخال كلمة السر مره اخري'}))
        }else if(confirmPassword.value !== password.value) {
            validationState = false
            setConfirmPassword(confirmPassword => ({...confirmPassword, error: true, helperText: 'يجب أدخال كلمة السر الصحيحه'}))
        }

        if(!ageCheck.state) {
            validationState = false
            setAgeCheck({...ageCheck, error: true, helperText: 'يجب الموافقه علي سياسة الخصوصيه وشروط الخدمه'})
        }

        return validationState
    }

    // Collect data to submit it
    const collectData = () => {
        const data = {
            createUser: {
                firstName: firstName.value,
                middleName: middleName.value,
                lastName: lastName.value,
                gender: gender.value,
                email: email.value,
                userName: userName.value,
                password: password.value,
                confirmPassword: confirmPassword.value,
                phoneNumber: phoneNumber.value
            },
            image: {
                name: userName.value,
                extension: image.extension,
                data: image.base64Image
            },
            address: address.value,
            birthDay: birthDate,
            parentName: parentName.value,
            parentJob: parentJob.value,
            parentPhone: parentPhone.value,
            homePhone: homePhone.value,
            school: school.value,
            levelClassificationId: classification.id
        }

        return data
    }

    // Call api to submit data
    const submit = async () => {
        if(validation()) {
            const data = collectData();
            console.log(data)
            if(data) {
                try {
                    setLoading(true)
                    const res = await signUpHandler(data, URL_STUDENTS)
                    console.log(res)
                }
                catch(error) {
                    console.log(error)
                }
                finally {
                    setLoading(false)
                }
            }
        }
    }

    return (
        {
            data: {
                genders,
                levels,
                classifications
            },
            states: {
                loading,
                image,
                firstName,
                lastName,
                middleName,
                gender,
                birthDate,
                address,
                email,
                phoneNumber,
                homePhone,
                school,
                level,
                classification,
                parentName,
                parentJob,
                parentPhone,
                userName,
                password,
                confirmPassword,
                ageCheck
            },
            actions: {
                imageHandler,
                firstNameHandler,
                lastNameHandler,
                middleNameHandler,
                genderHandler,
                birthDateHandler,
                addressHandler,
                emailHandler,
                phoneNumberHandler,
                homePhoneHandler,
                schoolHandler,
                levelHandler,
                classificationHandler,
                parentNameHandler,
                parentJobHandler,
                parentPhoneHandler,
                userNameHandler,
                passwordHandler,
                passwordShowHandler,
                confirmPasswordHandler,
                confirmPasswordShowHandler,
                ageCheckHandler,
                submit
            },
        }
    );
}

export default useStudentSignUp;