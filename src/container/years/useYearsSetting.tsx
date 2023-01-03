import { useState } from 'react';

const useYearsSetting = () => {

    const [selectedClasses, setSelectedClasses] = useState<any>();
    const [selectedClassrooms, setSelectedClassrooms] = useState<any>([]);
    const [dialogState, setDialogState] = useState<boolean>(false);

    const handleSelectedClasses = (selectedClasses: any) => {
        setSelectedClasses(selectedClasses);
    }

    const handleSelectedClasserooms = (selectedClasserooms: any) => {
        setSelectedClassrooms(selectedClasserooms);
    }

    const handleDialogState = () => {
        if(dialogState){
            setDialogState(false);
        }else {
            setDialogState(true);
        }
    }

    const getSelectedClasses = (selected: any) => {
        setSelectedClasses(selected);
    };
    
    return (
        {
            selectedClasses,
            handleSelectedClasses,
            selectedClassrooms,
            handleSelectedClasserooms,
            dialogState,
            handleDialogState,
            getSelectedClasses
        }
    );
}

export default useYearsSetting;