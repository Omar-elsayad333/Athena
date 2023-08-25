import Urls from 'constant/urls'
import { Routes } from 'routes/Routes'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useUser } from 'context/userContext'
import { useAlert } from 'context/AlertContext'
import useRequestsHandlers from 'hooks/useRequestsHandlers'

type Dialog = {
    state: boolean
    main: string
    title: string
    actionContent: any
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
    const { loading, postHandlerById, deleteHandler, getHandler, getHandlerById, putHandlerById } =
        useRequestsHandlers()
    const { setSuccessMessage, setWarningMessage, setErrorMessage } = useAlert()

    const [yearData, setYearData] = useState<any>('')
    const [levelsData, setLevelsData] = useState<any>('')
    const [levels, setLevels] = useState<any>([])

    const [errorLabel] = useState<ErrorLabel>(ErrorLabelInitialValue)
    const [classesDialogState, setClassesDialogState] = useState<boolean>(false)

    // Call getYearData and getRequiredData function if the user is authuraized
    useEffect(() => {
        if (userState.tokens!.accessToken && id) {
            getYearData()
            getRequiredData()
        }
    }, [userState.tokens!.accessToken, id])

    // Call api to get year data
    const getYearData = async () => {
        try {
            const res = await getHandlerById(id, userState.tokens!.accessToken!, Urls.URL_YEARS)
            setYearData(res)
            adjustLevelsData(res)
        } catch (error) {
            console.log(error)
            setErrorMessage('حدث خطاء')
        }
    }

    // Call api to get required data
    const getRequiredData = async () => {
        try {
            const res = await getHandler(userState.tokens!.accessToken!, Urls.URL_YEARS_REQUIRED)
            setLevelsData(res)
        } catch (error) {
            console.log(error)
            setErrorMessage('حدث خطاء')
        }
    }

    // Update levels data after the api response
    const adjustLevelsData = (data: any) => {
        setLevels([])
        for (let item of data.levels) {
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
                    error: false,
                },
            ])
        }
    }

    // Call api to add new class
    const submitAddNewClass = async () => {
        try {
            const res = await postHandlerById(
                yearData.id,
                userState.tokens!.accessToken!,
                Urls.URL_YEARS_LEVEL,
            )
            setLevelsData(res)
        } catch (error) {
            console.log(error)
            setErrorMessage('حدث خطاء')
        }
    }

    // Get the selected Classes
    const handleSelectedClasses = (selected: any) => {
        for (let item of selected) {
            setLevels((oldItems: any) => [
                ...oldItems,
                {
                    id: null,
                    levelId: item.id,
                    introFee: null,
                    name: item.name,
                    monthFee: null,
                    semsters: null,
                    open: false,
                    error: true,
                },
            ])
        }
    }

    // Call api to Delete class
    const deleteClass = async (levelId: string) => {
        try {
            await deleteHandler(levelId, userState.tokens!.accessToken!, Urls.URL_YEARS_LEVEL)
            setWarningMessage('تم حذف الفصل الدراسي بنجاح')
            getYearData()
        } catch (error) {
            setErrorMessage('حدث خطاء')
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

    // Open and close level card\
    const openAndCloseCard = (levelId: string) => {
        setLevels(levels.map((x: any) => (x.id === levelId ? { ...x, open: !x.open } : x)))
    }

    // Call api to Delete Year
    const deleteYear = async () => {
        try {
            await deleteHandler(yearData.id, userState.tokens!.accessToken!, Urls.URL_YEARS)
            setWarningMessage('تم حذف العام الدراسي بنجاح')
            router.replace(Routes.teacherYears)
        } catch (error) {
            console.log(error)
            setErrorMessage('حدث خطاء')
        }
    }

    // Call api to End year
    const endYear = async () => {
        try {
            const res = await putHandlerById(
                yearData.id,
                userState.tokens!.accessToken!,
                Urls.URL_YEARS_END,
            )
            setWarningMessage('تم انهاء العام الدراسي بنجاح')
            router.replace(`${Routes.teacherYear}/${res}`)
        } catch (error) {
            console.log(error)
            setErrorMessage('حدث خطاء')
        }
    }

    useEffect(() => {
        console.log(levels)
    }, [levels])

    return {
        data: {
            levels,
            yearData,
            levelsData,
        },
        states: {
            loading,
            errorLabel,
            classesDialogState,
        },
        actions: {
            endYear,
            deleteYear,
            submitAddNewClass,
            handleSelectedClasses,
            deleteClass,
            openAndCloseCard,
            classesHandleDialog,
        },
        dialogs: {
            classesDialogState,
            actions: {
                // handleDialogState,
                submitDialog: deleteYear,
            },
        },
    }
}

export default useEditYear
