import Urls from 'constant/urls'
import { Routes } from 'routes/Routes'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useUser } from 'context/userContext'
import { useAlert } from 'context/AlertContext'
import useRequestsHandlers from 'hooks/useRequestsHandlers'

const useShowExam = () => {
    const router = useRouter()
    const { id } = router.query
    const { userState } = useUser()
    const { setErrorMessage, setWarningMessage, setSuccessMessage } = useAlert()
    const { loading, getHandlerById, deleteHandler, postHandlerById } = useRequestsHandlers()

    const [examData, setExamData] = useState<any>('')
    const [examSections, setExamSections] = useState<any[]>([])

    const [groupsData, setGroupsData] = useState<any[]>([])
    const [newGroupsData, setNewGroupsData] = useState<any[]>([])
    const [availableGroupsData, setAvailableGroupsData] = useState<any[]>([])
    const [openToEditGroups, setOpenToEditGroups] = useState<boolean>(false)

    useEffect(() => {
        if (userState.tokens?.accessToken && id) {
            getExamData()
            getAvailableGroups()
        }
    }, [userState.tokens?.accessToken, id])

    // Call API to get exam data
    const getExamData = async () => {
        try {
            const res = await getHandlerById(
                id,
                userState.tokens?.accessToken!,
                Urls.URL_TEACHER_EXAMS,
            )
            setExamData(res)
            setExamSections(res.sections)
            setGroupsData(res.groups)
            adjuctSections(res.sections)
        } catch (error) {
            setErrorMessage('حدث خطأ')
        }
    }

    // Call API to get available groups for this exam
    const getAvailableGroups = async () => {
        try {
            const response = await getHandlerById(
                id,
                userState.tokens?.accessToken!,
                Urls.URL_TEACHER_EXAMS_GROUP,
                true,
            )
            setAvailableGroupsData(response)
        } catch (error) {
            setErrorMessage('حدث خطأ')
        }
    }

    // Adjust section to be handelable
    const adjuctSections = (sections: any) => {
        for (let section of sections) {
            section['open'] = false
        }
    }

    // Open and close section
    const openAndCloseSection = (sectionIndex: number) => {
        const selectedSection = examSections[sectionIndex]
        selectedSection.open = !selectedSection.open

        setExamSections([
            ...examSections.slice(0, sectionIndex),
            selectedSection,
            ...examSections.slice(sectionIndex + 1),
        ])
    }

    // Open to edit groups handler
    const openGroupsToEdit = () => {
        setOpenToEditGroups(true)
    }

    // Close to edit groups handler
    const closeGroupsToEdit = () => {
        setOpenToEditGroups(false)
        setNewGroupsData([])
    }

    // Get new groups handler
    const getNewGroups = (groupId: string) => {
        if (newGroupsData.includes(groupId)) {
            setNewGroupsData((newGroupsData) => newGroupsData.filter((group) => group !== groupId))
        } else {
            setNewGroupsData((newGroupsData: any) => [...newGroupsData, groupId])
        }
    }

    // Collect and adjust data for api
    const collectNewGroupsData = () => {
        const data = {
            id: id,
            groupIds: newGroupsData,
        }
        return data
    }

    // Submit new groups
    const submitGroups = async () => {
        try {
            const data = collectNewGroupsData()
            await postHandlerById(
                id,
                userState.tokens?.accessToken!,
                Urls.URL_TEACHER_EXAMS_GROUP,
                data,
            )
            setSuccessMessage('تم اضافه المجموعات بنجاح')
            setTimeout(() => {
                router.reload()
            }, 1000)
        } catch (error) {
            setErrorMessage('حدث خطأ')
        }
    }

    // Remove group from exam
    const removeGroup = async (groupId: string) => {
        try {
            await deleteHandler(
                groupId,
                userState.tokens?.accessToken!,
                Urls.URL_TEACHER_EXAMS_GROUP,
            )
            setWarningMessage('تم حذف المجموعه بنجاح')
            setTimeout(() => {
                router.reload()
            }, 1000)
        } catch (error) {
            setErrorMessage('حدث خطأ')
        }
    }

    const deleteExam = async () => {
        try {
            await deleteHandler(id, userState.tokens?.accessToken!, Urls.URL_TEACHER_EXAMS)
            setWarningMessage('تم حذف الأمتحان بنجاح')
            router.push(Routes.teacherExams)
        } catch (error) {
            setErrorMessage('حدث خطأ')
        }
    }

    return {
        data: {
            examData,
            examSections,
            groupsData,
            availableGroupsData,
        },
        states: {
            loading,
            openToEditGroups,
            newGroupsData,
        },
        actions: {
            openAndCloseSection,
            openGroupsToEdit,
            closeGroupsToEdit,
            getNewGroups,
            submitGroups,
            removeGroup,
            deleteExam,
        },
    }
}

export default useShowExam
