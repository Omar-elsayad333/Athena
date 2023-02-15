// interfaces //


interface ImageProps {
    extension: string;
    data: string;
}

interface ImagesProps {
    index: number | undefined;
    image: ImageProps;
}

interface Choice {
    name: string | null;
    image: ImagesProps | null;
    isRightChoice: boolean
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
}

export interface SectionProps {
    open: boolean;
    titleState: boolean;
    index: number;
    name: string;
    title: string;
    degree: number;
    isPrime: boolean; 
    time: string | null;
    image: ImagesProps[] | null;
    questions: (Questions | undefined)[];
}


// interfaces initial Values //


const choiceInitialValues = [
    {
        name: '',
        image: null,
        isRightChoice: false
    },
    {
        name: '',
        image: null,
        isRightChoice: false
    },
    {
        name: '',
        image: null,
        isRightChoice: false
    },
    {
        name: '',
        image: null,
        isRightChoice: false
    }
]

const json = JSON.stringify(choiceInitialValues);

const questionsInitialValues = [
    {
        index: 1,
        name: '',
        type: '',
        answer: null,
        degree: 0,
        isPrime: false,
        images: null,
        choices: JSON.parse(json)
    },
    {
        index: 2,
        name: '',
        type: '',
        answer: null,
        degree: 0,
        isPrime: false,
        images: null,
        choices: JSON.parse(json)
    }
]

export const sectionInitialValues = [
    {
        open: true,
        titleState: true,
        index: 1,
        name: 'السؤال الأول',
        title: '',
        degree: 0,
        isPrime: false,
        time: null,
        image: null,
        questions: Array.from(questionsInitialValues)
    }
]





const example = {
    "sections": [
        {
            "index": 0,
            "name": "string",
            "title": "string",
            "degree": 0,
            "isPrime": true,
            "time": "02:00:00",
            "images": [
                {
                    "image": {
                        "extension": "strin",
                        "data": "string"
                    },
                    "index": 9
                }
            ],
            "questions": [
                {
                    "index": 0,
                    "name": "string",
                    "type": "string",
                    "answer": "string",
                    "degree": 2,
                    "isPrime": true,
                    "images": [
                        {
                            "image": {
                                "extension": "strin",
                                "data": "string"
                            },
                            "index": 9
                        }
                    ],
                    "choices": [
                        {
                            "name": "string",
                            "image": {
                                "extension": "strin",
                                "data": "string"
                            },
                            "isRightChoice": true
                        }
                    ]
                }
            ]
        }
    ]
}
