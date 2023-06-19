import Urls from 'constant/urls'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useUser } from 'context/userContext'
import { useAlert } from 'context/AlertContext'
import { yearsToSelect } from 'constant/staticData'
import useRequestsHandlers from 'hooks/useRequestsHandlers'
import { Routes } from 'routes/Routes'
import { dropMenuInitialValues } from 'interfaces/shared/input'
import { DropMenuProps } from 'interfaces/shared/input'

interface semester {
    id?: string
    name: string
    startDate?: string | null
    endDate?: string | null
    state: string
}

interface TeacherCoureLevels {
    id: string
    name: string
    first?: semester | null
    second?: semester | null
}

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

interface ErrorLabel {
    error: boolean
    value: string
}

const ErrorLabelInitialValue = {
    error: false,
    value: '',
}

const useEditYear = () => {
    const router = useRouter()
    const { userState } = useUser()
    const { id }: any = router.query
    const { loading, deleteHandler, getHandler, getHandlerById, putHandlerById } =
        useRequestsHandlers()
    const { setSuccessMessage, setWarningMessage, setErrorMessage } = useAlert()
    const [requiredData, setRequiredData] = useState<any>('')
    const [yearData, setYearData] = useState<any>('')
    const [year, setYear] = useState<DropMenuProps>(dropMenuInitialValues)
    const [selectedYear, setSelectedYear] = useState<DropMenuProps>(dropMenuInitialValues)
    const [levels, setLevels] = useState<TeacherCoureLevels[]>([])

    const [content] = useState<Dialog>(dialogInitialValues)
    const [errorLabel] = useState<ErrorLabel>(ErrorLabelInitialValue)
    const [classesDialogState, setClassesDialogState] = useState<boolean>(false)

    // Call getRequiredData function if the user is authuraized
    useEffect(() => {
        if (userState.tokens.accessToken && id) {
            getRequiredAndYearData()
        }
    }, [userState.tokens.accessToken, id])

    // Update year data after the api response
    useEffect(() => {
        if (yearData) {
            setYear((oldValues) => ({ ...oldValues, name: `${yearData.start} / ${yearData.end}` }))
        }
    }, [yearData])

    // Update levels data after the api response
    useEffect(() => {
        if (yearData && levels.length == 0) {
            for (let item of yearData.levels) {
                setLevels((oldItems: any) => [
                    ...oldItems,
                    {
                        id: item.id,
                        introFee: item.introFee,
                        name: item.levelName,
                        monthFee: item.monthFee,
                        semsters: item.semsters,
                        levelId: item.teacherCourseLevelId,
                        open: false,
                    },
                ])
            }
        }
    }, [yearData])

    // Call api to get required data for this page
    const getRequiredAndYearData = async () => {
        try {
            const requiredRes = await getHandler(
                userState.tokens.accessToken!,
                Urls.URL_YEARS_REQUIRED,
            )
            setRequiredData(requiredRes)
            const yearRes = await getHandlerById(id, userState.tokens.accessToken!, Urls.URL_YEARS)
            setYearData(yearRes)
        } catch (error) {
            console.log(error)
            setErrorMessage('حدث خطاء')
        }
    }

    // Get user selected year
    const getSelectedYear = (selected: any) => {
        setSelectedYear((oldData) => ({ ...oldData, value: selected.name, error: false }))
    }

    // Update year
    const updateYear = async () => {
        try {
            const data = {
                id: id,
                start: parseInt(selectedYear.value.slice(0, 4)),
            }
            await putHandlerById(id, userState.tokens.accessToken!, Urls.URL_YEARS, data)
            getRequiredAndYearData()
            setSuccessMessage('تم تعديل العام الدراسي بنجاح')
        } catch (error) {
            console.log(error)
            setErrorMessage('حدث خطاء')
        }
    }

    // Delete Year
    const deleteYear = async () => {
        try {
            await deleteHandler(yearData.id, userState.tokens.accessToken!, Urls.URL_YEARS)
            setErrorMessage('تم حذف العام الدراسي بنجاح')
            router.replace(Routes.teacherYears)
        } catch (error) {
            console.log(error)
            setErrorMessage('حدث خطاء')
        }
    }

    // End year
    const endYear = async () => {
        try {
            const res = await putHandlerById(
                yearData.id,
                userState.tokens.accessToken!,
                Urls.URL_YEARS_END,
            )
            setWarningMessage('تم انهاء العام الدراسي بنجاح')
            router.replace(`${Routes.teacherYear}/${res}`)
        } catch (error) {
            console.log(error)
            setErrorMessage('حدث خطاء')
        }
    }

    // Get the selected Classes
    const handleSelectedClasses = (selected: any) => {
        // Remove classes
        deleteClass(selected)

        // Add new classes
        for (let selectedClass of selected) {
            const index = levels.findIndex((item) => item.name === selectedClass.name)

            if (index !== -1) {
                console.log('already exist')
            } else {
                setLevels([
                    ...levels,
                    {
                        id: selectedClass.id,
                        name: selectedClass.name,
                        first: selectedClass.first,
                        second: selectedClass.second,
                    },
                ])
            }
        }
    }

    // Remove class
    const deleteClass = async (newSelectedClasses: any) => {
        for (let oldClasses of levels) {
            const index = newSelectedClasses.findIndex((item: any) => item.name === oldClasses.name)

            if (index == -1) {
                for (let i in levels) {
                    if (levels[i]?.name == oldClasses.name) {
                        setLevels([
                            ...levels.slice(0, parseInt(i)),
                            ...levels.slice(parseInt(i) + 1),
                        ])
                    }
                }
            }
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

    const openAndCloseCard = (levelId: string) => {
        setLevels(levels.map((x: any) => (x.id === levelId ? { ...x, open: !x.open } : x)))
    }

    useEffect(() => {
        console.log(levels)
    }, [levels])

    return {
        data: {
            requiredData,
            yearData,
            yearsToSelect,
            levels,
        },
        states: {
            loading,
            errorLabel,
            year,
            selectedYear,
            classesDialogState,
        },
        actions: {
            getSelectedYear,
            classesHandleDialog,
            endYear,
            deleteYear,
            handleSelectedClasses,
            openAndCloseCard,
            updateYear,
        },
        dialogs: {
            classesDialogState,
            content,
            actions: {
                // handleDialogState,
                submitDialog: deleteYear,
            },
        },
    }
}

export default useEditYear
