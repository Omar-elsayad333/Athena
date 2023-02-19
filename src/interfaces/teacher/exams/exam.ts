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

const choiceJson = JSON.stringify(choiceInitialValues);

export const questionInitialValues = {
    index: 0,
    name: '',
    type: 'MCQ',
    answer: null,
    degree: 0,
    isPrime: false,
    images: [],
    choices: JSON.parse(choiceJson)
}

export const question2InitialValues = {
    index: 1,
    name: '',
    type: 'MCQ',
    answer: null,
    degree: 0,
    isPrime: false,
    images: [],
    choices: JSON.parse(choiceJson)
}

const questionJson = JSON.stringify(questionInitialValues);
const question2Json = JSON.stringify(question2InitialValues);

const questionsInitialValues = [
    JSON.parse(questionJson),
    JSON.parse(question2Json)
]

const questionsJson = JSON.stringify(questionsInitialValues);

export const sectionInitialValues = {
    open: true,
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


// const example = {
//     "sections": [
//         {
//             "index": 0,
//             "name": "string",
//             "title": "string",
//             "degree": 0,
//             "isPrime": true,
//             "time": "02:00:00",
//             "images": [
//                 {
//                     "image": {
//                         "extension": "strin",
//                         "data": "string"
//                     },
//                     "index": 9
//                 }
//             ],
//             "questions": [
//                 {
//                     "index": 0,
//                     "name": "string",
//                     "type": "string",
//                     "answer": "string",
//                     "degree": 2,
//                     "isPrime": true,
//                     "images": [
//                         {
//                             "image": {
//                                 "extension": "strin",
//                                 "data": "string"
//                             },
//                             "index": 9
//                         }
//                     ],
//                     "choices": [
//                         {
//                             "name": "string",
//                             "image": {
//                                 "extension": "strin",
//                                 "data": "string"
//                             },
//                             "isRightChoice": true
//                         }
//                     ]
//                 }
//             ]
//         }
//     ]
// }



// let fileInput = document.getElementById('fileInput')

// fileInput.addEventListener('change', async function(){
//     let url = await base64Url(fileInput.files[0])
//     console.log(url)
// })


// function base64Url(file){
//     return new Promise(function(resolve,reject){
//         const reader = new FileReader();
//         reader.onload = () => resolve(reader.result) 
//         reader.onerror = (error) => reject(error)
//         reader.readAsDataURL(file);
//     })
// }