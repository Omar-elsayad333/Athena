export interface CheckBoxProps {
    state: boolean;
    error: boolean;
    helperText: string;
}

export const checkBoxInitialValues = {
    state: false,
    error: false,
    helperText: ''
}