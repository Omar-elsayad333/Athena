import { Routes } from 'routes/Routes'
import { useRouter } from 'next/router'
import ExamIcon from 'assets/svgs/ExamIcon'
import { MouseEvent, useState } from 'react'
import { useTheme } from 'context/ThemeContext'
import { useNotifications } from 'context/NotificationContext'

const useNotificationsMenu = () => {
    const route = useRouter()
    const { mainColors } = useTheme()
    const { changeNotificationStatus } = useNotifications()
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)

    const handleClick = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
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
        states: {
            open,
            anchorEl,
        },
        actions: {
            handleClick,
            handleClose,
            getNotificationAvatar,
            getNotificationLabelStyle,
            directNotification,
        },
    }
}

export default useNotificationsMenu
