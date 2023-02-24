// interfaces //

interface ErrorProps {
    name: string;
    value: string;
}

interface ImageProps {
    extension: string;
    data: string;
}

interface ImagesProps {
    index: number | undefined;
    image: ImageProps;
}

interface Choice {
    index: number;
    name: string | null;
    image: ImagesProps | null;
    isRightChoice: boolean;
}

interface Questions {
    index: number;
    name: string | null;
    type: string;
    answer: string | null;
    degree: number;
    isPrime: boolean;
    images: ImagesProps[] | null;
    choices: (Choice | null)[];
    error: ErrorProps[];
}

export interface SectionProps {
    open: boolean;
    titleState: boolean;
    index: number;
    name: string;
    paragraph: string;
    degree: number;
    isPrime: boolean; 
    time: string | null;
    images: ImagesProps[] | null;
    questions: (Questions | undefined)[];
}


// interfaces initial Values //


const choiceInitialValues = [
    {
        index: 0,
        name: '',
        image: null,
        isRightChoice: false
    },
    {
        index: 1,
        name: '',
        image: null,
        isRightChoice: false
    },
    {
        index: 2,
        name: '',
        image: null,
        isRightChoice: false
    },
    {
        index: 3,
        name: '',
        image: null,
        isRightChoice: false
    }
]

const choiceJson = JSON.stringify(choiceInitialValues);

export const questionInitialValues = {
    index: 0,
    name: '',
    type: 'MCQ',
    answer: null,
    degree: 0,
    isPrime: false,
    images: [],
    choices: JSON.parse(choiceJson),
    error: []
}

export const question2InitialValues = {
    index: 1,
    name: '',
    type: 'MCQ',
    answer: null,
    degree: 0,
    isPrime: false,
    images: [],
    choices: JSON.parse(choiceJson),
    error: []
}

const questionJson = JSON.stringify(questionInitialValues);
const question2Json = JSON.stringify(question2InitialValues);

const questionsInitialValues = [
    JSON.parse(questionJson),
    JSON.parse(question2Json)
]

const questionsJson = JSON.stringify(questionsInitialValues);

export const sectionInitialValues = {
    open: false,
    titleState: true,
    index: 0,
    name: 'السؤال الأول',
    paragraph: '',
    degree: 0,
    isPrime: false,
    time: null,
    images: [],
    questions: JSON.parse(questionsJson)
}