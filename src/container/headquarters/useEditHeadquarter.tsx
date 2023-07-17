import { Routes } from 'routes/Routes'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { useUser } from 'context/userContext'
import { useAlert } from 'context/AlertContext'
import Urls from 'constant/urls'
import { inputInitialValues, InputProps } from 'interfaces/shared/input'
import { homeNumberValidator, phoneNumberValidator } from 'utils/validators'
import useRequestsHandlers from 'hooks/useRequestsHandlers'
import { WarningDialogProps, warningDialogInitialValues } from 'interfaces/shared/warningDialog'

const useEditHeadquarter = () => {
    const router = useRouter()
    const { id } = router.query
    const { userState } = useUser()
    const { loading, getHandlerById, putHandlerById, deleteHandler } = useRequestsHandlers()
    const { setSuccessMessage, setErrorMessage, setWarningMessage } = useAlert()
    const [originalData, setOriginalData] = useState<any>('')
    const [headQuarterData, setHeadQuarterData] = useState<any>('')
    const [name, setName] = useState<InputProps>(inputInitialValues)
    const [city, setCity] = useState<InputProps>(inputInitialValues)
    const [region, setRegion] = useState<InputProps>(inputInitialValues)
    const [street, setStreet] = useState<InputProps>(inputInitialValues)
    const [building, setBuilding] = useState<InputProps>(inputInitialValues)
    const [firstPhone, setFirstPhone] = useState<InputProps>(inputInitialValues)
    const [secondPhone, setSecondPhone] = useState<InputProps>(inputInitialValues)
    const [thirdPhone, setThirdPhone] = useState<InputProps>(inputInitialValues)
    const [thirdPhoneState, setThirdPhoneState] = useState<boolean>(false)
    const [warningDialog, setWarningDialog] = useState<WarningDialogProps>(
        warningDialogInitialValues,
    )

    // Call function to get page data
    useEffect(() => {
        if (userState.tokens!.accessToken && id) {
            getHeadquarterData()
        }
    }, [userState.tokens!.accessToken && id])

    // Call function to check for third phone state after geting data from api
    useEffect(() => {
        if (originalData) {
            checkThirdPhoneState()
        }
    }, [originalData])

    // Call api to get headquarter data
    const getHeadquarterData = async () => {
        try {
            const res = await getHandlerById(
                id,
                userState.tokens!.accessToken!,
                Urls.URL_HEADQUARTERS,
            )
            setOriginalData(res)
            setHeadQuarterData(res)
        } catch (error) {
            console.log(error)
            setErrorMessage('حدث خطاء')
        }
    }

    // Update third phone state
    const checkThirdPhoneState = () => {
        if (originalData.phones.length > 2) {
            setThirdPhoneState(true)
        }
    }

    // Get headquarter name from user
    const nameHandler = (selectedName: string) => {
        setName({
            value: selectedName,
            length: selectedName.trim().length,
            error: false,
            helperText: '',
        })
    }

    // Get headquarter city from user
    const cityHandler = (selectedCity: string) => {
        setCity({
            value: selectedCity,
            length: selectedCity.trim().length,
            error: false,
            helperText: '',
        })
    }

    // Get headquarter region from user
    const regionHandler = (selectedRegion: string) => {
        setRegion({
            value: selectedRegion,
            length: selectedRegion.trim().length,
            error: false,
            helperText: '',
        })
    }

    // Get headquarter street from user
    const streetHandler = (selectedStreet: string) => {
        setStreet({
            value: selectedStreet,
            length: selectedStreet.trim().length,
            error: false,
            helperText: '',
        })
    }

    // Get headquarter building from user
    const buildingHandler = (selectedBuilding: string) => {
        setBuilding({
            value: selectedBuilding,
            length: selectedBuilding.trim().length,
            error: false,
            helperText: '',
        })
    }

    // Get headquarter first phone from user
    const firstPhoneHandler = (selectedFirstPhones: string) => {
        setFirstPhone({
            value: selectedFirstPhones,
            length: selectedFirstPhones.length,
            error: false,
            helperText: '',
        })
    }

    // Get headquarter second phone from user
    const secondPhoneHandler = (selectedSecondPhone: string) => {
        setSecondPhone({
            value: selectedSecondPhone,
            length: selectedSecondPhone.length,
            error: false,
            helperText: '',
        })
    }

    // Get headquarter third phone from user
    const thirdPhoneHandler = (thirdPhone: string) => {
        setThirdPhone({
            value: thirdPhone,
            length: thirdPhone.length,
            error: false,
            helperText: '',
        })
    }

    // Show third phone input to user
    const showThirdPhone = () => {
        setThirdPhoneState(true)
    }

    // Hide third phone input to user
    const hideThirdPhone = () => {
        setThirdPhoneState(false)
    }

    // Open warning dialog
    const openWarningDialogState = () => {
        setWarningDialog({
            state: true,
            actions: {
                cancel: closeWarningDialogState,
                submit: deleteHeadquarter,
            },
            content: {
                title: 'حذف المقر',
                body: 'تأكيد حذف هذا المقر نهائياً',
                submit: 'حذف',
                cancel: 'إلغاء',
            },
        })
    }

    // Close warning dialog and clear it
    const closeWarningDialogState = () => {
        setWarningDialog({
            ...warningDialog,
            state: false,
        })
    }

    // validate all the fields
    const validation = () => {
        let state = true

        if (firstPhone.length > 0) {
            if (!phoneNumberValidator(firstPhone.value) && !homeNumberValidator(firstPhone.value)) {
                state = false
                setFirstPhone((oldValue: any) => ({
                    ...oldValue,
                    error: true,
                    helperText: 'يجب أدخال رقم هاتف صحيح',
                }))
            }
        }

        if (secondPhone.length > 0) {
            console.log('omar')
            if (
                !phoneNumberValidator(secondPhone.value) &&
                !homeNumberValidator(secondPhone.value)
            ) {
                state = false
                setSecondPhone((oldValue: any) => ({
                    ...oldValue,
                    error: true,
                    helperText: 'يجب أدخال رقم هاتف صحيح',
                }))
            }
        }

        if (thirdPhoneState && thirdPhone.length > 0) {
            if (!phoneNumberValidator(thirdPhone.value) && !homeNumberValidator(thirdPhone.value)) {
                state = false
                setThirdPhone((oldValue: any) => ({
                    ...oldValue,
                    error: true,
                    helperText: 'يجب أدخال رقم هاتف صحيح',
                }))
            }
        }

        return state
    }

    // Collect data to submit it
    const collectData = async () => {
        let data: any = {
            id: originalData.id,
            name: name.length ? name.value : originalData.name,
            city: city.length ? city.value : originalData.city,
            region: region.length ? region.value : originalData.region,
            street: street.length ? street.value : originalData.street,
            building: building.length ? building.value : originalData.building,
            phones: [
                {
                    id: originalData.phones[0].id,
                    phone: originalData.phones[0].phone,
                    isDeleted: false,
                },
                {
                    id: originalData.phones[1].id,
                    phone: originalData.phones[1].phone,
                    isDeleted: false,
                },
            ],
            newPhone: null,
        }
        if (originalData.phones.length > 2 && thirdPhoneState) {
            data.phones.push({
                id: originalData.phones[2].id,
                phone: originalData.phones[2].phone,
                isDeleted: false,
            })
        } else if (originalData.phones.length > 2 && !thirdPhoneState) {
            data.phones.push({
                id: originalData.phones[2].id,
                phone: originalData.phones[2].phone,
                isDeleted: true,
            })
        } else if (originalData.phones.length == 2 && thirdPhoneState && thirdPhone.length > 0) {
            data.newPhone = thirdPhone.value
        }

        return data
    }

    // Call api to edit headquarter
    const submit = async () => {
        if (validation()) {
            try {
                const data = await collectData()
                const res = await putHandlerById(
                    id,
                    userState.tokens!.accessToken!,
                    Urls.URL_HEADQUARTERS,
                    data,
                )
                setSuccessMessage('تمت التعديلات بنجاح')
                router.push(`${Routes.teacherHeadquarter}${res}`)
            } catch (error) {
                console.log(error)
                setErrorMessage('حدث خطاء')
            }
        } else {
            setErrorMessage('يوجد خطاء في المدخلات')
        }
    }

    // Call api to delete headquarter
    const deleteHeadquarter = async () => {
        try {
            closeWarningDialogState()
            const res = await deleteHandler(
                id,
                userState.tokens!.accessToken!,
                Urls.URL_HEADQUARTERS,
            )
            console.log(res)
            setWarningMessage('تم حذف المقر بنجاح')
            router.push(Routes.teacherheadquarters)
        } catch (error) {
            console.log(error)
            setErrorMessage('حدث خطاء')
        }
    }

    return {
        data: {
            originalData,
            headQuarterData,
        },
        states: {
            loading,
            name,
            city,
            region,
            street,
            building,
            firstPhone,
            secondPhone,
            thirdPhone,
            thirdPhoneState,
        },
        actions: {
            nameHandler,
            cityHandler,
            regionHandler,
            streetHandler,
            buildingHandler,
            firstPhoneHandler,
            secondPhoneHandler,
            thirdPhoneHandler,
            showThirdPhone,
            hideThirdPhone,
            openWarningDialogState,
            submit,
        },
        dialogs: {
            warningDialog,
        },
    }
}

export default useEditHeadquarter
