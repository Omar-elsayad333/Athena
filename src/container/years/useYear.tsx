import { useRouter } from "next/router";
import { URL_YEARS } from "constant/url";
import { useState, useEffect } from 'react';
import { useUser } from "context/userContext";
import { getHandlerById } from "handlers/requestHandler";

const useYear = () => {

    const auth = useUser();
    const router = useRouter();
    const { id } = router.query;
    const [ loading, setLoading ] = useState<boolean>(false);
    const [ pageData, setPageData ] = useState<any>('');

    // Get page data on load
    useEffect(() => {
        if(auth){
            getYearData();
        }
    }, [auth])

    // Get page data from db
    const getYearData = async () => {
        try {
            setLoading(true);
            const res: any = await getHandlerById(id , auth.authToken, URL_YEARS);
            setPageData(res);
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
                loading,
            },
            data: {
                pageData,
            },
            actions: {

            },
            dialogs: {

            }
        }
    );
}
 
export default useYear;