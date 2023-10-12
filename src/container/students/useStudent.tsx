import Urls from 'constant/urls'
import { Routes } from 'routes/Routes'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { useUser } from 'context/userContext'
import { useAlert } from 'context/AlertContext'
import { studentSections } from 'constant/staticData'
import useRequestsHandlers from 'hooks/useRequestsHandlers'
import { DropMenuProps, dropMenuInitialValues } from 'interfaces/shared/input'

const useStudent = () => {
    const router = useRouter()
    const { id } = router.query
    const { userState } = useUser()
    const { setErrorMessage, setWarningMessage } = useAlert()
    const { loading, getHandlerById, putHandler, deleteHandler } = useRequestsHandlers()
    const [studentData, setStudentData] = useState<any>('')
    const [studentExamsData, setStudentExamsData] = useState<any>('')
    const [editGroupState, setEditGroupState] = useState<boolean>(false)
    const [groups, setGroups] = useState<any[]>([])
    const [selectedSection, setSelectedSection] = useState<any>('')
    const [selectedGroup, setSelectedGroup] = useState<DropMenuProps>(dropMenuInitialValues)
    const [dialogState, setDialogState] = useState<boolean>(false)
    const dialogContent = {
        title: 'حذف الطالب',
        body: 'تأكيد حذف الطالب نهائيا',
        submit: 'حذف',
        cancel: 'إلغاء',
    }

    // Get student data if the user is authorized
    useEffect(() => {
        if ((userState.tokens?.accessToken, id)) {
            getStudentData()
            getStudentExams()
        }
    }, [userState.tokens?.accessToken, id])

    // Select defalut section
    useEffect(() => {
        setSelectedSection({
            id: studentSections[0].id,
            value: studentSections[0].name,
            error: false,
            helperText: '',
        })
    }, [])

    // Call api to get student data
    const getStudentData = async () => {
        try {
            const res: any = await getHandlerById(
                id,
                userState.tokens?.accessToken!,
                Urls.URL_TEACHERSTUDENTS_INFO,
            )
            setStudentData(res.info)
            setGroups(res.info.groups)
        } catch (error) {
            setErrorMessage('حدث خطأ')
        }
    }

    const handleDialogState = () => {
        setDialogState(!dialogState)
    }

    const submitDelete = () => {
        handleDialogState()
        removeStudent()
    }

    const cancleSubmit = () => {
        handleDialogState()
        setDialogState(false)
    }

    // Call api to remove student from teacher
    const removeStudent = async () => {
        try {
            await deleteHandler(id, userState.tokens!.accessToken!, Urls.URL_TEACHERSTUDENTS_INFO)
            router.push(Routes.teacherStudents)
            setWarningMessage('تم مسح الطالب بنجاح')
        } catch (error) {
            setErrorMessage('حدث خطأ')
        }
    }

    // Call api to get student data
    const getStudentExams = async () => {
        try {
            const res: any = await getHandlerById(
                id,
                userState.tokens?.accessToken!,
                Urls.URL_TEACHERSTUDENTS_EXAMS,
            )
            setStudentExamsData(res)
        } catch (error) {
            setErrorMessage('حدث خطأ')
        }
    }

    // Get the selected level from user
    const selectedSectionHandler = (level: any) => {
        setSelectedSection({
            value: level.name,
            id: level.id,
            error: false,
            helperText: '',
        })
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
                    userState.tokens?.accessToken!,
                    Urls.URL_TEACHERSTUDENTS_GROUP,
                    data,
                )
                router.reload()
            } catch (error) {}
        }
    }

    return {
        data: {
            groups,
            studentData,
            studentSections,
            studentExamsData,
            dialogContent,
        },
        states: {
            loading,
            editGroupState,
            selectedGroup,
            selectedSection,
            dialogState,
        },
        actions: {
            selectedGroupHandler,
            editGroupStateHandler,
            selectedSectionHandler,
            submitEditGroup,
            getStudentExams,
            submitDelete,
            cancleSubmit,
            handleDialogState,
        },
        dialogs: {
            content: {
                title: 'حذف الطالب',
                body: 'تأكيد حذف الطالب نهائيا',
                submit: 'حذف',
                cancel: 'إلغاء',
            },
            actions: {
                submit: submitDelete,
                cancel: cancleSubmit,
            },
        },
    }
}

export default useStudent
