import Urls from 'constant/urls'
import { Routes } from 'routes/Routes'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { useUser } from 'context/userContext'
import { useAlert } from 'context/AlertContext'
import { yearsTypes } from 'constant/staticData'
import { convertHashSign } from 'utils/converters'
import useRequestsHandlers from 'hooks/useRequestsHandlers'
import { errorInitialValues, ErrorProps } from 'interfaces/shared/errors'
import {
    dropMenuInitialValues,
    DropMenuProps,
    inputInitialValues,
    InputProps,
} from 'interfaces/shared/input'

const useAddStudent = () => {
    const { userState } = useUser()
    const router = useRouter()
    const { loading, getHandlerById, postHandler } = useRequestsHandlers()
    const { setSuccessMessage, setWarningMessage, setErrorMessage } = useAlert()
    const [studentCode, setStudentCode] = useState<InputProps>(inputInitialValues)
    const [codeError, setCodeError] = useState<ErrorProps>(errorInitialValues)
    const [studentData, setStudentData] = useState<any>('')
    const [selectedYear, setSelectedYear] = useState<DropMenuProps>(dropMenuInitialValues)
    const [groups, setGroups] = useState<any[]>([])
    const [selectedGroup, setSelectedGroup] = useState<DropMenuProps>(dropMenuInitialValues)
    const [pageError, setPageError] = useState<ErrorProps[]>([])

    // Update groups data if the user selected a year
    useEffect(() => {
        if (selectedYear.value) {
            setSelectedGroup(dropMenuInitialValues)
            if (Number(selectedYear.id) === 1) {
                studentData.open.length
                    ? setGroups(studentData.open)
                    : setGroups([{ id: 0, name: 'لا يوجد مجموعات' }])
            } else {
                studentData.preOpen.length
                    ? setGroups(studentData.preOpen)
                    : setGroups([{ id: 0, name: 'لا يوجد مجموعات' }])
            }
        }
    }, [selectedYear])

    // Get the student code from user
    const studentCodeHandler = (selectedStudentCode: string) => {
        setStudentCode({
            ...studentCode,
            value: selectedStudentCode,
            length: selectedStudentCode.length,
            error: false,
            helperText: '',
        })
        setCodeError({
            ...codeError,
            value: '',
            error: false,
        })
    }

    // Validate data before calling api
    const studentCodeValidation = () => {
        let validation: boolean = true

        if (studentCode.length == 0) {
            validation = false
            setStudentCode({ ...studentCode, error: true, helperText: 'يجب ادخال كود الطالب' })
        }

        return validation
    }

    // Call api to check if the student is exist
    const submitCode = async () => {
        setStudentData('')
        if (studentCodeValidation()) {
            try {
                const res: any = await getHandlerById(
                    convertHashSign(studentCode.value),
                    userState.tokens!.accessToken!,
                    Urls.URL_TEACHERSTUDENTS_CODE,
                )
                setStudentData(res)
            } catch (error: any) {
                if (error.response.status == 404) {
                    setCodeError({
                        ...codeError,
                        value: 'هذا الطالب غير موجود في المنظومه !',
                        error: true,
                    })
                } else if (error.response.status == 409) {
                    setCodeError({
                        ...codeError,
                        value: 'هذا الطالب تم اضافته مسبقا',
                        error: true,
                    })
                } else {
                    setErrorMessage('حدث خطأ')
                }
            }
        }
    }

    // Get the selected year from user
    const yearHandler = (selectedYear: any) => {
        setSelectedYear({
            ...selectedYear,
            id: selectedYear.id,
            value: selectedYear.name,
            error: false,
            helperText: '',
        })
    }

    // Get the selected group from user
    const groupHandler = (selectedGroup: any) => {
        setSelectedGroup({
            ...selectedGroup,
            id: selectedGroup.id,
            value: selectedGroup.name,
            error: false,
            helperText: '',
        })
        setPageError([
            {
                value: '',
                error: false,
            },
        ])
    }

    // Validate data before submit it
    const validation = () => {
        let validationState: boolean = true

        if (!selectedGroup.id) {
            validationState = false
            setPageError([
                ...pageError,
                {
                    value: 'يجب اختيار مجموعه للطالب',
                    error: true,
                },
            ])
        }

        return validationState
    }

    // Collect data to submit it
    const collectData = () => {
        const dataToSubmit = {
            studnetId: studentData.id,
            groupId: selectedGroup.id,
        }

        return dataToSubmit
    }

    // Call api to submit data
    const submit = async () => {
        if (validation()) {
            try {
                const data = collectData()
                const res = await postHandler(
                    userState.tokens!.accessToken!,
                    Urls.URL_TEACHERSTUDENTS_ASSIGN,
                    data,
                )
                setSuccessMessage('تم اضافة الطالب بنجاح')
                router.replace(`${Routes.teacherStudent}/${res}`)
            } catch (error) {
                setPageError([
                    ...pageError,
                    {
                        value: 'خطأ في اضافة الطالب',
                        error: true,
                    },
                ])
            }
        }
    }

    // Cancle submit and redirect the user
    const cancelSubmit = () => {
        setWarningMessage('تم الغاء العمليه بنجاح')
        router.push(Routes.teacherStudents)
    }

    return {
        data: {
            studentData,
            yearsTypes,
            groups,
        },
        states: {
            loading,
            studentCode,
            codeError,
            selectedGroup,
            selectedYear,
            pageError,
        },
        actions: {
            studentCodeHandler,
            submitCode,
            yearHandler,
            groupHandler,
            submit,
            cancelSubmit,
        },
    }
}

export default useAddStudent
