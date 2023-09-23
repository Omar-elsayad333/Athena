import { Routes } from 'routes/Routes'
import { useRouter } from 'next/router'
import ExamIcon from 'assets/svgs/ExamIcon'
import { useEffect, useState } from 'react'
import { useTheme } from 'context/ThemeContext'
import useRequestsHandlers from 'hooks/useRequestsHandlers'
import { useNotifications } from 'context/NotificationContext'

const useShowNotifications = () => {
    const route = useRouter()
    const { mainColors } = useTheme()
    const { loading } = useRequestsHandlers()
    const { notificationsData, changeNotificationStatus } = useNotifications()
    const [filterdData, setFilterdData] = useState<any[]>([])

    useEffect(() => {
        if (notificationsData) {
            setFilterdData(notificationsData)
        }
    }, [notificationsData])

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
