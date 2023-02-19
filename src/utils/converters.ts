export const convertTimeFromDB = (date: string) => {
    return new Date(`01-01-2023 ${date}`)
}

export const convertTimeToDB = (data: Date) => {
    return data.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', second:'2-digit', hour12: false})
}

export const convertHashSign = (data: string) => {
    return data.replace("#", "%23")
}

export const convertFileToBase64 = (file: any) => {
    return new Promise(function(resolve,reject){
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result) 
        reader.onerror = (error) => reject(error)
        reader.readAsDataURL(file);
    })
}