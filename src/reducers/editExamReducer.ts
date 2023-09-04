import { ExamInfoProps, AddExamInfoAction } from 'interfaces/exams/editExamInterface'

export const editExamDetailsReducer = (
    state: ExamInfoProps,
    action: AddExamInfoAction,
): ExamInfoProps => {
    const { name, payload } = action
    switch (action.type) {
        case 'UPDATE_INPUTS':
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [name]: {
                        value: payload.value,
                        error: payload.error,
                        length: payload.length,
                        helperText: payload.helperText,
                    },
                },
            }
        case 'UPDATE_SELECTS':
            return {
                ...state,
                selects: {
                    ...state.selects,
                    [name]: {
                        value: payload.value,
                        error: payload.error,
                        id: payload.id,
                        helperText: payload.helperText,
                    },
                },
            }
        case 'UPDATE_DATETIMEINPUTS':
            return {
                ...state,
                dateTimeInputs: {
                    ...state.dateTimeInputs,
                    [name]: {
                        value: payload.value,
                        error: payload.error,
                        helperText: payload.helperText,
                    },
                },
            }
        default:
            throw new Error('Invalid action type')
    }
}
