import Urls from 'constant/urls'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { useUser } from 'context/userContext'
import { useAlert } from 'context/AlertContext'
import useRequestsHandlers from 'hooks/useRequestsHandlers'

const useGroup = () => {
    const router = useRouter()
    const { userState } = useUser()
    const { id }: any = router.query
    const { loading, getHandlerById } = useRequestsHandlers()
    const { setErrorMessage } = useAlert()
    const [groupData, setGroupData] = useState<any>('')
    const [groupStudents, setGroupStudents] = useState<any>([])

    // Call getGroupData functionl if user is authorized
    useEffect(() => {
        if (userState.tokens!.accessToken && id) {
            getGroupData()
        }
    }, [userState.tokens!.accessToken, id])

    // Call function to get group students data
    useEffect(() => {
        if (groupData && groupStudents.length == 0) {
            getGroupStudents()
        }
    }, [groupData])

    // Call api to get group data from db
    const getGroupData = async () => {
        try {
            const res: any = await getHandlerById(
                id,
                userState.tokens!.accessToken!,
                Urls.URL_GROUPS,
            )
            setGroupData(res)
        } catch (error) {
            setErrorMessage('حدث خطأ')
        }
    }

    // Sort data to show it to the user
    const getGroupStudents = () => {
        for (let student of groupData.groupStudents) {
            setGroupStudents((groupStudents: any) => [
                ...groupStudents,
                {
                    image: student.image,
                    fullName: student.fullName,
                    level: student.level,
                    code: student.code,
                },
            ])
        }
    }

    return {
        data: {
            groupData,
            groupStudents,
        },
        states: {
            loading,
        },
    }
}

export default useGroup
