interface parent {
    value: string;
    error: boolean;
    helperText: string;
}

export interface InputProps extends parent {
    length: number
}

export const inputInitialValues = {
    value: '',
    length: 0,
    error: false,
    helperText: ''
}

export interface DropMenuProps extends parent {
    id: string;
}

export const dropMenuInitialValues = {
    id: '',
    value: '',
    error: false,
    helperText: ''
}