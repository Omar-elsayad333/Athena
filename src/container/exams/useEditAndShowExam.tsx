import Urls from 'constant/urls'
import { useRouter } from 'next/router'
import { useEffect, useReducer, useState } from 'react'
import { useUser } from 'context/userContext'
import { useAlert } from 'context/AlertContext'
import useRequestsHandlers from 'hooks/useRequestsHandlers'
import { editExamDetailsReducer } from 'reducers/editExamReducer'
import { ExamInfoInitialValues } from 'interfaces/exams/editExamInterface'

const useEditAndShowExam = () => {
    const router = useRouter()
    const { id } = router.query
    const { userState } = useUser()
    const { setErrorMessage, setWarningMessage } = useAlert()
    const { loading, putHandlerById, getHandlerById, getHandler, deleteHandler, postHandlerById } =
        useRequestsHandlers()

    const [state, dispatch] = useReducer(editExamDetailsReducer, ExamInfoInitialValues)

    const [examData, setExamData] = useState<any>('')
    const [requiredData, setRequiredData] = useState()

    const [examSections, setExamSections] = useState<any[]>([])
    const [newGroupsData, setNewGroupsData] = useState<any[]>([])
    const [availableGroupsData, setAvailableGroupsData] = useState<any[]>([])

    const [isEditDetails, setIsEditDetails] = useState<boolean>(false)

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
                id,
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

    // Handler all inputs
    const handleInputs = (value: string, index: any, name: string) => {
        index
        dispatch({
            type: 'UPDATE_INPUTS',
            name: name,
            payload: {
                value: value,
                error: false,
                helperText: '',
                length: value.length,
            },
        })
    }

    // Handler all date picker inputs
    const handleDatePickers = (value: string, name: any) => {
        dispatch({
            type: 'UPDATE_DATETIMEINPUTS',
            name: name,
            payload: {
                value: value,
                error: false,
                helperText: '',
            },
        })
    }

    // Handler all time picker inputs
    const handleTimePickers = (value: string, index: any, name: string) => {
        index
        dispatch({
            type: 'UPDATE_DATETIMEINPUTS',
            name: name,
            payload: {
                value: value,
                error: false,
                helperText: '',
            },
        })
    }

    // Handler all date picker inputs
    const handleDropDowns = (selected: any, index: any, name: string) => {
        index
        dispatch({
            type: 'UPDATE_SELECTS',
            name: name,
            payload: {
                id: selected.id,
                value: selected.name,
                error: false,
                helperText: '',
            },
        })
    }

    // Open edit details handler
    const openEditDetails = () => {
        setIsEditDetails(true)
    }

    // Close edit details handler
    const closeEditDetails = () => {
        setIsEditDetails(false)
    }

    // Collect exam details data before submiting
    const collectExamDetailsData = () => {
        const data = {
            id: examData.id,
            examTypeId: examData.examTypeId,
            name: state.inputs.name.value || examData.name,
            publishedDate: state.dateTimeInputs.publishedDate.value || examData.publishedDate,
            publishedTime: state.dateTimeInputs.publishedTime.value || examData.publishedTime,
            finalDegree: state.inputs.finalDegree.value || examData.finalDegree,
            allowedTime: state.inputs.allowedTime.value || examData.allowedTime,
            isPrime: examData.isPrime,
        }

        return data
    }

    // Call API to submit edited exam details data
    const submitEditExamDetails = async () => {
        try {
            const data = collectExamDetailsData()
            await putHandlerById(
                examData.id,
                userState.tokens?.accessToken!,
                Urls.URL_TEACHER_EXAMS,
                data,
            )
        } catch (error) {
            setErrorMessage('حدث خطاء اثناء تعديل البيانات الأساسيه للأمتحان')
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
            isEditDetails,
            state,
        },
        actions: {
            openEditDetails,
            closeEditDetails,
            handleInputs,
            handleDatePickers,
            handleTimePickers,
            handleDropDowns,
            submitEditExamDetails,
        },
        dialogs: {},
    }
}

export default useEditAndShowExam
