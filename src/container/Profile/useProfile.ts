import Urls from 'constant/urls'
import { useEffect, useState } from 'react'
import { useUser } from 'context/userContext'
import useRequestsHandlers from 'hooks/useRequestsHandlers'

const useProfile = () => {
    const { userState } = useUser()
    const { getHandler, loading } = useRequestsHandlers()
    const [pageData, setPageData] = useState<any>(null)

    useEffect(() => {
        if (userState.tokens?.accessToken) {
            getPageData()
        }
    }, [userState.tokens?.accessToken])

    const getPageData = async () => {
        try {
            const response = await getHandler(userState.tokens?.accessToken!, Urls.URL_PROFILE)
            setPageData(response)
        } catch (error) {
            console.log(error)
        }
    }

    return {
        data: {
            pageData,
        },
        states: {
            loading,
        },
    }
}

export default useProfile
