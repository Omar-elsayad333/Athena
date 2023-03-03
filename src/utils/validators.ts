import { validNumberCodes } from "constant/staticData"

export const phoneNumberValidator = (phoneNumber: string) => {
    let state = true
    const numberCode: string = phoneNumber.slice(0,3)

    if(phoneNumber.length != 11) {
        state = false
    }else {
        let codeState = false
        
        for(let validCode of validNumberCodes) {
            if(validCode.name == numberCode) {
                codeState = true
            }
        }

        if(!codeState)
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