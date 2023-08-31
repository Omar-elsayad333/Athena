import Urls from 'constant/urls'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useUser } from 'context/userContext'
import { useAlert } from 'context/AlertContext'
import useRequestsHandlers from 'hooks/useRequestsHandlers'

const useExam = () => {
    const router = useRouter()
    const { id } = router.query
    const { userState } = useUser()
    const { setErrorMessage } = useAlert()
    // const [updatedDetails, setUpdatedDetails] = useState()
    // const [updatedSections, setUpdateSections] = useState()
    const [examData, setExamData] = useState<any>('')
    const [examSections, setExamSections] = useState<any>('')
    // const [examGroups, setExamGroups] = useState<any>('')
    const [examTypes, setExamTypes] = useState()
    // const [examGroups, setExamGroups] = useState()
    const { loading, getHandlerById, getHandler } = useRequestsHandlers()

    useEffect(() => {
        if (userState.tokens?.accessToken && id) {
            getExamData()
        }
    }, [userState.tokens?.accessToken, id])

    // Call API to get exam data
    const getExamData = async () => {
        try {
            const res = await getHandlerById(
                id,
                userState.tokens?.accessToken!,
                Urls.URL_TEACHER_EXAMS,
            )
            setExamData(res)
            setExamSections(res.sections)

            // Get exam types data form API
            const required = await getHandler(
                userState.tokens?.accessToken!,
                Urls.URL_TEACHER_EXAMS_REQUIRED,
                true,
            )
            console.log(res)
            setExamTypes(required.examTypes)
        } catch (error) {
            console.log(error)
            setErrorMessage('حدث خطاء')
        }
    }

    return {
        data: {
            examData,
            examTypes,
            examSections,
        },
        states: {
            loading,
        },
        actions: {},
        dialogs: {},
    }
}

export default useExam
