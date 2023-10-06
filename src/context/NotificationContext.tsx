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
    notificationsLoading: false,
    changeNotificationStatus: () => {},
})

export const NotificationsProvider: React.FC<NotificationsProviderProps> = ({ children }) => {
    const { userState } = useUser()
    const [notificationsData, setNotificationsData] = useState<any[]>([])
    const [notificationsLoading, setNotificationsLoading] = useState<boolean>(false)

    // const hubConnection = new signalR.HubConnectionBuilder()
    //     .withUrl(`${Urls.URL_MAIN}/notifications?access_token=${userState.tokens?.accessToken}`)
    //     .configureLogging(signalR.LogLevel.Warning)
    //     .withAutomaticReconnect()
    //     .build()
    const [hubConnection, setHubConnection] = useState<any>(null)

    useEffect(() => {
        if (userState.tokens?.accessToken) {
            setHubConnection(
                new signalR.HubConnectionBuilder()
                    .withUrl(
                        `${Urls.URL_MAIN}/notifications?access_token=${userState.tokens?.accessToken}`,
                    )
                    .configureLogging(signalR.LogLevel.Warning)
                    .withAutomaticReconnect()
                    .build(),
            )
        }
    }, [userState.tokens?.accessToken])

    const getNotifications = async () => {
        try {
            await hubConnection.invoke('GetNotifications')
        } catch (err) {}
    }

    const changeNotificationStatus = async (notificationId: string) => {
        if (hubConnection.state === signalR.HubConnectionState.Connected) {
            try {
                setNotificationsLoading(true)
                await hubConnection.invoke('ChangeStatus', notificationId)
            } catch (err) {
            } finally {
                setNotificationsLoading(false)
            }
        }
    }

    useEffect(() => {
        const startConnection = async () => {
            if (hubConnection?.state === signalR.HubConnectionState.Disconnected) {
                try {
                    setNotificationsLoading(true)
                    await hubConnection.start()
                    getNotifications()
                } catch (err) {
                } finally {
                    setNotificationsLoading(false)
                }
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
    }, [hubConnection])

    useEffect(() => {
        if (hubConnection?.state === signalR.HubConnectionState.Disconnecting) {
            hubConnection.stop()
            setHubConnection(null)
        }
    }, [hubConnection?.state])

    return (
        <NotificationsContext.Provider
            value={{ changeNotificationStatus, notificationsData, notificationsLoading }}
        >
            {children}
        </NotificationsContext.Provider>
    )
}

export const useNotifications = () => useContext(NotificationsContext)
