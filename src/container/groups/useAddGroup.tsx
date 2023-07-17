import { Routes } from 'routes/Routes'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { useUser } from 'context/userContext'
import { useAlert } from 'context/AlertContext'
import { convertTimeToDB } from 'utils/converters'
import { PageErrorProps } from 'interfaces/shared/pageError'
import Urls from 'constant/urls'
import useRequestsHandlers from 'hooks/useRequestsHandlers'
import { warningDialogInitialValues, WarningDialogProps } from 'interfaces/shared/warningDialog'
import {
    InputProps,
    DropMenuProps,
    inputInitialValues,
    dropMenuInitialValues,
} from 'interfaces/shared/input'

const useAddGroup = () => {
    const router = useRouter()
    const { loading, getHandler, postHandler } = useRequestsHandlers()
    const { userState } = useUser()
    const { setSuccessMessage, setWarningMessage, setErrorMessage } = useAlert()
    const [requiredData, setRequiredData] = useState<any>('')
    const [name, setName] = useState<InputProps>(inputInitialValues)
    const [yearsData, setYearsData] = useState<any>([])
    const [headquartersData, setHeadquartersData] = useState<any>([])
    const [selectedYear, setSelectedYear] = useState<DropMenuProps>(dropMenuInitialValues)
    const [selectedHeadquarter, setSelectedHeadquarter] =
        useState<DropMenuProps>(dropMenuInitialValues)
    const [levelsData, setLevelsData] = useState<any>([])
    const [selectedLevel, setSelectedLevel] = useState<DropMenuProps>(dropMenuInitialValues)
    const [limit, setLimit] = useState<InputProps>(inputInitialValues)
    const [selectedDays, setSelectedDays] = useState<any>([])
    const [pageErrors, setPageErrors] = useState<PageErrorProps[]>([])
    const [warningDialog, setWarningDialog] = useState<WarningDialogProps>(
        warningDialogInitialValues,
    )
    const [daysDialog, setDaysDialog] = useState<Boolean>(false)

    // Call function to get required data if the user is authorized
    useEffect(() => {
        if (userState.tokens!.accessToken) {
            getRequiredData()
        }
    }, [])

    // Update required data from api to useable data
    useEffect(() => {
        if (requiredData) {
            updateYearsData()
            updateHeadquartersData()
        }
    }, [requiredData])

    // Filter classrooms data according to the selected year
    useEffect(() => {
        if (selectedYear.id) {
            updateLevels()
        }
    }, [selectedYear])

    // Call api to get the required data for the page
    const getRequiredData = async () => {
        try {
            const res: any = await getHandler(
                userState.tokens!.accessToken!,
                Urls.URL_GROUPS_REQUIRED,
            )
            setRequiredData(res)
        } catch (error) {
            console.log(error)
            setErrorMessage('حدث خطاء')
        }
    }

    // Update years data
    const updateYearsData = () => {
        if (yearsData.length == 0) {
            for (let year of requiredData.yearLevels) {
                setYearsData((yearsData: any) => [
                    ...yearsData,
                    {
                        id: year.id,
                        name: `${year.start} / ${year.end}`,
                    },
                ])
            }
        }
    }

    // Update headquarters data
    const updateHeadquartersData = () => {
        setHeadquartersData(requiredData.headQuaertes)
    }

    // Filter levels data according to the selected year
    const updateLevels = () => {
        loopInYears: for (let year of requiredData.yearLevels) {
            if (year.id == selectedYear.id) {
                setLevelsData([])
                setSelectedLevel(dropMenuInitialValues)
                loopInLeveles: for (let level of year.levels) {
                    setLevelsData((levels: any) => [
                        ...levels,
                        {
                            id: level.teacherCourseLevelYearId,
                            name: level.levelName,
                        },
                    ])
                }
            }
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
    const yearHandler = (year: any) => {
        setSelectedYear({
            id: year.id,
            value: year.name,
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

    // Get the year that the user selected
    const levelHandler = (level: any) => {
        setSelectedLevel({
            id: level.id,
            value: level.name,
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

    // Get the days that the user selected
    const getSelectedDays = (selected: any) => {
        setSelectedDays(selected)
        if (selected.length) {
            setPageErrors(pageErrors.filter((error) => error.name !== 'daysError'))
        }
    }

    // Get the selected time and update the selected days with the new time
    const updateItem = (newTime: any, day: any, name: any) => {
        const indexOfDay = selectedDays.findIndex((x: any) => x.name === day)

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
    const openWarningDialogState = () => {
        setWarningDialog({
            state: true,
            actions: {
                cancel: closeWarningDialogState,
                submit: cancelSubmit,
            },
            content: {
                title: 'إلغاء العملية',
                body: 'تأكيد إلغاء هذه العملية نهائياً',
                submit: 'تأكيد',
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

        if (name.length == 0) {
            state = false
            setName((name) => ({ ...name, error: true, helperText: 'يجب كتابة اسم للمجموعه' }))
        }

        if (!selectedYear.id) {
            state = false
            setSelectedYear((selectedYear) => ({
                ...selectedYear,
                error: true,
                helperText: 'يجب اختيار سنة دراسيه للمجموعه',
            }))
        }

        if (!selectedLevel.id) {
            state = false
            setSelectedLevel((selectedLevel) => ({
                ...selectedLevel,
                error: true,
                helperText: 'يجب اختيار صف دراسي للمجموعه',
            }))
        }

        if (!selectedHeadquarter.id) {
            state = false
            setSelectedHeadquarter((selectedHeadquarter) => ({
                ...selectedHeadquarter,
                error: true,
                helperText: 'يجب اختيار مقر للمجموعه',
            }))
        }

        if (limit.length == 0) {
            state = false
            setLimit((limit) => ({
                ...limit,
                error: true,
                helperText: 'يجب تحديد حد اقصي لعدد الطلاب',
            }))
        }

        return state
    }

    // Collect data to submit it to api
    const collectData = async () => {
        const data: any = {
            name: name.value,
            headQuarterId: selectedHeadquarter.id,
            teacherCourseLevelYearId: selectedLevel.id,
            limit: parseInt(limit.value),
            groupScaduals: [],
        }

        for (let selectedDay of selectedDays) {
            data.groupScaduals.push({
                day: selectedDay.name,
                startTime: convertTimeToDB(selectedDay.startTime),
                endTime: convertTimeToDB(selectedDay.endTime),
            })
        }

        return data
    }

    // Call api to submit data
    const submit = async () => {
        if (validation()) {
            try {
                const data = await collectData()
                const res = await postHandler(userState.tokens!.accessToken!, Urls.URL_GROUPS, data)
                setSuccessMessage('تم اضافة المجموعه بنجاح')
                router.push(`${Routes.teacherGroup}${res}`)
            } catch (error) {
                console.log(error)
                setErrorMessage('حدث خطاء اثناء الأضافه')
            }
        } else {
            setErrorMessage('الرجاء التأكد أن المدخلات صحيحه')
        }
    }

    // Cancel proccess
    const cancelSubmit = () => {
        closeWarningDialogState()
        setWarningMessage('تم الغاء العمليه بنجاح')
        router.push(Routes.teacherGroups)
    }

    return {
        data: {
            yearsData,
            headquartersData,
            levelsData,
        },
        states: {
            loading,
            name,
            selectedYear,
            selectedHeadquarter,
            selectedLevel,
            limit,
            selectedDays,
            pageErrors,
        },
        actions: {
            nameHandler,
            yearHandler,
            headquarterHandler,
            levelHandler,
            limitHandler,
            getSelectedDays,
            updateItem,
            openWarningDialogState,
            daysDialogHandler,
            submit,
        },
        dialogs: {
            warningDialog,
            daysDialog,
        },
    }
}

export default useAddGroup
