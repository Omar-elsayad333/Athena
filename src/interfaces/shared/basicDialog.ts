interface content {
    title: string;
    dialog: string;
    accept: string;
    reject: string;
}

export interface BasicDialogProps {
    state: boolean;
    content: content;
}

export const basicDialogInitialValues = {
    state: false,
    content: {
        title: '',
        dialog: '',
        accept: '',
        reject: ''
    }
}