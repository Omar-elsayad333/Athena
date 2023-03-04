import { useRouter } from 'next/router';
import { URL_GROUPS } from 'constant/url';
import { useState, useEffect } from 'react';
import { useUser } from 'context/userContext';
import { getHandlerById } from 'handlers/requestHandler';
import { useAlert } from 'context/AlertContext';

const useGroup = () => {

    const router = useRouter()
    const { id } = router.query
    const { authToken } = useUser()
    const { setErrorMessage } = useAlert()
    const [ groupData, setGroupData ] = useState<any>('')
    const [ loading, setLoading ] = useState<boolean>(false)

    // Call getGroupData functionl if user is authorized
    useEffect(() => {
        if(authToken) {
            getGroupData();
        }
    }, [])

    // Call api to get group data from db
    const getGroupData = async () => {
        try {
            setLoading(true);
            const res = await getHandlerById(id, authToken, URL_GROUPS);
            setGroupData(res);
        }
        catch(error) {
            console.log(error);
            setErrorMessage('حدث خطاء')
        }
        finally {
            setLoading(false);
        }
    }

    return (
        {
            data: {
                groupData,
            },
            states: {
                loading,
            },
        }
    );
}
 
export default useGroup;