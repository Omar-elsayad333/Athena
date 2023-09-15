import Urls from 'constant/urls'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useUser } from 'context/userContext'
import { useAlert } from 'context/AlertContext'
import useRequestsHandlers from 'hooks/useRequestsHandlers'

const useShowExam = () => {
    const router = useRouter()
    const { id } = router.query
    const { userState } = useUser()
    const { setErrorMessage } = useAlert()
    const { loading, getHandlerById } = useRequestsHandlers()

    const [examData, setExamData] = useState<any>('')
    const [examSections, setExamSections] = useState<any[]>([])

    const [groupsData, setGroupsData] = useState<any[]>([])
    // const [newGroupsData, setNewGroupsData] = useState<any[]>([])
    const [availableGroupsData, setAvailableGroupsData] = useState<any[]>([])
    const [openToEditGroups, setOpenToEditGroups] = useState<boolean>(false)

    useEffect(() => {
        if (userState.tokens?.accessToken && id) {
            getExamData()
            getExamGroups()
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
            adjuctSections(res.sections)
        } catch (error) {
            setErrorMessage('حدث خطاء')
        }
    }

    // Call API to get exam groups
    const getExamGroups = async () => {
        try {
            const response = await getHandlerById(
                id,
                userState.tokens?.accessToken!,
                Urls.URL_TEACHER_EXAMS_GROUPS,
                true,
            )
            setGroupsData(response)
        } catch (error) {
            setErrorMessage('حدث خطاء')
        }
    }

    // Call API to get available groups for this exam
    const getAvailableGroups = async () => {
        try {
            const response = await getHandlerById(
                id,
                userState.tokens?.accessToken!,
                Urls.URL_TEACHER_EXAMS_GROUPS,
                true,
            )
            setAvailableGroupsData(response)
        } catch (error) {
            setErrorMessage('حدث خطاء')
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
        },
        actions: {
            openAndCloseSection,
            openGroupsToEdit,
            closeGroupsToEdit,
        },
    }
}

export default useShowExam
