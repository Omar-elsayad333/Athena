import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useUser } from 'context/userContext';
import { getHandlerById } from 'handlers/requestHandler';
import { URL_GROUPS } from 'constant/url';

const useGroup = () => {

    const auth = useUser();
    const router = useRouter();
    const { id } = router.query;
    const [ loading, setLoading] = useState<boolean>(false);
    const [ groupData, setGroupData] = useState<any>('');

    // Call getGroupData functionl if user is authorized
    useEffect(() => {
        if(auth.authToken) {
            getGroupData();
        }
    }, [auth.authToken])

    // Call api to get group data from db
    const getGroupData = async () => {
        try {
            setLoading(true);
            const res = await getHandlerById(id, auth.authToken, URL_GROUPS);
            setGroupData(res);
            console.log(res);
        }
        catch(error) {
            console.log(error);
        }
        finally {
            setLoading(false);
        }
    }

    const dayTranslate = (day: string) => {
        if(day == 'Monday')
            return 'الأثنان'

        if(day == 'Tuesday')
            return 'الثلاثاء'

        if(day == 'Wednesday')
            return 'الأربعاء'

        if(day == 'Thursday')
            return 'الخميس'

        if(day == 'Friday')
            return 'الجمعه'

        if(day == 'Saturday')
            return 'السبت'

        if(day == 'Sunday')
            return 'الحد'

        return 'يوم -'
    }

    return (
        {
            data: {
                groupData,
                id
            },
            states: {
                loading,
            },
            actions: {
                dayTranslate,
            }
        }
    );
}
 
export default useGroup;