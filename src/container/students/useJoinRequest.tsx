import { useEffect, useState } from 'react'
import { useUser } from 'context/userContext'
import { useAlert } from 'context/AlertContext'
import Urls from 'constant/urls'
import useRequestsHandlers from 'hooks/useRequestsHandlers'

import { warningDialogInitialValues, WarningDialogProps } from 'interfaces/shared/warningDialog'

const useRequestsToJoin = () => {
    const { userState } = useUser()
    const [filterdData, setFilterdData] = useState<any[]>([])
    const [levelsToSelect, setlevelsToSelect] = useState<any[]>([])
    const { loading, getHandler, putHandlerById } = useRequestsHandlers()
    const { setErrorMessage, setSuccessMessage } = useAlert()
    const [requestsData, setRequestsData] = useState<any>([])
    const [selectedLevel, setSelectedLevel] = useState<Object>({})
    const [originalData, setOriginalData] = useState<any>([])
    const [warningDialog, setWarningDialog] = useState<WarningDialogProps>(
        warningDialogInitialValues,
    )

    // Call Function to get page data
    useEffect(() => {
        if (userState.tokens!.accessToken) {
            getRequestsData()
        }
    }, [])
    useEffect(() => {
        selectedLevelHandler()
    }, [selectedLevel])
    // Call api to get jion requests  data
    const getRequestsData = async () => {
        try {
            const res = await getHandler(
                userState.tokens!.accessToken!,
                Urls.URL_TEACHERSTUDENT_REQUESTS,
            )
            const dummy: Array<Object> = [
                {
                    levelName: '1 sec ',
                    students: [
                        {
                            id: 'mohamedragehb',
                            name: 'mohamed',
                            gender: 'gmail',
                            image: 'https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp',
                            groupName: 'tetdb',
                            yearState: 'el3amEldarsi el 7ali',
                        },
                    ],
                },
                {
                    levelName: '2 sec ',
                    students: [
                        {
                            id: 'mohamedragehb',
                            name: 'alaa',
                            gender: 'gmail',
                            image: 'https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp',
                            groupName: 'tetdb',
                            yearState: 'el3amEldarsi el 7ali',
                        },
                    ],
                },
                {
                    levelName: '3 sec ',
                    students: [
                        {
                            id: 'mohamedragehb',
                            name: 'eyad',
                            gender: 'gmail',
                            image: 'https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp',
                            groupName: 'tetdb',
                            yearState: 'el3amEldarsi el 7ali',
                        },
                    ],
                },
            ]
            setRequestsData(dummy)
            setOriginalData(dummy)
            setFilters(dummy)
        } catch (error) {
            setErrorMessage('حدث خطاء')
            console.log(error)
        }
    }
    const setFilters = (data: Array<any>) => {
        const levels: any[] = []
        data.forEach((element: any, index: Number) => {
            levels.push({ id: index, name: element.levelName })
        })
        setlevelsToSelect(levels)
        console.log(levels, levelsToSelect)
    }
    // Get search value from user
    const searchHandler = (searchValue: string) => {
        setFilterdData(
            filterdData.filter((item: any) =>
                item.students[0].name.toLowerCase().includes(searchValue.toLowerCase()),
            ),
        )
    }
    const cancelRequest = async (id: string) => {
        try {
            const res = await putHandlerById(id, userState.tokens!.accessToken!, Urls.URL_GROUPS)
            setSuccessMessage('تم تعديل بيانات المجموعه بنجاح')
        } catch (error) {
            console.log(error)
            setErrorMessage('حدث خطاء')
        }
        closeWarningDialogState()
    }
    // Open warning dialog
    const openWarningDialogState = () => {
        setWarningDialog({
            state: true,
            actions: {
                cancel: closeWarningDialogState,
                submit: () => cancelRequest,
            },
            content: {
                title: ' رفض طلب الانضمام',
                body: 'برجاء تأكيد عملية رفض طلب الانضمام',
                submit: 'رفض',
                cancel: 'إلغاء العملية',
            },
        })
    }
    // Get the selected level from user
    const selectedLevelSwitch = (level: any) => {
        setSelectedLevel({
            value: level.name,
            id: level.id,
            error: false,
            helperText: '',
        })
    }
    const selectedLevelHandler = () => {
        if (selectedLevel.value != 'all') {
            const filterdArr = originalData.filter(
                (element: any) => element.levelName == selectedLevel.value,
            )
            setFilterdData(filterdArr)
        } else {
            setFilterdData(originalData)

        }
    }

    // Close warning dialog and clear it
    const closeWarningDialogState = () => {
        setWarningDialog({
            ...warningDialog,
            state: false,
        })
    }
    return {
        data: {
            filterdData,
            levelsToSelect,
        },
        states: {
            loading,
        },
        actions: {
            searchHandler,
            openWarningDialogState,
            selectedLevelSwitch,
        },
        dialogs: {
            warningDialog,
        },
    }
}

export default useRequestsToJoin
