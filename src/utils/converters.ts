export const convertTimeFromDB = (date: string) => {
    return new Date(`01-01-2023 ${date}`)
}

export const convertTimeToDB = (data: Date) => {
    const newTime = new Date(data)
    return newTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', second:'2-digit', hour12: false})
}

export const convertDateToShortDate = (data: string) => {
    return new Promise ((resolve) => {
        let date = new Date(data);
        let year = date.getFullYear();
        let month: any = date.getMonth()+1;
        let day: any = date.getDate();
    
        if (day < 10) {
            day = '0' + day;
        }
        if (month < 10) {
            month = '0' + month;
        }
    
        const finalDate = `${year} / ${month} / ${day}`
        resolve(finalDate)
    })
}

export const convertDateToShortDateNoAwait = (data: string) => {
    let date = new Date(data);
    let year = date.getFullYear();
    let month: any = date.getMonth()+1;
    let day: any = date.getDate();

    if (day < 10) {
        day = '0' + day;
    }
    if (month < 10) {
        month = '0' + month;
    }
    const finalDate = `${year} / ${month} / ${day}`

    return finalDate
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