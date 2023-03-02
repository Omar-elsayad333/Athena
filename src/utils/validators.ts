export const phoneNumberValidator = (phoneNumber: string) => {
    let state = true
    if(phoneNumber.length != 11) {
        state = false
    }
    return state
}

export const homeNumberValidator = (homeNumber: string) => {
    let state = true
    if(homeNumber.length != 7) {
        state = false
    }
    return state
}