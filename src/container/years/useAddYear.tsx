import Urls from 'constant/url'
import { Routes } from 'routes/Routes'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { useUser } from 'context/userContext'
import { useAlert } from 'context/AlertContext'
import { yearsToSelect } from 'constant/staticData'
import useRequestsHandlers from 'hooks/useRequestsHandlers'
import { PageErrorProps } from 'interfaces/shared/pageError'
import { LevelsProps, YearProps, YearInitialValue } from 'interfaces/teacher/years/addYear'

type Dialog = {
    state: boolean
    main: string
    title: string
    actionContent: any
}

const dialogInitialValues = {
    state: false,
    main: 'تأكيد إلغاء هذه العملية نهائياً',
    title: 'إلغاء العملية',
    actionContent: {
        first: 'تأكيد',
        second: 'إلغاء',
    },
}

const useAddYear = () => {
    const router = useRouter()
    const { userState } = useUser()
    const { setSuccessMessage, setWarningMessage } = useAlert()
    const { loading, getHandler, postHandler } = useRequestsHandlers()
    const [requiredData, setRequiredData] = useState<any>('')
    const [selectedYear, setSelectedYear] = useState<YearProps>(YearInitialValue)
    const [selectedLevels, setSelectedLevels] = useState<(LevelsProps | undefined)[]>([])
    const [errorLabel, setErrorLabel] = useState<PageErrorProps[]>([])
    const [content, setContent] = useState<Dialog>(dialogInitialValues)
    const [classesDialogState, setClassesDialogState] = useState<boolean>(false)

    // Get the required data for this page
    useEffect(() => {
        if (userState.tokens.accessToken) {
            getLevelsData()
        }
    }, [userState.tokens.accessToken])

    // Get available classes from db
    const getLevelsData = async () => {
        try {
            const res = await getHandler(userState.tokens.accessToken!, Urls.URL_YEARS_REQUIRED)
            setRequiredData(res)
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }

    // Open and close cancel submit dialog
    const handleDialogState = () => {
        if (content.state) {
            setContent((oldData) => ({ ...oldData, state: false }))
        } else {
            setContent((oldData) => ({ ...oldData, state: true }))
        }
    }

    // Open and close classes dialog
    const classesHandleDialog = () => {
        if (classesDialogState) {
            setClassesDialogState(false)
        } else {
            setClassesDialogState(true)
        }
    }

    // Get user selected year
    const selectedYearHandler = (selected: any) => {
        setSelectedYear({ name: selected.name, error: false })
    }

    // Get the selected Classes
    const selectedLevelsHandler = (selected: any) => {
        setSelectedLevels([])
        for (let item of selected) {
            setSelectedLevels((oldValues: any) => [
                ...oldValues,
                {
                    id: item.id,
                    name: item.name,
                    introFee: undefined,
                    monthFee: undefined,
                    error: false,
                    open: false,
                },
            ])
        }
    }

    const openAndCloseCard = (levelId: string) => {
        setSelectedLevels(
            selectedLevels.map((x: any) => (x.id === levelId ? { ...x, open: !x.open } : x)),
        )
    }

    const selectedIntroFeeHandler = (value: number, levelId: string) => {
        setSelectedLevels(
            selectedLevels.map((x: any) => (x.id === levelId ? { ...x, introFee: value } : x)),
        )
    }

    const selectedMonthFeeHandler = (value: number, levelId: string) => {
        setSelectedLevels(
            selectedLevels.map((x: any) => (x.id === levelId ? { ...x, monthFee: value } : x)),
        )
    }

    // Validate all data before collect it
    const validate = () => {
        let state = true
        let yearState = false
        setErrorLabel([])

        // Check for year selection
        if (!selectedYear.name) {
            setSelectedYear({ ...selectedYear, error: true })
            setErrorLabel((oldArray) => [
                ...oldArray,
                {
                    name: 'yearSelection',
                    value: 'يجب اختيار عام دراسي',
                },
            ])
            state = false
        } else {
            setSelectedYear({ ...selectedYear, error: false })
        }

        // Check for leves selection
        if (selectedLevels.length == 0) {
            setErrorLabel((oldArray) => [
                ...oldArray,
                {
                    name: 'choseLevel',
                    value: 'يجب تحديد صف دراسي واحد علي الأقل',
                },
            ])
            state = false
        } else {
            for (let i = 0; i < selectedLevels.length; i++) {
                selectedLevels[i]!.open = false
                if (
                    selectedLevels[i]?.introFee == undefined ||
                    selectedLevels[i]?.introFee == '' ||
                    selectedLevels[i]?.monthFee == undefined ||
                    selectedLevels[i]?.monthFee == ''
                ) {
                    const newValue = selectedLevels[i]
                    newValue!.error = true
                    setSelectedLevels([
                        ...selectedLevels.slice(0, i),
                        newValue,
                        ...selectedLevels.slice(i + 1),
                    ])
                    yearState = false
                    state = false
                } else {
                    const newValue = selectedLevels[i]
                    newValue!.error = false
                    setSelectedLevels([
                        ...selectedLevels.slice(0, i),
                        newValue,
                        ...selectedLevels.slice(i + 1),
                    ])
                }
            }
        }

        if (!yearState) {
            setErrorLabel((oldArray) => [
                ...oldArray,
                {
                    name: 'levelData',
                    value: 'يجب اكمال بيانات الصف الدراسي',
                },
            ])
        }
        return state
    }

    // Prepare data for request
    const collectData = () => {
        const levelsData = []
        for (let item of selectedLevels) {
            levelsData.push({
                id: item!.id,
                introFee: item!.introFee,
                monthFee: item!.monthFee,
            })
        }
        const data = {
            start: parseInt(selectedYear.name.slice(0, 4)),
            teacherCoureLevels: levelsData,
        }

        return data
    }

    // Call api to submit data
    const submit = async () => {
        if (validate()) {
            // Collect data
            const data = collectData()
            try {
                const res = await postHandler(userState.tokens.accessToken!, Urls.URL_YEARS, data)
                setSuccessMessage('تم بدأ عام جديد بنجاح')
                router.push(`${Routes.teacherYear}/${res}`)
            } catch (error) {
                console.log(error)
                setErrorLabel([{ name: '', value: `${error}` }])
            }
        }
    }

    // Cancel the progress
    const cancelSubmit = () => {
        setWarningMessage('تم الغاء العمليه بنجاح')
        router.push(Routes.teacherYears)
    }

    return {
        data: {
            requiredData,
            yearsToSelect,
            selectedLevels,
        },
        states: {
            loading,
            errorLabel,
            selectedYear,
            classesDialogState,
        },
        actions: {
            selectedYearHandler,
            classesHandleDialog,
            selectedLevelsHandler,
            openAndCloseCard,
            selectedIntroFeeHandler,
            selectedMonthFeeHandler,
            submit,
            cancelSubmit,
        },
        dialog: {
            content,
            actions: {
                handleDialogState,
                submitDialog: cancelSubmit,
            },
        },
    }
}

export default useAddYear
