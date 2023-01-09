import { useEffect } from 'react';
import { useError } from "context/ErrorContext";

const useTest = () => {

    const { setInfoMessage, setErrorMessage, setSuccessMessage} = useError();

    useEffect(() => {
        console.log('omar')
        // setInfoMessage('hello from alert');
        // setErrorMessage('hello from alert');
        setSuccessMessage('hello from alert');
    }, [])

    return ({
    
    });
}
 
export default useTest;