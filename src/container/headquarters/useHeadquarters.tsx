import { useEffect, useState } from "react";
import { useUser } from "context/userContext";
import { useAlert } from "context/AlertContext";
import { URL_HEADQUARTERS } from "constant/url";
import { getHandler } from "handlers/requestHandler";

const useHeadquarters = () => {

    const { authToken } = useUser();
    const { setErrorMessage } = useAlert()
    const [ loading, setLoading ] = useState<boolean>(true);
    const [ originalData, setOriginalData ] = useState<any>([]); 
    const [ headquartersData, setHeadquartersData ] = useState<any>([]); 

    // Call Function to get page data
    useEffect(() => {
        if(authToken){
            getHeadquartersData();
        }
    }, [])

    // Call api to get headcquarters data
    const getHeadquartersData = async () => {        
        try {
            setLoading(true);
            const res = await getHandler(authToken, URL_HEADQUARTERS)
            setHeadquartersData(res);
            setOriginalData(res)
        }
        catch(error) {
            setErrorMessage('حدث خطاء')
            console.log(error);
        }
        finally {
            setLoading(false);
        }
    }

    // Get Search value from user
    const searchHandler = (searchValue: string) => {
        setHeadquartersData(
            originalData.filter((item: any) => 
                item.name.toLowerCase().includes(searchValue.toLowerCase())
            )
        )
    }

    return (
        {
            data: {
                originalData,
                headquartersData
            },
            states: {
                loading
            },
            actions: {
                searchHandler
            }
        }
    );
}
 
export default useHeadquarters;