import { useState } from 'react';

const useYearsSetting = () => {

    const [selectedClasses, setSelectedClasses] = useState<any>();
    const [selectedClassrooms, setSelectedClassrooms] = useState<any>();
    const [classesDialogState, setClassesDialogState] = useState<boolean>(false);
    const [classroomsDialogState, setClassroomsDialogState] = useState<boolean>(false);

    const handleSelectedClasses = (selectedClasses: any) => {
        setSelectedClasses(selectedClasses);
    }

    const handleSelectedClasserooms = (selectedClasserooms: any) => {
        setSelectedClassrooms(selectedClasserooms);
    }

    const classesHandleDialogState = () => {
        if(classesDialogState){
            setClassesDialogState(false);
        }else {
            setClassesDialogState(true);
        }
    }
    
    const classroomsHandleDialogState = () => {
        if(classroomsDialogState){
            setClassroomsDialogState(false);
        }else {
            setClassroomsDialogState(true);
        }
    }

    return (
        {
            selectedClasses,
            handleSelectedClasses,
            selectedClassrooms,
            handleSelectedClasserooms,
            classesDialogState,
            classesHandleDialogState,
            classroomsDialogState,
            classroomsHandleDialogState
        }
    );
}

export default useYearsSetting;