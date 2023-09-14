import Urls from 'constant/urls'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useUser } from 'context/userContext'
import { useAlert } from 'context/AlertContext'
import useRequestsHandlers from 'hooks/useRequestsHandlers'

const useShowExam = () => {
    const router = useRouter()
    const { id } = router.query
    const { userState } = useUser()
    const { setErrorMessage } = useAlert()
    const { loading, getHandlerById } = useRequestsHandlers()

    const [examData, setExamData] = useState<any>('')
    const [examSections, setExamSections] = useState<any[]>([])

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
            adjuctSections(res.sections)
        } catch (error) {
            console.log(error)
            setErrorMessage('حدث خطاء')
        }
    }

    // Adjust section to be handelable
    const adjuctSections = (sections: any) => {
        for (let section of sections) {
            section['open'] = false
        }
    }

    // Open and close section
    const openAndCloseSection = (sectionIndex: number) => {
        const selectedSection = examSections[sectionIndex]
        selectedSection.open = !selectedSection.open

        setExamSections([
            ...examSections.slice(0, sectionIndex),
            selectedSection,
            ...examSections.slice(sectionIndex + 1),
        ])
    }

    return {
        data: {
            examData,
            examSections,
        },
        states: {
            loading,
        },
        actions: {
            openAndCloseSection,
        },
    }
}

export default useShowExam
