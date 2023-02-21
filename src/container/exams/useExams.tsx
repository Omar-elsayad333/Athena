import { useState, useEffect } from 'react'
import { useUser } from 'context/userContext'
import { URL_TEACHER_EXAMS } from 'constant/url'
import { getHandler } from 'handlers/requestHandler'
import { DropMenuProps, dropMenuInitialValues } from 'interfaces/shared/input'

const useExams = () => {

    const { authToken } = useUser()
    const [ loading, setLoading ] = useState<boolean>(false)
    const [ exams, setExams ] = useState<any>([])
    const [ years, setYears ] = useState<any[]>([])
    const [ selectedYear, setSelectedYear ] = useState<DropMenuProps>(dropMenuInitialValues)

    // Get exams data if the user is authoruized
    useEffect(() => {
        if(authToken) {
            getExamsData()
        }
    }, [authToken])

    // Call function to update years data if there is years data
    useEffect(() => {
        if(exams && years.length == 0) {
            updateYearsData()
        }
    }, [exams])

    // Call api to get exam data
    const getExamsData = async () => {
        try {
            setLoading(true)
            const res = await getHandler(authToken, URL_TEACHER_EXAMS)
            setExams(res)
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

    return (
        {
            data: {
                years
            },
            states: {
                loading,
                selectedYear,
            },
            actions: {
                selectedYearHandler,
            },
            dialogs: {

            }
        }
    );
}
 
export default useExams;