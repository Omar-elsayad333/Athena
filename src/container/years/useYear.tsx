import Urls from 'constant/urls'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { useUser } from 'context/userContext'
import { useAlert } from 'context/AlertContext'
import useRequestsHandlers from 'hooks/useRequestsHandlers'

const useYear = () => {
    const router = useRouter()
    const { userState } = useUser()
    const { id }: any = router.query
    const { setErrorMessage } = useAlert()
    const { loading, getHandlerById } = useRequestsHandlers()
    const [yearData, setYearData] = useState<any>('')
    const [levelsData, setLevelsData] = useState<any>('')

    // Get page data on load
    useEffect(() => {
        if (userState.tokens?.accessToken && id) {
            getYearData()
        }
    }, [userState.tokens?.accessToken, id])

    useEffect(() => {
        if (yearData) {
            setupLevelsData()
        }
    }, [yearData])

    // Get page data from db
    const getYearData = async () => {
        try {
            const res: any = await getHandlerById(
                id,
                userState.tokens?.accessToken!,
                Urls.URL_YEARS,
            )
            setYearData(res)
        } catch (error) {
            setErrorMessage('حدث خطأ')
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
        },
    }
}

export default useYear
