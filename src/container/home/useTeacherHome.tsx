import Urls from 'constant/urls'
import { useAlert } from 'context/AlertContext'
import { useUser } from 'context/userContext'
import useRequestsHandlers from 'hooks/useRequestsHandlers'
import { useEffect, useState } from 'react'

const useTeacherHome = () => {
    const { userState } = useUser()
    const { setErrorMessage } = useAlert()
    const { loading, getHandler } = useRequestsHandlers()

    const [pageData, setPageData] = useState<any>({})

    useEffect(() => {
        if (userState.tokens?.accessToken) {
            getPageData()
        }
    }, [userState.tokens?.accessToken])

    const getPageData = async () => {
        try {
            const res = await getHandler(userState.tokens?.accessToken!, Urls.URL_TEACHER_HOME)
            setPageData(res)
        } catch (error) {
            setErrorMessage('حدث خطاء')
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

export default useTeacherHome
