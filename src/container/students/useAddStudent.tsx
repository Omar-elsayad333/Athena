import Urls from 'constant/urls'
import { Routes } from 'routes/Routes'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { useUser } from 'context/userContext'
import { useAlert } from 'context/AlertContext'
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
    const { setSuccessMessage, setWarningMessage } = useAlert()
    const [studentCode, setStudentCode] = useState<InputProps>(inputInitialValues)
    const [codeError, setCodeError] = useState<ErrorProps>(errorInitialValues)
    const [studentData, setStudentData] = useState<any>('')
    const [yearsFromDB, setYearsFromDB] = useState<any>()
    const [years, setYears] = useState<any[]>([])
    const [year, setYear] = useState<DropMenuProps>(dropMenuInitialValues)
    const [groups, setGroups] = useState<any[]>([])
    const [group, setGroup] = useState<DropMenuProps>(dropMenuInitialValues)
    const [pageError, setPageError] = useState<ErrorProps[]>([])

    // Update groups data if the user selected a year
    useEffect(() => {
        if (year.id) {
            setGroups([])
            for (let item of yearsFromDB) {
                if (item.id == year.id) {
                    console.log(item.groups)
                    for (let i = 0; i < item.groups.length; i++) {
                        console.log(item.groups[i])
                        setGroups((groups) => [
                            ...groups,
                            {
                                id: item.groups[i].id,
                                name: item.groups[i].name,
                            },
                        ])
                    }
                }
            }
        }
    }, [year])

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

    // Update year data
    const updateYearData = (newYears: any) => {
        setYearsFromDB(newYears)
        for (let year of newYears) {
            setYears((years) => [
                ...years,
                {
                    id: year.id,
                    name: `${year.start} / ${year.end}`,
                },
            ])
        }
    }

    // Call api to check if the student is exist
    const submitCode = async () => {
        if (studentCodeValidation()) {
            try {
                const res: any = await getHandlerById(
                    convertHashSign(studentCode.value),
                    userState.tokens!.accessToken!,
                    Urls.URL_TEACHERSTUDENTS_CODE,
                )
                setStudentData(res)
                updateYearData(res.yearGroups)
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
                }
            }
        }
    }

    // Get the selected year from user
    const yearHandler = (selectedYear: any) => {
        setYear({
            ...year,
            id: selectedYear.id,
            value: selectedYear.name,
            error: false,
            helperText: '',
        })
    }

    // Get the selected group from user
    const groupHandler = (selectedGroup: any) => {
        setGroup({
            ...group,
            id: selectedGroup.id,
            value: selectedGroup.name,
            error: false,
            helperText: '',
        })
        setPageError([
            ...pageError,
            {
                value: '',
                error: false,
            },
        ])
    }

    // Validate data before submit it
    const validation = () => {
        let validationState: boolean = true

        if (!group.id) {
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
            groupId: group.id,
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
                console.log(res)
                setSuccessMessage('تم اضافة الطالب بنجاح')
                // router.replace(`${Routes.teacherStudent}/${res}`)
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
    }

    // Cancle submit and redirect the user
    const cancelSubmit = () => {
        setWarningMessage('تم الغاء العمليه بنجاح')
        router.push(Routes.teacherStudents)
    }

    return {
        data: {
            studentData,
            years,
            groups,
        },
        states: {
            loading,
            studentCode,
            codeError,
            year,
            group,
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
