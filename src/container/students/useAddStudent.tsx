import { useState, useEffect } from 'react'
import { useUser } from 'context/userContext';
import { convertHashSign } from 'utils/converts';
import { getHandler, getHandlerById, postHandler } from 'handlers/requestHandler';
import { errorInitialValues, ErrorProps } from 'interfaces/shared/errors';
import { 
    URL_TEACHERSTUDENT_ASSIGN,
    URL_TEACHERSTUDENT_CODE, 
    URL_TEACHERSTUDENT_REQUIRED 
} from 'constant/url';
import { 
    dropMenuInitialValues, 
    DropMenuProps, 
    inputInitialValues, 
    InputProps 
} from 'interfaces/shared/input'

const useAddStudent = () => {

    const auth = useUser()
    const [ loading, setLoading ] = useState<boolean>(false)
    const [ studentCode, setStudentCode ] = useState<InputProps>(inputInitialValues)
    const [ codeError, setCodeError ] = useState<ErrorProps>(errorInitialValues)
    const [ studentData, setStudentData ] = useState<any>('')
    const [ yearsFromDB, setYearsFromDB ] = useState<any>()
    const [ years, setYears ] = useState<any[]>([])
    const [ year, setYear ] = useState<DropMenuProps>(dropMenuInitialValues)
    const [ groups, setGroups ] = useState<any[]>([])
    const [ group, setGroup ] = useState<DropMenuProps>(dropMenuInitialValues)

    // Update groups data if the user selected a year
    useEffect(() => {
        if(year.id) {
            for(let item of yearsFromDB) {
                if(item.id == year.id) {
                    console.log(item.groups)
                    for(let i = 0; i < item.groups.length; i++) {
                        console.log(item.groups[i])
                        setGroups( groups => 
                            [
                                ...groups,
                                {
                                    id: item.groups[i].id,
                                    name: item.groups[i].name
                                }
                            ]
                        )
                    }
                }
            }
        }
    }, [year])

    // Get the student code from user
    const studentCodeHandler = (selectedStudentCode: string) => {
        setStudentCode(
            {
                ...studentCode,
                value: selectedStudentCode,
                length: selectedStudentCode.length,
                error: false,
                helperText: ''
            }
        )
        setCodeError(
            {
                ...codeError,
                value: '',
                error: false
            }
        )
    }

    // Validate data before calling api
    const studentCodeValidation = () => {
        let validation: boolean = true;

        if(studentCode.length == 0) {
            validation = false;
            setStudentCode({...studentCode, error: true, helperText: 'يجب ادخال كود الطالب'})
        }

        return validation;
    }

    // Update year data
    const updateYearData = (newYears: any) => {
        setYearsFromDB(newYears)
        for(let year of newYears) {
            setYears( years =>
                [
                    ...years,
                    {
                        id: year.id,
                        name: `${year.start} / ${year.end}`
                    }
                ]
            )
        }
    }

    // Call api to check if the student is exist
    const submitCode = async () => {
        if(studentCodeValidation()) {
            try {
                setLoading(true)
                const res = await getHandlerById(convertHashSign(studentCode.value), auth.authToken, URL_TEACHERSTUDENT_CODE);
                setStudentData(res)
                const dbYear = await getHandler(auth.authToken, URL_TEACHERSTUDENT_REQUIRED)
                updateYearData(dbYear)
            }
            catch(error: any) {
                if(error.response.status) {
                    setCodeError(
                        {
                            ...codeError,
                            value: 'هذا الطالب غير موجود في المنظومه !',
                            error: true
                        }
                    )
                }
            }
            finally {
                setLoading(false)
            }
        }
    }

    // Get the selected year from user
    const yearHandler = (selectedYear: any) => {
        setYear(
            {
                ...year,
                id: selectedYear.id,
                value: selectedYear.name,
                error: false,
                helperText: ''
            }
        )
    }

    // Get the selected group from user
    const groupHandler = (selectedGroup: any) => {
        setGroup(
            {
                ...group,
                id: selectedGroup.id,
                value: selectedGroup.name,
                error: false,
                helperText: ''
            }
        )
    }

    // Validate data before submit it
    const validation = () => {
        let validationState: boolean = true
        
        if(!group.id) {
            validationState = false
        }
        
        return validationState
    }

    // Collect data to submit it
    const collectData = () => {
        const dataToSubmit = {
            studnetId: studentData.id,
            groupId: group.id
        }

        return dataToSubmit
    }

    // Call api to submit data
    const submit = async () => {
        if(validation()) {
            try {
                setLoading(true)
                const data = collectData()
                const res = postHandler(auth.authToken, URL_TEACHERSTUDENT_ASSIGN, data)
                console.log(res)
            }
            catch(error) {
    
            }
            finally {
                setLoading(false)
            }
        }
    }
    
    return (
        {
            data: {
                studentData,
                years,
                groups
            },
            states: {
                loading,
                studentCode,
                codeError,
                year,
                group
            },
            actions: {
                studentCodeHandler,
                submitCode,
                yearHandler,
                groupHandler,
                submit
            },
            dialogs: {

            }
        }
    );
}
 
export default useAddStudent;