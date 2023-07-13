import { DatePickerProps, datePickerInitialValues } from 'interfaces/shared/datePicker'
import { InputProps, ImageProps } from 'interfaces/shared/input'

export interface EditProfileProps {
    imageInputs: {
        coverImage: ImageProps
        profileImage: ImageProps
    }
    dateInputs: {
        birthDay: DatePickerProps
    }
    inputs: {
        firstName: InputProps
        lastName: InputProps
        summary: InputProps
        nationality: InputProps
        degree: InputProps
        school: InputProps
        teachingMethod: InputProps
        phone: InputProps
        email: InputProps
        webSite: InputProps
        facebook: InputProps
        twitter: InputProps
        youtube: InputProps
    }
}

const inputInitialValues: InputProps = {
    value: '',
    error: false,
    helperText: '',
    length: 0,
}

const imageInitialValues: ImageProps = {
    data: null,
    extension: null,
}

export const editProfileInitialValues: EditProfileProps = {
    imageInputs: {
        coverImage: imageInitialValues,
        profileImage: imageInitialValues,
    },
    dateInputs: {
        birthDay: datePickerInitialValues,
    },
    inputs: {
        firstName: inputInitialValues,
        lastName: inputInitialValues,
        summary: inputInitialValues,
        nationality: inputInitialValues,
        degree: inputInitialValues,
        school: inputInitialValues,
        teachingMethod: inputInitialValues,
        phone: inputInitialValues,
        email: inputInitialValues,
        webSite: inputInitialValues,
        facebook: inputInitialValues,
        twitter: inputInitialValues,
        youtube: inputInitialValues,
    },
}

export type actions =
    | { type: 'UPDATE_INPUT'; inputPayload: InputProps; name: string }
    | { type: 'UPDATE_IMAGE_INPUT'; imagePayload: ImageProps; name: string }
    | { type: 'UPDATE_DATE_INPUT'; datePayload: DatePickerProps; name: string }
