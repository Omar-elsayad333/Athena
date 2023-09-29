import Urls from 'constant/urls'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { useUser } from 'context/userContext'
import { useAlert } from 'context/AlertContext'
import useRequestsHandlers from 'hooks/useRequestsHandlers'

const useHeadquarter = () => {
    const router = useRouter()
    const { id } = router.query
    const { userState } = useUser()
    const { setErrorMessage } = useAlert()
    const { loading, getHandlerById } = useRequestsHandlers()
    const [headquarterData, setHeadquarterData] = useState<any>('')

    // Call function to get headquarter data if the user is authorized
    useEffect(() => {
        if (id && userState.tokens!.accessToken) {
            getHeadquarterData()
        }
    }, [id, userState.tokens!.accessToken])

    // Call api to get page data
    const getHeadquarterData = async () => {
        try {
            const res = await getHandlerById(
                id,
                userState.tokens!.accessToken!,
                Urls.URL_HEADQUARTERS,
            )
            setHeadquarterData(res)
        } catch (error) {
            setErrorMessage('حدث خطاء')
        }
    }

    return {
        data: {
            headquarterData,
        },
        states: {
            loading,
        },
    }
}

export default useHeadquarter
