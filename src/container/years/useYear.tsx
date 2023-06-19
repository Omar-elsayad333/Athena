import Urls from 'constant/urls'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { useUser } from 'context/userContext'
import { useAlert } from 'context/AlertContext'
import useRequestsHandlers from 'hooks/useRequestsHandlers'

const useYear = () => {
    const router = useRouter()
    const { id }: any = router.query
    const { userState } = useUser()
    const { setSuccessMessage, setErrorMessage } = useAlert()
    const { loading, getHandlerById, putHandlerById } = useRequestsHandlers()
    const [yearData, setYearData] = useState<any>('')
    const [levelsData, setLevelsData] = useState<any>('')

    // Get page data on load
    useEffect(() => {
        if (userState.tokens.accessToken && id) {
            getYearData()
        }
    }, [userState.tokens.accessToken, id])

    useEffect(() => {
        if (yearData) {
            setupLevelsData()
        }
    }, [yearData])

    // Get page data from db
    const getYearData = async () => {
        try {
            const res: any = await getHandlerById(id, userState.tokens.accessToken!, Urls.URL_YEARS)
            setYearData(res)
            console.log(res)
        } catch (error) {
            console.log(error)
            setErrorMessage('حدث خطاء')
        }
    }

    const setupLevelsData = () => {
        setLevelsData([])
        for (let item of yearData.levels) {
            setLevelsData((oldItems: any) => [
                ...oldItems,
                {
                    id: item.id,
                    introFee: item.introFee,
                    name: item.levelName,
                    monthFee: item.monthFee,
                    semsters: item.semsters,
                    levelId: item.teacherCourseLevelId,
                    open: false,
                },
            ])
        }
    }

    const openAndCloseCard = (levelId: string) => {
        setLevelsData(levelsData.map((x: any) => (x.id === levelId ? { ...x, open: !x.open } : x)))
    }

    const openSemester = async (semsterId: string) => {
        try {
            const res = await putHandlerById(
                semsterId,
                userState.tokens.accessToken!,
                Urls.URL_YEARS_OPEN_SEMESTER,
            )
            await getYearData()
            setSuccessMessage('تم فتح الفصل الدراسي بنجاح')
            console.log(res)
        } catch (error) {
            console.log(error)
            setErrorMessage('حدث خطاء اثناء فتح الفصل الدراسي')
        }
    }

    return {
        data: {
            yearData,
            levelsData,
        },
        states: {
            loading,
        },
        actions: {
            openAndCloseCard,
            openSemester,
        },
    }
}

export default useYear
