import { useState } from 'react'
import { Routes } from 'routes/Routes'
import { useRouter } from 'next/router'
import { useUser } from 'context/userContext'
import { useAlert } from 'context/AlertContext'
import { URL_HEADQUARTERS } from 'constant/urls'
import { postHandler } from 'handlers/requestHandler'
import { inputInitialValues, InputProps } from 'interfaces/shared/input'
import { homeNumberValidator, phoneNumberValidator } from 'utils/validators'
import { WarningDialogProps, warningDialogInitialValues } from 'interfaces/shared/warningDialog'

const useAddHeadquarter = () => {
    const auth = useUser()
    const router = useRouter()
    const { setSuccessMessage, setErrorMessage } = useAlert()
    const [loading, setLoading] = useState<boolean>(false)
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

    // Get headquarter name from user
    const nameHandle = (selectedName: string) => {
        setName({
            value: selectedName,
            length: selectedName.trim().length,
            error: false,
            helperText: '',
        })
    }

    // Get headquarter city from user
    const cityHandle = (selectedCity: string) => {
        setCity({
            value: selectedCity,
            length: selectedCity.trim().length,
            error: false,
            helperText: '',
        })
    }

    // Get headquarter region from user
    const regionHandle = (selectedRegion: string) => {
        setRegion({
            value: selectedRegion,
            length: selectedRegion.trim().length,
            error: false,
            helperText: '',
        })
    }

    // Get headquarter street from user
    const streetHandle = (selectedStreet: string) => {
        setStreet({
            value: selectedStreet,
            length: selectedStreet.trim().length,
            error: false,
            helperText: '',
        })
    }

    // Get headquarter building from user
    const buildingHandle = (selectedBuilding: string) => {
        setBuilding({
            value: selectedBuilding,
            length: selectedBuilding.trim().length,
            error: false,
            helperText: '',
        })
    }

    // Get headquarter first phone from user
    const firstPhoneHandle = (selectedFirstPhones: string) => {
        setFirstPhone({
            value: selectedFirstPhones,
            length: selectedFirstPhones.length,
            error: false,
            helperText: '',
        })
    }

    // Get headquarter second phone from user
    const secondPhoneHandle = (selectedSecondPhone: string) => {
        setSecondPhone({
            value: selectedSecondPhone,
            length: selectedSecondPhone.length,
            error: false,
            helperText: '',
        })
    }

    // Get headquarter third phone from user
    const thirdPhoneHandle = (thirdPhone: string) => {
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
            close: closeWarningDialogState,
            submit: cancelSubmit,
            content: {
                head: 'إلغاء العملية',
                body: 'تأكيد إلغاء هذه العملية نهائياً',
                submit: 'تأكيد',
                reject: 'إلغاء',
            },
        })
    }

    // Close warning dialog and clear it
    const closeWarningDialogState = () => {
        setWarningDialog({
            state: false,
            close: () => {},
            submit: () => {},
            content: {
                head: '',
                body: '',
                submit: '',
                reject: '',
            },
        })
    }

    // Cancel proces
    const cancelSubmit = () => {
        closeWarningDialogState()
        setErrorMessage('تم الغاء العمليه بنجاح')
        router.push(Routes.teacherheadquarters)
    }

    // validate all the fields
    const validation = () => {
        let state = true

        if (name.length == 0) {
            state = false
            setName((oldValue: any) => ({
                ...oldValue,
                error: true,
                helperText: 'يجب كتابة اسم المقر',
            }))
        }

        if (city.length == 0) {
            state = false
            setCity((oldValue: any) => ({
                ...oldValue,
                error: true,
                helperText: 'يجب كتابة اسم المدينه',
            }))
        }

        if (region.length == 0) {
            state = false
            setRegion((oldValue: any) => ({
                ...oldValue,
                error: true,
                helperText: 'يجب كتابة اسم المنطقه',
            }))
        }

        if (street.length == 0) {
            state = false
            setStreet((oldValue: any) => ({
                ...oldValue,
                error: true,
                helperText: 'يجب كتابة اسم الشارع',
            }))
        }

        if (building.length == 0) {
            state = false
            setBuilding((oldValue: any) => ({
                ...oldValue,
                error: true,
                helperText: 'يجب كتابة اسم المبني',
            }))
        }

        if (firstPhone.length == 0) {
            state = false
            setFirstPhone((oldValue: any) => ({
                ...oldValue,
                error: true,
                helperText: 'يجب أدخال رقم الهاتف الأول',
            }))
        } else {
            if (!phoneNumberValidator(firstPhone.value) && !homeNumberValidator(firstPhone.value)) {
                state = false
                setFirstPhone((oldValue: any) => ({
                    ...oldValue,
                    error: true,
                    helperText: 'يجب أدخال رقم هاتف صحيح',
                }))
            }
        }

        if (secondPhone.length == 0) {
            state = false
            setSecondPhone((oldValue: any) => ({
                ...oldValue,
                error: true,
                helperText: 'يجب أدخال رقم الهاتف الثاني',
            }))
        } else {
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
        let data = {
            name: name.value,
            city: city.value,
            region: region.value,
            street: street.value,
            building: building.value,
            phones: [firstPhone.value, secondPhone.value],
        }
        if (thirdPhone.value && thirdPhoneState) {
            data.phones.push(thirdPhone.value)
        }
        return data
    }

    // Call api to submit data
    const submit = async () => {
        if (validation()) {
            try {
                setLoading(true)
                const data = await collectData()
                const res = await postHandler(auth.authToken, URL_HEADQUARTERS, data)
                setSuccessMessage('تم اضافة المقر بنجاح')
                router.push(`${Routes.teacherHeadquarter}${res}`)
            } catch (error) {
                console.log(error)
                setErrorMessage('حدث خطاء')
            } finally {
                setLoading(false)
            }
        } else {
            setErrorMessage('يوجد خطاء في المدخلات')
        }
    }

    return {
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
            nameHandle,
            cityHandle,
            regionHandle,
            streetHandle,
            buildingHandle,
            firstPhoneHandle,
            secondPhoneHandle,
            thirdPhoneHandle,
            showThirdPhone,
            hideThirdPhone,
            openWarningDialogState,
            closeWarningDialogState,
            submit,
        },
        dialogs: {
            warningDialog,
        },
    }
}

export default useAddHeadquarter
