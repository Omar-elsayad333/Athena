import { URL_YEARS, URL_YEARS_END, URL_YEARS_REQUIRED } from "constant/url";
import { useError } from "context/AlertContext";
import { useUser } from "context/userContext";
import { deleteHandler, getHandler, getHandlerById, postHandlerById } from "handlers/requestHandler";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { yearsToSelect } from "constant/staticData";

interface Year {
    name: string;
    error: boolean;
}

const YearInitialValue = {
    name: '',
    error: false
}

interface semester {
    id?: string;
    name: string;
    startDate?: string | null;
    endDate?: string | null;
    state: string;
}

interface TeacherCoureLevels {
    id: string;
    name: string;
    first?: semester | null;
    second?: semester | null; 
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

interface ErrorLabel {
    error: boolean;
    value: string;
}

const ErrorLabelInitialValue = {
    error: false,
    value: ''
}

const useEditYear = () => {

    const auth = useUser();
    const router = useRouter();
    const { id } = router.query;
    const [ loading, setLoading] = useState<boolean>(false);
    const { setWarningMessage, setErrorMessage } = useError();
    const [ requiredData, setRequiredData] = useState<any>('');
    const [ yearData, setYearData] = useState<any>('');
    
    const [ year, setYear] = useState<Year>(YearInitialValue)
    const [ selectedYear, setSelectedYear] = useState<Year>(YearInitialValue);
    const [ classes, setClasses] = useState<TeacherCoureLevels[]>([]);
    
    const [ content ] = useState<Dialog>(dialogInitialValues);
    const [ errorLabel ] = useState<ErrorLabel>(ErrorLabelInitialValue);
    const [ classesDialogState, setClassesDialogState] = useState<boolean>(false);

    // Call getRequiredData function if the user is authuraized
    useEffect(() => {
        if(auth.authToken) {
            getRequiredAndYearData();
        }
    }, [auth.authToken]);

    // Update year data after the api response
    useEffect(() => {
        if(yearData) {
            setYear(oldValues => ({...oldValues, name: `${yearData.start} / ${yearData.end}`}));
        }
    }, [yearData]);

    // Update classes data after the api response
    useEffect(() => {
        if(yearData && classes.length == 0) {
            for(let level of yearData.levels) {
                setClasses( classes => [
                    ...classes,
                    {
                        id: level.id,
                        name: level.levelName,
                        first : getFirstSemester(level.semsters), 
                        second: getSecondSemester(level.semsters)
                    }
                ])
            }
        }
    }, [yearData])

    // Call api to get required data for this page
    const getRequiredAndYearData = async () => {
        try {
            setLoading(true);
            const requiredRes = await getHandler(auth.authToken, URL_YEARS_REQUIRED);
            setRequiredData(requiredRes);
            const yearRes = await getHandlerById(id, auth.authToken, URL_YEARS);
            setYearData(yearRes);
        }
        catch(error) {
            console.log(error);
        }
        finally {
            setLoading(false);
        }
    }

    // Get the first semeter of class
    const getFirstSemester = (semesters: any) => {
        let data = null;
        for(let semester of semesters) {
            if(semester.semster == 'الفصل الدراسى الأول') {
                data = {
                    id: semester.id,
                    name: semester.semster,
                    startDate: semester.startDate,
                    endDate: semester.endDate,
                    state: semester.state,
                }
            }
        }
        return data
    }

    // Get the second semeter of class
    const getSecondSemester = (semesters: any) => {
        let data = null;
        for(let semester of semesters) {
            if(semester.semster == 'الفصل الدراسى الثانى') {
                data = {
                    id: semester.id,
                    name: semester.semster,
                    startDate: semester.startDate,
                    endDate: semester.endDate,
                    state: semester.state,
                }
            }
        }
        return data
    }

    // Get user selected year
    const getSelectedYear = (selected: any) => {
        setSelectedYear((oldData) => ({...oldData, name: selected.name, error: false}));
    }

    // Get the selected Classes
    const handleSelectedClasses = (selected: any) => {

        // Remove classes
        deleteClass(selected);

        // Add new classes
        classesLoop: for(let selectedClass of selected){            
            const index = classes.findIndex(item => item.name === selectedClass.name);

            if(index !== -1) {
                console.log('already exist');
            } else {
                setClasses([...classes, {
                    id: selectedClass.id,
                    name: selectedClass.name,
                    first: selectedClass.first,
                    second: selectedClass.second
                }]);
            }
        };
    };

    // Remove class
    const deleteClass = async (newSelectedClasses: any) => {
        for(let oldClasses of classes) {
            const index = newSelectedClasses.findIndex((item: any) => item.name === oldClasses.name) 

            if(index == -1) {
                for(let i in classes) {
                    if(classes[i]?.name == oldClasses.name) {
                        setClasses([...classes.slice(0, parseInt(i)), ...classes.slice(parseInt(i) + 1)])
                    }
                }
            }
        }
    }

    // Add semester to class
    const addSemester = (selectedClassId: string, semesterType: string) => {
        const index = classes.findIndex(item => item.id == selectedClassId);
        
        if (index === -1){
            // handle error
            console.log('no match');
        } else {              
            let newSemester: any = classes[index]
            newSemester[semesterType] = {
                endDate: null,
                startDate: null,
                state: 'Disactive',
                name: semesterType == 'first' ? 'الفصل الدراسى الأول' : 'الفصل الدراسى الثانى'
            }
            setClasses([...classes.slice(0,index), newSemester, ...classes.slice(index+1)]);
        }
    }

    // Remove semester from class
    const removeSemester = (selectedClassId: string, semesterType: string) => {
        const index = classes.findIndex(item => item.id == selectedClassId);
        
        if (index === -1){
            // handle error
            console.log('no match');
        } else {              
            let newSemester: any = classes[index]
            newSemester[semesterType] = null
            setClasses([...classes.slice(0,index), newSemester, ...classes.slice(index+1)]);
        }
    }

    // Call api to end  year
    const endYear = async () => {
        try {
            setLoading(true);
            const data = {
                id: yearData.id,
                state: true
            }
            await postHandlerById(yearData.id, auth.authToken, URL_YEARS_END, data);
            setWarningMessage('تم انهاء العام الدراسي بنجاح');
            router.replace(`/teacher/years/year/${yearData.id}`);
        }
        catch(error) {
            console.log(error);
        }
        finally {
            setLoading(false);
        }
    }

    // Call api to delete year
    const deleteYear = async () => {
        try {
            setLoading(true);
            await deleteHandler(yearData.id, auth.authToken, URL_YEARS);
            setErrorMessage('تم حذف العام الدراسي بنجاح');
            router.replace('/teacher/years');
        }
        catch(error) {
            console.log(error);
        }
        finally {
            setLoading(false);
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

    useEffect(() => {
        console.log(classes);
    }, [classes])

    return (
        {
            data: {
                requiredData,
                yearData,
                yearsToSelect,
                classes
            },
            states: {
                loading,
                errorLabel,
                year,
                selectedYear,
                classesDialogState
            },
            actions: {
                getSelectedYear,
                classesHandleDialog,
                endYear,
                deleteYear,
                handleSelectedClasses,
                addSemester,
                removeSemester
            },
            dialogs: {
                classesDialogState,
                content,
                actions: {
                    // handleDialogState,
                    submitDialog: deleteYear
                }
            }
        }
    );
}

export default useEditYear;