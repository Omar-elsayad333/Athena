import { ReactNode } from 'react'

export interface NotificatinosContextType {
    notificationsData: any[]
    changeNotificationStatus: Function
}

export interface NotificationsProviderProps {
    children: ReactNode
}
