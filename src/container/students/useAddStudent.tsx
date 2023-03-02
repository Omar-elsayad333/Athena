import { useRouter } from 'next/router';
import { useState, useEffect } from 'react'
import { useUser } from 'context/userContext';
import { useError } from 'context/AlertContext';
import { convertHashSign } from 'utils/converters';
import { getHandlerById, postHandler } from 'handlers/requestHandler';
import { errorInitialValues, ErrorProps } from 'interfaces/shared/errors';
import { basicDialogInitialValues, BasicDialogProps } from 'interfaces/shared/warningDialog';
import { URL_TEACHERSTUDENTS_ASSIGN, URL_TEACHERSTUDENTS_CODE } from 'constant/url';
import { 
    dropMenuInitialValues, 
    DropMenuProps, 
    inputInitialValues, 
    InputProps 
} from 'interfaces/shared/input'

const useAddStudent = () => {

    const auth = useUser()
    const router = useRouter()
    const [ loading, setLoading ] = useState<boolean>(false)
    const { setSuccessMessage, setWarningMessage } = useError() 
    const [ studentCode, setStudentCode ] = useState<InputProps>(inputInitialValues)
    const [ codeError, setCodeError ] = useState<ErrorProps>(errorInitialValues)
    const [ studentData, setStudentData ] = useState<any>('')
    const [ yearsFromDB, setYearsFromDB ] = useState<any>()
    const [ years, setYears ] = useState<any[]>([])
    const [ year, setYear ] = useState<DropMenuProps>(dropMenuInitialValues)
    const [ groups, setGroups ] = useState<any[]>([])
    const [ group, setGroup ] = useState<DropMenuProps>(dropMenuInitialValues)
    const [ basicDialog, setBasicDialog ] = useState<BasicDialogProps>(basicDialogInitialValues)
    const [ pageError, setPageError ] = useState<ErrorProps>(errorInitialValues)

    // Update groups data if the user selected a year
    useEffect(() => {
        if(year.id) {
            setGroups([])
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
                const res: any = await getHandlerById(convertHashSign(studentCode.value), auth.authToken, URL_TEACHERSTUDENTS_CODE);
                setStudentData(res)
                updateYearData(res.yearGroups)
            }
            catch(error: any) {
                if(error.response.status == 404) {
                    setCodeError(
                        {
                            ...codeError,
                            value: 'هذا الطالب غير موجود في المنظومه !',
                            error: true
                        }
                    )
                }else if(error.response.status == 409) {
                    setCodeError(
                        {
                            ...codeError,
                            value: 'هذا الطالب تم اضافته مسبقا',
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
        setPageError(
            {
                value: '',
                error: false
            }
        )
    }

    // Validate data before submit it
    const validation = () => {
        let validationState: boolean = true
        
        if(!group.id) {
            validationState = false
            setPageError(
                {
                    value: 'يجب اختيار مجموعه للطالب',
                    error: true
                }
            )
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
                const res = await postHandler(auth.authToken, URL_TEACHERSTUDENTS_ASSIGN, data)
                setSuccessMessage('تم اضافة الطالب بنجاح')
                router.replace(`/teacher/students/student/${res}`)
            }
            catch(error) {
                setPageError(
                    {
                        value: 'خطاء في اضافة الطالب',
                        error: true
                    }
                )
            }
            finally {
                setLoading(false)
            }
        }
    }

    // Cancle submit and redirect the user
    const cancelSubmit = () => {
        basicDialogHandler()
        setWarningMessage('تم الغاء العمليه بنجاح')
        router.push('/teacher/students')
    }

    // Open and close basic dialog
    const basicDialogHandler = () => {
        if(basicDialog.state) {
            setBasicDialog(
                {
                    state: false,
                    content: {
                        title: '',
                        dialog: '',
                        accept: '',
                        reject: ''
                    }
                }
            )
        }else {
            setBasicDialog(
                {
                    state: true,
                    content: {
                        title: 'إلغاء العملية',
                        dialog: 'تأكيد إلغاء هذه العملية نهائياً',
                        accept: 'تأكيد',
                        reject: 'إلغاء'
                    }
                }
            )
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
                group,
                pageError
            },
            actions: {
                studentCodeHandler,
                submitCode,
                yearHandler,
                groupHandler,
                submit,
                basicDialogHandler
            },
            dialogs: {
                basicDialog,
                actions: {
                    accept: cancelSubmit,
                    reject: basicDialogHandler
                }
            }
        }
    );
}
 
export default useAddStudent;