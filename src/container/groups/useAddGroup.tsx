import { useState, useEffect } from 'react';
import { useUser } from 'context/userContext';
import { URL_GROUPS, URL_GROUPS_REQUIRED } from 'constant/url';
import { getHandler, postHandler } from 'handlers/requestHandler';
import { useError } from 'context/ErrorContext';
import { useRouter } from 'next/router';

interface Data {
    value: string;
    error: boolean;
    helperText: string;
}

const initialValues = {
    value: '',
    error: false,
    helperText: ''
}

interface DropDown {
    id: string;
    name: string;
    error: boolean,
    helperText: string,
}

const DropDownInitialValues = {
    id: '',
    name: '',
    error: false,
    helperText: ''
}

interface ErrorLabel {
    error: boolean;
    value: string;
}

const ErrorLabelInitialValue = {
    error: false,
    value: ''
}

interface SubmitData {
    name: string;
    headQuarterId: string;
    teacherCourseLevelYearId: string;
    limit: number;
    groupScaduals: string[];
}

interface CancelDialog {
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

const useAddGroup = () => {

    const auth = useUser();
    const router = useRouter();
    const { setSuccessMessage, setWarningMessage } = useError();
    const [ loading, setLoading] = useState<boolean>(false);
    const [ requiredData, setRequiredData] = useState<any>('');
    const [ name, setName] = useState<Data>(initialValues);
    const [ years, setYears] = useState<DropDown[]>([]);
    const [ selectedYear, setSelectedYear] = useState<DropDown>(DropDownInitialValues);
    const [ headquarters, setHeadquarters] = useState<DropDown[]>([]);
    const [ selectedHeadquarter, setSelectedHeadquarter] = useState<DropDown>(DropDownInitialValues);
    const [ classrooms, setClassrooms] = useState<DropDown[]>([]);
    const [ selectedClassroom, setSelectedClassroom] = useState<DropDown>(DropDownInitialValues)
    const [ limit, setLimit] = useState<Data>(initialValues);
    const [ errorLabel, setErrorLabel] = useState<ErrorLabel>(ErrorLabelInitialValue);
    const [ selectedDays, setSelectedDays] = useState<any>([]);
    const [ dialogState, setDialogState] = useState<boolean>(false);
    const [ cancelContent, setCancelContent] = useState<CancelDialog>(dialogInitialValues);

    
    // Call getRequiredData function if the user is authenticated
    useEffect(() => {
        if(auth.authToken) {
            getRequiredData();
        }
    }, [auth.authToken])

    // Update required data from api to useable data
    useEffect(() => {
        if(requiredData?.yearLevels?.length > 0 && years.length == 0) {
            for(let i = 0; i < requiredData.yearLevels.length; i++){
                const newData = {
                    id: requiredData.yearLevels[i].id,
                    name: `${requiredData.yearLevels[i].start} / ${requiredData.yearLevels[i].end}`
                }
                setYears((years: any) => [...years, newData]);
            }
        }
        if(requiredData?.headQuaertes?.length > 0 && years.length == 0) {
            for(let i = 0; i < requiredData.headQuaertes.length; i++){
                const newData = {
                    id: requiredData.headQuaertes[i].id,
                    name: requiredData.headQuaertes[i].name
                }
                setHeadquarters((headquarters: any) => [...headquarters, newData]);
            }
        }
    }, [requiredData])

    // Filter classrooms data according to the selected year
    useEffect(() => {
        if(selectedYear && requiredData) {
            loopInYear:for(let item of requiredData.yearLevels) {
                if(item.id == selectedYear.id){
                    setClassrooms([])
                    setSelectedClassroom(oldValues => ({...oldValues, name: '', id: ''}))
                    loopInClassrooms:for(let classroom of item.teacherCourseLevelYears) {
                        const newData = {
                            id: classroom.teacherCourseLevelYearId,
                            name: classroom.levelName,
                        }
                        setClassrooms((classrooms: any) => [...classrooms, newData]);
                    }
                }
            }
        }
    }, [selectedYear])

    // Call api to get the required data for the page
    const getRequiredData = async () => {
        try {
            setLoading(true);
            const res: any = await getHandler(auth.authToken, URL_GROUPS_REQUIRED);
            setRequiredData(res);
        }
        catch(error) {
            console.log(error)
        }
        finally {
            setLoading(false)
        }
    }

    // Get group name from user
    const nameHandler = (newValue: string) => {
        setName((oldValues: Data) => ({
            ...oldValues, 
            value: newValue, 
            error: false,
            helperText: ''
        }));
    }

    // Get the year that the user selected
    const yearHandler = (selectedYear: DropDown) => {
        setSelectedYear(oldValues => ({
            ...oldValues, 
            id: selectedYear.id, 
            name: selectedYear.name,
            error: false,
            helperText: ''
        }));
    }
    
    // Get the year that the user selected
    const headquarterHandler = (selectdHeadquarter: DropDown) => {
        setSelectedHeadquarter(oldValues => ({
            ...oldValues, 
            id: selectdHeadquarter.id,
            name: selectdHeadquarter.name,
            error: false,
            helperText: ''
        }));
    }

    // Get the year that the user selected
    const classroomHandler = (selectedClassroom: DropDown) => {
        setSelectedClassroom(oldValues => ({
            ...oldValues, 
            id: selectedClassroom.id, 
            name: selectedClassroom.name,
            error: false,
            helperText: ''
        }));
    }
    
    // Get group limit from user
    const limitHandler = (newValue: string) => {
        setLimit((oldValues: Data) => ({
            ...oldValues, 
            value: newValue, 
            error: false,
            helperText: ''
        }));
    }

    // Get the days that the user selected
    const getSelectedDays = (selected: any) => {
        setSelectedDays(selected);
    }

    // Get the selected time and update the selected days with the new time
    const getSelectedTime = (selectedTime: any) => {
        if(selectedTime.name === 'startTime'){
            for (let i = 0; i < selectedDays.length; i++) {
                if (selectedDays[i].name === selectedTime.day) {
                    selectedDays[i].startTime = selectedTime.time
                }
            }
        }else {
            for (let i = 0; i < selectedDays.length; i++) {
                if (selectedDays[i].name === selectedTime.day) {
                    selectedDays[i].endTime = selectedTime.time
                }
            }
        }
    }

    // Open and close days dialog
    const handleDaysDialogState = () => {
        dialogState ? 
        setDialogState(false) : 
        setDialogState(true);
    }

    // Validate the data
    const validation = () => {
        let state = true;

        if(!selectedDays.length) {
            state = false;
            setErrorLabel(oldValues => ({
                ...oldValues, 
                error: true, 
                value: 'يجب اختيار يوم واحد علي الأقل'
            }))
        }

        if(!name.value.trim().length) {
            state = false;
            setName((oldValues: Data) => ({
                ...oldValues, 
                error: true,
                helperText: 'يجب كتابة اسم للمجموعه'
            }));
        }

        if(!selectedYear.id.trim().length) {
            state = false;
            setSelectedYear(oldValues => ({
                ...oldValues, 
                error: true,
                helperText: 'يجب اختيار سنة للمجموعه'
            }));
        }

        if(!selectedHeadquarter.id.trim().length) {
            state = false;
            setSelectedHeadquarter(oldValues => ({
                ...oldValues, 
                error: true,
                helperText: 'يجب اختيار مقر للمجموعه'
            }));
        }

        if(!selectedClassroom.id.trim().length) {
            state = false;
            setSelectedClassroom(oldValues => ({
                ...oldValues, 
                error: true,
                helperText: 'يجب اختيار صف دراسي للمجموعه'
            }));
        }

        if(!limit.value.trim().length) {
            state = false;
            setLimit(oldValues => ({
                ...oldValues, 
                error: true,
                helperText: 'يجب تحديد حد اقصي للمجموعه'
            }));
        }

        return state
    }

    // Collect data to submit it to api
    const collectData = () => {
        const data: SubmitData = {
            name: name.value,
            headQuarterId: selectedHeadquarter.id,
            teacherCourseLevelYearId: selectedClassroom.id,
            limit: parseInt(limit.value),
            groupScaduals: []
        }

        for(let item of selectedDays) {
            const newData: any = {
                day: item.name,
                startTime: item.startTime,
                endTime: item.endTime
            }
            data.groupScaduals.push(newData)
        }

        return data
    }

    const submit = async () => {
        if(validation()){
            const data = collectData();
            try {
                setLoading(true);
                await postHandler(auth.authToken, URL_GROUPS, data);
                const res = setSuccessMessage('تم اضافة المجموعه بنجاح');
                router.push(`/teacher/groups/group/${res}`);
            }
            catch(error) {
                console.log(error);
            }
            finally {
                setLoading(false);
            }
        }
    }

    const cancelSubmit = () => {
        setName(initialValues);
        setLimit(initialValues);
        setErrorLabel(ErrorLabelInitialValue);
        setSelectedYear(DropDownInitialValues);
        setSelectedClassroom(DropDownInitialValues);
        setSelectedHeadquarter(DropDownInitialValues);
        setWarningMessage('تم الغاء العمليه بنجاح');
        router.push('/teacher/groups')
    };

    // Close and open cancel dialog
    const handleCancleDialogState = () => {
        if(cancelContent.state){
            setCancelContent((oldData) => ({...oldData, state: false}));
        }else {
            setCancelContent((oldData) => ({...oldData, state: true}));
        }
    }

    return (
        {
            states: {
                loading,
                name,
                years,
                selectedYear,
                headquarters,
                selectedHeadquarter,
                classrooms,
                selectedClassroom,
                limit,
                selectedDays,
                errorLabel
            },
            actions: {
                nameHandler,
                yearHandler,
                headquarterHandler,
                classroomHandler,
                limitHandler,
                getSelectedDays,
                getSelectedTime,
                submit,
                cancelSubmit
            },
            dialogs: {
                dialogState,
                handleDaysDialogState,
                cancelContent,
                actions: {
                    handleCancleDialogState,
                    submitDialog: cancelSubmit
                }
            },
        }
    )
}

export default useAddGroup;