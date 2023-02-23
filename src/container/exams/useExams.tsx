import { useState, useEffect } from 'react'
import { useUser } from 'context/userContext'
import { URL_TEACHER_EXAMS, URL_TEACHER_EXAMS_REQUIRED } from 'constant/url'
import { getHandler } from 'handlers/requestHandler'
import { DropMenuProps, dropMenuInitialValues } from 'interfaces/shared/input'

const useExams = () => {

    const { authToken } = useUser()
    const [ loading, setLoading ] = useState<boolean>(false)
    const [ examsData, setExamsData ] = useState<any>([])
    const [ years, setYears ] = useState<any[]>([])
    const [ selectedYear, setSelectedYear ] = useState<DropMenuProps>(dropMenuInitialValues)
    const [ examTypes, setExamTypes ] = useState<any[]>([])
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
        if(exams && years.length == 0) {
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
        }
        finally {
            setLoading(false)
        }
    }
    
    // Update years data to show it to user
    const updateYearsData = () => {
        for(let year of exams) {
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
        }
        finally {
            setLoading(false)
        }
    }

    // Update exams data if the user selected year
    const updateExamData = () => {
        for(let year of exams) {
            console.log(year)
            for(let level of year.levels) {
                console.log(level)
                for(let exam of level.exams) {
                    setExams(exams => 
                        [
                            ...exams,
                            exam
                        ]    
                    )
                }
            }
        }
    }

    // Get selected exam type to filter exams for the user
    const getSelectedExamType = (selectedExamType: any) => {
        if(selectedExamType.name == 'all') 
            return updateExamData()
        
        
    }

    return (
        {
            data: {
                years,
                examTypes,
                exams
            },
            states: {
                loading,
                selectedYear,
            },
            actions: {
                selectedYearHandler,
                getSelectedExamType
            }
        }
    );
}
 
export default useExams;