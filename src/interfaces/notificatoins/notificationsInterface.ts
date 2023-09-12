import { ReactNode } from 'react'

export interface NotificatinosContextType {
    newNotification: any
    notificationsData: any
}

export interface NotificationsProviderProps {
    children: ReactNode
}
