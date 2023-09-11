import Urls from 'constant/urls'
import { Routes } from 'routes/Routes'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { useUser } from 'context/userContext'
import { useAlert } from 'context/AlertContext'
import { yearsTypes } from 'constant/staticData'
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
    const { id } = router.query
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
    
    useEffect(() => {
        submitCode()
    }, [id])
    // Call api to check if the student is exist
    const submitCode = async () => {
        setStudentData('')
        try {
            const res: any = await getHandlerById(
                id,
                userState.tokens!.accessToken!,
                Urls.URL_TEACHER_GET_REQUEST_TO_JOIN_BY_ID,
            )
            setStudentData(res)
        } catch (error: any) {
            console.log(error)
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
                setErrorMessage('حدث خطاء')
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



    // Call api to submit data
    const submit = async () => {
        try {
            const res = await postHandler(
                userState.tokens!.accessToken!,
                `${Urls.URL_TEACHER_GET_REQUEST_TO_JOIN_BY_ID}/${id}`,
            )
            console.log(res)
            setSuccessMessage('تم اضافة الطالب بنجاح')
            router.push(Routes.teacherStudentsRequests)
        } catch (error) {
            setPageError([
                ...pageError,
                {
                    value: 'خطاء في اضافة الطالب',
                    error: true,
                },
            ])
        }
    }

    // Cancle submit and redirect the user
    const cancelSubmit = () => {
        setWarningMessage('تم الغاء العمليه بنجاح')
        router.push(Routes.teacherStudentsRequests)
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
            submitCode,
            yearHandler,
            groupHandler,
            submit,
            cancelSubmit,
        },
    }
}

export default useAddStudent
