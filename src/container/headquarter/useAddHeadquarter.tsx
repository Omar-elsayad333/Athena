import { useState } from "react";
import { URL_HEADQUARTERS } from 'constant/url';
import { postHandler } from "handlers/requestHandler";
import { useUser } from "context/userContext";
import { useRouter } from "next/router";
import { useError } from "context/ErrorContext";

type Data = {
    value: string,
    error: boolean,
    helperText: string
};

const initialValues = {
    value: '',
    error: false,
    helperText: ''
}

type Dialog = {
    state: boolean,
    main: string,
    title: string,
    actionContent: any   
}

const dialogInitialValues = {
    state: false,
    main: 'تأكيد إلغاء هذه العملية نهائياً',
    title: 'إلغاء العملية',
    actionContent: {
        first: 'تأكيد',
        second: 'إلغاء'
    }
}

const useAddHeadquarter = () => {

    const auth = useUser();
    const router = useRouter();
    const { setSuccessMessage, setErrorMessage } = useError()
    const [ loading, setLoading] = useState<boolean>(false);
    const [ name, setName] = useState<Data>(initialValues);
    const [ city, setCity] = useState<Data>(initialValues);
    const [ region, setRegion] = useState<Data>(initialValues);
    const [ street, setStreet] = useState<Data>(initialValues);
    const [ building, setBuilding] = useState<Data>(initialValues);
    const [ firstPhone, setFirstPhone] = useState<Data>(initialValues);
    const [ secondPhone, setSecondPhone] = useState<Data>(initialValues);
    const [ thirdPhone, setThirdPhone] = useState<Data>(initialValues);
    const [ submitError, setSubmitError] = useState<Data>(initialValues);
    const [ content, setContent] = useState<Dialog>(dialogInitialValues);

    const handleDialogState = () => {
        if(content.state){
            setContent((oldData) => ({...oldData, state: false}));
        }else {
            setContent((oldData) => ({...oldData, state: true}));
        }
    }

    const nameHandle = (data: string) => {
        setName((oldData: any) => ({...oldData, value: data, error: false, helperText: ''}));
    }

    const cityHandle = (data: string) => {
        setCity((oldData: any) => ({...oldData, value: data, error: false, helperText: ''}));
    }

    const regionHandle = (data: string) => {
        setRegion((oldData: any) => ({...oldData, value: data, error: false, helperText: ''}));
    }

    const streetHandle = (data: string) => {
        setStreet((oldData: any) => ({...oldData, value: data, error: false, helperText: ''}));
    }

    const buildingHandle = (data: string) => {
        setBuilding((oldData: any) => ({...oldData, value: data, error: false, helperText: ''}));
    }

    const firstPhonesHandle = (data: string) => {
        setFirstPhone((oldData: any) => ({...oldData, value: data, error: false, helperText: ''}));
    }

    const secondPhonesHandle = (data: string) => {
        setSecondPhone((oldData: any) => ({...oldData, value: data, error: false, helperText: ''}));
    }

    const thirdPhonesHandle = (data: string) => {
        setThirdPhone((oldData: any) => ({...oldData, value: data}));
    }

    // validate all the fields
    const validation = () => {
        let state = true;
        if(!name.value.trim()){
            setName((oldValue: any) => ({...oldValue, error: true, helperText: 'يجب كتابة اسم المقر'}))
            state = false;
        }

        if(!city.value.trim()){
            setCity((oldValue: any) => ({...oldValue, error: true, helperText: 'يجب كتابة اسم المدينه'}))
            state = false;
        }

        if(!region.value.trim()){
            setRegion((oldValue: any) => ({...oldValue, error: true, helperText: 'يجب كتابة اسم المنطقه'}))
            state = false;
        }

        if(!street.value.trim()){
            setStreet((oldValue: any) => ({...oldValue, error: true, helperText: 'يجب كتابة اسم الشارع'}))
            state = false;
        }

        if(!building.value.trim()){
            setBuilding((oldValue: any) => ({...oldValue, error: true, helperText: 'يجب كتابة اسم المبني'}))
            state = false;
        }

        if(!firstPhone.value.trim()){
            setFirstPhone((oldValue: any) => ({...oldValue, error: true, helperText: 'يجب أدخال رقم الهاتف الأول'}))
            state = false;
        }

        if(!secondPhone.value.trim()){
            setSecondPhone((oldValue: any) => ({...oldValue, error: true, helperText: 'يجب يجب أدخال رقم الهاتف الثاني'}))
            state = false;
        }

        return state
    }

    // call api for request
    const submit = async () => {
        if(validation()){
            setLoading(true);
            let data = {} 
            if(thirdPhone.value.trim()){
                data = {                
                    'name': name.value,
                    'city': city.value,
                    'region': region.value,
                    'street': street.value,
                    'building': building.value,
                    'phones': [
                        firstPhone.value,
                        secondPhone.value,
                        thirdPhone.value
                    ]
                }
                
            }else {
                data = {                
                    'name': name.value,
                    'city': city.value,
                    'region': region.value,
                    'street': street.value,
                    'building': building.value,
                    'phones': [
                        firstPhone.value,
                        secondPhone.value,
                    ]
                }
            }
            await postHandler(auth.authToken, URL_HEADQUARTERS, data)
            .then((res: any) => {
                console.log(res)
                setLoading(false)
                clearFields()
                setSuccessMessage('تم اضافة المقر بنجاح')
                router.push(`/teacher/headquarters/headquarter/${res}`)
            })
            .catch((err: any) => {
                setSubmitError((oldValues) => ({...oldValues, value: err, error: true}));
                setLoading(false)
            })
        }
    }

    const deleteAction = () => {
        clearFields();
        setErrorMessage('تم الغاء العمليه بنجاح');
        router.push('/teacher/headquarters');
    }

    // clear fields after submit
    const clearFields = () => {
        setName((oldValues: any) => ({...oldValues, value: ''}))
        setCity((oldValues: any) => ({...oldValues, value: ''}))
        setRegion((oldValues: any) => ({...oldValues, value: ''}))
        setStreet((oldValues: any) => ({...oldValues, value: ''}))
        setBuilding((oldValues: any) => ({...oldValues, value: ''}))
        setFirstPhone((oldValues: any) => ({...oldValues, value: ''}))
        setSecondPhone((oldValues: any) => ({...oldValues, value: ''}))
        setThirdPhone((oldValues: any) => ({...oldValues, value: ''}))
        setSubmitError((oldValues) => ({...oldValues, value: '', error: false}));
    }

    return (
        {  
            data: {
                name,
                city,
                region,
                street,
                building,
                firstPhone,
                secondPhone,
                thirdPhone
            },
            dataHandlers: {
                nameHandle,
                cityHandle,
                regionHandle,
                streetHandle,
                buildingHandle,
                firstPhonesHandle,
                secondPhonesHandle,
                thirdPhonesHandle
            },
            dialog: {
                content,
                actions: {
                    handleDialogState,
                    submitDialog: deleteAction
                }
            },
            submitActions: {
                submit,
                submitError
            },        
            loading
        }
    );
}
 
export default useAddHeadquarter;