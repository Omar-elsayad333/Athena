// import { useRouter } from 'next/router';
import { useState, useEffect } from 'react'
import { useUser } from 'context/userContext'
import useRequestsHandlers from 'hooks/useRequestsHandlers'
import Urls from 'constant/urls'
import { DropMenuProps, dropMenuInitialValues } from 'interfaces/shared/input'

const useStudents = () => {
    const { userState } = useUser()
    const { loading, getHandler } = useRequestsHandlers()
    const [tableState, setTableState] = useState<boolean>(false)
    const [originalYears, setOriginalYears] = useState<any[]>([])
    const [years, setYears] = useState<any[]>([])
    const [selectedYear, setSelectedYear] = useState<DropMenuProps>(dropMenuInitialValues)
    const [levels, setLevels] = useState<any[]>([])
    const [selectedLevel, setSelectedLevel] = useState<DropMenuProps>(dropMenuInitialValues)
    const [students, setStudents] = useState<any[]>([])

    // Get years data if the user is authorized
    useEffect(() => {
        if (userState.tokens!.accessToken) {
            getYearsData()
        }
    }, [userState.tokens!.accessToken])

    // Update the levels data and students data if the user selected new year
    useEffect(() => {
        if (selectedYear.id) {
            getAllStudents()
        }
    }, [selectedYear])

    useEffect(() => {
        if (selectedLevel.id) {
            if (selectedLevel.id === 'all') {
                getAllStudents()
            } else {
                updateStudents()
            }
        }
    }, [selectedLevel])

    // Show table and hide cards
    const showTable = () => {
        setTableState(true)
    }

    // Hide table and show cards
    const hideTable = () => {
        setTableState(false)
    }

    // Update years data to show it to user
    const updateYearsData = (data: any) => {
        if (years.length == 0) {
            const newYears = []
            for (let year of data) {
                newYears.push({
                    id: year.id,
                    name: `${year.start} / ${year.end}`,
                })
            }
            setYears(newYears)
        }
    }

    // Call api to get years data
    const getYearsData = async () => {
        try {
            const res: any = await getHandler(
                userState.tokens!.accessToken!,
                Urls.URL_TEACHERSTUDENTS,
            )
            console.log(res)
            setOriginalYears(res)
            updateYearsData(res)
        } catch (error) {
            console.log(error)
        }
    }

    // Get the selected year from user
    const selectedYearHandler = (year: any) => {
        setSelectedYear({
            value: year.name,
            id: year.id,
            error: false,
            helperText: '',
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

    // Update and get all students data
    const getAllStudents = () => {
        setLevels([])
        setStudents([])
        const index = originalYears.findIndex((x: any) => x.id == selectedYear.id)

        if (index !== -1) {
            loopForLevels: for (let level of originalYears[index].levels) {
                setLevels((levels) => [
                    ...levels,
                    {
                        id: level.teacherCourseLevelId,
                        name: level.levelName,
                    },
                ])
                loopForStudents: for (let student of level.students) {
                    setStudents((students) => [...students, student])
                }
            }
        }
    }

    // Update the students according to the selected level
    const updateStudents = () => {
        if (selectedLevel.id) {
            setStudents([])

            // get the selected year index
            const yearIndex = originalYears.findIndex((x: any) => x.id == selectedYear.id)

            if (yearIndex !== -1) {
                // get the selected level index
                const levelIndex = originalYears[yearIndex].levels.findIndex(
                    (x: any) => x.teacherCourseLevelId == selectedLevel.id,
                )

                if (levelIndex !== -1) {
                    loopForStudents: for (let student of originalYears[yearIndex].levels[levelIndex]
                        .students) {
                        setStudents((students) => [...students, student])
                    }
                }
            }
        }
    }

    return {
        data: {
            years,
            levels,
            students,
        },
        states: {
            loading,
            tableState,
            selectedYear,
        },
        actions: {
            showTable,
            hideTable,
            selectedYearHandler,
            selectedLevelHandler,
        },
    }
}

export default useStudents
