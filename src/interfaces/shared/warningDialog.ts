// interfaces //

interface ContentProps {
    head: string;
    body: string;
    submit: string;
    reject: string;
}

export interface WarningDialogProps {
    state: boolean;
    close: Function;
    submit: Function;
    content: ContentProps;
}

// Initial values //

export const warningDialogInitialValues = {
    state: false,
    close: () => {},
    submit: () => {},
    content: {
        head: '',
        body: '',
        submit: '',
        reject: ''
    },
}