import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { useUser } from 'context/userContext'
import useRequestsHandlers from 'hooks/useRequestsHandlers'
import { DropMenuProps, dropMenuInitialValues } from 'interfaces/shared/input'
import Urls from 'constant/urls'

const useStudent = () => {
    const { userState } = useUser()
    const router = useRouter()
    const { id } = router.query
    const { loading, getHandlerById, putHandler } = useRequestsHandlers()
    const [studentData, setStudentData] = useState<any>({})
    const [editGroupState, setEditGroupState] = useState<boolean>(false)
    const [groups, setGroups] = useState<any[]>([])
    const [selectedGroup, setSelectedGroup] = useState<DropMenuProps>(dropMenuInitialValues)

    // Get student data if the user is authorized
    useEffect(() => {
        if (userState.tokens!.accessToken) {
            getStudentData()
        }
    }, [userState.tokens!.accessToken])

    // Call api to get student data
    const getStudentData = async () => {
        try {
            const res: any = await getHandlerById(
                id,
                userState.tokens!.accessToken!,
                Urls.URL_TEACHERSTUDENTS_INFO,
            )
            setStudentData(res.info)
            setGroups(res.info.groups)
        } catch (error) {
            console.log(error)
        }
    }

    // show edit group field
    const editGroupStateHandler = () => {
        setEditGroupState(true)
    }

    // Get selected group from user
    const selectedGroupHandler = (selectedGroup: any) => {
        setSelectedGroup({
            value: selectedGroup.name,
            id: selectedGroup.id,
            error: false,
            helperText: '',
        })
    }

    // Validate data before send it to api
    const validation = () => {
        let state = true
        if (!selectedGroup.id || selectedGroup.id === studentData.groupId) {
            state = false
            setSelectedGroup({
                ...selectedGroup,
                error: true,
                helperText: 'يجب اختيار مجموعه جديده',
            })
        }
        return state
    }

    // Collect data to send it to api
    const collectData = () => {
        const data = {
            studentId: studentData.id,
            groupId: selectedGroup.id,
        }
        return data
    }

    // Call api to submit new group data
    const submitEditGroup = async () => {
        if (validation()) {
            try {
                const data = collectData()
                await putHandler(
                    userState.tokens!.accessToken!,
                    Urls.URL_TEACHERSTUDENTS_GROUP,
                    data,
                )
                router.reload()
            } catch (error) {
                console.log(error)
            }
        }
    }

    return {
        data: {
            studentData,
            groups,
        },
        states: {
            loading,
            editGroupState,
            selectedGroup,
        },
        actions: {
            selectedGroupHandler,
            editGroupStateHandler,
            submitEditGroup,
        },
    }
}

export default useStudent
