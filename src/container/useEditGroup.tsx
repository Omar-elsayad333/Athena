import { useState } from 'react';

const useEditGroup = () => {

    const [selectedDays, setSelectedDays] = useState<any>([]);
    const [dialogState, setDialogState] = useState<boolean>(false);
    // const [ timeValue, setTimeValue] = useState<any>();
    const data: any = {
        id: 1,
        name: 'مجموعة قاسم',
        level: 'الصف الثالث الثانوي',
        studentCount: '60',
        location: 'الشون',
        limit: '250',
        schedule: [
            {
                id: 1,
                name: 'saturday',
                content: 'السبت',
                startTime: '04:39 PM',
                endTime: '04:39 PM'
            },
            {
                id: 2,
                name: 'sunday',
                content: 'الاحد',
                startTime: '04:39 PM',
                endTime: '04:39 PM'
            },
            {
                id: 3,
                name: 'monday',
                content: 'الاثنين', 
                startTime: '04:39 PM',
                endTime: '04:39 PM'
            }
        ]
    }
    
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

    // const updateTimeValue = (value: any) => {
    //     setTimeValue(value)
    // }

    const handleDialogState = () => {
        dialogState ? 
        setDialogState(false) : 
        setDialogState(true);
    }

    return (
        {
            
            data,
            states: {
                dialogState,
            },
            func: {
                handleDialogState,
                getSelectedDays,
                selectedDays,
                getSelectedTime
            }
        }
    );
}

export default useEditGroup;