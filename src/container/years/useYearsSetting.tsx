import { useState } from 'react';

const useYearsSetting = () => {

    const [ selectedClasses, setSelectedClasses] = useState<any>();
    const [ selectedClassrooms, setSelectedClassrooms] = useState<any>();
    const [ classesDialogState, setClassesDialogState] = useState<boolean>(false);
    const [ classroomsDialogState, setClassroomsDialogState] = useState<boolean>(false);
    const [ yearStartDate, setYearStartDate] = useState<string>(new Date().toLocaleDateString("en-US"));
    const [ yearEndDate, setYearEndDate] = useState<string>(new Date().toLocaleDateString("en-US"));
    const [ dateValue, setDateValue] = useState<string>(new Date().toLocaleDateString("en-US"));

    const handleSelectedClasses = (selectedClasses: any) => {
        setSelectedClasses(selectedClasses);
    }

    const handleSelectedClasserooms = (selectedClasserooms: any) => {
        setSelectedClassrooms(selectedClasserooms);
    }

    const handleDateValue = (selectedDate: string) => {
        setDateValue(selectedDate);
    }

    const handleYearStartDate = (selectedDate: string) => {
        setYearStartDate(selectedDate);
    }

    const handleYearEndDate = (selectedDate: string) => {
        setYearEndDate(selectedDate);
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

    const submit = () => {
        console.table({
            yearStartDate: yearStartDate,
            yearEndDate: yearEndDate,
            selectedClasses: selectedClasses,
            selectedClassrooms: selectedClassrooms,
            classroomDate: dateValue
        })
    }

    return (
        {
            classes: {
                selectedClasses,
                handleSelectedClasses,
            },
            classrooms: {
                selectedClassrooms,
                handleSelectedClasserooms,
            },
            dialogs: {
                classesDialogState,
                classesHandleDialogState,
                classroomsDialogState,
                classroomsHandleDialogState,
            },
            date: {
                dateValue,
                handleDateValue,
                yearStartDate,
                handleYearStartDate,
                yearEndDate,
                handleYearEndDate
            },
            submit
        }
    );
}

export default useYearsSetting;