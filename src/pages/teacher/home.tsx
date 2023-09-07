import { NextPage } from 'next'
import Urls from 'constant/urls'
import { useEffect, useState } from 'react'
import { withAuth } from 'routes/withRoute'
import * as signalR from '@microsoft/signalr'
import { useUser } from 'context/userContext'

const Home: NextPage = () => {
    const [notifications, setNotifications] = useState([])
    const { userState } = useUser()

    const hubConnection = new signalR.HubConnectionBuilder()
        .withUrl(`${Urls.URL_MAIN}/notifications?access_token=${userState.tokens?.accessToken}`)
        .withAutomaticReconnect()
        .build()

    const getNotifications = async () => {
        try {
            await hubConnection.invoke('GetNotifications')
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        async function startConnection() {
            if (hubConnection.state === signalR.HubConnectionState.Disconnected) {
                try {
                    await hubConnection.start()
                    getNotifications()
                } catch (err) {
                    console.error(err)
                }
            }
        }

        startConnection()

        // Register event handlers for incoming messages from the hub
        hubConnection.on('Notifications', (notificationDtos) => {
            setNotifications(notificationDtos)
        })

        hubConnection.on('ChangeNotificationStatus', (notification) => {
            // Handle the notification status change as needed
            console.log('Notification Status Changed:', notification)
        })

        return () => {
            // Stop the SignalR connection when the component unmounts
            hubConnection.stop().catch((err) => console.error(err))
        }
    }, [])

    useEffect(() => {
        console.log(notifications)
    }, [notifications])

    return (
        <div style={{ padding: '100px' }}>
            {notifications &&
                notifications.map((item: any, index: number) => <h2 key={index}>{item.type}</h2>)}
        </div>
    )
}

export default withAuth(Home)
