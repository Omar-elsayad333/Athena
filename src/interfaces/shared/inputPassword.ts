export interface InputPasswordProps {
    value: string;
    show: boolean;   
    length: number;
    error: boolean;
    helperText: string;
}

export const passwordInitialValues = {
    value: '',
    length: 0,
    show: false,
    error: false,
    helperText: ''
}