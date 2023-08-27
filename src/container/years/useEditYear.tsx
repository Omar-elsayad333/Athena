import Urls from 'constant/urls'
import { Routes } from 'routes/Routes'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useUser } from 'context/userContext'
import { useAlert } from 'context/AlertContext'
import useRequestsHandlers from 'hooks/useRequestsHandlers'
import { PageErrorProps } from 'interfaces/shared/pageError'

const useEditYear = () => {
    const router = useRouter()
    const { userState } = useUser()
    const { id }: any = router.query
    const { loading, postHandlerById, deleteHandler, getHandlerById, putHandlerById } =
        useRequestsHandlers()
    const { setSuccessMessage, setWarningMessage, setErrorMessage } = useAlert()

    const [yearData, setYearData] = useState<any>('')
    const [levelsData, setLevelsData] = useState<any>('')
    const [levels, setLevels] = useState<any>([])
    const [selectedLevels, setSelectedLevels] = useState<any>([])

    const [errorLabel, setErrorLabel] = useState<PageErrorProps[]>([])
    const [classesDialogState, setClassesDialogState] = useState<boolean>(false)

    // Call getYearData and getRequiredData function if the user is authuraized
    useEffect(() => {
        if (userState.tokens!.accessToken && id) {
            getYearData()
        }
    }, [userState.tokens!.accessToken, id])

    useEffect(() => {
        yearData.id ? getRequiredData() : null
    }, [yearData])

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
            const res = await getHandlerById(
                yearData.id,
                userState.tokens!.accessToken!,
                Urls.URL_YEARS_LEVELS,
            )
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
            setSelectedLevels((oldItems: any) => [
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

    // Open and close level card
    const openAndCloseCard = (levelId: string) => {
        setLevels(
            levels.map((x: any) =>
                x.id === levelId ? { ...x, open: !x.open } : { ...x, open: false },
            ),
        )
        setSelectedLevels(
            selectedLevels.map((x: any) =>
                x.id === levelId ? { ...x, open: !x.open } : { ...x, open: false },
            ),
        )
    }

    const newSelectedIntroFeeHandler = (value: number, levelId: string) => {
        setSelectedLevels(
            selectedLevels.map((x: any) => (x.id === levelId ? { ...x, introFee: value } : x)),
        )
    }

    const newSelectedMonthFeeHandler = (value: number, levelId: string) => {
        setSelectedLevels(
            selectedLevels.map((x: any) => (x.id === levelId ? { ...x, monthFee: value } : x)),
        )
    }

    const newSemesterStartDateHander = (value: number, name: string, levelId: any) => {
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

    const newSemesterEndDateHander = (value: number, name: string, levelId: any) => {
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
    const validate = (levelValue: any, levelHandler: any, levelId: any) => {
        let state = true
        let semesterState = true
        setErrorLabel([])

        console.log(levelValue)
        for (let i = 0; i < levelValue.length; i++) {
            if (levelValue[i].levelId === levelId) {
                const firstOpen = new Date(levelValue[i].fristSemeterStartDate)
                const firstClose = new Date(levelValue[i].fristSemeterEndDate)
                const secondOpen = new Date(levelValue[i].secondSemeterStartDate)
                const secondClose = new Date(levelValue[i].secondSemeterEndDate)
                if (firstOpen > firstClose || secondOpen > secondClose) {
                    const newValue = levelValue[i]
                    newValue!.error = true
                    levelHandler([...levelValue.slice(0, i), newValue, ...levelValue.slice(i + 1)])
                    state = false
                    semesterState = false
                } else if (
                    levelValue[i]?.fristSemeterEndDate! > levelValue[i]?.secondSemeterStartDate!
                ) {
                    const newValue = levelValue[i]
                    newValue!.error = true
                    levelHandler([...levelValue.slice(0, i), newValue, ...levelValue.slice(i + 1)])
                    state = false
                    semesterState = false
                }
                if (
                    levelValue[i]?.introFee == undefined ||
                    levelValue[i]?.introFee == '' ||
                    levelValue[i]?.monthFee == undefined ||
                    levelValue[i]?.monthFee == ''
                ) {
                    const newValue = levelValue[i]
                    newValue!.error = false
                    levelHandler([...levelValue.slice(0, i), newValue, ...levelValue.slice(i + 1)])
                    state = false
                    semesterState = false
                } else {
                    const newValue = levelValue[i]
                    newValue!.error = false
                    levelHandler([...levelValue.slice(0, i), newValue, ...levelValue.slice(i + 1)])
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

        return state
    }

    // Prepare data for request
    const collectNewLevelData = (levelValue: any, levelId: any) => {
        let levelsData = null
        for (let item of levelValue) {
            if (item.levelId === levelId) {
                levelsData = {
                    id: yearData.id,
                    levels: [
                        {
                            id: levelId,
                            introFee: item!.introFee,
                            monthFee: item!.monthFee,
                            semster: {
                                fristSemeterStartDate: new Date(
                                    item!.fristSemeterStartDate,
                                ).toISOString(),
                                fristSemeterEndDate: new Date(
                                    item!.fristSemeterEndDate,
                                ).toISOString(),
                                secondSemeterStartDate: new Date(
                                    item!.secondSemeterStartDate,
                                ).toISOString(),
                                secondSemeterEndDate: new Date(
                                    item!.secondSemeterEndDate,
                                ).toISOString(),
                            },
                        },
                    ],
                }
            }
        }

        return levelsData
    }

    // Call api to add new level
    const submitNewLevel = async (levelId: any) => {
        if (validate(selectedLevels, setSelectedLevels, levelId)) {
            try {
                const data = collectNewLevelData(selectedLevels, levelId)
                await postHandlerById(
                    yearData.id,
                    userState.tokens!.accessToken!,
                    Urls.URL_YEARS_LEVEL,
                    data,
                )
                setSelectedLevels([])
                setSuccessMessage('تم اضافة الفصل الدراسي بنجاح')
                await getYearData()
            } catch (error) {
                console.log(error)
                setErrorMessage('حدث خطاء')
            }
        }
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

    return {
        data: {
            levels,
            yearData,
            levelsData,
            selectedLevels,
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
            selectedIntroFeeHandler,
            selectedMonthFeeHandler,
            semesterStartDateHander,
            semesterEndDateHander,
            newSelectedIntroFeeHandler,
            newSelectedMonthFeeHandler,
            newSemesterStartDateHander,
            newSemesterEndDateHander,
            submitNewLevel,
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
