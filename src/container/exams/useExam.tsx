import { useState } from 'react'

const useExam = () => {

    const [ examData ] = useState<any>('')
    const [ loading ] = useState<boolean>(false)

    return (
        {
            data: {
                examData
            },
            states: {
                loading
            },
            actions: {
                
            },
            dialogs: {

            }
        }
    );
}
 
export default useExam;