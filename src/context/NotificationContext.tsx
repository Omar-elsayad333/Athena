import Urls from 'constant/urls'
import { useUser } from './userContext'
import * as signalR from '@microsoft/signalr'
import { createContext, useEffect, useState, useContext } from 'react'
import {
    NotificatinosContextType,
    NotificationsProviderProps,
} from 'interfaces/notificatoins/notificationsInterface'

const NotificationsContext = createContext<NotificatinosContextType>({
    newNotification: [],
    notificationsData: [],
})

export const NotificationsProvider: React.FC<NotificationsProviderProps> = ({ children }) => {
    const { userState } = useUser()
    const [newNotification] = useState<any[]>([])
    const [notificationsData, setNotificationsData] = useState<any[]>([])

    useEffect(() => {
        if (userState.tokens?.accessToken) {
            const hubConnection = new signalR.HubConnectionBuilder()
                .withUrl(
                    `${Urls.URL_MAIN}/notifications?access_token=${userState.tokens?.accessToken}`,
                )
                .withAutomaticReconnect()
                .build()

            const startConnection = async () => {
                if (hubConnection.state === signalR.HubConnectionState.Disconnected) {
                    try {
                        await hubConnection.start()
                        getNotifications()
                    } catch (err) {
                        console.error(err)
                    }
                }
            }

            const getNotifications = async () => {
                try {
                    await hubConnection.invoke('GetNotifications')
                } catch (err) {
                    console.error(err)
                }
            }

            if (hubConnection) {
                startConnection()

                // Register event handlers for incoming messages from the hub
                hubConnection.on('Notifications', (notificationDtos: any) => {
                    setNotificationsData(notificationDtos)
                })

                hubConnection.on('ChangeNotificationStatus', (notification: any) => {
                    console.log('Notification Status Changed:', notification)
                })
            }

            if (hubConnection.state === signalR.HubConnectionState.Disconnecting) {
                hubConnection.stop().catch()
            }
        }
    }, [userState.tokens?.accessToken])

    useEffect(() => {
        console.log(notificationsData)
    }, [notificationsData])

    return (
        <NotificationsContext.Provider value={{ notificationsData, newNotification }}>
            {children}
        </NotificationsContext.Provider>
    )
}

export const useNotifications = () => useContext(NotificationsContext)
