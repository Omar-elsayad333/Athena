import { useRouter } from 'next/router';
import { URL_GROUPS, URL_GROUPS_REQUIRED } from 'constant/url';
import { useState, useEffect, useContext } from 'react';
import { useUser } from 'context/userContext';
import { deleteHandler, getHandler, getHandlerById, putHandler } from 'handlers/requestHandler';
import { DarkThemeContext } from 'context/ThemeContext';
import { dayTranslateToArabic } from 'utils/content';
import { convertTimeFromDB, convertTimeToDB } from 'utils/converts';
import { useError } from 'context/ErrorContext';

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

type Dialog = {
    state: boolean,
    main: string,
    title: string,
    actionContent: any   
}

const dialogInitialValues = {
    state: false,
    main: 'تأكيد حذف هذه المجوعه نهائياً',
    title: 'حذف المجموعه',
    actionContent: {
        first: 'حذف',
        second: 'إلغاء'
    }
}

const useEditGroup = () => {

    const { darkMode } = useContext(DarkThemeContext);
    const { setSuccessMessage, setErrorMessage } = useError()
    const auth = useUser();
    const router = useRouter();
    const { id } = router.query;
    const [ loading, setLoading] = useState<boolean>(false);
    const [ groupData, setGroupData] = useState<any>('');
    const [ requiredData, setRequiredData] = useState<any>('');
    const [ name, setName] = useState<Data>(initialValues);
    const [ years, setYears] = useState<DropDown[]>([]);
    const [ selectedYear, setSelectedYear] = useState<DropDown>(DropDownInitialValues);
    const [ headquarters, setHeadquarters] = useState<DropDown[]>([]);
    const [ selectedHeadquarter, setSelectedHeadquarter] = useState<DropDown>(DropDownInitialValues);
    const [ classrooms, setClassrooms] = useState<DropDown[]>([]);
    const [ selectedClassroom, setSelectedClassroom] = useState<DropDown>(DropDownInitialValues)
    const [ limit, setLimit] = useState<Data>(initialValues);
    const [ selectedDays, setSelectedDays] = useState<any[]>([]);
    const [ dialogState, setDialogState] = useState<boolean>(false);
    const [ content, setContent] = useState<Dialog>(dialogInitialValues);


    // Call api to get required data if user is authorized
    useEffect(() => {
        if(auth.authToken) {
            getRequiredData();
        }
    }, [auth.authToken]);

    // Call api to get group data if required data is available
    useEffect(() => {
        if(requiredData != '') {
            getGroupData();
        }
    }, [requiredData]);

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
        // oldSelectedDays()
    }, [requiredData]);

    // Filter classrooms data according to the selected year from db
    useEffect(() => {
        if(groupData && requiredData && !selectedYear.id && classrooms.length == 0) {
            for(let item of requiredData.yearLevels) {
                if(item.start == groupData.startYear && item.end == groupData.endYear) {
                    for(let level of item.teacherCourseLevelYears) {
                        const newData = {
                            id: level.teacherCourseLevelYearId,
                            name: level.levelName
                        }
                        setClassrooms((oldValues: any) => [ ...oldValues, newData])
                    }
                }
            }
        }
        if(groupData) {
            updateSelectedDaysFromDB();
        }
    }, [groupData]);

    // Filter classrooms data according to the selected year from user
    useEffect(() => {
        if(requiredData && selectedYear.id) {
            for(let item of requiredData.yearLevels) {
                if(`${item.start} / ${item.end}` == selectedYear.name) {
                    setClassrooms([])
                    for(let level of item.teacherCourseLevelYears) {
                        const newData = {
                            id: level.teacherCourseLevelYearId,
                            name: level.levelName
                        }
                        setClassrooms((oldValues: any) => [ ...oldValues, newData])
                    }
                }
            }
        }
    }, [selectedYear]);

    // Update dialog UI according to selected days
    useEffect(() => {
        if(selectedDays.length > 0) {
            const dialogDays = document.getElementsByClassName('days');

            loopInDialogDays: for(let i = 0; i < dialogDays.length; i++) {
                loopInSelectedDays: for(let item of selectedDays) {
                    if(dialogDays[i]?.getAttribute('data-day') == item.name) {
                        dialogDays[i]?.classList.add(darkMode ? 'darkSelected' : 'selected');
                    }
                }
            }
        }
    }, [selectedDays])

    // Call api to get the required data for the page
    const getRequiredData = async () => {
        try {
            setLoading(true);
            const res = await getHandler(auth.authToken, URL_GROUPS_REQUIRED);
            setRequiredData(res);
            // console.log(res)
        }
        catch(error) {
            console.log(error)
        }
    }
    
    // Call api to get group data from db
    const getGroupData = async () => {
        try {
            setLoading(true);
            const res = await getHandlerById(id, auth.authToken, URL_GROUPS);
            setGroupData(res);
        }
        catch(error) {
            console.log(error);
        }
        finally {
            setLoading(false);
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
        setSelectedYear(
            {
                id: selectedYear.id, 
                name: selectedYear.name,
                error: false,
                helperText: ''
            }
        );
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

    // Update selected days from db 
    const updateSelectedDaysFromDB = () => {
        if(groupData && selectedDays.length == 0) {
            loopInGroupData: for(let item of groupData.groupScaduals) {
                const newData: any = {
                    name: item.day,
                    content: dayTranslateToArabic(item.day),
                    startTime: convertTimeFromDB(item.startTime),
                    endTime: convertTimeFromDB(item.endTime)
                };
                setSelectedDays((oldValues: any) => [...oldValues, newData]);
            }
        }
    }

    // Get the days tha t the user selected
    const getSelectedDays = (selectedDays: any) => {
        setSelectedDays(selectedDays);
    }

    const updateItem =(newTime: any, day: any, name: any)=> {
        var index = selectedDays.findIndex(x => x.name === day);

        console.log(index)

        let g: any = selectedDays[index]
        g[name] = newTime
        
        if (index === -1){
            // handle error
            console.log('no match')
        } else {   
            setSelectedDays([...selectedDays.slice(0,index), g, ...selectedDays.slice(index+1)]);
        }
    }

    // Open and close days dialog
    const handleDaysDialogState = () => {
        dialogState ? 
        setDialogState(false) : 
        setDialogState(true);
    }

    const handleDialogState = () => {
        if(content.state){
            setContent((oldData) => ({...oldData, state: false}));
        }else {
            setContent((oldData) => ({...oldData, state: true}));
        }
    }

    // Translate day labels to arabic
    const dayTranslate = (day: string) => {
        const result = dayTranslateToArabic(day);
        return result;
    }

    const collectData = () => {
        const dataToSubmit : any= {
            id: groupData.id,
            name: name.value.trim() != '' ? name.value : groupData.name,
            limit: limit.value.trim() != '' ? limit.value : groupData.limit,
            groupScaduals: [],
            newGroupScaduals: []
        }

        // Push the selected or old limit to submit object
        if(limit.value != '') {
            dataToSubmit['limit'] = limit.value
        }else {
            dataToSubmit['limit'] = groupData.limit
        }

        // Push the selected headquarter to the submit object
        for(let item of headquarters) {
            if(item.name == groupData.headQuarter) {
                dataToSubmit['headQuarterId'] = item.id
            }
        }

        // Push the selected or old Classroom to submit object 
        if(selectedClassroom.id.trim() != '') {
            for(let classroom of classrooms) {
                if(classroom.name == selectedClassroom.name) {
                    dataToSubmit['teacherCourseLevelYearId'] = classroom.id
                }
            }
        } else {
            for(let item of requiredData.yearLevels) {
                if(groupData.startYear == item.start && groupData.endYear == item.end) {
                    for(let classroom of item.teacherCourseLevelYears) {
                        if(classroom.levelName == groupData.level) {
                            dataToSubmit['teacherCourseLevelYearId'] = classroom.teacherCourseLevelYearId
                        }
                    }
                }
            }
        }

        // Push the new and old data to submit object
        for(let selectedDay of selectedDays) {
            let state: boolean = false;
            for(let oldSelectedDays of groupData.groupScaduals) {
                if(selectedDay.name == oldSelectedDays.day) {
                    state = true;
                    dataToSubmit.groupScaduals.push(
                        {
                            id: oldSelectedDays.id,
                            day: selectedDay.name,
                            startTime: convertTimeToDB(selectedDay.startTime),
                            endTime: convertTimeToDB(selectedDay.endTime),
                            isDeleted: false
                        }
                    )
                }
            }

            if(!state) {
                dataToSubmit.newGroupScaduals.push(
                    {
                        day: selectedDay.name,
                        startTime: convertTimeToDB(selectedDay.startTime),
                        endTime: convertTimeToDB(selectedDay.endTime),
                    }
                )
            }
        }

        // Push the deleted days to submit object
        for(let oldSelectedDay of groupData.groupScaduals) {
            let state: boolean = false;
            for(let selectedDay of selectedDays) {
                if(oldSelectedDay.day == selectedDay.name) {
                    state = true;
                }
            }
            
            if(!state) {
                dataToSubmit.groupScaduals.push(
                    {
                        id: oldSelectedDay.id,
                        day: oldSelectedDay.day,
                        startTime: oldSelectedDay.startTime,
                        endTime: oldSelectedDay.endTime,
                        isDeleted: true
                    }
                )
            }
        }

        return dataToSubmit
    }

    const submit = async () => {
        try {
            setLoading(true);
            const data = collectData();
            const res = await putHandler(groupData.id, auth.authToken, URL_GROUPS, data);
            setSuccessMessage('تم تعديل بيانات المجموعه بنجاح');
            router.push(`teacher/groups/group/${res}`);
        }
        catch(error) {
            console.log(error);
        }
        finally {
            setLoading(false);
        }
    }

    const deleteGroup = async () => {
        try {
            setLoading(true);
            handleDialogState();
            await deleteHandler(groupData.id, auth.authToken, URL_GROUPS);
            setErrorMessage('تم حذف المجموعه بنجاح');
            router.replace('teacher/groups');
        }
        catch(error) {
            console.log(error);
        }
        finally {
            setLoading(false);
        }
    }

    return (
        {
            
            data: {
                groupData
            },
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
                selectedDays
            },
            actions: {
                dayTranslate,
                nameHandler,
                yearHandler,
                headquarterHandler,
                classroomHandler,
                limitHandler,
                getSelectedDays,
                updateItem,
                submit,
                deleteGroup
            },
            dialogs: {
                dialogState,
                handleDaysDialogState,
                content,
                actions: {
                    handleDialogState,
                    submitDialog : deleteGroup
                }
            }
        }
    );
}

export default useEditGroup;