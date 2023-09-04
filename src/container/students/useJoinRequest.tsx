import { useEffect, useState } from 'react'
import { useUser } from 'context/userContext'
import { useAlert } from 'context/AlertContext'
import Urls from 'constant/urls'
import useRequestsHandlers from 'hooks/useRequestsHandlers'

const useRequestsToJoin = () => {
    const { userState } = useUser()
    const { loading, getHandler } = useRequestsHandlers()
    const { setErrorMessage } = useAlert()
    const [requestsData, setRequestsData] = useState<any>()
    const [originalData, setOriginalData] = useState<any>([])


    // Call Function to get page data
    useEffect(() => {
        if (userState.tokens!.accessToken) {
            getHeadquartersData()
        }
    }, [])

    // Call api to get headcquarters data
    const getHeadquartersData = async () => {
        try {
            const res = await getHandler(userState.tokens!.accessToken!, Urls.URL_TEACHERSTUDENT_REQUESTS)
            setRequestsData([
                {
                    "levelName": "string",
                    "students": [
                        {
                            "id": "fff+skjb",
                            "name": "mohamed",
                            "gender": "gmail",
                            "image": "qsjikbbsjkbjsakb.png",
                            "groupName": "tetdb",
                            "yearState": "31"
                        }
                    ]
                },
                {
                    "levelName": "string",
                    "students": [
                        {
                            "id": "fff+skjb",
                            "name": "alaa",
                            "gender": "gmail",
                            "image": "qsjikbbsjkbjsakb.png",
                            "groupName": "tetdb",
                            "yearState": "31"
                        }
                    ]
                },
                {
                    "levelName": "string",
                    "students": [
                        {
                            "id": "fff+skjb",
                            "name": "eyad",
                            "gender": "gmail",
                            "image": "qsjikbbsjkbjsakb.png",
                            "groupName": "tetdb",
                            "yearState": "31"
                        }
                    ]
                }
            ])
            setOriginalData(requestsData)
        } catch (error) {
            setErrorMessage('حدث خطاء')
            console.log(error)
        }
    }

    // Get search value from user
    const searchHandler = (searchValue: string) => {
        setRequestsData(
            originalData.filter((item: any) =>
                item.students[0].name.toLowerCase().includes(searchValue.toLowerCase()),
            ),
        )
    }

    return {
        data: {
            requestsData,
        },
        states: {
            loading,
        },
        actions: {
            searchHandler,
        },
    }
}

export default useRequestsToJoin
