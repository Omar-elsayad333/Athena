import Urls from 'constant/url'
import useShard from 'hooks/useShared'
import { useState, useEffect } from 'react'
import { useUser } from 'context/userContext'
import { useAlert } from 'context/AlertContext'
import useRequestsHandlers from 'hooks/useRequestsHandlers'

const useGroups = () => {
    const { userState } = useUser()
    const { useSearchHandler } = useShard()
    const { setErrorMessage } = useAlert()
    const { loading, getHandler } = useRequestsHandlers()
    const [groupsData, setGroupsData] = useState<any>([])
    const [originalData, setOriginalData] = useState<any>([])

    // Call function to get page data if the user authorized
    useEffect(() => {
        if (userState.tokens.accessToken) {
            getGroupsData()
        }
    }, [userState.tokens.accessToken])

    // Call api to get the groups data
    const getGroupsData = async () => {
        try {
            const res = await getHandler(userState.tokens.accessToken!, Urls.URL_GROUPS)
            console.log(res)
            setGroupsData(res)
            setOriginalData(res)
        } catch (error) {
            console.log(error)
            setErrorMessage('حدث خطاء')
        }
    }

    // Get search value from user
    const searchHandler = (searchValue: string) => {
        useSearchHandler(searchValue, originalData, setGroupsData)
    }

    return {
        data: {
            groupsData,
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
