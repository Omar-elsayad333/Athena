const useShard = () => {
    // Handle search logic
    const useSearchHandler = (
        searchValue: string,
        originalData: any[],
        setNewData: CallableFunction,
    ) => {
        setNewData(
            originalData.filter((item: any) =>
                item.name.toLowerCase().includes(searchValue.toLowerCase()),
            ),
        )
    }

    return { useSearchHandler }
}

export default useShard
