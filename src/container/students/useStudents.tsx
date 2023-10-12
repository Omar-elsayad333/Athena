import Urls from 'constant/urls'
import useShard from 'hooks/useShared'
import { useState, useEffect } from 'react'
import { useUser } from 'context/userContext'
import { useAlert } from 'context/AlertContext'
import useRequestsHandlers from 'hooks/useRequestsHandlers'
import { DropMenuProps, dropMenuInitialValues } from 'interfaces/shared/input'

const useStudents = () => {
    const { userState } = useUser()
    const { setErrorMessage } = useAlert()
    const { useSearchHandler } = useShard()
    const { loading, getHandler } = useRequestsHandlers()

    const [studentsData, setStudentsData] = useState<any>([])
    const [filterdData, setFilterdData] = useState<any[]>([])

    const [openLevels, setOpenLevels] = useState<any[]>([])
    const [preopenLevels, setPreopenLevels] = useState<any[]>([])

    const [tableState, setTableState] = useState<boolean>(false)
    const [isPreOpenYear, setIsPreOpenYear] = useState<boolean>(false)

    const [selectedLevel, setSelectedLevel] = useState<DropMenuProps>(dropMenuInitialValues)

    // Get years data if the user is authorized
    useEffect(() => {
        if (userState.tokens?.accessToken) {
            getStudentsData()
        }
    }, [userState.tokens?.accessToken])

    // Call updateStudents function is selected level changed
    useEffect(() => {
        updateStudents()
    }, [selectedLevel])

    // Call api to get Students data
    const getStudentsData = async () => {
        try {
            const res: any = await getHandler(
                userState.tokens?.accessToken!,
                Urls.URL_TEACHERSTUDENTS,
            )
            adjustData(res)
            setSelectedLevel({
                ...selectedLevel,
                value: 'all',
                id: 'all',
            })
        } catch (error) {
            setErrorMessage('حدث خطأ')
        }
    }

    // Adjust data for eazy useage
    const adjustData = (res: any) => {
        setOpenLevels([])
        setFilterdData([])
        setStudentsData([])
        setPreopenLevels([])

        const preOpenStudents: any[] = []
        res.preopen.map((level: any) => {
            if (level.students) {
                preOpenStudents.push(...level.students)
            }
            setStudentsData((studentsData: any) => ({
                ...studentsData,
                preopenStudents: preOpenStudents,
            }))
            setPreopenLevels((preopenLevels: any) => [
                ...preopenLevels,
                { name: level.levelName, students: level.students },
            ])
        })

        const openStudents: any[] = []
        res.open.map((level: any) => {
            if (level.students) {
                openStudents.push(...level.students)
            }
            setStudentsData((studentsData: any) => ({
                ...studentsData,
                openStudents: openStudents,
            }))
            setFilterdData((filterdData: any) => [...filterdData, ...level.students])
            setOpenLevels((openLevels: any) => [
                ...openLevels,
                { name: level.levelName, students: level.students },
            ])
        })
    }

    // Handle selected year type from user
    const selectedYearHandler = (yearState: any) => {
        setIsPreOpenYear(yearState)
        yearState
            ? setFilterdData(studentsData?.preopenStudents)
            : setFilterdData(studentsData?.openStudents)
        setSelectedLevel({
            ...selectedLevel,
            value: 'all',
            id: 'all',
        })
    }

    // Get the selected level from user
    const selectedLevelHandler = (level: any) => {
        setSelectedLevel({
            value: level.name,
            id: level.id,
            error: false,
            helperText: '',
        })
    }

    // Update the students according to the selected level
    const updateStudents = () => {
        if (selectedLevel.value) {
            setFilterdData([])
            if (!isPreOpenYear) {
                selectedLevel.value === 'all'
                    ? setFilterdData(studentsData?.openStudents)
                    : openLevels.map((level: any) => {
                          if (level.name === selectedLevel.value) {
                              setFilterdData(level.students)
                          }
                      })
            } else {
                selectedLevel.value === 'all'
                    ? setFilterdData(studentsData?.preopenStudents)
                    : preopenLevels.map((level: any) => {
                          if (level.name === selectedLevel.value) {
                              setFilterdData(level.students)
                          }
                      })
            }
        }
    }

    // Get search value from user
    const searchHandler = (searchValue: string) => {
        useSearchHandler(
            'fullName',
            searchValue,
            isPreOpenYear ? studentsData.preopenStudents : studentsData.openStudents,
            setFilterdData,
        )
    }

    // Show table and hide cards
    const showTable = () => {
        setTableState(true)
    }

    // Hide table and show cards
    const hideTable = () => {
        setTableState(false)
    }

    return {
        data: {
            openLevels,
            preopenLevels,
            filterdData,
        },
        states: {
            loading,
            tableState,
            selectedLevel,
            isPreOpenYear,
        },
        actions: {
            showTable,
            hideTable,
            selectedYearHandler,
            selectedLevelHandler,
            searchHandler,
        },
    }
}

export default useStudents
