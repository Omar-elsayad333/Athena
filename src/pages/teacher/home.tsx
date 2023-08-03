import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { withAuth } from 'routes/withRoute'
import * as signalR from '@microsoft/signalr'
import Urls from 'constant/urls'

const Home: NextPage = () => {
    const [message, setMessage] = useState('')
    const [courses, setCourses] = useState([])
    const [isConnected, setIsConnected] = useState(false)

    const hubConnection = new signalR.HubConnectionBuilder()
        .withUrl(`${Urls.URL_MAIN}/testnotifications`)
        .withAutomaticReconnect()
        .build()

    useEffect(() => {
        hubConnection.on('GetTheData', (message, coursesDto) => {
            setMessage(message)
            setCourses(coursesDto)
        })

        hubConnection.on('Notify', (message) => {
            console.log('Received notification:', message)
        })

        async function startHubConnection() {
            try {
                await hubConnection.start()
                setIsConnected(true)
                // await hubConnection.invoke('GetDataWithMessages', 'Hello from the courses!')
                await hubConnection.invoke('NotifyAll', 'Hello from the notirfy!')
                console.log('SignalR connection established.')
            } catch (err) {
                console.error('Error while establishing SignalR connection:', err)
            }
        }

        startHubConnection()

        return () => {
            hubConnection.off('GetTheData')
            hubConnection.off('Notify')
            hubConnection.stop()
            setIsConnected(false)
            console.log('off')
        }
    }, [])

    const getDataWithMessages = async () => {
        try {
            if (isConnected) {
            } else {
                console.error('SignalR is not connected.')
            }
        } catch (err) {
            console.error('Error while calling GetDataWithMessages:', err)
        }
    }

    return (
        <div>
            <p>Message: {message}</p>
            <ul>
                {courses.map((course: any) => (
                    <li key={course.id}>{course.name}</li>
                ))}
            </ul>
            <button onClick={getDataWithMessages}>Get Data with Messages</button>
        </div>
    )
}

export default withAuth(Home)
