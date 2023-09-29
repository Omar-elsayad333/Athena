import Urls from 'constant/urls'
import useShard from 'hooks/useShared'
import { useState, useEffect } from 'react'
import { useUser } from 'context/userContext'
import { useAlert } from 'context/AlertContext'
import useRequestsHandlers from 'hooks/useRequestsHandlers'

const useGroups = () => {
    const { userState } = useUser()
    const { setErrorMessage } = useAlert()
    const { useSearchHandler } = useShard()
    const { loading, getHandler } = useRequestsHandlers()
    const [originalData, setOriginalData] = useState<any>([])
    const [openGroupsData, setOpenGroupsData] = useState<any>([])
    const [preOpenGroupsData, setPreOpenGroupsData] = useState<any>([])

    // Call function to get page data if the user authorized
    useEffect(() => {
        if (userState.tokens!.accessToken) {
            getGroupsData()
        }
    }, [userState.tokens!.accessToken])

    // Call api to get the groups data
    const getGroupsData = async () => {
        try {
            const res = await getHandler(userState.tokens!.accessToken!, Urls.URL_GROUPS)
            setOpenGroupsData(res.open)
            setPreOpenGroupsData(res.preOpen)
            setOriginalData(res)
        } catch (error) {
            setErrorMessage('حدث خطاء')
        }
    }

    // Get search value from user
    const searchHandler = (searchValue: string) => {
        useSearchHandler('name', searchValue, originalData, setOpenGroupsData)
    }

    return {
        data: {
            openGroupsData,
            preOpenGroupsData,
        },
        states: {
            loading,
        },
        actions: {
            searchHandler,
        },
    }
}

export default useGroups
