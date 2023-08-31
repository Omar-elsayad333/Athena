import Urls from 'constant/urls'
import { useState, useEffect } from 'react'
import { useUser } from 'context/userContext'
import { useAlert } from 'context/AlertContext'
import useRequestsHandlers from 'hooks/useRequestsHandlers'
import { DropMenuProps, dropMenuInitialValues } from 'interfaces/shared/input'

const useExams = () => {
    const { userState } = useUser()
    const { setErrorMessage } = useAlert()
    const [originalData] = useState<any[]>([])
    const [exams, setExams] = useState<any[]>([])
    const { loading, getHandler } = useRequestsHandlers()
    const [examsData, setExamsData] = useState<any>([])
    const [examTypes, setExamTypes] = useState<any[]>([])
    const [selectedExamType, setSelectedExamType] = useState<DropMenuProps>(dropMenuInitialValues)

    // Get exams data if the user is authoruized
    useEffect(() => {
        if (userState.tokens!.accessToken) {
            getExamsData()
            getExamsTypes()
        }
    }, [userState.tokens!.accessToken])

    // Call api to get exam data
    const getExamsData = async () => {
        try {
            const res = await getHandler(userState.tokens!.accessToken!, Urls.URL_TEACHER_EXAMS)
            setExamsData(res)
            setSelectedExamType({
                ...selectedExamType,
                value: 'all',
                id: 'all',
            })
        } catch (error) {
            console.log(error)
            setErrorMessage('حدث خطاء')
        }
    }

    // Call api to get exam data
    const getExamsTypes = async () => {
        try {
            const res: any = await getHandler(
                userState.tokens!.accessToken!,
                Urls.URL_TEACHER_EXAMS_REQUIRED,
            )
            setExamTypes(res.examTypes)
        } catch (error) {
            console.log(error)
            setErrorMessage('حدث خطاء')
        }
    }

    // Get search value from user
    const searchHandler = (searchValue: string) => {
        setExams(
            originalData.filter((item: any) =>
                item.name.toLowerCase().includes(searchValue.toLowerCase()),
            ),
        )
    }

    // Get selected exam type to filter exams for the user
    const filterByType = (selectedExamType: any) => {
        if (selectedExamType.name != 'all') {
            setExams(originalData.filter((exam: any) => exam.examType == selectedExamType.name))
        } else {
            setExams(originalData)
        }
    }

    return {
        data: {
            examTypes,
            examsData,
            exams,
        },
        states: {
            loading,
            selectedExamType,
        },
        actions: {
            searchHandler,
            filterByType,
        },
    }
}

export default useExams
