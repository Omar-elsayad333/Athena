import Urls from 'constant/urls'
import { Routes } from 'routes/Routes'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { useUser } from 'context/userContext'
import { useAlert } from 'context/AlertContext'
import { useTheme } from 'context/ThemeContext'
import { dayTranslateToArabic } from 'utils/translateors'
import useRequestsHandlers from 'hooks/useRequestsHandlers'
import { PageErrorProps } from 'interfaces/shared/pageError'
import { convertTimeFromDB, convertTimeToDB } from 'utils/converters'
import { warningDialogInitialValues, WarningDialogProps } from 'interfaces/shared/warningDialog'
import {
    dropMenuInitialValues,
    DropMenuProps,
    inputInitialValues,
    InputProps,
} from 'interfaces/shared/input'

const useEditGroup = () => {
    const router = useRouter()
    const { id }: any = router.query
    const { darkMode } = useTheme()
    const { userState } = useUser()
    const { setSuccessMessage, setErrorMessage, setWarningMessage } = useAlert()
    const { loading, deleteHandler, getHandler, getHandlerById, putHandlerById } =
        useRequestsHandlers()
    const [groupData, setGroupData] = useState<any>('')
    const [requiredData, setRequiredData] = useState<any>('')
    const [name, setName] = useState<InputProps>(inputInitialValues)
    const [headquartersData, setHeadquartersData] = useState<any>([])
    const [selectedHeadquarter, setSelectedHeadquarter] =
        useState<DropMenuProps>(dropMenuInitialValues)
    const [limit, setLimit] = useState<InputProps>(inputInitialValues)
    const [selectedDays, setSelectedDays] = useState<any[]>([])
    const [pageErrors, setPageErrors] = useState<PageErrorProps[]>([])
    const [warningDialog, setWarningDialog] = useState<WarningDialogProps>(
        warningDialogInitialValues,
    )
    const [daysDialog, setDaysDialog] = useState<Boolean>(false)

    // Call api to get required data if user is authorized
    useEffect(() => {
        if (userState.tokens!.accessToken && id) {
            getRequiredData()
            getGroupData()
        }
    }, [userState.tokens!.accessToken, id])

    // Call api to get group data if required data is available
    useEffect(() => {
        if (requiredData != '') {
            updateHeadquartersData()
        }
    }, [requiredData])

    // Update dialog UI according to selected days
    useEffect(() => {
        if (selectedDays.length > 0) {
            const dialogDays = document.getElementsByClassName('days')

            loopInDialogDays: for (let i = 0; i < dialogDays.length; i++) {
                loopInSelectedDays: for (let item of selectedDays) {
                    if (dialogDays[i]?.getAttribute('data-day') == item.name) {
                        dialogDays[i]?.classList.add(darkMode ? 'darkSelected' : 'selected')
                    }
                }
            }
        }
    }, [selectedDays])

    useEffect(() => {
        updateSelectedDaysFromDB()
    }, [groupData])

    // Call api to get the required data for the page
    const getRequiredData = async () => {
        try {
            const res = await getHandler(userState.tokens!.accessToken!, Urls.URL_GROUPS_REQUIRED)
            setRequiredData(res)
        } catch (error) {
            console.log(error)
            setErrorMessage('حدث خطاء')
        }
    }

    // Update headquarters data
    const updateHeadquartersData = () => {
        setHeadquartersData(requiredData.headQuaertes)
    }

    // Call api to get group data from db
    const getGroupData = async () => {
        try {
            const res = await getHandlerById(id, userState.tokens!.accessToken!, Urls.URL_GROUPS)
            setGroupData(res)
        } catch (error) {
            console.log(error)
            setErrorMessage('حدث خطاء')
        }
    }

    // Get group name from user
    const nameHandler = (newValue: string) => {
        setName({
            value: newValue,
            length: newValue.trim().length,
            error: false,
            helperText: '',
        })
    }

    // Get the year that the user selected
    const headquarterHandler = (headquarter: any) => {
        setSelectedHeadquarter({
            id: headquarter.id,
            value: headquarter.name,
            error: false,
            helperText: '',
        })
    }

    // Get group limit from user
    const limitHandler = (newValue: string) => {
        setLimit({
            value: newValue,
            length: newValue.trim().length,
            error: false,
            helperText: '',
        })
    }

    // Update selected days from db
    const updateSelectedDaysFromDB = () => {
        if (groupData && selectedDays.length == 0) {
            loopInGroupData: for (let item of groupData.groupScaduals) {
                const newData: any = {
                    name: item.day,
                    content: dayTranslateToArabic(item.day),
                    startTime: convertTimeFromDB(item.startTime),
                    endTime: convertTimeFromDB(item.endTime),
                }
                setSelectedDays((oldValues: any) => [...oldValues, newData])
            }
        }
    }

    // Get the days tha t the user selected
    const getSelectedDays = (selectedDays: any) => {
        setSelectedDays(selectedDays)
    }

    const updateItem = (newTime: any, day: any, name: any) => {
        const indexOfDay = selectedDays.findIndex((x) => x.name === day)

        if (indexOfDay === -1) {
            setErrorMessage('حدث خطاء اثناء اضافة الوقت')
        } else {
            const newValue = selectedDays[indexOfDay]
            newValue[name] = newTime
            setSelectedDays([
                ...selectedDays.slice(0, indexOfDay),
                newValue,
                ...selectedDays.slice(indexOfDay + 1),
            ])
        }
    }

    // Open and close days dialog
    const daysDialogHandler = () => {
        daysDialog ? setDaysDialog(false) : setDaysDialog(true)
    }

    // Open warning dialog
    const openWarningDialog = () => {
        setWarningDialog({
            state: true,
            actions: {
                submit: deleteGroup,
                cancel: closeWarningDialog,
            },
            content: {
                title: 'حذف المجموعة',
                body: 'تأكيد حذف هذه المجموعة نهائياً',
                submit: 'حذف',
                cancel: 'إلغاء',
            },
        })
    }

    // Close warning dialog and clear it
    const closeWarningDialog = () => {
        setWarningDialog({
            ...warningDialog,
            state: false,
        })
    }

    // Validate the data before submit it
    const validation = () => {
        let state = true
        setPageErrors([])
        if (!selectedDays.length) {
            state = false
            setPageErrors((pageErrors) => [
                ...pageErrors,
                {
                    name: 'daysError',
                    value: 'يجب اختيار يوم واحد علي الأقل',
                },
            ])
        }

        return state
    }

    // Collect data to send it to api
    const collectData = async () => {
        const dataToSubmit: any = {
            id: groupData.id,
            name: name.value.trim() != '' ? name.value : groupData.name,
            teacherCourseLevelYearId: groupData.teacherCourseLevelId,
            limit: limit.value.trim() != '' ? limit.value : groupData.limit,
            groupScaduals: [],
            newGroupScaduals: [],
        }

        // Push the selected or old limit to submit object
        if (limit.value != '') {
            dataToSubmit['limit'] = limit.value
        } else {
            dataToSubmit['limit'] = groupData.limit
        }

        // Push the selected or old headquarter to the submit object
        if (selectedHeadquarter.id.trim() !== '') {
            dataToSubmit['headQuarterId'] = selectedHeadquarter.id
        } else {
            dataToSubmit['headQuarterId'] = groupData.headQuarterId
        }

        // Push the new and old data to submit object
        for (let selectedDay of selectedDays) {
            let state: boolean = false
            for (let oldSelectedDays of groupData.groupScaduals) {
                if (selectedDay.name == oldSelectedDays.day) {
                    state = true
                    dataToSubmit.groupScaduals.push({
                        id: oldSelectedDays.id,
                        day: selectedDay.name,
                        startTime: convertTimeToDB(selectedDay.startTime),
                        endTime: convertTimeToDB(selectedDay.endTime),
                        isDeleted: false,
                    })
                }
            }

            if (!state) {
                dataToSubmit.newGroupScaduals.push({
                    day: selectedDay.name,
                    startTime: convertTimeToDB(selectedDay.startTime),
                    endTime: convertTimeToDB(selectedDay.endTime),
                })
            }
        }

        // Push the deleted days to submit object
        for (let oldSelectedDay of groupData.groupScaduals) {
            let state: boolean = false
            for (let selectedDay of selectedDays) {
                if (oldSelectedDay.day == selectedDay.name) {
                    state = true
                }
            }

            if (!state) {
                dataToSubmit.groupScaduals.push({
                    id: oldSelectedDay.id,
                    day: oldSelectedDay.day,
                    startTime: oldSelectedDay.startTime,
                    endTime: oldSelectedDay.endTime,
                    isDeleted: true,
                })
            }
        }

        return dataToSubmit
    }

    // Call api to submit data
    const submit = async () => {
        if (validation()) {
            try {
                const data = await collectData()
                const res = await putHandlerById(
                    groupData.id,
                    userState.tokens!.accessToken!,
                    Urls.URL_GROUPS,
                    data,
                )
                setSuccessMessage('تم تعديل بيانات المجموعه بنجاح')
                router.push(`${Routes.teacherGroup}${res}`)
            } catch (error) {
                console.log(error)
                setErrorMessage('حدث خطاء')
            }
        } else {
            setErrorMessage('الرجاء التأكد أن المدخلات صحيحه')
        }
    }

    // Call api to delete group
    const deleteGroup = async () => {
        try {
            daysDialogHandler()
            await deleteHandler(groupData.id, userState.tokens!.accessToken!, Urls.URL_GROUPS)
            setWarningMessage('تم حذف المجموعه بنجاح')
            router.replace(Routes.teacherGroups)
        } catch (error) {
            console.log(error)
            setErrorMessage('حدث خطاء')
        }
    }

    return {
        data: {
            groupData,
        },
        states: {
            loading,
            name,
            headquartersData,
            selectedHeadquarter,
            limit,
            selectedDays,
            pageErrors,
        },
        actions: {
            nameHandler,
            headquarterHandler,
            limitHandler,
            getSelectedDays,
            updateItem,
            daysDialogHandler,
            submit,
            deleteGroup,
            openWarningDialog,
        },
        dialogs: {
            daysDialog,
            warningDialog,
        },
    }
}

export default useEditGroup
