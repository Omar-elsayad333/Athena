import { EditProfileProps, actions } from 'interfaces/profile/editProfileInterface'

export const editProfileReducer = (state: EditProfileProps, action: actions): EditProfileProps => {
    const { name } = action
    switch (action.type) {
        case 'UPDATE_INPUT':
            const { inputPayload } = action
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [name]: {
                        value: inputPayload.value,
                        error: inputPayload.error,
                        length: inputPayload.length,
                        helperText: inputPayload.helperText,
                    },
                },
            }
        case 'UPDATE_IMAGE_INPUT':
            const { imagePayload } = action
            return {
                ...state,
                imageInputs: {
                    ...state.imageInputs,
                    [name]: {
                        data: imagePayload.data,
                        extension: imagePayload.extension,
                    },
                },
            }
        case 'UPDATE_DATE_INPUT':
            const { datePayload } = action
            return {
                ...state,
                dateInputs: {
                    ...state.dateInputs,
                    [name]: {
                        value: datePayload.value,
                        error: datePayload.error,
                        helperText: datePayload.helperText,
                    },
                },
            }
        default:
            throw new Error('Invalid action type')
    }
}
