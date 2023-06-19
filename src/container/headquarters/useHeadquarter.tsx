import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { useUser } from 'context/userContext'
import { URL_HEADQUARTERS } from 'constant/urls'
import { getHandlerById } from 'handlers/requestHandler'
import { useAlert } from 'context/AlertContext'

const useHeadquarter = () => {
    const router = useRouter()
    const { id } = router.query
    const { authToken } = useUser()
    const { setErrorMessage } = useAlert()
    const [loading, setLoading] = useState<boolean>(true)
    const [headquarterData, setHeadquarterData] = useState<any>('')

    // Call function to get headquarter data if the user is authorized
    useEffect(() => {
        if (id && authToken) {
            getHeadquarterData()
        }
    }, [id])

    // Call api to get page data
    const getHeadquarterData = async () => {
        try {
            setLoading(true)
            const res = await getHandlerById(`${id}`, authToken, URL_HEADQUARTERS)
            setHeadquarterData(res)
        } catch (error) {
            console.log(error)
            setErrorMessage('حدث خطاء')
        } finally {
            setLoading(false)
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
