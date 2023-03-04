import { URL_GROUPS } from 'constant/url';
import { useState, useEffect } from 'react';
import { useUser } from 'context/userContext';
import { useAlert } from 'context/AlertContext';
import { getHandler } from 'handlers/requestHandler';

const useGroups = () => {

    const { authToken } = useUser()
    const { setErrorMessage } = useAlert()
    const [ loading, setLoading ] = useState<boolean>(false)
    const [ groupsData, setGroupsData ] = useState<any>([])
    const [ originalData, setOriginalData ] = useState<any>([])

    // Call function to get page data if the user authorized
    useEffect(() => {
        if(authToken){
            getGroupsData();
        }
    }, [])

    // Call api to get the groups data
    const getGroupsData = async () => {
        try {
            setLoading(true);
            const res = await getHandler(authToken, URL_GROUPS);
            setGroupsData(res)
            setOriginalData(res)
        }
        catch(error) {
            console.log(error)
            setErrorMessage('حدث خطاء')
        }
        finally {
            setLoading(false);
        }
    }

    // Get search value from user
    const searchHandler = (searchValue: string) => {
        setGroupsData(
            originalData.filter((item: any) => 
                item.name.toLowerCase().includes(searchValue.toLowerCase())
            )
        )
    } 

    return (
        {
            data: {
                groupsData
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
 
export default useGroups;