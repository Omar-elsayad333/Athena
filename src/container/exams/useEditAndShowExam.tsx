import Urls from 'constant/urls'
import { useRouter } from 'next/router'
import { useUser } from 'context/userContext'
import { useAlert } from 'context/AlertContext'
import { convertFileToBase64 } from 'utils/converters'
import { useEffect, useReducer, useState } from 'react'
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
            adjuctSections(res.sections)
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

    // Adjust section to be handelable
    const adjuctSections = (sections: any) => {
        for (let section of sections) {
            section['open'] = false
            section['openToEdit'] = false
            section['editedSection'] = { id: section.id, newImages: [] }
            for (let question of section.questions) {
                question['openToEdit'] = false
                section['editedQuestion'] = { id: question.id, newImages: [], newChoices: [] }
            }
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
            setWarningMessage('تم حذف الصوره بنجاح')
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

    // Open and close section for edit
    const openSectionToEdit = (sectionIndex: number) => {
        const selectedSection = examSections[sectionIndex]

        if (selectedSection.openToEdit) {
            selectedSection.openToEdit = false
            selectedSection.open = false
        } else {
            selectedSection.openToEdit = true
            selectedSection.open = true
        }

        setExamSections([
            ...examSections.slice(0, sectionIndex),
            selectedSection,
            ...examSections.slice(sectionIndex + 1),
        ])
    }

    // Handle section prime
    const sectionPrimeHandler = (sectionIndex: number) => {
        const selectedSection = examSections[sectionIndex]

        if (selectedSection.editedSection['isPrime'] && selectedSection.isPrime) {
            selectedSection.editedSection['isPrime'] = false
        } else if (selectedSection.editedSection['isPrime']) {
            selectedSection.editedSection['isPrime'] = false
        } else {
            selectedSection.editedSection['isPrime'] = true
        }

        setExamSections([
            ...examSections.slice(0, sectionIndex),
            selectedSection,
            ...examSections.slice(sectionIndex + 1),
        ])
    }

    // Get the sectiom paragraph from user
    const sectionNameHandler = (selectedName: string, sectionIndex: any) => {
        let selectedSection = examSections[sectionIndex]
        if (selectedSection?.name?.length < 100) {
            selectedSection.editedSection['name'] = selectedName

            setExamSections([
                ...examSections.slice(0, sectionIndex),
                selectedSection,
                ...examSections.slice(sectionIndex + 1),
            ])
        } else {
            setErrorMessage('لا يمكن كتابة اكثر من 100 حرف')
        }
    }

    // Get the sectiom paragraph from user
    const sectionParagraphHandler = (selectedParagraph: string, sectionIndex: any) => {
        let selectedSection = examSections[sectionIndex]

        if (selectedSection!.paragraph.length < 5000) {
            selectedSection.editedSection['paragraph'] = selectedParagraph

            setExamSections([
                ...examSections.slice(0, sectionIndex),
                selectedSection,
                ...examSections.slice(sectionIndex + 1),
            ])
        } else {
            setErrorMessage('لا يمكن كتابة اكثر من 5000 حرف')
        }
    }

    // Get the section paragraph from user
    const sectionParagraphImageHandler = async (image: any, sectionIndex: number) => {
        const selectedSection = examSections[sectionIndex]
        const newImageIndex = selectedSection!.images?.length
        const [fileToConvert] = image
        const convertedImage: any = await convertFileToBase64(fileToConvert)

        if (image.length > 0 && newImageIndex! < 3) {
            selectedSection.editedSection['newImages'].push({
                index: newImageIndex,
                image: {
                    extension: `.${image[0].type.slice(6)}`,
                    data: convertedImage,
                },
            })
            setExamData([
                ...examSections.slice(0, sectionIndex),
                selectedSection,
                ...examSections.slice(sectionIndex + 1),
            ])
        } else {
            setErrorMessage('لا يمكن اضافة اكثر من ثلاث صور')
        }
    }

    // Delete new section image
    const deleteNewSectionImageHandler = async (sectionIndex: number, newImageIndex: number) => {
        const selectedSection = examSections[sectionIndex]
        selectedSection.editedSection.newImages.splice(newImageIndex, 1)
        setExamData([
            ...examSections.slice(0, sectionIndex),
            selectedSection,
            ...examSections.slice(sectionIndex + 1),
        ])
    }

    // Call API to submit edited exam section data
    const submitEditExamSeciton = async (sectionIndex: number) => {
        try {
            await putHandlerById(
                examSections[sectionIndex].id,
                userState.tokens?.accessToken!,
                Urls.URL_TEACHER_EXAMS_SECTION,
                examSections[sectionIndex].editedSection,
            )
            openSectionToEdit(sectionIndex)
        } catch (error) {
            setErrorMessage('حدث خطاء اثناء تعديل البيانات')
        }
    }

    // Open and close section for edit
    const openQuestionToEdit = (sectionIndex: number, questionIndex: number) => {
        const selectedSection = examSections[sectionIndex]

        selectedSection.questions[questionIndex].openToEdit =
            !selectedSection.questions[questionIndex].openToEdit

        setExamSections([
            ...examSections.slice(0, sectionIndex),
            selectedSection,
            ...examSections.slice(sectionIndex + 1),
        ])
    }

    // Handle question prime
    const questionPrimeHandler = (sectionIndex: number, questionIndex: number) => {
        const selectedSection = examSections[sectionIndex]
        if (selectedSection.questions[questionIndex].editedQuestion['isPrime']) {
            selectedSection.questions[questionIndex].editedQuestion['isPrime'] =
                !selectedSection.questions[questionIndex].editedQuestion['isPrime']
        } else {
            selectedSection.questions[questionIndex].editedQuestion['isPrime'] =
                !selectedSection.questions[questionIndex].isPrime
        }

        setExamSections([
            ...examSections.slice(0, sectionIndex),
            selectedSection,
            ...examSections.slice(sectionIndex + 1),
        ])
    }

    // Update the question name from user
    const questionNameHandler = (selectedParagraph: string, indexes: any) => {
        let selectedSection = examSections[indexes.parent]

        if (selectedSection!.questions[indexes.child].name.length < 100) {
            selectedSection.questions[indexes.child].editedQuestion['name'] = selectedParagraph

            setExamSections([
                ...examSections.slice(0, indexes.parent),
                selectedSection,
                ...examSections.slice(indexes.parent + 1),
            ])
        } else {
            setErrorMessage('لا يمكن كتابة اكثر من 100 حرف')
        }
    }

    // Get the sectiom paragraph from user
    const questionNameImageHandler = async (image: any, indexes: any) => {
        const selectedSection = examSections[indexes.parent]
        const newImageIndex = selectedSection.questions[indexes.child].images?.length
        const [fileToConvert] = image
        const convertedImage: any = await convertFileToBase64(fileToConvert)

        if (image.length > 0 && newImageIndex! < 3) {
            selectedSection.quetions[indexes.child].editedQuestion['newImages'].push({
                index: newImageIndex,
                image: {
                    extension: `.${image[0].type.slice(6)}`,
                    data: convertedImage,
                },
            })
            setExamData([
                ...examSections.slice(0, indexes.parent),
                selectedSection,
                ...examSections.slice(indexes.parent + 1),
            ])
        } else {
            setErrorMessage('لا يمكن اضافة اكثر من ثلاث صور')
        }
    }

    // Delete new section image
    const deleteNewQuestionImageHandler = async (indexes: any, newImageIndex: number) => {
        const selectedSection = examSections[indexes.parent]
        selectedSection.questions[indexes.child].editedQuestion.newImages.splice(newImageIndex, 1)
        setExamData([
            ...examSections.slice(0, indexes.parent),
            selectedSection,
            ...examSections.slice(indexes.parent + 1),
        ])
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
            openAndCloseSection,
            openSectionToEdit,
            sectionPrimeHandler,
            sectionNameHandler,
            sectionParagraphHandler,
            sectionParagraphImageHandler,
            deleteSectionImageHandler,
            deleteNewSectionImageHandler,
            submitEditExamSeciton,
            openQuestionToEdit,
            questionPrimeHandler,
            questionNameHandler,
            questionNameImageHandler,
            deleteNewQuestionImageHandler,
        },
        dialogs: {},
    }
}

export default useEditAndShowExam
