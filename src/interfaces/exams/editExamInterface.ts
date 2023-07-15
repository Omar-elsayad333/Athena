
// interfaces //
export interface ExamInfoProps {
    inputs: {
        name: string
        description: string
        finalDegree: number | null
        allowedTime: number | null
        isPrime: boolean
    },
    selects: {
        teacherCourseLevelYearId: string
    },
    dateTimeInputs: {
        publishedDate: Date | null
        publishedTime: Date | null
    },
    checkBoxs: {
        examTypeId: string | null
    }
}

export const ExamInfoInitialValues: ExamInfoProps = {
    inputs: {
        name: '',
        description: '',
        finalDegree: null,
        allowedTime: null,
        isPrime: false
    },
    selects: {
        teacherCourseLevelYearId: ''
    },
    dateTimeInputs: {
        publishedDate: null,
        publishedTime: null
    },
    checkBoxs: {
        examTypeId: null
    },
}

// Define the actions
export type AddExamInfoAction =
    | { type: 'UPDATE_INPUTS'; payload: ExamInfoProps; name: string }
    | { type: 'UPDATE_DATETIMEINPUTS'; payload: ExamInfoProps; name: string }
    | { type: 'UPDATE_CHECKBOXS'; payload: ExamInfoProps; name: string }
    | { type: 'UPDATE_SELECTS'; payload: ExamInfoProps; name: string }

// interfaces //
interface ErrorProps {
    error: boolean
    helperText: string
}

interface ImageProps {
    extension: string
    data: string
}

interface ImagesProps {
    index: number | undefined
    image: ImageProps
}

interface Choice {
    index: number
    name: string | null
    image: ImagesProps | null
    isRightChoice: boolean
    error?: ErrorProps
}

interface Questions {
    index: number
    name: string | null
    type: string
    answer: string | null
    degree: number
    isPrime: boolean
    images: ImagesProps[] | null
    choices: Choice[] | null
    nameError?: ErrorProps
    answerError?: ErrorProps
    degreeError?: ErrorProps
    isRightChoiceError?: ErrorProps
}

export interface SectionProps {
    open?: boolean
    openToEdit?: boolean
    titleState?: boolean
    index: number
    name: string
    paragraph: string
    isPrime: boolean
    time: string | null
    images: ImagesProps[] | null
    questions: (Questions | undefined)[]
}

// interfaces initial Values //

const errorInitialValues = {
    error: false,
    helperText: '',
}

const choicesInitialValues = [
    {
        index: 0,
        name: '',
        image: null,
        isRightChoice: false,
        error: structuredClone(errorInitialValues),
    },
    {
        index: 1,
        name: '',
        image: null,
        isRightChoice: false,
        error: structuredClone(errorInitialValues),
    },
    {
        index: 2,
        name: '',
        image: null,
        isRightChoice: false,
        error: structuredClone(errorInitialValues),
    },
    {
        index: 3,
        name: '',
        image: null,
        isRightChoice: false,
        error: structuredClone(errorInitialValues),
    },
]

export const questionsInitialValues = [
    {
        index: 0,
        name: '',
        type: 'MCQ',
        answer: '',
        degree: 0,
        isPrime: false,
        images: [],
        choices: structuredClone(choicesInitialValues),
        nameError: structuredClone(errorInitialValues),
        degreeError: structuredClone(errorInitialValues),
        answerError: structuredClone(errorInitialValues),
        isRightChoiceError: structuredClone(errorInitialValues),
    },
    {
        index: 1,
        name: '',
        type: 'MCQ',
        answer: '',
        degree: 0,
        isPrime: false,
        images: [],
        choices: structuredClone(choicesInitialValues),
        nameError: structuredClone(errorInitialValues),
        degreeError: structuredClone(errorInitialValues),
        answerError: structuredClone(errorInitialValues),
        isRightChoiceError: structuredClone(errorInitialValues),
    },
]

export const sectionInitialValues = {
    open: false,
    openToEdit: false,
    titleState: true,
    index: 0,
    name: 'السؤال الأول',
    paragraph: '',
    isPrime: false,
    time: null,
    images: [],
    questions: structuredClone(questionsInitialValues),
}

export type AddExamAction =
    | { type: 'UPDATE_INPUT'; payload: string | number; index: any }
    | { type: 'UPDATE_DROPDOWN'; payload: string; index: any }
    | { type: 'UPDATE_CHECKBOX'; payload: boolean; index: any }
