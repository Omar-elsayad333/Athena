import { useState, useEffect } from 'react';
import { useUser } from 'context/userContext';
import { yearsToSelect } from 'constant/staticData';
import { getHandler } from 'handlers/requestHandler';
import { URL_YEARS_REQUIRED } from 'constant/url';

interface ActiveYear {
    name: string;
    state: boolean;
}

const YearActiveInitialValue = {
    name: '',
    state: false
}

interface TeacherCoureLevels {
    id: string;
    first: boolean;
    second: boolean;
}

interface Data {
    start: number;
    teacherCoureLevels: TeacherCoureLevels[] 
}

const dataInitialValues = {
    start: 0,
    teacherCoureLevels: []
}

const useYearsSetting = () => {

    const auth = useUser(); 
    const [ loading, setLoading ] = useState<boolean>(false);
    const [ requiredData, setRequiredData ] = useState<any>('');
    const [ yearActive, setYearActive] = useState<ActiveYear>(YearActiveInitialValue);
    const [ selectedClasses, setSelectedClasses] = useState<any[]>([]);
    const [ classesDialogState, setClassesDialogState] = useState<boolean>(false);
    const [ dataToSubmit, setDataToSubmit] = useState<Data>(dataInitialValues)

    // Get the required data for this page
    useEffect(() => {
        if(auth) {
            getClassesData();
        }
        
        document.addEventListener('contextmenu', event => event.preventDefault());
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

    useEffect(() => {
        console.log(dataToSubmit);
    }, [dataToSubmit])
    
    // Get active year
    const getSelectedYear = (selected: string) => {
        setYearActive((oldData) => ({...oldData, name: selected }));
        setDataToSubmit(oldData => ({...oldData, start: parseInt(selected)}))
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
    const handleSelectedClasses = (selected: any) => {
        setSelectedClasses(selected);
        classesLoop: for(let i = 0; i < selected.length; i++){
            dataToSubmit.teacherCoureLevels.push({
                id: selected[i].id,
                first: false,
                second: false
            })
        }
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
    const semestersHandler = (selectedClass: string, selectedSemester: string) => {
        classesLoop: for(let i = 0; i < dataToSubmit.teacherCoureLevels.length; i++){
            if(dataToSubmit.teacherCoureLevels[i]?.id == selectedClass && selectedSemester == 'first') {
                if(dataToSubmit.teacherCoureLevels[i]?.first){
                    dataToSubmit.teacherCoureLevels[i]!.first = false;
                }else {
                    dataToSubmit.teacherCoureLevels[i]!.first = true;
                }
            }
            if(dataToSubmit.teacherCoureLevels[i]?.id == selectedClass && selectedSemester == 'second') {
                if(dataToSubmit.teacherCoureLevels[i]?.first){
                    dataToSubmit.teacherCoureLevels[i]!.second = false;
                }else {
                    dataToSubmit.teacherCoureLevels[i]!.second = true;
                }
            }
        }
    }

    const submit = () => {
        // setLoading(true)
        // collectData();
        console.log(dataToSubmit)
        // try {
        //     const res = postHandler(auth.authToken, URL_YEARS, dataToSubmit)
        //     console.log(res);
        // }
        // catch(error) {
        //     console.log(error);
        // }
        // finally {
        //     setLoading(false)
        // }
    }

    return (
        {
            actions: {
                activeYear,
                getSelectedYear,

                classesHandleDialog,
                handleSelectedClasses,

                semestersHandler,

                submit
            },
            states: {
                loading,
                yearActive,
                classesDialogState,
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