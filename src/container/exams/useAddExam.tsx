import { useState, useEffect } from 'react'
import { useUser } from 'context/userContext'
import { getHandler } from 'handlers/requestHandler'
import { URL_TEACHER_EXAMS_REQUIRED } from 'constant/url'
import { sectionInitialValues, SectionProps, questionInitialValues } from 'interfaces/teacher/exams/exam'
import { datePickerInitialValues, DatePickerProps } from 'interfaces/shared/datePicker'
import { 
    dropMenuInitialValues, 
    DropMenuProps, 
    inputInitialValues, 
    InputProps, 
    radioInitialValues, 
    RadioProps
} from 'interfaces/shared/input'

const useAddExam = () => {

    const { authToken } = useUser()
    const [ loading, setLoading ] = useState<boolean>(false)
    const [ requiredData, setRequiredData ] = useState<any>('')
    const [ examTypes, setExamTypes ] = useState<any[]>([])
    const [ , setSelectedExamType ] = useState<RadioProps>(radioInitialValues)
    const [ yearsData, setYearsData ] = useState<any[]>([])
    const [ selectedYear, setSelectedYear ] = useState<DropMenuProps>(dropMenuInitialValues)
    const [ levelsData, setLevelsData ] = useState<any[]>([])
    const [ selectedLevel, setSelectedLevel ] = useState<DropMenuProps>(dropMenuInitialValues)
    const [ examName, setExamName ] = useState<InputProps>(inputInitialValues)
    const [ examStartDate, setExamStartDate ] = useState<DatePickerProps>(datePickerInitialValues)
    const [ examReady, setExamReady ] = useState<boolean>(true)
    const [ spcialExam, setSpcialExam ] = useState<boolean>(false)
    const [ sections, setSections ] = useState<(SectionProps | undefined)[]>(sectionInitialValues)

    // Get required data if the user is authorized
    useEffect(() => {
        if(authToken) {
            getRequiredData()
        }
    }, [authToken])

    // Update years data if there is required data
    useEffect(() => {
        if(requiredData) {
            updateYearsData()
            updateExamType()
        }
    }, [requiredData])

    // Update levels data if there is selected year
    useEffect(() => {
        if(selectedYear.id) {
            updateLevelsData()
        }
    }, [selectedYear])

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

    // Update years data
    const updateYearsData = () => {
        if(yearsData.length == 0) {
            for(let year of requiredData.years) {
                setYearsData(yearsData => 
                    [
                        ...yearsData,
                        {
                            id: year.id,
                            name: `${year.start} / ${year.end}`
                        }
                    ]
                )
            }
        }
    }

    // Update exam types data
    const updateExamType = () => {  
        if(examTypes.length == 0) {
            console.log(requiredData.examTypes)
            setExamTypes(requiredData.examTypes)
        }
    }

    // Get the selected exam type from user
    const examTypesHandler = (selectedType: any) => {
        setSelectedExamType(
            {
                id: selectedType.target.value,
                value: selectedType.target.name,
                error: false,
                helperText: ''
            }
        )
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

    // Update levels data
    const updateLevelsData = () => {
        const yearIndex = requiredData.years.findIndex((x: any) => x.id == selectedYear.id)

        if(yearIndex !== -1) {
            setLevelsData([])
            setSelectedLevel(
                {
                    id: '',
                    value: '',
                    error: false,
                    helperText: ''
                }
            )
            for(let level of requiredData.years[yearIndex].levels) {
                setLevelsData(levelsData => 
                    [
                        ...levelsData,
                        {
                            id: level.id,
                            name: level.name
                        }
                    ]
                )
            }
        }
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

    // Validate exam basic data
    const basicDataValidation = () => {
        let state = true
        
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

        return state
    }

    // Start taking exam Q if the basic data is ready
    const submitBasicData = () => {
        if(basicDataValidation()) {
            setExamReady(true)
        }
    }

    // Set exam to spcial or not
    const spcialExamHandler = () => {
        if(spcialExam) {
            return setSpcialExam(false)
        }
        setSpcialExam(true)
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
    const sectionParagraphImageHandler = (image: any, index: any) => {
        const newValue = sections[index]
        const newImageIndex = newValue!.images?.length
        const selectedfile = image;

        if (selectedfile.length > 0 && newImageIndex! < 3) {
            const [imageFile] = selectedfile;
            const fileReader = new FileReader();
            fileReader.onload = () => {
                const srcData: any = fileReader.result;
                newValue!.images?.push(
                    {
                        index: newImageIndex,
                        image: {
                            extension: `.${selectedfile[0].type.slice(6)}`,
                            data: srcData,
                        }  
                    }
                ) 
            }
            fileReader.readAsDataURL(imageFile)
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
    const questionImagesHandler = (image: any, indexes: any) => {
        const newValue = sections[indexes.parent]
        const newImageIndex = newValue!.questions[indexes.child]!.images?.length
        const selectedfile = image.target.files;

        if (selectedfile.length > 0 && newImageIndex! < 3) {
            const [imageFile] = selectedfile;
            const fileReader = new FileReader();
            fileReader.onload = () => {
                const srcData: any = fileReader.result;
                newValue!.questions[indexes.child]!.images?.push(
                    {
                        index: newImageIndex,
                        image: {
                            extension: `.${selectedfile[0].type.slice(6)}`,
                            data: srcData
                        }
                    }
                ) 
            }
            fileReader.readAsDataURL(imageFile)
            setSections(
                [
                    ...sections.slice(0,indexes.parent),
                    newValue,
                    ...sections.slice(indexes.parent+1)
                ]
            )
        };
    }
    
    // Get question images from user
    const choiceImagesHandler = (image: any, indexes: any) => {
        const newValue = sections[indexes.grandParent]
        const selectedfile = image.target.files;

        if (selectedfile.length > 0) {
            const [imageFile] = selectedfile;
            const fileReader = new FileReader();
            fileReader.onload = () => {
                const srcData: any = fileReader.result;
                newValue!.questions[indexes.parent]!.choices[indexes.child]!.image = {
                    index: 0,
                    image: {
                        extension: `.${selectedfile[0].type.slice(6)}`,
                        data: srcData,
                    }  
                }
            }
            fileReader.readAsDataURL(imageFile)
            setSections(
                [
                    ...sections.slice(0,indexes.grandParent),
                    newValue,
                    ...sections.slice(indexes.grandParent+1)
                ]
            )
        };
    }

    // Get question images from user
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
    
    // Get question images from user
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

    // Get question images from user
    const questionAnswerImagesHandler = (image: any, indexes: any) => {
        const newValue = sections[indexes.grandParent]
        const newImageIndex = newValue!.questions[indexes.parent]!.images!.length
        const selectedfile = image.target.files;

        if (selectedfile.length > 0 && newImageIndex < 3) {
            const [imageFile] = selectedfile;
            const fileReader = new FileReader();
            fileReader.onload = () => {
                const srcData: any = fileReader.result;
                newValue!.questions[indexes.parent]!.images?.push({
                    index: newImageIndex,
                    image: {
                        extension: `.${selectedfile[0].type.slice(6)}`,
                        data: srcData,
                    }  
                })
            }
            fileReader.readAsDataURL(imageFile)
            setSections(
                [
                    ...sections.slice(0,indexes.grandParent),
                    newValue,
                    ...sections.slice(indexes.grandParent+1)
                ]
            )
        };
    }

    // Get question images from user
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

    // Add question to section
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

    useEffect(() => {
        console.log(sections)
    }, [sections])

    return (
        {
            data: {
                yearsData,
                levelsData,
                examTypes,
                sections,
            },
            states: {
                loading,
                selectedYear,
                selectedLevel,
                examName,
                examStartDate,
                examReady,
                spcialExam
            },
            actions: {
                selectedYearHandler,
                selectedLevelHandler,
                examNameHandler,
                examStartDateHandler,
                examTypesHandler,
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
                questionAnswerImagesHandler,
                questionAnswerHandler,
                addQuestion
            },
            dialogs: {

            }
        }
    );
}
 
export default useAddExam;