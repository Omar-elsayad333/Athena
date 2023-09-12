import useRequestsHandlers from 'hooks/useRequestsHandlers'

const useHome = () => {
    const { loading } = useRequestsHandlers()

    return {
        data: {},
        states: {
            loading,
        },
    }
}

export default useHome
