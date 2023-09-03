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
    const { setErrorMessage, setWarningMessage } = useAlert()
    const { loading, getHandlerById, getHandler, deleteHandler, postHandlerById } =
        useRequestsHandlers()

    const [examData, setExamData] = useState<any>('')
    const [requiredData, setRequiredData] = useState()

    const [examSections, setExamSections] = useState<any[]>([])
    const [newGroupsData, setNewGroupsData] = useState<any[]>([])
    const [availableGroupsData, setAvailableGroupsData] = useState<any[]>([])

    useEffect(() => {
        if (userState.tokens?.accessToken && id) {
            getExamData()
            getRequiredData()
            getAvailableGroups()
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
        } catch (error) {
            console.log(error)
            setErrorMessage('حدث خطاء')
        }
    }

    // Call API to get required data
    const getRequiredData = async () => {
        try {
            const response = await getHandler(
                userState.tokens?.accessToken!,
                Urls.URL_TEACHER_EXAMS_REQUIRED,
                true,
            )
            setRequiredData(response)
        } catch (error) {
            setErrorMessage('حدث خطاء')
        }
    }

    // Call API to get available groups for this exam
    const getAvailableGroups = async () => {
        try {
            const response = await getHandlerById(
                examData.id,
                userState.tokens?.accessToken!,
                Urls.URL_TEACHER_EXAMS_GROUPS,
                true,
            )
            setAvailableGroupsData(response)
        } catch (error) {
            setErrorMessage('حدث خطاء')
        }
    }

    // Call API to delete exam
    const deleteExamHandler = async () => {
        try {
            await deleteHandler(examData.id, userState.tokens?.accessToken!, Urls.URL_TEACHER_EXAMS)
            setWarningMessage('تم حذف الأمتحان بنجاح')
        } catch (error) {
            setErrorMessage('حدث خطاء')
        }
    }

    // Call API to delete group from exam
    const deleteGroupHandler = async (groupId: string) => {
        try {
            await deleteHandler(
                groupId,
                userState.tokens?.accessToken!,
                Urls.URL_TEACHER_EXAMS_GROUPS,
            )
            setWarningMessage('تم حذف المجموعه بنجاح')
        } catch (error) {
            setErrorMessage('حدث خطاء')
        }
    }

    // Call API to submit new group to exam
    const submitGroupsHandler = async () => {
        try {
            await postHandlerById(
                examData.id,
                userState.tokens?.accessToken!,
                Urls.URL_TEACHER_EXAMS_GROUPS,
                newGroupsData,
            )
            setWarningMessage('تم حذف المجموعه بنجاح')
        } catch (error) {
            setErrorMessage('حدث خطاء')
        }
    }

    // Call API to delete section from exam
    const deleteSectionHandler = async (sectionId: string) => {
        try {
            await deleteHandler(
                sectionId,
                userState.tokens?.accessToken!,
                Urls.URL_TEACHER_EXAMS_SECTION,
            )
            setWarningMessage('تم حذف السؤال بنجاح')
        } catch (error) {
            setErrorMessage('حدث خطاء')
        }
    }

    // Call API to delete section image from exam
    const deleteSectionImageHandler = async (sectionImageId: string) => {
        try {
            await deleteHandler(
                sectionImageId,
                userState.tokens?.accessToken!,
                Urls.URL_TEACHER_EXAMS_SECTION_IMAGE,
            )
            setWarningMessage('تم حذف السؤال بنجاح')
        } catch (error) {
            setErrorMessage('حدث خطاء')
        }
    }

    // Call API to update question from exam
    const updateQuestionHandler = async (questionId: string) => {
        try {
            await deleteHandler(
                questionId,
                userState.tokens?.accessToken!,
                Urls.URL_TEACHER_EXAMS_SECTION_QUESTION,
            )
            setWarningMessage('تم حذف السؤال بنجاح')
        } catch (error) {
            setErrorMessage('حدث خطاء')
        }
    }

    // Call API to delete question from exam
    const deleteQuestionHandler = async (questionId: string) => {
        try {
            await deleteHandler(
                questionId,
                userState.tokens?.accessToken!,
                Urls.URL_TEACHER_EXAMS_SECTION_QUESTION,
            )
            setWarningMessage('تم حذف السؤال بنجاح')
        } catch (error) {
            setErrorMessage('حدث خطاء')
        }
    }

    // Call API to delete quesion image from exam
    const deleteQuestionImageHandler = async (questionImageId: string) => {
        try {
            await deleteHandler(
                questionImageId,
                userState.tokens?.accessToken!,
                Urls.URL_TEACHER_EXAMS_SECTION_QUESTION_IMAGE,
            )
            setWarningMessage('تم حذف السؤال بنجاح')
        } catch (error) {
            setErrorMessage('حدث خطاء')
        }
    }

    // Call API to delete choice from exam
    const deleteChoiceHandler = async (choiceId: string) => {
        try {
            await deleteHandler(
                choiceId,
                userState.tokens?.accessToken!,
                Urls.URL_TEACHER_EXAMS_SECTION_QUESTION_CHOICE,
            )
            setWarningMessage('تم حذف السؤال بنجاح')
        } catch (error) {
            setErrorMessage('حدث خطاء')
        }
    }

    // Call API to delete choice image from exam
    const deleteChoiceImageHandler = async (ChoiceImageId: string) => {
        try {
            await deleteHandler(
                ChoiceImageId,
                userState.tokens?.accessToken!,
                Urls.URL_TEACHER_EXAMS_SECTION_QUESTION_CHOICE_IMAGE,
            )
            setWarningMessage('تم حذف السؤال بنجاح')
        } catch (error) {
            setErrorMessage('حدث خطاء')
        }
    }

    return {
        data: {
            examData,
            requiredData,
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
