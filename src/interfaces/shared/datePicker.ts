export interface DatePickerProps {
    value: string;
    error: boolean;
    helperText: string;
}

export const datePickerInitialValues = {
    value: '',
    error: false,
    helperText: ''
}