import { URL_YEARS } from 'constant/url'
import { useState, useEffect } from 'react';
import { useUser } from 'context/userContext';
import { getHandler } from 'handlers/requestHandler';

const useYears = () => {

    const auth = useUser()
    const [ yearsData, setYearsData] = useState<any>();
    const [ loading, setLoading] = useState<boolean>(false);

    // Get the data of this page
    useEffect(() => {
        if(auth) {
            getYearsData();
        }
    }, [auth])

    // Get Years data from db
    const getYearsData = async () => {
        try {
            setLoading(true);
            const res = await getHandler(auth.authToken, URL_YEARS);
            setYearsData(res);
        }
        catch (error) {
            console.log(error);
        }
        finally {
            setLoading(false);
        }
    }

    return (
        {
            states: {
                loading
            },
            data: {
                yearsData
            }
        }
    );
}
 
export default useYears;