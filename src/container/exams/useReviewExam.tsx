// import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

const useReviewExam = () => {

    // const router = useRouter()
    // const item = router.query
    const [ loading, setLoading ] = useState<boolean>(false)

    useEffect(() => {
        if(typeof window !== 'undefined'){
            if (localStorage.getItem('athena-exam-data')) {
                const data: any = localStorage.getItem('athena-exam-data')
                console.log(JSON.parse(data))
            }
        }
    }, [])

    return (
        {
            data: {

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
 
export default useReviewExam;