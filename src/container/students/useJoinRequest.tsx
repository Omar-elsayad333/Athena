import { useEffect, useState } from 'react'
import { useUser } from 'context/userContext'
import { useAlert } from 'context/AlertContext'
import Urls from 'constant/urls'
import useRequestsHandlers from 'hooks/useRequestsHandlers'

import { warningDialogInitialValues, WarningDialogProps } from 'interfaces/shared/warningDialog'

const useRequestsToJoin = () => {
    const { userState } = useUser()
    const [filterdData, setFilterdData] = useState<Object[]>([])
    const [levelsToSelect, setlevelsToSelect] = useState<any[]>([])
    const { loading, getHandler, putHandlerById } = useRequestsHandlers()
    const { setErrorMessage, setSuccessMessage } = useAlert()
    const [requestsData, setRequestsData] = useState<any>([])
    const [currentRequestId, setcurrentRequestId] = useState<any>(null)
    const [selectedLevel, setSelectedLevel] = useState<any>({
        error: false,
        helperText: '',
        id: 'all',
        value: 'all',
    })
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

    // Call api to get join requests  data
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
                            id: 'mohamedragcccehb',
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
                            id: 'mohamedragehbaa',
                            name: 'alaa',
                            gender: 'gmail',
                            image: 'https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp',
                            groupName: 'tetdb',
                            yearState: 'el3amEldarsi el 7ali',
                        },
                    ],
                },{
                
                    levelName: '3 sec ',
                    students: [
                        {
                            id: 'mohamedragehcccccb',
                            name: 'eyad',
                            gender: 'gmail',
                            image: 'https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp',
                            groupName: 'tetdb',
                            yearState: 'el3amEldarsi el 7ali',
                        },
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
    }
    // Get search value from user
    const searchHandler = (searchValue: string) => {
        if (searchValue.split('').length > 0) {
            setFilterdData(
                filterdData.filter((item: any) =>
                    item.students[0].name.toLowerCase().includes(searchValue.toLowerCase()),
                ),
            )
        } else {
            selectedLevelHandler()
        }
    }
    const cancelRequest = async (id: string) => {
    
        closeWarningDialogState()
    }
    // Open warning dialog
    const openWarningDialogState = (id: string) => {
        setWarningDialog({
            state: true,
            actions: {
                cancel: closeWarningDialogState,
                submit: cancelRequest(id) as any,
            },
            content: {
                body: 'برجاء تأكيد عملية رفض طلب الانضمام',
                submit: 'رفض',
                cancel: 'إلغاء العملية',
                title: ' رفض طلب الانضمام',
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
    useEffect(() => {
        selectedLevelHandler()
    }, [selectedLevel,originalData])
    const selectedLevelHandler = () => {
        if (selectedLevel.id != 'all') {
            const filterdArr = originalData.filter(
                (element: any) => element.levelName == selectedLevel.value,
            )
            setFilterdData(filterdArr)
        } else {
            adjustAllForDisplaing()
        }
    }
    const adjustAllForDisplaing = () => {
        let allStudent : Object[] = []
        let allObj: any = { levelName: null, students: [] }
        allObj.levelName = selectedLevel.id
        originalData.forEach((item : viod)=>{
            item.students.forEach((subItem: viod)=>{
                allObj.students.push(subItem)
            })
        })
        allStudent.push(allObj)
        setFilterdData(allStudent)
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
