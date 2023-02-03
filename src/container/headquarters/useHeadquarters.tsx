import { URL_HEADQUARTERS } from "constant/url";
import { useUser } from "context/userContext";
import { getHandler } from "handlers/requestHandler";
import { useEffect, useState } from "react";

const useHeadquarters = () => {

    const auth = useUser();
    const [ data, setData] = useState<any>(''); 
    const [ loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        if(auth.authToken){
            getData();
        }
    }, [])


    const getData = async () => {        
        setLoading(true);
        await getHandler(auth.authToken, URL_HEADQUARTERS)
        .then((res) => {
            console.log(res);
            setData(res);
            setLoading(false);
        })
        .catch((rej) => {
            console.log(rej);
            setLoading(false);
        })
    }


    return (
        {
            data,
            loading
        }
    );
}
 
export default useHeadquarters;