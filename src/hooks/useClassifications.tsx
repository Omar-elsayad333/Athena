import axios from 'axios';
import { useState, useEffect } from 'react';
import { URL_CLASSIFICATIONS, URL_MAIN } from 'constant/url';

const useClassifications = (authorization: string) => {

    const [ data, setData] = useState<any>('');
    const [ error, setError] = useState<any>('');

    useEffect(() => {
        
        const fetchData = {
            url: URL_MAIN + URL_CLASSIFICATIONS,
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8',  
                'Authorization': `Bearer ${authorization}`
            }
        };
        
        axios(fetchData)
        .then((res: any) => {
            setData(res.data);
        })
        .catch((err: any) => {
            setError(err);
        });
    }, [authorization]);

    return {
        data,
        error
    };
}

export default useClassifications;