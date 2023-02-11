import { useState, useEffect } from 'react'
import { useUser } from 'context/userContext'
import { getHandler } from 'handlers/requestHandler'
import { URL_TEACHER_EXAMS_REQUIRED } from 'constant/url'
import { dropMenuInitialValues, DropMenuProps, inputInitialValues, InputProps } from 'interfaces/shared/input'
import { datePickerInitialValues, DatePickerProps } from 'interfaces/shared/datePicker'

const useAddExam = () => {

    const { authToken } = useUser()
    const [ loading, setLoading ] = useState<boolean>(false)
    const [ requiredData, setRequiredData ] = useState<any>('')
    const [ yearsData, setYearsData ] = useState<any[]>([])
    const [ selectedYear, setSelectedYear ] = useState<DropMenuProps>(dropMenuInitialValues)
    const [ levelsData, setLevelsData ] = useState<any[]>([])
    const [ selectedLevel, setSelectedLevel ] = useState<DropMenuProps>(dropMenuInitialValues)
    const [ examName, setExamName ] = useState<InputProps>(inputInitialValues)
    const [ examStartDate, setExamStartDate ] = useState<DatePickerProps>(datePickerInitialValues)

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

    return (
        {
            data: {
                yearsData,
                levelsData,
            },
            states: {
                loading,
                selectedYear,
                selectedLevel,
                examName,
                examStartDate
            },
            actions: {
                selectedYearHandler,
                selectedLevelHandler,
                examNameHandler,
                examStartDateHandler
            },
            dialogs: {

            }
        }
    );
}
 
export default useAddExam;