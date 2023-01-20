import { useState, useEffect } from 'react';
import { useUser } from 'context/userContext';
import { yearsToSelect } from 'constant/staticData';
import { getHandler, postHandler } from 'handlers/requestHandler';
import { URL_YEARS_REQUIRED, URL_YEARS } from 'constant/url';
import { useError } from 'context/ErrorContext';
import { useRouter } from 'next/router';

interface ErrorLabel {
    error: boolean;
    value: string;
}

const ErrorLabelInitialValue = {
    error: false,
    value: ''
}

interface ActiveYear {
    name: string;
    state: boolean;
    error: boolean;
}

const YearActiveInitialValue = {
    name: '',
    state: false,
    error: false
}

interface TeacherCoureLevels {
    id: string;
    first: boolean;
    second: boolean; 
}

type Dialog = {
    state: boolean,
    main: string,
    title: string,
    actionContent: any   
}

const dialogInitialValues = {
    state: false,
    main: 'تأكيد إلغاء هذه العملية نهائياً',
    title: 'إلغاء العملية',
    actionContent: {
        first: 'تأكيد',
        second: 'إلغاء'
    }
}

const useYearsSetting = () => {

    const auth = useUser(); 
    const router = useRouter(); 
    const { setSuccessMessage, setWarningMessage } = useError()
    const [ loading, setLoading ] = useState<boolean>(false);
    const [ requiredData, setRequiredData ] = useState<any>('');
    const [ yearActive, setYearActive] = useState<ActiveYear>(YearActiveInitialValue);
    const [ selectedClasses, setSelectedClasses] = useState<any[]>([]);
    const [ classesDialogState, setClassesDialogState] = useState<boolean>(false);
    const [ classes, setClasses] = useState<TeacherCoureLevels[]>([]);
    const [ errorLabel, setErrorLabel] = useState<ErrorLabel>(ErrorLabelInitialValue);
    const [ content, setContent] = useState<Dialog>(dialogInitialValues);

    // Get the required data for this page
    useEffect(() => {
        if(auth) {
            getClassesData();
        }
    }, [auth])

    // Open and close cansel submit dialog
    const handleDialogState = () => {
        if(content.state){
            setContent((oldData) => ({...oldData, state: false}));
        }else {
            setContent((oldData) => ({...oldData, state: true}));
        }
    }

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
        setYearActive((oldData) => ({...oldData, name: selected, error: false}));
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
            classes.push({
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
    
    // Add semester to class
    const addSemester = (selectedClass: string, semesterType: string) => {
        let newValues: TeacherCoureLevels[] = []
        if( semesterType == 'first'){
            newValues = classes.map((item: any) => {
                if (item.id == selectedClass) {
                    // No change
                    return {...item, first: true};
                } else {
                    // Return a new value
                    return item;
                }
            });
        }else {
            newValues = classes.map((item: TeacherCoureLevels) => {
                if (item.id == selectedClass) {
                    // No change
                    return {...item, second: true};
                } else {
                    // Return a new value
                    return item;
                }
            });
        }

        // Re-render with the new array
        setClasses(newValues);
    }

    // Remove semester from class and close semesters dialog
    const removeSemester = (selectedClass: string, semesterType: string) => {
        let newValues: TeacherCoureLevels[] = []
        if( semesterType == 'first'){
            newValues = classes.map((item: any) => {
                if (item.id == selectedClass) {
                    // No change
                    return {...item, first: false};
                } else {
                    // Return a new value
                    return item;
                }
            });
        }else {
            newValues = classes.map((item: TeacherCoureLevels) => {
                if (item.id == selectedClass) {
                    // No change
                    return {...item, second: false};
                } else {
                    // Return a new value
                    return item;
                }
            });
        }

        // Re-render with the new array
        setClasses(newValues);
    }

    const validate = () => {
        
        let approvation = true;

        // Check for year selection
        if(!yearActive.name){
            setYearActive({...yearActive, error: true});
            approvation = false;
        }else {
            setYearActive({...yearActive, error: false})
        }

        // Check for classes selection
        if(selectedClasses.length == 0){
            setErrorLabel({...errorLabel, error: true, value: 'يجب تحديد صف دراسي واحد علي الأقل'});
            approvation = false;
        }else {
            setErrorLabel({...errorLabel, error: false, value: ''})
        }
        
        return approvation;
    }

    const collectData = () => {
        const data = {
            start: parseInt(yearActive.name.slice(0, 4)),
            teacherCoureLevels: classes
        }

        return data;        
    }

    const submit = async () => {
        validate();
        if(validate()) {
            // Collect data
            const data = collectData();

            if(data) {
                try {
                    setLoading(true);
                    const res = await postHandler(auth.authToken, URL_YEARS, data)
                    setSuccessMessage('تم بدأ عام جديد بنجاح');
                    router.push(`/teacher/years/year/${res}`)
                }
                catch(error) {
                    console.log(error);
                    setErrorLabel({...errorLabel, error: true, value: `${error}`});
                }
                finally {
                    setLoading(false)
                }
            }
        }
    }

    const cancelSubmit = () => {
        setWarningMessage('تم الغاء العمليه بنجاح');
        router.push('/teacher/years');
    }

    return (
        {
            actions: {
                activeYear,
                getSelectedYear,

                classesHandleDialog,
                handleSelectedClasses,

                addSemester,
                removeSemester,

                submit,
                cancelSubmit
            },
            states: {
                loading,
                errorLabel,
                yearActive,
                classesDialogState
            },
            data: {
                requiredData,
                yearsToSelect,
                selectedClasses,
                classes
            },
            dialog: {
                content,
                actions: {
                    handleDialogState,
                    submitDialog: cancelSubmit
                }
            }
        }
    );
}

export default useYearsSetting;