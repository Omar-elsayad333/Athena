export const convertTimeFromDB = (date: string) => {
    return new Date(`01-01-2023 ${date}`)
}

export const convertTimeToDB = (data: Date) => {
    return data.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', second:'2-digit', hour12: false})
}

export const convertHashSign = (data: string) => {
    return data.replace("#", "%23")
}
