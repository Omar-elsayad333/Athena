import { useEffect, useState } from 'react'
import { useUser } from 'context/userContext'
import { useAlert } from 'context/AlertContext'
import Urls from 'constant/urls'
import useRequestsHandlers from 'hooks/useRequestsHandlers'

const useHeadquarters = () => {
    const { userState } = useUser()
    const { loading, getHandler } = useRequestsHandlers()
    const { setErrorMessage } = useAlert()
    const [originalData, setOriginalData] = useState<any>([])
    const [headquartersData, setHeadquartersData] = useState<any>([])

    // Call Function to get page data
    useEffect(() => {
        if (userState.tokens!.accessToken) {
            getHeadquartersData()
        }
    }, [])

    // Call api to get headcquarters data
    const getHeadquartersData = async () => {
        try {
            const res = await getHandler(userState.tokens!.accessToken!, Urls.URL_HEADQUARTERS)
            setHeadquartersData(res)
            setOriginalData(res)
        } catch (error) {
            setErrorMessage('حدث خطأ')
        }
    }

    // Get search value from user
    const searchHandler = (searchValue: string) => {
        setHeadquartersData(
            originalData.filter((item: any) =>
                item.name.toLowerCase().includes(searchValue.toLowerCase()),
            ),
        )
    }

    return {
        data: {
            headquartersData,
        },
        states: {
            loading,
        },
        actions: {
            searchHandler,
        },
    }
}

export default useHeadquarters
