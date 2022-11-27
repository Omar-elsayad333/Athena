import { useState } from 'react';

const useAddGroup = () => {

    const [selectedDays, setSelectedDays] = useState<any>([]);
    const [dialogState, setDialogState] = useState<boolean>(false);

    const getSelectedDays = (selected: any) => {
        console.log(selected)
        setSelectedDays(selected);
    }

    const handleDialogState = () => {
        dialogState ? 
        setDialogState(false) : 
        setDialogState(true);
    }

    return (
        {
            selectedDays,
            getSelectedDays,
            dialogState,
            handleDialogState,
        }
    )
}

export default useAddGroup;