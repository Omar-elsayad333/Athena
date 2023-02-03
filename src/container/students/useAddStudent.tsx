import { useState } from 'react'
import { useUser } from 'context/userContext';
import { URL_TEACHERSTUDENT_CODE } from 'constant/url';
import { getHandlerById } from 'handlers/requestHandler';
import { inputInitialValues, InputProps } from 'interfaces/shared/input'
import { errorInitialValues, ErrorProps } from 'interfaces/shared/errors';

const useAddStudent = () => {

    const auth = useUser()
    const [ loading, setLoading ] = useState<boolean>(false)
    const [ studentCode, setStudentCode ] = useState<InputProps>(inputInitialValues)
    const [ codeError, setCodeError ] = useState<ErrorProps>(errorInitialValues)

    // Get the student code from user
    const studentCodeHandler = (selectedStudentCode: string) => {
        console.log(typeof(selectedStudentCode))
        setStudentCode(
            {
                ...studentCode,
                value: selectedStudentCode,
                length: selectedStudentCode.length,
                error: false,
                helperText: ''
            }
        )
        setCodeError(
            {
                ...codeError,
                value: '',
                error: false
            }
        )
    }

    // Validate data before calling api
    const studentCodeValidation = () => {
        let validation: boolean = true;

        if(studentCode.length == 0) {
            validation = false;
            setStudentCode({...studentCode, error: true, helperText: 'يجب ادخال كود الطالب'})
        }

        return validation;
    }

    // Call api to check if the student is exist
    const submitCode = async () => {
        if(studentCodeValidation()) {
            try {
                setLoading(true)
                const res = await getHandlerById(studentCode.value, auth.authToken, URL_TEACHERSTUDENT_CODE);
                console.log(res)
            }
            catch(error: any) {
                console.log(error)
                // if(error.response.status) {
                //     setCodeError(
                //         {
                //             ...codeError,
                //             value: 'هذا الطالب غير موجود في المنظومه !',
                //             error: true
                //         }
                //     )
                // }
            }
            finally {
                setLoading(false)
            }
        }
    }

    return (
        {
            data: {

            },
            states: {
                loading,
                studentCode,
                codeError
            },
            actions: {
                studentCodeHandler,
                submitCode,
            },
            dialogs: {

            }
        }
    );
}
 
export default useAddStudent;