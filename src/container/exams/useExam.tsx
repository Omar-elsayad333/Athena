import useRequestsHandlers from 'hooks/useRequestsHandlers'
import { useState } from 'react'

const useExam = () => {
    const [examData] = useState<any>('')
    const { loading } = useRequestsHandlers()
    return {
        data: {
            examData,
        },
        states: {
            loading,
        },
        actions: {},
        dialogs: {},
    }
}

export default useExam
