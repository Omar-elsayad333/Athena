export const convertTimeFromDB = (date: string) => {
    return new Date(`01-01-2023 ${date}`)
}

export const convertTimeToDB = (data: Date) => {
    const newTime = new Date(data)
    return newTime.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
    })
}

export const convertDateToShortDate = (data: string) => {
    let date = new Date(data)
    let year = date.getFullYear()
    let month: any = date.getMonth() + 1
    let day: any = date.getDate()

    if (day < 10) {
        day = '0' + day
    }
    if (month < 10) {
        month = '0' + month
    }

    const finalDate = `${year} / ${day} / ${month}`
    return finalDate
}

export const convertDateToShortDateNoAwait = (data: string) => {
    let date = new Date(data)
    let year = date.getFullYear()
    let month: any = date.getMonth() + 1
    let day: any = date.getDate()

    if (day < 10) {
        day = '0' + day
    }
    if (month < 10) {
        month = '0' + month
    }
    const finalDate = `${year} / ${day} / ${month}`

    return finalDate
}

export const convertHashSign = (data: string) => {
    return data.replace('#', '%23')
}

export const convertFileToBase64 = (file: any) => {
    if (!file) return false
    return new Promise(function (resolve, reject) {
        const reader = new FileReader()
        reader.onload = () => resolve(reader.result)
        reader.onerror = (error) => reject(error)
        reader.readAsDataURL(file)
    })
}

export const getTimePeriod = (time: any) => {
    // Extract the hour part from the time string
    const hour = parseInt(time?.split(':')[0], 10)

    // Determine whether it's AM or PM
    const period = hour >= 12 ? 'PM' : 'AM'

    return period
}

export const convertTo12HourFormat = (timeString: string) => {
    // Split the time string into hours, minutes, and seconds
    const [hours, minutes]: any = timeString.split(':').map(Number)

    // Determine whether it's AM or PM
    const period = hours >= 12 ? 'PM' : 'AM'

    // Convert to 12-hour format
    const twelveHour = hours % 12 || 12 // Handle the case when hours is 0

    // Create the formatted time string
    const formattedTime = `${period} ${twelveHour}:${minutes.toString().padStart(2, '0')}`

    return formattedTime
}
