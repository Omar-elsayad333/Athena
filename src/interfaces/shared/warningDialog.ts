// interfaces //
interface ActionsProps {
    submit: () => void;
    cancel: () => void;
}

interface ContentProps {
    title: string;
    body: string;
    submit: string;
    cancel: string;
}

export interface WarningDialogProps {
    state: boolean;
    actions: ActionsProps;
    content: ContentProps;
}

// Initial values //
export const warningDialogInitialValues: WarningDialogProps  = {
    state: false,
    actions: {
        submit: () => {},
        cancel: () => {}
    },
    content: {
        title: '',
        body: '',
        submit: '',
        cancel: ''
    },
}