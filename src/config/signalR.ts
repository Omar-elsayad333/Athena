// // import Urls from 'constant/urls'

// // // server/signalrHub.js (for example)
// // const { HubConnectionBuilder } = require('@microsoft/signalr')

// // export default async function signalRHubServer(url: any) {
// //     const connection = new HubConnectionBuilder()
// //         .withUrl(`${Urls.URL_MAIN}/${url}`) // The URL where your SignalR hub is hosted
// //         .withAutomaticReconnect()
// //         .build()

// //     // Handle incoming messages or other events from the server
// //     await connection.on('GetTheData', (message: any, courses: any) => {
// //         console.log(`Received message from ${courses}: ${message}`)
// //     })

// //     // Start the connection
// //     await connection
// //         .start()
// //         .then(() => console.log('SignalR connection established'))
// //         .catch((err: any) => console.error('SignalR connection failed: ', err))

// //     return connection
// // }

// import { useEffect, useState } from 'react'
// import * as signalR from '@microsoft/signalr'

// const SignalRTestComponent = () => {
//     const [message, setMessage] = useState('')
//     const [courses, setCourses] = useState([])

//     useEffect(() => {
//         const hubConnection = new signalR.HubConnectionBuilder()
//             .withUrl('/notificationHub')
//             .withAutomaticReconnect()
//             .build()

//         hubConnection.on('GetTheData', (message, coursesDto) => {
//             setMessage(message)
//             setCourses(coursesDto)
//         })

//         hubConnection.on('Notify', (message) => {
//             console.log('Received notification:', message)
//         })

//         async function startHubConnection() {
//             try {
//                 await hubConnection.start()
//                 console.log('SignalR connection established.')
//             } catch (err) {
//                 console.error('Error while establishing SignalR connection:', err)
//             }
//         }

//         startHubConnection()

//         return () => {
//             hubConnection.off('GetTheData')
//             hubConnection.off('Notify')
//             hubConnection.stop()
//         }
//     }, [])

//     return (
//         <div>
//             <p>Message: {message}</p>
//             <ul>
//                 {courses.map((course) => (
//                     <li key={course.id}>{course.name}</li>
//                 ))}
//             </ul>
//         </div>
//     )
// }

// export default SignalRTestComponent
