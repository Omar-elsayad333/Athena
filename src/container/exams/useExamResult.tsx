import Urls from 'constant/urls'
import useShard from 'hooks/useShared'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { useUser } from 'context/userContext'
import { useAlert } from 'context/AlertContext'
import useRequestsHandlers from 'hooks/useRequestsHandlers'
import { DropMenuProps, dropMenuInitialValues } from 'interfaces/shared/input'

const useExamResult = () => {
    const router = useRouter()
    const { id } = router.query
    const { userState } = useUser()
    const { useSearchHandler } = useShard()
    const { setErrorMessage, setSuccessMessage } = useAlert()
    const { loading, getHandlerById, putHandlerById } = useRequestsHandlers()

    const [originalData, setOriginalData] = useState<any>([])
    const [studentsData, setStudentsData] = useState<any[]>([])
    const [filterdData, setFilterdData] = useState<any[]>([])

    const [groups, setGroups] = useState<any[]>([])
    const [selectedGroup, setSelectedGroup] = useState<DropMenuProps>(dropMenuInitialValues)

    // Get students data if the user is authorized
    useEffect(() => {
        if ((userState.tokens?.accessToken, id)) {
            getStudentsData()
        }
    }, [userState.tokens?.accessToken, id])

    // Call updateStudents function if selected group changed
    useEffect(() => {
        updateStudents()
    }, [selectedGroup])

    // Call api to get Students data
    const getStudentsData = async () => {
        try {
            const res: any = await getHandlerById(
                id,
                userState.tokens?.accessToken!,
                Urls.URL_TEACHER_EXAMS_RESULTS,
            )
            adjustData(res)
            setOriginalData(res)
            setSelectedGroup({
                ...selectedGroup,
                value: 'all',
                id: 'all',
            })
        } catch (error) {
            setErrorMessage('حدث خطأ')
        }
    }

    // Adjust data for eazy useage
    const adjustData = (res: any) => {
        setFilterdData([])
        setStudentsData([])
        setGroups([])

        res.groups.map((group: any, index: any) => {
            setGroups((groups: any) => [...groups, { name: group.name, id: index }])
            if (group.students) {
                group.students.map((student: any) => {
                    setStudentsData((studentsData: any) => [...studentsData, student])
                })
            }
        })
    }

    // Get the selected group from user
    const selectedGroupHandler = (group: any) => {
        setSelectedGroup({
            value: group.name,
            id: group.id,
            error: false,
            helperText: '',
        })
    }

    // Update the students according to the selected group
    const updateStudents = () => {
        if (selectedGroup.value) {
            setFilterdData([])
            selectedGroup.value === 'all'
                ? setFilterdData(studentsData)
                : originalData.groups.map((group: any) => {
                      if (group.name === selectedGroup.value) {
                          setFilterdData(group.students)
                      }
                  })
        }
    }

    const sendResults = async () => {
        try {
            await putHandlerById(id, userState.tokens?.accessToken!, Urls.URL_TEACHER_EXAMS_READY)
            setSuccessMessage('تم ارسال النتائج للطلبه بنجاح')
            setTimeout(() => {
                router.reload()
            }, 500)
        } catch (error) {
            setErrorMessage('حدث خطأ')
        }
    }

    // Get search value from user
    const searchHandler = (searchValue: string) => {
        useSearchHandler('name', searchValue, studentsData, setFilterdData)
    }

    return {
        data: {
            originalData,
            filterdData,
            groups,
        },
        states: {
            loading,
            selectedGroup,
        },
        actions: {
            selectedGroupHandler,
            searchHandler,
            sendResults,
        },
    }
}

export default useExamResult
