export interface DatePickerProps {
    value: string;
    error: boolean;
    helperText: string;
}

export const datePickerInitialValues = {
    value: new Date().toISOString(),
    error: false,
    helperText: ''
}