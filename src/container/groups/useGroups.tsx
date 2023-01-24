import { URL_GROUPS } from 'constant/url';
import { useState, useEffect } from 'react';
import { useUser } from 'context/userContext';
import { getHandler } from 'handlers/requestHandler';

const useGroups = () => {

    const auth = useUser();
    const [ loading, setLoading] = useState<boolean>(false);
    const [ pageData, setPageData] = useState<any>('');

    // Get data if the user authenticated
    useEffect(() => {
        if(auth.authToken){
            getPageData();
        }
    }, [auth.authToken])

    // Call api to get the page data
    const getPageData = async () => {
        try {
            setLoading(true);
            const res = await getHandler(auth.authToken, URL_GROUPS);
            setPageData(res);
        }
        catch(error: any) {
            console.log(error);
        }
        finally {
            setLoading(false);
        }
    }

    return (
        {
            data: {
                pageData
            },
            states: {
                loading
            }
        }
    );
}
 
export default useGroups;