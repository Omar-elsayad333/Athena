
interface QuestionsErrorProps {
    degreeError: boolean;
    typeError: boolean;
    questionHeadError: boolean;
    
}

export interface SectionErrorProps {
    error: boolean;
    helperText: string;
    Questions: QuestionsErrorProps[]
}

export const sectionErrorInitialValues = {
    error: false,
    helperText: ''
}