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
    const [updatedDetails, setUpdatedDetails] = useState()
    const [updatedSections, setUpdateSections] = useState()
    const [examDetails, setExamDetails] = useState<any>('')
    const [examSections, setExamSections] = useState<any>('')
    const [examGroups, setExamGroups] = useState<any>('')
    const { loading, getHandlerById, getHandler } = useRequestsHandlers()
    const { setErrorMessage, setSuccessMessage, setWarningMessage } = useAlert()
    const [examTypes, setExamTypes] = useState()
    const [years, setYears] = useState()

    useEffect(() => {
        if (userState.tokens?.accessToken && id) {
            getExamData()
        }
    }, [userState.tokens?.accessToken, id])

    const getExamData = async () => {
        try {
            const res = await getHandlerById(
                id,
                userState.tokens?.accessToken!,
                Urls.URL_TEACHER_EXAMS,
            )
            const required = await getHandler(
                userState.tokens?.accessToken!,
                Urls.URL_TEACHER_EXAMS_REQUIRED,
                true,
            )
            console.log(res)
            setExamDetails(res)
            setExamSections(res.sections)
            setYears(required.years)
            setExamTypes(required.examTypes)
        } catch (error) {
            console.log(error)
            setErrorMessage('حدث خطاء')
        }
    }

    return {
        data: {
            examDetails,
            examSections,
            examTypes,
            years,
        },
        states: {
            loading,
        },
        actions: {},
        dialogs: {},
    }
}

export default useExam
