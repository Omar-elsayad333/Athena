import { useState } from "react";
import { URL_HEADQUARTERS } from 'constant/url';
import { postHandler } from "handlers/requestHandler";
import { useUser } from "context/userContext";

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

const useAddHeadquarter = () => {

    const auth = useUser()
    const [ loading, setLoading] = useState<boolean>(false);
    const [ name, setName] = useState<Data>(initialValues);
    const [ city, setCity] = useState<Data>(initialValues);
    const [ region, setRegion] = useState<Data>(initialValues);
    const [ street, setStreet] = useState<Data>(initialValues);
    const [ building, setBuilding] = useState<Data>(initialValues);
    const [ firstPhone, setFirstPhone] = useState<Data>(initialValues);
    const [ secondPhone, setSecondPhone] = useState<Data>(initialValues);
    const [ thirdPhone, setThirdPhone] = useState<Data>(initialValues);

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
            })
            .catch((err: any) => {
                console.log(err)
                setLoading(false)
            })
        }
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
            submit,
            loading
        }
    );
}
 
export default useAddHeadquarter;