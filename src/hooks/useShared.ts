const useShard = () => {
    // Handle search logic
    const useSearchHandler = (
        searchKey: string,
        searchValue: string,
        originalData: any[],
        setter: CallableFunction,
    ) => {
        setter(
            originalData?.filter((item: any) =>
                item[searchKey].toLowerCase().includes(searchValue.toLowerCase()),
            ),
        )
    }

    return { useSearchHandler }
}

export default useShard
