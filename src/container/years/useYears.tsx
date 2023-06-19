import Urls from 'constant/urls'
import { useState, useEffect } from 'react'
import { useUser } from 'context/userContext'
import useRequestsHandlers from 'hooks/useRequestsHandlers'

const useYears = () => {
    const { userState } = useUser()
    const { loading, getHandler } = useRequestsHandlers()
    const [yearsData, setYearsData] = useState<any>()

    // Get the data of this page
    useEffect(() => {
        if (userState.tokens.accessToken) {
            getYearsData()
        }
    }, [userState.tokens.accessToken])

    // Get Years data from db
    const getYearsData = async () => {
        try {
            const res = await getHandler(userState.tokens.accessToken!, Urls.URL_YEARS)
            setYearsData(res)
        } catch (error) {
            console.log(error)
        }
    }

    return {
        states: {
            loading,
        },
        data: {
            yearsData,
        },
    }
}

export default useYears
