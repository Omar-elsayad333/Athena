import { URL_LEVELS } from 'constant/url';
import { useState, useEffect } from 'react';
import { genders } from "constant/staticData";
import { publicGetHandler } from 'handlers/requestHandler';
import {
    InputProps,
    inputInitialValues,
    DropMenuProps,
    dropMenuInitialValues
} from 'interfaces/student/studenSignUp';

const useStudentSignUp = () => {

    const [ loading, setLoading ] = useState<boolean>(false)
    const [ levels, setLevels ] = useState<any>('')
    const [ classifications, setClassifications ] = useState<any>('') 

    const [ firstName, setFirstName ] = useState<InputProps>(inputInitialValues)
    const [ lastName, setLastName ] = useState<InputProps>(inputInitialValues)
    const [ middleName, setMiddleName ] = useState<InputProps>(inputInitialValues)
    const [ gender, setGender ] = useState<DropMenuProps>(dropMenuInitialValues)
    const [ birthDate, setBirthDate ] = useState<Date>(new Date())
    const [ address, setAddress ] = useState<InputProps>(inputInitialValues)
    const [ email, setEmail ] = useState<InputProps>(inputInitialValues)
    const [ phoneNumber, setPhoneNumber ] = useState<InputProps>(inputInitialValues)
    const [ homePhone, setHomePhone ] = useState<InputProps>(inputInitialValues)
    const [ school, setSchool ] = useState<InputProps>(inputInitialValues)
    const [ level, setLevel ] = useState<DropMenuProps>(dropMenuInitialValues)
    const [ classification, setClassification ] = useState<DropMenuProps>(dropMenuInitialValues) 

    // Get levels Data from api
    useEffect(() => {
        getLevel();
    }, [])

    useEffect(() => {
        if(level.id) {
            const index = levels.findIndex((x: any) => x.id == level.id);
            const dataClass = levels[index].classifications
            for(let item of dataClass){
                setClassifications([...classifications, {id: item.levelClassificationId, name: item.name}])
            }
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
                    id: selectedGender.id
                }
            )
        )
    }

    // Get thee selected birth date from user
    const birthDateHandler = (selectedBirthDate: any) => {
        setBirthDate(selectedBirthDate)
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
                    id: selectedLevel.id
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
                    id: selectedClassification.id
                }
            )
        )
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
                classification
            },
            actions: {
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
                classificationHandler
            },
            dialogs: {

            }
        }
    );
}
 
export default useStudentSignUp;