import { useState, useEffect } from 'react';
import { yearsToSelect } from 'constant/staticData';

const useYearsSetting = () => {

    const [ yearActive, setYearActive] = useState<boolean>(false);
    const [ selectedClasses, setSelectedClasses] = useState<any>();
    const [ selectedClassrooms, setSelectedClassrooms] = useState<any>();
    const [ classesDialogState, setClassesDialogState] = useState<boolean>(false);
    const [ classroomsDialogState, setClassroomsDialogState] = useState<boolean>(false);
    const [ yearStartDate, setYearStartDate] = useState<string>(new Date().toLocaleDateString("en-US"));
    const [ yearEndDate, setYearEndDate] = useState<string>(new Date().toLocaleDateString("en-US"));
    const [ dateValue, setDateValue] = useState<string>(new Date().toLocaleDateString("en-US"));

    // For year animation
    useEffect(() => {
        const classesSection: any = document.getElementsByClassName('classes-section');

        if(yearActive){
            if(classesSection){
                for(let i = 0; i < classesSection.length; i++){
                    classesSection[i].style.opacity = '1';
                    classesSection[i].style.transition = '.2s';
                }
            }
        }else {
            if(classesSection){
                for(let i = 0; i < classesSection.length; i++){
                    classesSection[i].style.opacity = '0';
                    classesSection[i].style.transition = '.2s';
                }
            }
        }

    }, [yearActive])

    const activeYear = () => {
        const startBut = document.getElementById('start-year-but');

        // Remove and add active class bassed on yearActive state
        if(yearActive){
            startBut?.classList.remove('active-year');
            setYearActive(false);
        }else {
            startBut?.classList.add('active-year');
            setYearActive(true);
        }
    }

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
            actions: {
                activeYear,
                classesHandleDialogState,
            },
            states: {
                yearActive,
                classesDialogState,
            },
            data: {
                yearsToSelect,
            },
            classes: {
                selectedClasses,
                handleSelectedClasses,
            },
            classrooms: {
                selectedClassrooms,
                handleSelectedClasserooms,
            },
            dialogs: {
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