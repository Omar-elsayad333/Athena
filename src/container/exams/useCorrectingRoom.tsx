import Urls from 'constant/urls'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useUser } from 'context/userContext'
import { useAlert } from 'context/AlertContext'
import useRequestsHandlers from 'hooks/useRequestsHandlers'

const useCorrectingRoom = () => {
    const router = useRouter()
    const { id } = router.query
    const { userState } = useUser()
    const { setErrorMessage, setSuccessMessage } = useAlert()
    const { loading, getHandlerById, putHandler } = useRequestsHandlers()

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
                Urls.URL_TEACHER_EXAMS_STUDENT,
            )
            setExamData(res)
            setExamSections(res.sections)
            adjuctSections(res.sections)
        } catch (error) {
            setErrorMessage('حدث خطاء')
        }
    }

    // Adjust section to be handelable
    const adjuctSections = (sections: any) => {
        for (let section of sections) {
            section['open'] = false
            for (let question of section.questions) {
                if (question.type == 'Written') {
                    question['showAnswer'] = false
                    question['correctingDegree'] = null
                }
            }
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

    // Open and close question answer
    const showAndHideAnswerHandler = (indexes: any) => {
        const selectedSection = examSections[indexes.grandParent]
        selectedSection!.questions[indexes.parent]!.showAnswer =
            !selectedSection!.questions[indexes.parent]!.showAnswer

        setExamSections([
            ...examSections.slice(0, indexes.grandParent),
            selectedSection,
            ...examSections.slice(indexes.grandParent + 1),
        ])
    }

    // Get correcting degree from user
    const handleCorrectingDegree = (value: any, indexes: any) => {
        const selectedSection = examSections[indexes.grandParent]
        selectedSection!.questions[indexes.parent]!.correctingDegree = value

        setExamSections([
            ...examSections.slice(0, indexes.grandParent),
            selectedSection,
            ...examSections.slice(indexes.grandParent + 1),
        ])
    }

    // Call API to submit correcting degree
    const submitCorrectingDegree = async (questionId: string, degree: any, indexes?: any) => {
        const data = {
            examGroupStudentId: id,
            questionId: questionId,
            degree: parseInt(degree),
        }
        try {
            await putHandler(userState.tokens?.accessToken!, Urls.URL_TEACHER_EXAMS_STUDENT, data)
            setSuccessMessage('تم تصحيح السؤال بنجاح')
            if (indexes) {
                handleCorrectingDegree(degree, indexes)
            }
        } catch (error) {
            setErrorMessage('حدث خطاء')
        }
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
            showAndHideAnswerHandler,
            handleCorrectingDegree,
            submitCorrectingDegree,
        },
    }
}

export default useCorrectingRoom
