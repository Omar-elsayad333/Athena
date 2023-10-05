import Urls from 'constant/urls'
import { useUser } from './userContext'
import * as signalR from '@microsoft/signalr'
import { createContext, useEffect, useState, useContext } from 'react'
import {
    NotificatinosContextType,
    NotificationsProviderProps,
} from 'interfaces/notificatoins/notificationsInterface'

const NotificationsContext = createContext<NotificatinosContextType>({
    notificationsData: [],
    changeNotificationStatus: () => {},
})

export const NotificationsProvider: React.FC<NotificationsProviderProps> = ({ children }) => {
    const { userState } = useUser()
    const [notificationsData, setNotificationsData] = useState<any[]>([])

    const hubConnection = new signalR.HubConnectionBuilder()
        .withUrl(`${Urls.URL_MAIN}/notifications?access_token=${userState.tokens?.accessToken}`)
        .configureLogging(signalR.LogLevel.Warning)
        .withAutomaticReconnect()
        .build()

    const getNotifications = async () => {
        try {
            await hubConnection.invoke('GetNotifications')
        } catch (err) {}
    }

    const changeNotificationStatus = async (notificationId: string) => {
        await hubConnection.start()
        if (hubConnection.state === signalR.HubConnectionState.Connected) {
            try {
                await hubConnection.invoke('ChangeStatus', notificationId)
            } catch (err) {}
        }
    }

    useEffect(() => {
        if (userState.tokens?.accessToken) {
            const startConnection = async () => {
                if (hubConnection.state === signalR.HubConnectionState.Disconnected) {
                    try {
                        await hubConnection.start()
                        getNotifications()
                    } catch (err) {}
                }
            }

            if (hubConnection) {
                startConnection()

                // Register event handlers for incoming messages from the hub
                hubConnection.on('Notifications', (notificationsData: any) => {
                    setNotificationsData(notificationsData)
                    console.log(notificationsData)
                })

                hubConnection.on('NotificationFromServer', (notificationDtos: any) => {
                    setNotificationsData((notificationsData) => [
                        notificationDtos,
                        ...notificationsData,
                    ])
                })

                hubConnection.on('ChangeNotificationStatus', () => {})
            }
        }
    }, [userState.tokens?.accessToken])

    useEffect(() => {
        if (hubConnection.state === signalR.HubConnectionState.Disconnecting) {
            hubConnection.stop()
        }
    }, [hubConnection.state])

    return (
        <NotificationsContext.Provider value={{ changeNotificationStatus, notificationsData }}>
            {children}
        </NotificationsContext.Provider>
    )
}

export const useNotifications = () => useContext(NotificationsContext)
