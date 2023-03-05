import { useState, useEffect } from 'react'
import { useUser } from 'context/userContext'
import { useAlert } from 'context/AlertContext'
import { getHandler } from 'handlers/requestHandler'
import { URL_TEACHER_EXAMS, URL_TEACHER_EXAMS_REQUIRED } from 'constant/url'
import { DropMenuProps, dropMenuInitialValues } from 'interfaces/shared/input'

const useExams = () => {

    const { authToken } = useUser()
    const { setErrorMessage } = useAlert()
    const [ loading, setLoading ] = useState<boolean>(false)
    const [ examsData, setExamsData ] = useState<any>([])
    const [ years, setYears ] = useState<any[]>([])
    const [ selectedYear, setSelectedYear ] = useState<DropMenuProps>(dropMenuInitialValues)
    const [ examTypes, setExamTypes ] = useState<any[]>([])
    const [ originalData, setOriginalData ] = useState<any[]>([])
    const [ exams, setExams ] = useState<any[]>([])

    // Get exams data if the user is authoruized
    useEffect(() => {
        if(authToken) {
            getExamsData()
        }
    }, [authToken])

    // Get exam types if the user is authoruized
    useEffect(() => {
        if(authToken) {
            getExamsTypes()
        }
    }, [authToken])

    // Call function to update years data if there is years data
    useEffect(() => {
        if(examsData.length > 0 && years.length == 0) {
            updateYearsData()
        }
    }, [examsData])

    // Call function to update exams data if there is year selected
    useEffect(() => {
        if(selectedYear.id) {
            updateExamData()
        }
    }, [selectedYear])

    // Call api to get exam data
    const getExamsData = async () => {
        try {
            setLoading(true)
            const res = await getHandler(authToken, URL_TEACHER_EXAMS)
            setExamsData(res)
            console.log(res)
        }
        catch(error) {
            console.log(error)
            setErrorMessage('حدث خطاء')
        }
        finally {
            setLoading(false)
        }
    }
    
    // Update years data to show it to user
    const updateYearsData = () => {
        for(let year of examsData) {
            setYears(years =>
                [
                    ...years,
                    {
                        id: year.id,
                        name: `${year.start} / ${year.end}`
                    }
                ]
            )
        }
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
            
    // Call api to get exam data
    const getExamsTypes = async () => {
        try {
            setLoading(true)
            const res: any = await getHandler(authToken, URL_TEACHER_EXAMS_REQUIRED)
            setExamTypes(res.examTypes)
            console.log(res.examTypes)
        }
        catch(error) {
            console.log(error)
            setErrorMessage('حدث خطاء')
        }
        finally {
            setLoading(false)
        }
    }

    // Update exams data if the user selected year
    const updateExamData = () => {
        const indexOfSelectedYear = examsData.findIndex((year: any) => year.id == selectedYear.id)
        if(indexOfSelectedYear != -1) {
            setExams([])
            for(let level of examsData[indexOfSelectedYear].levels) {
                for(let exam of level.exams) {
                    setExams(exams => 
                        [
                            ...exams,
                            exam
                        ]    
                    )
                    setOriginalData(exams => 
                        [
                            ...exams,
                            exam
                        ]  
                    )
                }
            }
        }else {
            setErrorMessage('حدث خطاء')
        }
    }

    // Get search value from user
    const searchHandler = (searchValue: string) => {
        setExams(
            originalData.filter((item: any) => 
                item.name.toLowerCase().includes(searchValue.toLowerCase())
            )
        )
    } 

    // Get selected exam type to filter exams for the user
    const filterByType = (selectedExamType: any) => {
        if(selectedExamType.name != 'all') {
            setExams(
                originalData.filter((exam: any) => exam.examType == selectedExamType.name)
            )
        } else {
            setExams(originalData)
        }
    }

    const filterByDate = () => {

    }

    useEffect(() => {
        console.log(examTypes)
    }, [examTypes])

    return (
        {
            data: {
                years,
                examTypes,
                examsData,
                exams
            },
            states: {
                loading,
                selectedYear,
            },
            actions: {
                selectedYearHandler,
                searchHandler,
                filterByType,
                filterByDate,
            }
        }
    );
}
 
export default useExams;