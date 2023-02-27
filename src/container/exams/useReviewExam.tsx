import { useState, useEffect } from 'react'
import { useUser } from 'context/userContext'
import { getHandler } from 'handlers/requestHandler'
import { examSectionsNames } from 'constant/staticData'
import { URL_TEACHER_EXAMS_REQUIRED } from 'constant/url'
import { convertDateToShortDate, convertFileToBase64 } from 'utils/converters'
import { datePickerInitialValues, DatePickerProps } from 'interfaces/shared/datePicker'
import { timePickerInitialValues, TimePickerProps } from 'interfaces/shared/timePicker'
import { sectionInitialValues, SectionProps, questionInitialValues } from 'interfaces/teacher/exams/exam'
import { 
    dropMenuInitialValues, 
    DropMenuProps, 
    inputInitialValues, 
    InputProps, 
    radioInitialValues, 
    RadioProps
} from 'interfaces/shared/input'

const useReviewExam = () => {

    const { authToken } = useUser()
    const [ loading, setLoading ] = useState<boolean>(false)
    const [ requiredData, setRequiredData ] = useState<any>('') 
    const [ selectedExamType, setSelectedExamType ] = useState<RadioProps>(radioInitialValues)
    const [ yearsData, setYearsData ] = useState<any[]>([])
    const [ selectedYear, setSelectedYear ] = useState<DropMenuProps>(dropMenuInitialValues)
    const [ levelsData, setLevelsData ] = useState<any[]>([])
    const [ selectedLevel, setSelectedLevel ] = useState<DropMenuProps>(dropMenuInitialValues)
    const [ examName, setExamName ] = useState<InputProps>(inputInitialValues)
    const [ examStartDate, setExamStartDate ] = useState<DatePickerProps>(datePickerInitialValues)
    const [ sectionCount, setSectionCount ] = useState<InputProps>(inputInitialValues)
    const [ examStartTime, setExamStartTime ] = useState<TimePickerProps>(timePickerInitialValues)
    const [ examTime, setExamTime ] = useState<InputProps>(inputInitialValues)
    const [ examDegree, setExamDegree ] = useState<InputProps>(inputInitialValues)
    const [ examShowenDate, setExamShowenDate ] = useState<any>('') 
    const [ spcialExam, setSpcialExam ] = useState<boolean>(false)
    const [ openToEdit, setOpenToEdit ] = useState<boolean>(false)
    const [ sections, setSections ] = useState<(SectionProps | undefined)[]>([])

    // Get exam data from local storage
    useEffect(() => {
        if(typeof window !== 'undefined'){
            if (localStorage.getItem('athena-exam-data')) {
                const data: any = localStorage.getItem('athena-exam-data')
                updateStatesData(JSON.parse(data))
            }
        }
    }, [])

    // Get required data if the user is authorized
    useEffect(() => {
        if(authToken) {
            getRequiredData()
        }
    }, [authToken])

    // Update years data if there is required data
    useEffect(() => {
        if(requiredData) {
            // updateYearsData()
        }
    }, [requiredData])

    // Call api to get required data
    const getRequiredData = async () => {
        try {
            setLoading(true)
            const res = await getHandler(authToken, URL_TEACHER_EXAMS_REQUIRED)
            setRequiredData(res)
        }
        catch(error) {
            console.log(error)
        }
        finally {
            setLoading(false)
        }
    }

    // // Update years data
    // const updateYearsData = () => {
    //     if(yearsData.length == 0) {
    //         for(let year of requiredData.years) {
    //             setYearsData(yearsData => 
    //                 [
    //                     ...yearsData,
    //                     {
    //                         id: year.id,
    //                         name: `${year.start} / ${year.end}`
    //                     }
    //                 ]
    //             )
    //         }
    //     }
    // }

    // // Update levels data
    // const updateLevelsData = () => {
    //     const yearIndex = requiredData.years.findIndex((x: any) => x.id == selectedYear.id)

    //     if(yearIndex !== -1) {
    //         setLevelsData([])
    //         setSelectedLevel(
    //             {
    //                 id: '',
    //                 value: '',
    //                 error: false,
    //                 helperText: ''
    //             }
    //         )
    //         for(let level of requiredData.years[yearIndex].levels) {
    //             setLevelsData(levelsData => 
    //                 [
    //                     ...levelsData,
    //                     {
    //                         id: level.teacherCourseLevelYearId,
    //                         name: level.levelName
    //                     }
    //                 ]
    //             )
    //         }
    //     }
    // }

    // Update exam data after get it from local storage
    const updateStatesData = (data: any) => {
        setExamName(data.name)
        setSelectedYear(data.selectedYear)
        setSelectedLevel(data.teacherCourseLevelYearId)
        setExamStartDate(data.publishedDate)
        setSectionCount(data.sectionCount)
        setExamStartTime(data.publishedTime)
        setExamTime(data.allowedTime)
        setExamDegree(data.finalDegree)
        setSections(data.sections)
        setSpcialExam(data.isPrime)
        setExamShowenDate(convertDateToShortDate(data.publishedDate))
        setSelectedExamType(data.examTypeId)
    }

    // Get the selected year from user
    const selectedYearHandler = (year: any) => {
        setSelectedYear(
            {
                id: year.id,
                value: year.name,
                error: false,
                helperText: ''
            }
        )
    }

    // Get the selected level from user
    const selectedLevelHandler = (level: any) => {
        setSelectedLevel(
            {
                id: level.id,
                value: level.name,
                error: false,
                helperText: ''
            }
        )
    }
    
    // Get exam name from user
    const examNameHandler = (selectedExamName: string) => {
        setExamName(
            {
                value: selectedExamName,
                length: selectedExamName.length,
                error: false,
                helperText: ''
            }
        )
    }

    // Get the selected exam start date from user
    const examStartDateHandler = (selectedExamStartDate: any) => {
        setExamStartDate(
            examStartDate => (
                {
                    ...examStartDate,
                    value: selectedExamStartDate.toISOString(),
                    error: false,
                    helperText: ''
                }
            )
        )
    }

    // Get exam section count from user 
    const examSectionCountsHandler = (count: any) => {
        setSectionCount(
            {
                value: count,
                length: count.length,
                error: false,
                helperText: ''
            }
        )   
        if(parseInt(count) > 0 && parseInt(count) <= 10) {
            updateSections(parseInt(count))
        }
    }

    // Update section abond user selection
    const updateSections = (count: number) => {
        if(count > sections.length) {
            for(let i = 0; i < count; i++) {
                if(i > (sections.length - 1)) {
                    const newValueWithAdjust = sectionInitialValues
                    newValueWithAdjust.index = i
                    newValueWithAdjust.name = examSectionsNames[i]
                    const newValue = JSON.stringify(newValueWithAdjust)
                    setSections(sections =>
                        [
                            ...sections,
                            JSON.parse(newValue),
                        ]
                    )
                }
            }
        }else {
            const newCount = count - sections.length
                setSections((sections: any) => 
                    (
                        sections.slice(0, newCount)
                    )
                )
            
        }
    }

    //  Get exam start time from user
    const examStartTimeHandler = (time: any) => {
        setExamStartTime(
            {
                value: time,
                error: false,
                helperText: ''
            }
        )
    }

    //  Get exam time from user
    const examTimeHandler = (time: any) => {
        setExamTime(
            {
                value: time,
                length: time.length,
                error: false,
                helperText: ''
            }
        )
    }

    // Get exam degree from user
    const examDegreeHandler = (degree: any) => {
        setExamDegree(
            {
                value: degree,
                length: degree.length,
                error: false,
                helperText: ''
            }
        )
    }

    // Validate exam basic data
    const basicDataValidation = () => {
        let state = true

        if(!selectedExamType.id) {
            state = false
            setSelectedExamType({...selectedExamType, helperText: 'يجب اختيار نوع الأمتحان'})
        }
        
        if(examName.length == 0) {
            state = false
            setExamName({...examName, error: true, helperText: 'يجب ادخال اسم الأمتحان'})
        }

        if(!selectedYear.id) {
            state = false
            setSelectedYear({...selectedYear, error: true, helperText: 'يجب أختيار عام دراسي'})
        } 

        if(!selectedLevel.id) {
            state = false
            setSelectedLevel({...selectedLevel, error: true, helperText: 'يجب أختيار صف دراسي'})
        }

        if(!examStartDate.value) {
            state = false
            setExamStartDate({...examStartDate, error: true, helperText: 'يجب تحديد تاريخ الأصدار'})
        }

        if(sectionCount.length == 0) {
            state = false
            setSectionCount({...sectionCount, error: true, helperText: 'يجب تحديد عدد اساله الأمتحان'})
        }

        if(sectionCount.length == 0) {
            state = false
            setExamStartTime({...examStartTime, error: true, helperText: 'يجب اختيار وقت بدأ الأمتحان'})
        }

        if(examTime.length == 0 || parseInt(examTime.value) <= 0) {
            state = false
            setExamTime({...examTime, error: true, helperText: 'يجب تحديد المده الزمنيه للأمتحان'})
        }

        if(examDegree.length == 0 || parseInt(examTime.value) < 0) {
            state = false
            setExamDegree({...examDegree, error: true, helperText: 'يجب تحديد الدرجه الكليه للأمتحان'})
        }

        return state
    }

    // Start taking exam questions if the basic data is ready
    const submitBasicData = async () => {
        if(basicDataValidation()) {
            const date = await convertDateToShortDate(examStartDate.value)
            setExamShowenDate(date);
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
        setSections(
            [
                ...sections.slice(0,index),
                newValue,
                ...sections.slice(index+1)
            ]
        )
    }

    // Closer section
    const closeSection = (index: number) => {
        let newValue = sections[index]
        newValue!.open = false
        setSections(
            [
                ...sections.slice(0,index),
                newValue,
                ...sections.slice(index+1)
            ]
        )
    }

    // Set section to prime
    const primeSection = (index: number) => {
        let newValue = sections[index]
        newValue!.isPrime = true
        setSections(
            [
                ...sections.slice(0,index),
                newValue,
                ...sections.slice(index+1)
            ]
        )
    }

    // Set section to not prime
    const notPrimeSection = (index: number) => {
        let newValue = sections[index]
        newValue!.isPrime = false
        setSections(
            [
                ...sections.slice(0,index),
                newValue,
                ...sections.slice(index+1)
            ]
        )
    }

    // Get the sectiom name from user
    const sectionNameHandler = (name: string, indexes: any) => {
        let newValue = sections[indexes.parent]
        newValue!.name = name
        setSections(
            [
                ...sections.slice(0,indexes.parent),
                newValue,
                ...sections.slice(indexes.parent+1)
            ]
        )
    }

    // Get the sectiom paragraph from user
    const sectionParagraphHandler = (selectedParagraph: string, index: any) => {
        let newValue = sections[index]
        
        if(newValue!.paragraph.length < 5000) {
            newValue!.paragraph = selectedParagraph
            
            setSections(
                [
                    ...sections.slice(0,index),
                    newValue,
                    ...sections.slice(index+1)
                ]
            )
        }
    }

    // Get the sectiom paragraph from user
    const sectionParagraphImageHandler = async (image: any, index: any) => {
        const newValue = sections[index]
        const newImageIndex = newValue!.images?.length
        const [fileToConvert] = image;
        const convertedImage: any = await convertFileToBase64(fileToConvert)

        if (image.length > 0 && newImageIndex! < 3) {
            newValue!.images?.push(
                {
                    index: newImageIndex,
                    image: {
                        extension: `.${image[0].type.slice(6)}`,
                        data: convertedImage,
                    }  
                }
            ) 
            setSections(
                [
                    ...sections.slice(0,index),
                    newValue,
                    ...sections.slice(index+1)
                ]
            )
        };
    }

    // Set question to prime
    const primeQuestion = (sectionIndex: number, index: number) => {
        let newValue = sections[sectionIndex]
        newValue!.questions[index]!.isPrime = true
        setSections(
            [
                ...sections.slice(0,sectionIndex),
                newValue,
                ...sections.slice(sectionIndex+1)
            ]
        )
    }

    // Set question to not prime
    const notPrimeQuestion = (sectionIndex: number, index: number) => {
        let newValue = sections[sectionIndex]
        newValue!.questions[index]!.isPrime = false
        setSections(
            [
                ...sections.slice(0,sectionIndex),
                newValue,
                ...sections.slice(sectionIndex+1)
            ]
        )
    }

    // Get the question degree from user
    const questionDegreeHandler = (degree: number, indexes: any) => {
        let newValue = sections[indexes.parent]
        newValue!.questions[indexes.child]!.degree = degree
        setSections(
            [
                ...sections.slice(0,indexes.parent),
                newValue,
                ...sections.slice(indexes.parent+1)
            ]
        )
    }

    // Get the question exam type from user
    const questionTypeHandler = (selectedType: any, indexes: any) => {
        let newValue = sections[indexes.parent]
        newValue!.questions[indexes.child]!.type = selectedType.target.value
        setSections(
            [
                ...sections.slice(0,indexes.parent),
                newValue,
                ...sections.slice(indexes.parent+1)
            ]
        )
    }

    // Get the sectiom name from user
    const questionNameHandler = (name: string, indexes: any) => {
        let newValue = sections[indexes.parent]
        newValue!.questions[indexes.child]!.name = name
        setSections(
            [
                ...sections.slice(0,indexes.parent),
                newValue,
                ...sections.slice(indexes.parent+1)
            ]
        )
    }

    // Get question images from user
    const questionImagesHandler = async (image: any, indexes: any) => {
        const newValue = sections[indexes.parent]
        const newImageIndex = newValue!.questions[indexes.child]!.images?.length
        const selectedfile = image
        const [fileToConvert] = image

        if (selectedfile.length > 0 && newImageIndex! < 3) {
            const convertedImage: any = await convertFileToBase64(fileToConvert)
            newValue!.questions[indexes.child]!.images?.push(
                {
                    index: newImageIndex,
                    image: {
                        extension: `.${selectedfile[0].type.slice(6)}`,
                        data: convertedImage
                    }
                }
            ) 
            setSections(
                [
                    ...sections.slice(0,indexes.parent),
                    newValue,
                    ...sections.slice(indexes.parent+1)
                ]
            )
        };
    }
    
    // Get choice images from user
    const choiceImagesHandler = async (image: any, indexes: any) => {
        const newValue = sections[indexes.grandParent]
        const selectedfile = image
        const [fileToConvert] = image

        if (selectedfile.length > 0) {
            const convertedImage: any = await convertFileToBase64(fileToConvert)
            newValue!.questions[indexes.parent]!.choices[indexes.child]!.image = {
                index: 0,
                image: {
                    extension: `.${selectedfile[0].type.slice(6)}`,
                    data: convertedImage,
                }  
            }
            setSections(
                [
                    ...sections.slice(0,indexes.grandParent),
                    newValue,
                    ...sections.slice(indexes.grandParent+1)
                ]
            )
        };
    }

    // Get choice value from user
    const choiceNameHandler = (selectedName: string, indexes: any) => {
        const newValue = sections[indexes.grandParent]        
        newValue!.questions[indexes.parent]!.choices[indexes.child]!.name = selectedName

        setSections(
            [
                ...sections.slice(0,indexes.grandParent),
                newValue,
                ...sections.slice(indexes.grandParent+1)
            ]
        ) 
    }
    
    // Get choice right of false from user
    const choiceIsRightHandler = (event: any, indexes: any) => {
        const newValue = sections[indexes.grandParent]
        
        newValue!.questions[indexes.parent]!.choices[indexes.child]!.isRightChoice = event.target.checked
        for(let i = 0; i < newValue!.questions[indexes.parent]!.choices.length; i++) {
            if(i !== indexes.child) {
                newValue!.questions[indexes.parent]!.choices[i]!.isRightChoice = false
            }
        }
        setSections(
            [
                ...sections.slice(0,indexes.grandParent),
                newValue,
                ...sections.slice(indexes.grandParent+1)
            ]
        )
    }

    // Get question written answer from user
    const questionAnswerHandler = (selectedAnswer: string, indexes: any) => {
        const newValue = sections[indexes.grandParent]
        newValue!.questions[indexes.parent]!.answer = selectedAnswer
        setSections(
            [
                ...sections.slice(0,indexes.grandParent),
                newValue,
                ...sections.slice(indexes.grandParent+1)
            ]
        )
    }

    // Add question to the section
    const addQuestion = (indexes: any) => {
        const newValue = sections[indexes.parent]
        const newValueWithIndex = questionInitialValues
        newValueWithIndex.index = newValue!.questions.length
        newValue!.questions.push({...newValueWithIndex})
        setSections(
            [
                ...sections.slice(0,indexes.parent),
                newValue,
                ...sections.slice(indexes.parent+1)
            ]
        )
    }

    // Collect final data to send it
    const collectData = () => {
        const finalData = {
            name: examName,
            description: null,
            finalDegree: examDegree,
            allowedTime: examTime,
            publishedDate: examStartDate,
            publishedTime: examStartTime,
            isPrime: spcialExam,
            sectionCount: sectionCount,
            selectedYear: selectedYear,
            teacherCourseLevelYearId: selectedLevel,
            examTypeId: selectedExamType,   
            groupIds: [],
            sections: sections 
        }

        return finalData
    }

    // Send data to review section
    // const sendDataToReview = async () => {
    //     let state1 = questionsValidation()
    //     let state2 = choisesValidation()
    //     let state3 = choisesIsRightValidation()
    //     if(!state1 && !state2 && !state3) { 
    //         removeErrors()
    //         const data: any = collectData()
    //         const jsonData = JSON.stringify(data)
    //         if(jsonData) {
    //             window.localStorage.setItem('athena-exam-data', jsonData)
    //             // router.push("/teacher/exams/review-exam")
    //         }
    //     }
    // }

    return (
        {
            data: {
                yearsData,
                levelsData,
                sections
            },
            states: {
                loading,
                selectedYear,
                selectedLevel,
                examName,
                examStartDate,
                sectionCount,
                examStartTime,
                examTime,
                examDegree,
                examShowenDate,
                spcialExam,
                openToEdit
            },
            actions: {
                selectedYearHandler,
                selectedLevelHandler,
                examNameHandler,
                examStartDateHandler,
                examSectionCountsHandler,
                examStartTimeHandler,
                examTimeHandler,
                examDegreeHandler,
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
                questionAnswerHandler,
                addQuestion,
                // sendDataToReview
            },
            dialogs: {

            }
        }
    );
}
 
export default useReviewExam;