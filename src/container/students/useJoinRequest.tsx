import { useEffect, useState } from 'react'
import { useUser } from 'context/userContext'
import { useAlert } from 'context/AlertContext'
import Urls from 'constant/urls'
import useRequestsHandlers from 'hooks/useRequestsHandlers'
import { warningDialogInitialValues, WarningDialogProps } from 'interfaces/shared/warningDialog'

const useRequestsToJoin = () => {
    const { userState } = useUser()
    const { loading, getHandler } = useRequestsHandlers()
    const { setErrorMessage } = useAlert()
    const [requestsData, setRequestsData] = useState<any>()
    const [originalData, setOriginalData] = useState<any>([])
    const [warningDialog, setWarningDialog] = useState<WarningDialogProps>(
        warningDialogInitialValues,
    )

    // Call Function to get page data
    useEffect(() => {
        console.log(warningDialog)
        if (userState.tokens!.accessToken) {
            getRequestsData()
        }
    }, [])

    // Call api to get headcquarters data
    const getRequestsData = async () => {
        try {
            const res = await getHandler(
                userState.tokens!.accessToken!,
                Urls.URL_TEACHERSTUDENT_REQUESTS,
            )
            setRequestsData([
                {
                    levelName: 'string',
                    students: [
                        {
                            id: 'fff+skjb',
                            name: 'mohamed',
                            gender: 'gmail',
                            image: 'qsjikbbsjkbjsakb.png',
                            groupName: 'tetdb',
                            yearState: '31',
                        },
                    ],
                },
                {
                    levelName: 'string',
                    students: [
                        {
                            id: 'fff+skjb',
                            name: 'alaa',
                            gender: 'gmail',
                            image: 'qsjikbbsjkbjsakb.png',
                            groupName: 'tetdb',
                            yearState: '31',
                        },
                    ],
                },
                {
                    levelName: 'string',
                    students: [
                        {
                            id: 'fff+skjb',
                            name: 'eyad',
                            gender: 'gmail',
                            image: 'qsjikbbsjkbjsakb.png',
                            groupName: 'tetdb',
                            yearState: '31',
                        },
                    ],
                },
            ])
            setOriginalData(requestsData)
        } catch (error) {
            setErrorMessage('حدث خطاء')
            console.log(error)
        }
    }

    // Get search value from user
    const searchHandler = (searchValue: string) => {
        setRequestsData(
            originalData.filter((item: any) =>
                item.students[0].name.toLowerCase().includes(searchValue.toLowerCase()),
            ),
        )
    }
    const cancelRequest = () => {
        closeWarningDialogState()
    }
    // Open warning dialog
    const openWarningDialogState = () => {
        setWarningDialog({
            state: true,
            actions: {
                cancel: closeWarningDialogState,
                submit: cancelRequest,
            },
            content: {
                title: ' رفض طلب الانضمام',
                body: 'برجاء تأكيد عملية رفض طلب الانضمام',
                submit: 'رفض',
                cancel: 'إلغاء العملية',
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
    return {
        data: {
            requestsData,
        },
        states: {
            loading,
        },
        actions: {
            searchHandler,
            openWarningDialogState,
        },
        dialogs: {
            warningDialog,
        },
    }
}

export default useRequestsToJoin
