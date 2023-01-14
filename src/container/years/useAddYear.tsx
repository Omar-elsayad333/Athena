import { useState, useEffect } from 'react';
import { useUser } from 'context/userContext';
import { yearsToSelect } from 'constant/staticData';
import { getHandler } from 'handlers/requestHandler';
import { URL_YEARS_REQUIRED } from 'constant/url';

type ActiveYear = {
    name: string;
    state: boolean;
}

const ActiveYearInitialValue = {
    name: '',
    state: false
}

const useYearsSetting = () => {

    const auth = useUser(); 
    const [ loading, setLoading ] = useState<boolean>(false);
    const [ requiredData, setRequiredData ] = useState<any>('');
    const [ yearActive, setYearActive] = useState<ActiveYear>(ActiveYearInitialValue);
    const [ selectedClasses, setSelectedClasses] = useState<object[]>([]);
    const [ classesDialogState, setClassesDialogState] = useState<boolean>(false);
    const [ selectedSemesters, setSelectedSemesters] = useState<any>();
    const [ semetersDialogState, setSemestersDialogState] = useState<boolean>(false);

    // Get the required data for this page
    useEffect(() => {
        if(auth) {
            getClassesData();
        }
    }, [auth])

    // year animation
    useEffect(() => {
        const classesSection: any = document.getElementsByClassName('classes-section');

        if(yearActive.state){
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

    }, [yearActive.state])

    // Function to active and dis active year
    const activeYear = () => {
        const startBut = document.getElementById('start-year-but');

        // Remove and add active class bassed on yearActive state
        if(yearActive.state){
            startBut?.classList.remove('active-year');
            setYearActive((oldData) => ({...oldData, state: false, name: ''}))
        }else {
            startBut?.classList.add('active-year');
            setYearActive((oldData) => ({...oldData, state: true}))
        }
    }
    
    // Get active year
    const getSelectedYear = (selected: string) => {
        setYearActive((oldData) => ({...oldData, name: selected }));
    }

    // Get available classes from db
    const getClassesData = async () => {
        try {
            setLoading(true);
            const res = await getHandler(auth.authToken, URL_YEARS_REQUIRED);
            setRequiredData(res);
        }
        catch (error) {
            console.log(error);
        }
        finally {
            setLoading(false);
        }
    }

    // Get the selected Classes
    const handleSelectedClasses = (selectedClasses: any) => {
        setSelectedClasses(selectedClasses);
    }

    // Get the selected Semesters
    const handleSelectedSemesters = (selectedClasserooms: any) => {
        setSelectedSemesters(selectedClasserooms);
    }

    // Open and close classes dialog
    const classesHandleDialog = () => {
        if(classesDialogState){
            setClassesDialogState(false);
        }else {
            setClassesDialogState(true);
        }
    }
    
    // Open and close semesters dialog
    const semestersHandleDialog = () => {
        if(semetersDialogState){
            setSemestersDialogState(false);
        }else {
            setSemestersDialogState(true);
        }
    }

    const submit = () => {
        console.table({
            selectedClasses: selectedClasses,
            selectedClassrooms: selectedSemesters,
        })
    }

    return (
        {
            actions: {
                activeYear,
                getSelectedYear,

                classesHandleDialog,
                handleSelectedClasses,

                semestersHandleDialog,
                handleSelectedSemesters,

                submit
            },
            states: {
                loading,
                yearActive,
                classesDialogState,
                semetersDialogState,
            },
            data: {
                requiredData,
                yearsToSelect,
                selectedClasses,
            },
        }
    );
}

export default useYearsSetting;