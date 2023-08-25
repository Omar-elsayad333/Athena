import Urls from 'constant/urls'
import { Routes } from 'routes/Routes'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { useUser } from 'context/userContext'
import { useAlert } from 'context/AlertContext'
import { yearsTypes } from 'constant/staticData'
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
    const { setSuccessMessage, setWarningMessage, setErrorMessage } = useAlert()
    const { loading, getHandler, postHandler } = useRequestsHandlers()
    const [requiredData, setRequiredData] = useState<any>('')
    const [selectedYear, setSelectedYear] = useState<YearProps>(YearInitialValue)
    const [selectedLevels, setSelectedLevels] = useState<(LevelsProps | undefined)[]>([])
    const [errorLabel, setErrorLabel] = useState<PageErrorProps[]>([])
    const [content, setContent] = useState<Dialog>(dialogInitialValues)
    const [classesDialogState, setClassesDialogState] = useState<boolean>(false)

    // Get the required data for this page
    useEffect(() => {
        if (userState.tokens!.accessToken) {
            getLevelsData()
        }
    }, [userState.tokens!.accessToken])

    // Get available classes from db
    const getLevelsData = async () => {
        try {
            const res = await getHandler(userState.tokens!.accessToken!, Urls.URL_YEARS_REQUIRED)
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

    // Get user selected year type
    const selectedYearHandler = (selected: any) => {
        setSelectedYear({ name: selected.name, error: false, helperText: '' })
    }

    // Get the selected Classes
    const selectedLevelsHandler = (selected: any) => {
        console.log(selected)
        setSelectedLevels([])
        for (let item of selected) {
            console.log(item)
            setSelectedLevels((selectedLevels: any) => [
                ...selectedLevels,
                {
                    id: item.id,
                    name: item.name,
                    introFee: '',
                    monthFee: '',
                    error: false,
                    open: false,
                    fristSemeterStartDate: '',
                    fristSemeterEndDate: '',
                    secondSemeterStartDate: '',
                    secondSemeterEndDate: '',
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

    const semesterStartDateHander = (value: number, name: string, levelId: any) => {
        name === 'first'
            ? setSelectedLevels(
                  selectedLevels.map((x: any) =>
                      x.id === levelId ? { ...x, fristSemeterStartDate: value } : x,
                  ),
              )
            : setSelectedLevels(
                  selectedLevels.map((x: any) =>
                      x.id === levelId ? { ...x, secondSemeterStartDate: value } : x,
                  ),
              )
    }

    const semesterEndDateHander = (value: number, name: string, levelId: any) => {
        name === 'first'
            ? setSelectedLevels(
                  selectedLevels.map((x: any) =>
                      x.id === levelId ? { ...x, fristSemeterEndDate: value } : x,
                  ),
              )
            : setSelectedLevels(
                  selectedLevels.map((x: any) =>
                      x.id === levelId ? { ...x, secondSemeterEndDate: value } : x,
                  ),
              )
    }

    // Validate all data before collect it
    const validate = () => {
        let state = true
        let yearState = true
        let semesterState = true
        setErrorLabel([])

        // Check for year type selection
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
                const firstOpen = new Date('Sun Aug 27 2023 00:00:00 GMT+0300')
                const firstClose = new Date('Tue Aug 29 2023 00:00:00 GMT+0300')
                const secondOpen = new Date('Sun Aug 27 2023 00:00:00 GMT+0300')
                const secondClose = new Date('Tue Aug 29 2023 00:00:00 GMT+0300')
                if (firstOpen > firstClose || secondOpen > secondClose) {
                    const newValue = selectedLevels[i]
                    newValue!.error = true
                    setSelectedLevels([
                        ...selectedLevels.slice(0, i),
                        newValue,
                        ...selectedLevels.slice(i + 1),
                    ])
                    state = false
                    semesterState = false
                } else if (
                    selectedLevels[i]?.fristSemeterEndDate! >
                    selectedLevels[i]?.secondSemeterStartDate!
                ) {
                    const newValue = selectedLevels[i]
                    newValue!.error = true
                    setSelectedLevels([
                        ...selectedLevels.slice(0, i),
                        newValue,
                        ...selectedLevels.slice(i + 1),
                    ])
                    state = false
                    semesterState = false
                }
                if (
                    selectedLevels[i]?.introFee == undefined ||
                    selectedLevels[i]?.introFee == '' ||
                    selectedLevels[i]?.monthFee == undefined ||
                    selectedLevels[i]?.monthFee == ''
                ) {
                    const newValue = selectedLevels[i]
                    newValue!.error = false
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

        if (!semesterState) {
            setErrorLabel((oldArray) => [
                ...oldArray,
                {
                    name: 'semesterData',
                    value: 'يجب التاكد ان بدية الفصول الدراسيه قبل نهايتها',
                },
            ])
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
                semster: {
                    fristSemeterStartDate: new Date(item!.fristSemeterStartDate).toISOString(),
                    fristSemeterEndDate: new Date(item!.fristSemeterEndDate).toISOString(),
                    secondSemeterStartDate: new Date(item!.secondSemeterStartDate).toISOString(),
                    secondSemeterEndDate: new Date(item!.secondSemeterEndDate).toISOString(),
                },
            })
        }

        const data = {
            state: selectedYear.name === 'عام دراسي' ? 'open' : 'preopen',
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
                const res = await postHandler(userState.tokens!.accessToken!, Urls.URL_YEARS, data)
                setSuccessMessage('تم بدأ عام جديد بنجاح')
                router.push(`${Routes.teacherYear}${res}`)
            } catch (error) {
                console.log(error)
                setErrorMessage('حدث خطاء اثناء اضاقة العام الدراسي')
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
            yearsTypes,
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
            semesterStartDateHander,
            semesterEndDateHander,
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
