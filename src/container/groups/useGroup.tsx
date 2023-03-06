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
    const [ groupStudents, setGroupStudents ] = useState<any>([])
    const [ loading, setLoading ] = useState<boolean>(false)

    // Call getGroupData functionl if user is authorized
    useEffect(() => {
        if(authToken) {
            getGroupData();
        }
    }, [])

    // Call function to get group students data
    useEffect(() => {
        if(groupData) {
            getGroupStudents()
        }
    }, [groupData])

    // Call api to get group data from db
    const getGroupData = async () => {
        try {
            setLoading(true);
            const res: any = await getHandlerById(id, authToken, URL_GROUPS);
            setGroupData(res);
            console.log(res.groupStudents)
        }
        catch(error) {
            console.log(error);
            setErrorMessage('حدث خطاء')
        }
        finally {
            setLoading(false);
        }
    }

    // Sort data to show it to the user
    const getGroupStudents = () => {
        for(let student of groupData.groupStudents) {
            setGroupStudents((groupStudents: any) => 
                [
                    ...groupStudents,
                    {
                        image: student.image,
                        firstName: student.firstName,
                        lastName: student.lastName,
                        fullName: student.fullName,
                        level: student.level,
                        code: student.code
                    }
                ]
            )
        }
    }

    return (
        {
            data: {
                groupData,
                groupStudents
            },
            states: {
                loading,
            },
        }
    );
}
 
export default useGroup;