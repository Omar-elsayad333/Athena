import Urls from 'constant/urls'
import { Routes } from 'routes/Routes'
import { useRouter } from 'next/router'
import ExamIcon from 'assets/svgs/ExamIcon'
import { useEffect, useState } from 'react'
import { useUser } from 'context/userContext'
import { useTheme } from 'context/ThemeContext'
import { useAlert } from 'context/AlertContext'
import useRequestsHandlers from 'hooks/useRequestsHandlers'
import { useNotifications } from 'context/NotificationContext'

const useShowNotifications = () => {
    const route = useRouter()
    const { mainColors } = useTheme()
    const { setErrorMessage } = useAlert()
    const { userState } = useUser()
    const { loading, getHandler } = useRequestsHandlers()
    const { changeNotificationStatus } = useNotifications()
    const [filterdData, setFilterdData] = useState<any[]>([])
    const [notificationsData, setNotificationsData] = useState<any[]>([])

    useEffect(() => {
        if (userState.tokens?.accessToken) {
            getNotifications()
        }
    }, [userState.tokens?.accessToken])

    const getNotifications = async () => {
        try {
            const response = await getHandler(
                userState.tokens?.accessToken!,
                Urls.URL_NOTIFICATIONS,
            )
            setNotificationsData(response)
            setFilterdData(response)
        } catch (error) {
            setErrorMessage('حدث خطاء')
        }
    }

    const filterDataHandler = (filterType: string) => {
        if (filterType === 'all') {
            setFilterdData(notificationsData)
        } else if (filterType === 'unSeen') {
            setFilterdData(notificationsData.filter((item: any) => item.status === 'UnSeen'))
        } else if (filterType === 'read') {
            setFilterdData(notificationsData.filter((item: any) => item.status === 'Read'))
        }
    }

    const getNotificationAvatar = (type: string) => {
        if (type === 'CorrectExam') return <ExamIcon />
        else return null
    }

    const getNotificationLabelStyle = (label: string) => {
        let style: any = {}
        switch (label) {
            case 'Information':
                style = {
                    border: `1px solid ${mainColors.info.main}`,
                }
                break
            case 'Success':
                style = {
                    border: `1px solid ${mainColors.success.main}`,
                }
                break
            case 'Warning':
                style = {
                    border: `1px solid ${mainColors.warning.main}`,
                }
                break
            case 'Error':
                style = {
                    border: `1px solid ${mainColors.error.main}`,
                }
                break

            default:
                break
        }

        return style
    }

    const directNotification = async (
        notificationId: string,
        type: string,
        redirectId: string,
        notificationStatus: string,
    ) => {
        switch (type) {
            case 'CorrectExam':
                if (notificationStatus === 'UnSeen') {
                    await changeNotificationStatus(notificationId)
                    route.push(`${Routes.teacherCorrectingList}${redirectId}`)
                } else {
                    route.push(`${Routes.teacherCorrectingList}${redirectId}`)
                }
                break

            default:
                break
        }
    }

    return {
        data: {
            filterdData,
        },
        states: {
            loading,
        },
        actions: {
            getNotificationAvatar,
            getNotificationLabelStyle,
            filterDataHandler,
            directNotification,
        },
    }
}

export default useShowNotifications
