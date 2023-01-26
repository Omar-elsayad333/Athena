import { useRouter } from 'next/router';
import { URL_GROUPS, URL_GROUPS_REQUIRED } from 'constant/url';
import { useState, useEffect, useContext } from 'react';
import { useUser } from 'context/userContext';
import { getHandler, getHandlerById } from 'handlers/requestHandler';
import { DarkThemeContext } from 'context/ThemeContext';
import { dayTranslateToArabic } from 'utils/content';
import { group } from 'console';

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

const useEditGroup = () => {

    const { darkMode } = useContext(DarkThemeContext);
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
                    startTime: `01-01-2023 ${item.startTime}`,
                    endTime: `01-01-2023 ${item.endTime}`
                };
                setSelectedDays((oldValues: any) => [...oldValues, newData]);
            }
        }
    }

    // Get the days that the user selected
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

    // Translate day labels to arabic
    const dayTranslate = (day: string) => {
        const result = dayTranslateToArabic(day);
        return result;
    }

    const collectData = () => {
        const oldData : any= {
            id: groupData.id,
            name: name.value.trim() != '' ? name.value : groupData.name,
            limit: limit.value.trim() != '' ? limit.value : groupData.limit,
            groupScaduals: [],
            newGroupScaduals: []
        }

        if(limit.value != '') {
            oldData['limit'] = limit.value
        }else {
            oldData['limit'] = groupData.limit
        }

        for(let item of headquarters) {
            if(item.name == groupData.headQuarter) {
                oldData['headQuarterId'] = item.id
            }
        }

        if(selectedClassroom.id.trim() != '') {
            for(let classroom of classrooms) {
                if(classroom.name == selectedClassroom.name) {
                    oldData['teacherCourseLevelYearId'] = classroom.id
                }
            }
        } else {
            for(let item of requiredData.yearLevels) {
                if(groupData.startYear == item.start && groupData.endYear == item.end) {
                    for(let classroom of item.teacherCourseLevelYears) {
                        if(classroom.levelName == groupData.level) {
                            oldData['teacherCourseLevelYearId'] = classroom.teacherCourseLevelYearId
                        }
                    }
                }
            }
        }

        for(let selectedDay of selectedDays) {
            let state: boolean = false;
            for(let oldSelectedDays of groupData.groupScaduals) {
                if(selectedDay.name == oldSelectedDays.day) {
                    state = true;
                    oldData.groupScaduals.push(
                        {
                            id: '',
                            day: '',
                            startTime: '',
                            endTime: '',
                            isDeleted: false
                        }
                    )
                }
            }
        }

        return oldData
    }

    const submit = () => {

        // console.log(selectedDays)
        // console.log(groupData)
        console.log(collectData())
        const data = {
            groupScaduals: [
                {
                    "id": "string",
                    "day": "string",
                    "startTime": "02:00:00",
                    "endTime": "02:00:00",
                    "isDeleted": false
                }
            ],
            newGroupScaduals: [
                {
                    "day": "string",
                    "startTime": "02:00:00",
                    "endTime": "02:00:00"
                }
            ]
        }
    }

    useEffect(() => {
        console.log(selectedDays)
    }, [selectedDays])

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
                submit
            },
            dialogs: {
                dialogState,
                handleDaysDialogState,
            }
        }
    );
}

export default useEditGroup;