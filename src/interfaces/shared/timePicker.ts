export interface TimePickerProps {
    value: any;
    error: boolean;
    helperText: string;
}

export const timePickerInitialValues = {
    value: new Date(),
    error: false,
    helperText: ''
}