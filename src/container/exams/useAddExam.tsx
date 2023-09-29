import Urls from 'constant/urls'
import { Routes } from 'routes/Routes'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { useUser } from 'context/userContext'
import { useAlert } from 'context/AlertContext'
import { useTheme } from 'context/ThemeContext'
import useRequestsHandlers from 'hooks/useRequestsHandlers'
import { examSectionsNames } from 'constant/staticData'
import { datePickerInitialValues, DatePickerProps } from 'interfaces/shared/datePicker'
import { timePickerInitialValues, TimePickerProps } from 'interfaces/shared/timePicker'
import { convertDateToShortDate, convertFileToBase64, convertTimeToDB } from 'utils/converters'
import {
    sectionInitialValues,
    SectionProps,
    questionInitialValues,
    choiceJson,
} from 'interfaces/teacher/exams/exam'
import {
    dropMenuInitialValues,
    DropMenuProps,
    inputInitialValues,
    InputProps,
    radioInitialValues,
    RadioProps,
} from 'interfaces/shared/input'

const useAddExam = () => {
    const router = useRouter()
    const { userState } = useUser()
    const { mainColors } = useTheme()
    const { setErrorMessage, setSuccessMessage } = useAlert()
    const { loading, getHandler, getHandlerById, postHandler } = useRequestsHandlers()
    const [examTypes, setExamTypes] = useState<any[]>([])
    const [selectedExamType, setSelectedExamType] = useState<RadioProps>(radioInitialValues)
    const [levelsData, setLevelsData] = useState<any[]>([])
    const [selectedLevel, setSelectedLevel] = useState<DropMenuProps>(dropMenuInitialValues)
    const [examName, setExamName] = useState<InputProps>(inputInitialValues)
    const [examStartDate, setExamStartDate] = useState<DatePickerProps>(datePickerInitialValues)
    const [sectionCount, setSectionCount] = useState<InputProps>(inputInitialValues)
    const [examStartTime, setExamStartTime] = useState<TimePickerProps>(timePickerInitialValues)
    const [examTime, setExamTime] = useState<InputProps>(inputInitialValues)
    const [examReady, setExamReady] = useState<boolean>(false)
    const [examShowenDate, setExamShowenDate] = useState<any>('')
    const [spcialExam, setSpcialExam] = useState<boolean>(false)
    const [sections, setSections] = useState<(SectionProps | undefined)[]>([])
    const [groupsData, setGroupsData] = useState<any>([])
    const [selectedGroups, setSelectedGroups] = useState<any>([])

    // Get required data if the user is authorized
    useEffect(() => {
        if (userState.tokens!.accessToken) {
            getRequiredData()
        }
    }, [userState.tokens!.accessToken])

    // Get required data if the user is authorized
    useEffect(() => {
        if (userState.tokens!.accessToken && selectedLevel.id) {
            getGroupsData()
        }
    }, [userState.tokens!.accessToken, selectedLevel])

    // Call api to get required data
    const getRequiredData = async () => {
        try {
            const res = await getHandler(
                userState.tokens!.accessToken!,
                Urls.URL_TEACHER_EXAMS_REQUIRED,
            )
            setLevelsData(res.levels)
            updateExamType(res)
        } catch (error) {}
    }

    // Call api to get groups data
    const getGroupsData = async () => {
        try {
            const res = await getHandlerById(
                selectedLevel.id,
                userState.tokens!.accessToken!,
                Urls.URL_TEACHER_EXAMS_GROUPS,
                true,
            )
            setGroupsData(res)
        } catch (error) {}
    }

    // Update exam types data
    const updateExamType = (data: any) => {
        if (examTypes.length == 0) {
            setExamTypes(data.examTypes)
            setSelectedExamType({
                id: data.examTypes[0]['id'],
                value: data.examTypes[0]['name'],
                error: false,
                helperText: '',
            })
        }
    }

    // Get the selected exam type from user
    const examTypesHandler = (selectedType: any) => {
        setSelectedExamType({
            id: selectedType.target.value,
            value: selectedType.target.name,
            error: false,
            helperText: '',
        })
    }

    // Get the selected level from user
    const selectedLevelHandler = (level: any) => {
        setSelectedLevel({
            id: level.id,
            value: level.name,
            error: false,
            helperText: '',
        })
    }

    // Get exam name from user
    const examNameHandler = (selectedExamName: string) => {
        setExamName({
            value: selectedExamName,
            length: selectedExamName.length,
            error: false,
            helperText: '',
        })
    }

    // Get the selected exam start date from user
    const examStartDateHandler = (selectedExamStartDate: any) => {
        const date = new Date(selectedExamStartDate)

        // Get the ISO date string by subtracting the offset
        const ISODate: any = new Date(
            date.getTime() - date.getTimezoneOffset() * 60000,
        ).toISOString()

        setExamStartDate((examStartDate) => ({
            ...examStartDate,
            value: selectedExamStartDate !== null ? ISODate : null,
            error: false,
            helperText: '',
        }))
    }

    // Get exam section count from user
    const examSectionCountsHandler = (count: any) => {
        setSectionCount({
            value: count,
            length: count.length,
            error: false,
            helperText: '',
        })
        if (parseInt(count) > 0 && parseInt(count) <= 10) {
            updateSections(parseInt(count))
        }
    }

    // Update section abond user selection
    const updateSections = (count: number) => {
        if (count > sections.length) {
            for (let i = 0; i < count; i++) {
                if (i > sections.length - 1) {
                    const newValueWithAdjust = sectionInitialValues
                    newValueWithAdjust.index = i
                    newValueWithAdjust.name = examSectionsNames[i]
                    const newValue = JSON.stringify(newValueWithAdjust)
                    setSections((sections) => [...sections, JSON.parse(newValue)])
                }
            }
        } else {
            const newCount = count - sections.length
            setSections((sections: any) => sections.slice(0, newCount))
        }
    }

    //  Get exam start time from user
    const examStartTimeHandler = (time: any) => {
        setExamStartTime({
            value: time,
            error: false,
            helperText: '',
        })
    }

    //  Get exam time from user
    const examTimeHandler = (time: any) => {
        setExamTime({
            value: time,
            length: time.length,
            error: false,
            helperText: '',
        })
    }

    // Validate exam basic data
    const basicDataValidation = () => {
        let state = true

        if (!selectedExamType.id) {
            state = false
            setSelectedExamType({ ...selectedExamType, helperText: 'يجب اختيار نوع الأمتحان' })
        }

        if (examName.length == 0) {
            state = false
            setExamName({ ...examName, error: true, helperText: 'يجب ادخال اسم الأمتحان' })
        }

        if (!selectedLevel.id) {
            state = false
            setSelectedLevel({ ...selectedLevel, error: true, helperText: 'يجب أختيار صف دراسي' })
        }

        if (!examStartDate.value) {
            state = false
            setExamStartDate({
                ...examStartDate,
                error: true,
                helperText: 'يجب تحديد تاريخ الأصدار',
            })
        }

        if (sectionCount.length == 0) {
            state = false
            setSectionCount({
                ...sectionCount,
                error: true,
                helperText: 'يجب تحديد عدد اساله الأمتحان',
            })
        }

        if (sectionCount.length == 0) {
            state = false
            setExamStartTime({
                ...examStartTime,
                error: true,
                helperText: 'يجب اختيار وقت بدأ الأمتحان',
            })
        }

        if (examTime.length == 0 || parseInt(examTime.value) <= 0) {
            state = false
            setExamTime({
                ...examTime,
                error: true,
                helperText: 'يجب تحديد المده الزمنيه للأمتحان',
            })
        }

        if (!state) {
            setErrorMessage('يوجد خطاء يرجي مراجعة المدخلات')
        }

        return state
    }

    // Start taking exam questions if the basic data is ready
    const submitBasicData = async () => {
        if (basicDataValidation()) {
            const date = await convertDateToShortDate(examStartDate.value)
            setExamShowenDate(date)
            setExamReady(true)
        }
    }

    // Set exam to spcial or not
    const spcialExamHandler = () => {
        setSpcialExam(!spcialExam)
    }

    // Open section to write
    const openSection = (index: number) => {
        let newValue = sections[index]
        newValue!.open = true
        setSections([...sections.slice(0, index), newValue, ...sections.slice(index + 1)])
    }

    // Closer section
    const closeSection = (index: number) => {
        let newValue = sections[index]
        newValue!.open = false
        setSections([...sections.slice(0, index), newValue, ...sections.slice(index + 1)])
    }

    // Set section to prime
    const primeSection = (index: number) => {
        let newValue = sections[index]
        newValue!.isPrime = true
        setSections([...sections.slice(0, index), newValue, ...sections.slice(index + 1)])
    }

    // Set section to not prime
    const notPrimeSection = (index: number) => {
        let newValue = sections[index]
        newValue!.isPrime = false
        setSections([...sections.slice(0, index), newValue, ...sections.slice(index + 1)])
    }

    // Get the sectiom name from user
    const sectionNameHandler = (name: string, indexes: any) => {
        let newValue = sections[indexes.parent]
        newValue!.name = name
        setSections([
            ...sections.slice(0, indexes.parent),
            newValue,
            ...sections.slice(indexes.parent + 1),
        ])
    }

    // Get the sectiom paragraph from user
    const sectionParagraphHandler = (selectedParagraph: string, index: any) => {
        let newValue = sections[index]

        if (newValue!.paragraph.length < 5000) {
            newValue!.paragraph = selectedParagraph

            setSections([...sections.slice(0, index), newValue, ...sections.slice(index + 1)])
        }
    }

    // Get the sectiom paragraph from user
    const sectionParagraphImageHandler = async (image: any, index: any) => {
        const newValue = sections[index]
        const newImageIndex = newValue!.images?.length
        const [fileToConvert] = image
        const convertedImage: any = await convertFileToBase64(fileToConvert)

        if (image.length > 0 && newImageIndex! < 3) {
            newValue!.images?.push({
                index: newImageIndex,
                image: {
                    extension: `.${image[0].type.slice(6)}`,
                    data: convertedImage,
                },
            })
            setSections([...sections.slice(0, index), newValue, ...sections.slice(index + 1)])
        }
    }

    // Delete new question image
    const deleteSectionImageHandler = async (index: any, imageIndex: number) => {
        const newValue = sections[index]
        newValue!.images?.splice(imageIndex, 1)
        setSections([...sections.slice(0, index), newValue, ...sections.slice(index + 1)])
    }

    // Set question to prime
    const primeQuestion = (sectionIndex: number, index: number) => {
        let newValue = sections[sectionIndex]
        newValue!.questions[index]!.isPrime = true
        setSections([
            ...sections.slice(0, sectionIndex),
            newValue,
            ...sections.slice(sectionIndex + 1),
        ])
    }

    // Set question to not prime
    const notPrimeQuestion = (sectionIndex: number, index: number) => {
        let newValue = sections[sectionIndex]
        newValue!.questions[index]!.isPrime = false
        setSections([
            ...sections.slice(0, sectionIndex),
            newValue,
            ...sections.slice(sectionIndex + 1),
        ])
    }

    // Get the question degree from user
    const questionDegreeHandler = (degree: number, indexes: any) => {
        let newValue = sections[indexes.parent]
        newValue!.questions[indexes.child]!.degree = degree
        newValue!.questions[indexes.child]!.degreeError!.error = false
        newValue!.questions[indexes.child]!.degreeError!.helperText = ''
        setSections([
            ...sections.slice(0, indexes.parent),
            newValue,
            ...sections.slice(indexes.parent + 1),
        ])
    }

    // Get the question exam type from user
    const questionTypeHandler = (selectedType: any, indexes: any) => {
        let newValue = sections[indexes.parent]
        newValue!.questions[indexes.child]!.type = selectedType.target.value
        setSections([
            ...sections.slice(0, indexes.parent),
            newValue,
            ...sections.slice(indexes.parent + 1),
        ])
    }

    // Get the sectiom name from user
    const questionNameHandler = (name: string, indexes: any) => {
        let newValue = sections[indexes.parent]
        newValue!.questions[indexes.child]!.name = name
        newValue!.questions[indexes.child]!.nameError!.error = false
        newValue!.questions[indexes.child]!.nameError!.helperText = ''
        setSections([
            ...sections.slice(0, indexes.parent),
            newValue,
            ...sections.slice(indexes.parent + 1),
        ])
    }

    // Get question images from user
    const questionImagesHandler = async (image: any, indexes: any) => {
        const newValue = sections[indexes.parent]
        const newImageIndex = newValue!.questions[indexes.child]!.images?.length
        const selectedfile = image
        const [fileToConvert] = image

        if (selectedfile.length > 0 && newImageIndex! < 3) {
            const convertedImage: any = await convertFileToBase64(fileToConvert)
            newValue!.questions[indexes.child]!.images?.push({
                index: newImageIndex,
                image: {
                    extension: `.${selectedfile[0].type.slice(6)}`,
                    data: convertedImage,
                },
            })
            newValue!.questions[indexes.child]!.nameError!.error = false
            newValue!.questions[indexes.child]!.nameError!.helperText = ''
            setSections([
                ...sections.slice(0, indexes.parent),
                newValue,
                ...sections.slice(indexes.parent + 1),
            ])
        }
    }

    // Get choice images from user
    const choiceImagesHandler = async (image: any, indexes: any) => {
        const newValue = sections[indexes.grandParent]
        const selectedfile = image
        const [fileToConvert] = image

        if (selectedfile.length > 0) {
            const convertedImage: any = await convertFileToBase64(fileToConvert)
            newValue!.questions[indexes.parent]!.choices![indexes.child]!.image = {
                extension: `.${selectedfile[0].type.slice(6)}`,
                data: convertedImage,
            }
            newValue!.questions[indexes.parent]!.choices![indexes.child]!.error!.error = false
            newValue!.questions[indexes.parent]!.choices![indexes.child]!.error!.helperText = ''
            setSections([
                ...sections.slice(0, indexes.grandParent),
                newValue,
                ...sections.slice(indexes.grandParent + 1),
            ])
        }
    }

    // Delete new question image
    const deleteChoiceImageHandler = async (indexes: any) => {
        const newValue = sections[indexes.grandParent]
        newValue!.questions[indexes.parent]!.choices![indexes.child]!.image = null
        setSections([
            ...sections.slice(0, indexes.parent),
            newValue,
            ...sections.slice(indexes.parent + 1),
        ])
    }

    // Get choice value from user
    const choiceNameHandler = (selectedName: string, indexes: any) => {
        const newValue = sections[indexes.grandParent]
        newValue!.questions[indexes.parent]!.choices![indexes.child]!.name = selectedName
        newValue!.questions[indexes.parent]!.choices![indexes.child]!.error!.error = false
        newValue!.questions[indexes.parent]!.choices![indexes.child]!.error!.helperText = ''
        setSections([
            ...sections.slice(0, indexes.grandParent),
            newValue,
            ...sections.slice(indexes.grandParent + 1),
        ])
    }

    // Get choice right of false from user
    const choiceIsRightHandler = (event: any, indexes: any) => {
        const newValue = sections[indexes.grandParent]

        newValue!.questions[indexes.parent]!.choices![indexes.child]!.isRightChoice =
            event.target.checked
        for (let i = 0; i < newValue!.questions[indexes.parent]!.choices!.length; i++) {
            if (i !== indexes.child) {
                newValue!.questions[indexes.parent]!.choices![i]!.isRightChoice = false
            }
        }
        newValue!.questions[indexes.parent]!.isRightChoiceError!.error = false
        newValue!.questions[indexes.parent]!.isRightChoiceError!.helperText = ''
        setSections([
            ...sections.slice(0, indexes.grandParent),
            newValue,
            ...sections.slice(indexes.grandParent + 1),
        ])
    }

    // Add choice
    const addChoice = (indexes: any) => {
        const newValue = sections[indexes.grandParent]
        const newChoice = JSON.parse(choiceJson)
        newChoice.index = newValue!.questions[indexes.parent]!.choices!.length
        if (newValue!.questions[indexes.parent]!.choices!.length < 5) {
            newValue!.questions[indexes.parent]!.choices!.push(newChoice)
        }
        setSections([
            ...sections.slice(0, indexes.grandParent),
            newValue,
            ...sections.slice(indexes.grandParent + 1),
        ])
    }

    // Delete choice
    const deleteChoice = (indexes: any) => {
        const newValue = sections[indexes.grandParent]
        newValue!.questions[indexes.parent]!.choices!.splice(indexes.child, 1)
        for (let i = 0; i < newValue!.questions[indexes.parent]!.choices!.length; i++) {
            newValue!.questions[indexes.parent]!.choices![i]!.index = i
        }
        setSections([
            ...sections.slice(0, indexes.grandParent),
            newValue,
            ...sections.slice(indexes.grandParent + 1),
        ])
    }

    // Get question written answer from user
    const questionAnswerHandler = (selectedAnswer: string, indexes: any) => {
        const newValue = sections[indexes.grandParent]
        newValue!.questions[indexes.parent]!.answer = selectedAnswer
        newValue!.questions[indexes.parent]!.answerError!.error = false
        newValue!.questions[indexes.parent]!.answerError!.helperText = ''
        setSections([
            ...sections.slice(0, indexes.grandParent),
            newValue,
            ...sections.slice(indexes.grandParent + 1),
        ])
    }

    // Delete new question image
    const deleteQuestionImageHandler = async (indexes: any, imageIndex: number) => {
        const newValue = sections[indexes.parent]
        newValue!.questions[indexes.child]?.images?.splice(imageIndex, 1)
        setSections([
            ...sections.slice(0, indexes.parent),
            newValue,
            ...sections.slice(indexes.parent + 1),
        ])
    }

    // Delete question
    const deleteQuetion = (indexes: any) => {
        const newValue = sections[indexes.parent]
        newValue!.questions.splice(indexes.child, 1)
        setSections([
            ...sections.slice(0, indexes.parent),
            newValue,
            ...sections.slice(indexes.parent + 1),
        ])
    }

    // Add question to the section
    const addQuestion = (indexes: any) => {
        const newValue = sections[indexes.parent]
        const stringQuestionInitialValues = JSON.stringify(questionInitialValues)
        const newValueWithIndex = JSON.parse(stringQuestionInitialValues)
        newValueWithIndex.index = newValue!.questions.length
        newValue!.questions.push(newValueWithIndex)
        setSections([
            ...sections.slice(0, indexes.parent),
            newValue,
            ...sections.slice(indexes.parent + 1),
        ])
    }

    // Validate section to make it ready
    const submitSection = (indexes: any) => {
        let state = true
        const selectedSection = sections[indexes.parent]
        for (let question of selectedSection!.questions) {
            // Validate question degree
            if (question?.degree == 0) {
                state = false
                question.degreeError!.error = true
                question.degreeError!.helperText = 'يجب تحديد درجة السؤال'
            }

            // Validate question name
            if (question?.name == '' && question.images?.length == 0) {
                state = false
                question.nameError!.error = true
                question.nameError!.helperText = 'يجب كتابة رأس السؤال'
            }

            // Validate question answer
            if (question?.type == 'MCQ') {
                let choicesIsRightState = false
                loopForChoices: for (let choice of question!.choices!) {
                    if (choice?.name == '' && choice.image == null) {
                        state = false
                        choice.error!.error = true
                        choice.error!.helperText = 'يجب كتابة الأجابه'
                    }
                    if (choice?.isRightChoice == true) {
                        choicesIsRightState = true
                    }
                }
                if (!choicesIsRightState) {
                    state = false
                    question!.isRightChoiceError!.error = true
                    question!.isRightChoiceError!.helperText = 'يجب اختيار اجابه صحيحه'
                }
            } else {
                if (question?.answer == '') {
                    question.answerError!.error = true
                    question.answerError!.helperText = 'يجب كتابة أجابه السؤال'
                }
            }
        }

        if (!state) {
            setErrorMessage('يوجد خطاء يرجي مراجعة المدخلات')
        } else {
            selectedSection!.open = false
            setSuccessMessage('لا يوجد اخطاء في السؤال الرئيسي')
            setTimeout(() => {
                if (selectedSection!.open == false) {
                    const nextSection = indexes.parent + 1
                    scrollToDiv(nextSection.toString())
                }
            }, 100)
        }

        setSections([
            ...sections.slice(0, indexes.parent),
            selectedSection,
            ...sections.slice(indexes.parent + 1),
        ])

        return state
    }

    // Get selected groups from user
    const groupHandler = (e: any, groupId: string) => {
        if (selectedGroups.indexOf(groupId) > -1) {
            e.currentTarget.style.background = mainColors.chips.main
            setSelectedGroups(selectedGroups.filter((item: any) => item !== groupId))
        } else {
            e.currentTarget.style.background = mainColors.linerGradient.primary
            setSelectedGroups((selectedGroups: any) => [...selectedGroups, groupId])
        }
    }

    // Adjust data to send it to api
    const adjustDataToSubmit = () => {
        const newSections = structuredClone(sections)

        for (let section of newSections) {
            delete section!.open
            delete section!.openToEdit
            delete section!.titleState
            if (section?.images?.length == 0) {
                section.images = null
            }
            for (let question of section!.questions!) {
                delete question!.nameError
                delete question!.answerError
                delete question!.degreeError
                delete question!.isRightChoiceError
                if (question?.type == 'MCQ') {
                    question.answer = null
                    question.images = null
                    for (let choice of question!.choices!) {
                        delete choice!.error
                        if (choice.name == '') {
                            choice.name = null
                        }
                        if (choice.image?.data == '') {
                            choice.image = null
                        }
                    }
                } else if (question?.type == 'written') {
                    question!.choices = null
                    if (question.answer == '') {
                        question.answer = null
                    }
                    if (question.images!.length == 0) {
                        question.images = null
                    }
                }
            }
        }

        return newSections
    }

    // Collect final data to send it
    const collectData = () => {
        const sectionsData = adjustDataToSubmit()

        const finalData = {
            name: examName.value,
            description: null,
            allowedTime: examTime.value,
            publishedDate: examStartDate.value,
            publishedTime: convertTimeToDB(examStartTime.value),
            isPrime: spcialExam,
            levelId: selectedLevel.id,
            examTypeId: selectedExamType.id,
            groupIds: selectedGroups,
            sections: sectionsData,
        }

        return finalData
    }

    // Validate all data before send it
    const validateData = () => {
        let state = true

        // Validate basic data
        if (!basicDataValidation()) state = false

        // Validate sections data
        for (let i = 0; i < sections.length; i++) {
            if (!submitSection({ parent: i })) {
                state = false
            }
        }

        if (selectedGroups.length == 0) {
            state = false
            setErrorMessage('يجب اختيار مجموعه واحده علي الأقل')
        }

        return state
    }

    // Send data to review section
    const submitExam = async () => {
        if (validateData()) {
            const data: any = collectData()
            try {
                await postHandler(userState.tokens!.accessToken!, Urls.URL_TEACHER_EXAMS, data)
                setSuccessMessage('تم اضافة الأمتحان بنجاح')
                router.push(Routes.teacherExams)
            } catch (error) {
                setErrorMessage('حدث خطاء اثناء اضافة الأمتحان')
            }
        }
    }

    const cancelProsses = () => {
        router.push(Routes.teacherExams)
    }

    const scrollToDiv = (divId: string) => {
        const targetDiv = document.getElementById(divId)
        if (targetDiv) {
            window.scrollTo({
                top: targetDiv.offsetTop - targetDiv.offsetHeight - 10,
                behavior: 'smooth',
            })
            openSection(+divId)
        }
    }

    return {
        data: {
            levelsData,
            examTypes,
            sections,
            groupsData,
        },
        states: {
            loading,
            selectedExamType,
            selectedLevel,
            examName,
            examStartDate,
            sectionCount,
            examStartTime,
            examTime,
            examReady,
            examShowenDate,
            spcialExam,
        },
        actions: {
            selectedLevelHandler,
            examNameHandler,
            examStartDateHandler,
            examTypesHandler,
            examSectionCountsHandler,
            examStartTimeHandler,
            examTimeHandler,
            submitBasicData,
            spcialExamHandler,
            openSection,
            closeSection,
            primeSection,
            notPrimeSection,
            sectionNameHandler,
            sectionParagraphHandler,
            sectionParagraphImageHandler,
            primeQuestion,
            notPrimeQuestion,
            questionDegreeHandler,
            questionTypeHandler,
            questionNameHandler,
            questionImagesHandler,
            choiceImagesHandler,
            choiceNameHandler,
            choiceIsRightHandler,
            addChoice,
            deleteChoice,
            questionAnswerHandler,
            deleteQuetion,
            addQuestion,
            submitSection,
            groupHandler,
            submitExam,
            cancelProsses,
            deleteQuestionImageHandler,
            deleteSectionImageHandler,
            deleteChoiceImageHandler,
        },
    }
}

export default useAddExam
