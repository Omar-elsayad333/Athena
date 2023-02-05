// import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useUser } from 'context/userContext';
import { getHandler } from 'handlers/requestHandler';
import { URL_TEACHERSTUDENTS } from 'constant/url';
import { DropMenuProps, dropMenuInitialValues } from 'interfaces/shared/input'

const useStudents = () => {

    const auth = useUser()
    // const router = useRouter()
    const [ loading, setLoading ] = useState<boolean>(false)
    const [ tableState, setTableState ] = useState<boolean>(false)
    const [ years, setYears ] = useState<any[]>([])
    const [ selectedYear, setSelectedYear ] = useState<DropMenuProps>(dropMenuInitialValues)

    // Get years data if the user is authorized
    useEffect(() => {
        if(auth.authToken) {
            getYearsData()
        }
    }, [auth.authToken])

    // Show table and hide cards
    const showTable = () => {
        setTableState(true);
    };

    // Hide table and show cards
    const hideTable = () => {
        setTableState(false);
    };

    // Update years data to show it to user
    const updateYearsData = (data: any) => {
        for(let year of data) {
            setYears( years =>
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

    const getYearsData = async () => {
        try {
            console.log('hello from get years data')
            setLoading(true)
            const res: any = await getHandler(auth.authToken, URL_TEACHERSTUDENTS )
            updateYearsData(res)
        }
        catch(error) {
            console.log(error)
        }
        finally {
            setLoading(false)
        }
    }

    const selectedYearHandler = (year: any) => {
        setSelectedYear(
            {
                value: year.name,
                id: year.id,
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
                tableState,
                selectedYear
            },
            actions: {
                showTable,
                hideTable,
                selectedYearHandler
            },
            dialogs: {

            }
        }
    );
}
 
export default useStudents;