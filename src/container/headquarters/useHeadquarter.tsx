import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { useUser } from 'context/userContext'
import Urls from 'constant/urls'
import useRequestsHandlers from 'hooks/useRequestsHandlers'
import { useAlert } from 'context/AlertContext'

const useHeadquarter = () => {
    const router = useRouter()
    const { id } = router.query
    const { loading, getHandlerById } = useRequestsHandlers()
    const { userState } = useUser()
    const { setErrorMessage } = useAlert()
    const [headquarterData, setHeadquarterData] = useState<any>('')

    // Call function to get headquarter data if the user is authorized
    useEffect(() => {
        if (id && userState.tokens.accessToken) {
            getHeadquarterData()
        }
    }, [id])

    // Call api to get page data
    const getHeadquarterData = async () => {
        try {
            const res = await getHandlerById(
                `${id}`,
                userState.tokens.accessToken!,
                Urls.URL_HEADQUARTERS,
            )
            setHeadquarterData(res)
        } catch (error) {
            console.log(error)
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
