import { useState } from 'react';

const useAddGroup = () => {

    const [selectedDays, setSelectedDays] = useState<any>([]);
    const [dialogState, setDialogState] = useState<boolean>(false);
    const [ timeValue, setTimeValue] = useState<any>();
    
    const getSelectedDays = (selected: any) => {
        console.log(selected)
        setSelectedDays(selected);
    }

    const getSelectedTime = (selected: any) => {
        if(selected.name === 'startTime'){
            for (let i = 0; i < selectedDays.length; i++) {
                if (selectedDays[i].name === selected.day) {
                    selectedDays[i].startTime = selected.time
                }
            }
        }else {
            for (let i = 0; i < selectedDays.length; i++) {
                if (selectedDays[i].name === selected.day) {
                    selectedDays[i].endTime = selected.time
                }
            }
        }

        console.log(selectedDays)
    }

    const updateTimeValue = (value: any) => {
        setTimeValue(value)
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
            timeValue,
            updateTimeValue,
            getSelectedTime,
        }
    )
}

export default useAddGroup;