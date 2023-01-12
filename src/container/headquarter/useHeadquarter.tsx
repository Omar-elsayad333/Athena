import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useUser } from 'context/userContext';
import { URL_HEADQUARTERS } from 'constant/url';
import { getHandlerById } from 'handlers/requestHandler';

const useHeadquarter = () => {

    const auth = useUser();
    const router = useRouter();
    const { id } = router.query;
    const [ data, setData] = useState<any>('');
    const [ loading, setLoading] = useState<boolean>(true);

    useEffect(()  => {
        if(id && auth.authToken){
            getData();
        }
    }, [id])
    
    const getData = async () => {        
        setLoading(true);
        await getHandlerById(`${id}`, auth.authToken, URL_HEADQUARTERS)
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
 
export default useHeadquarter;