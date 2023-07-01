import {
    AddExamInfoProps,
    AddExamInfoAction,
    SectionProps,
    AddExamAction,
} from 'interfaces/exams/addExamInterface'

export const addExamReducer = (state: SectionProps, action: AddExamAction): SectionProps => {
    switch (action.type) {
        case 'UPDATE_INPUT':
            return {
                ...state,
            }
        case 'UPDATE_DROPDOWN':
            return {
                ...state,
            }
        case 'UPDATE_CHECKBOX':
            return {
                ...state,
            }
        default:
            throw new Error('Invalid action type')
    }
}

export const addExamInfoReducer = (
    state: AddExamInfoProps,
    action: AddExamInfoAction,
): AddExamInfoProps => {
    switch (action.type) {
        case 'UPDATE_INPUT':
            return {
                ...state,
                state[action.name]: action.payload,
            }
        default:
            return state
    }
}
