import { ReactNode } from 'react'

export interface NotificatinosContextType {
    notificationsData: any[]
    notificationsLoading: boolean
    changeNotificationStatus: Function
}

export interface NotificationsProviderProps {
    children: ReactNode
}
