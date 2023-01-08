import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useUser } from 'context/userContext';
import { URL_HEADQUARTERS } from 'constant/url';
import { getHandlerById, putHandler, deleteHandler } from 'handlers/requestHandler';

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

const useEditHeadquarter = () => {

    const auth = useUser();
    const router = useRouter();
    const { id } = router.query;
    const [ oldData, setOldData] = useState<any>('');
    const [ loading, setLoading] = useState<boolean>(true);
    const [ thirdPhoneState, setThirdPhoneState] = useState<boolean>(false);
    const [ name, setName] = useState<Data>(initialValues);
    const [ city, setCity] = useState<Data>(initialValues);
    const [ region, setRegion] = useState<Data>(initialValues);
    const [ street, setStreet] = useState<Data>(initialValues);
    const [ building, setBuilding] = useState<Data>(initialValues);
    const [ firstPhone, setFirstPhone] = useState<Data>(initialValues);
    const [ secondPhone, setSecondPhone] = useState<Data>(initialValues);
    const [ thirdPhone, setThirdPhone] = useState<Data>(initialValues);

    useEffect(() => {
        setLoading(true);
        getHandlerById(`${id}`, auth.authToken, URL_HEADQUARTERS)
        .then((res: any) => {
            console.log(res);
            if(res.headQuarterPhones[2]){
                setThirdPhoneState(true)
            }
            setOldData(res);
            setLoading(false);
        })
        .catch((rej: any) => {
            console.log(rej);
            setLoading(false);
        })
    }, [])

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

    const thirdPhoneHandle = () => {
        if(thirdPhoneState){
            setThirdPhoneState(false);
        }else{
            setThirdPhoneState(true);
        }
    }

    // prepare data object
    const prepareData = () => {
        const data: any = {
            id: id,
            name: name.value ? name.value : oldData.name,
            city: city.value ? city.value : oldData.city,
            region: region.value ? region.value : oldData.region,
            street: street.value ? street.value : oldData.street,
            building: building.value ? building.value : oldData.building,
        };

        if(oldData.headQuarterPhones[2]){
            data['phones'] = [
                {
                    id: oldData.headQuarterPhones[0].id,
                    phone: firstPhone.value ? firstPhone.value : oldData.headQuarterPhones[0].phone,
                    isDeleted: false
                },
                {
                    id: oldData.headQuarterPhones[1].id,
                    phone: secondPhone.value ? secondPhone.value : oldData.headQuarterPhones[1].phone,
                    isDeleted: false
                },
                {
                    id: oldData.headQuarterPhones[2].id,
                    phone: thirdPhone.value ? thirdPhone.value :  oldData.headQuarterPhones[2].phone,
                    isDeleted: thirdPhoneState ? false : true
                }
            ]

            data['newPhone'] = null

        }else if(thirdPhone.value && thirdPhoneState) {
            data['phones'] = [
                {
                    id: oldData.headQuarterPhones[0].id,
                    phone: firstPhone.value ? firstPhone.value : oldData.headQuarterPhones[0].phone,
                    isDeleted: false
                },
                {
                    id: oldData.headQuarterPhones[1].id,
                    phone: secondPhone.value ? secondPhone.value : oldData.headQuarterPhones[1].phone,
                    isDeleted: false
                }
            ]

            data['newPhone'] = thirdPhone.value

        }else {
            data['phones'] = [
                    {
                    id: oldData.headQuarterPhones[0].id,
                    phone: firstPhone.value ? firstPhone.value : oldData.headQuarterPhones[0].phone,
                    isDeleted: false
                },
                {
                    id: oldData.headQuarterPhones[1].id,
                    phone: secondPhone.value ? secondPhone.value : oldData.headQuarterPhones[1].phone,
                    isDeleted: false
                }   
            ]
            data['newPhones'] = null
        }

        return data
    }

    // call api for request
    const submit = () => {
        setLoading(true);
        const data = prepareData();
        console.log(data)
        if(data) {
            putHandler(id, auth.authToken, URL_HEADQUARTERS, data)
            .then((res: any) => {
                console.log(res)
                setLoading(false)
                clearFields()
                router.push(`/teacher/headquarters/headquarter/${res}`)
            })
            .catch((err: any) => {
                console.log(err)
                setLoading(false)
            })
        }else {
            console.log('error on preparing data')
        }        
    }

    const deleteHeadquarter = () => {
        deleteHandler(id, auth.authToken, URL_HEADQUARTERS)
        .then((res: any) => {
            console.log(res)
            setLoading(false)
            clearFields()
            router.push(`/teacher/headquarters`)
        })
        .catch((err: any) => {
            console.log(err)
            setLoading(false)
        })
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
            thirdPhone: {
                thirdPhoneState,
                thirdPhoneHandle
            },
            oldData,
            loading,
            submit,
            deleteHeadquarter
        }
    );
}
 
export default useEditHeadquarter;