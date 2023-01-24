import { useRouter } from 'next/router';
import { URL_GROUPS, URL_GROUPS_REQUIRED } from 'constant/url';
import { useState, useEffect, useContext } from 'react';
import { useUser } from 'context/userContext';
import { getHandler, getHandlerById } from 'handlers/requestHandler';
import { DarkThemeContext } from 'context/ThemeContext';

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
    const [ selectedDays, setSelectedDays] = useState<any>([]);
    const [ dialogState, setDialogState] = useState<boolean>(false);

    // Remove old data
    useEffect(() => {
        setSelectedYear(DropDownInitialValues)
    });

    // Call getGroupData functionl if user is authorized
    useEffect(() => {
        if(auth.authToken) {
            getGroupData();
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
        oldSelectedDays()
    }, [requiredData])

    // Filter classrooms data according to the selected year
    useEffect(() => {
        if(selectedYear.name.length > 0 && requiredData) {
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
        }else if(groupData && requiredData) {
            loopInYear:for(let item of requiredData.yearLevels) {
                if(item.start == groupData.startYear && item.end == groupData.endYear){
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
    }, [selectedYear, groupData])

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
    
    // Call api to get group data from db
    const getGroupData = async () => {
        try {
            setLoading(true);
            const res = await getHandlerById(id, auth.authToken, URL_GROUPS);
            setGroupData(res);
            console.log(res);
            selectedDays && updateSelectedDays();
        }
        catch(error) {
            console.log(error);
        }
        finally {
            setLoading(false);
        }
    }

    // Translate day into arabic
    const dayTranslate = (day: string) => {
        if(day == 'Monday')
            return 'الأثنان'

        if(day == 'Tuesday')
            return 'الثلاثاء'

        if(day == 'Wednesday')
            return 'الأربعاء'

        if(day == 'Thursday')
            return 'الخميس'

        if(day == 'Friday')
            return 'الجمعه'

        if(day == 'Saturday')
            return 'السبت'

        if(day == 'Sunday')
            return 'الحد'

        return 'يوم -'
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

    const oldSelectedDays = () => {
        const days = document.getElementsByClassName('days');

        if(days && groupData) {

            loopInGroupData: for(let i in groupData.groupScaduals) {
                const ahmed = groupData?.groupScaduals[i]?.day;

                loopInDays: for(let y = 0; y < days.length; y++) {
                    const omar = days[y]!.getAttribute('data-day');
                    if(ahmed == omar) {
                        days[y]?.classList.add(darkMode ? 'darkSelected' : 'selected')
                    }
                }
            }

        }
    }

    // Get the days that the user selected
    const getSelectedDays = (selected: any) => {
        setSelectedDays(selected);
    }

    // Open and close days dialog
    const handleDaysDialogState = () => {
        dialogState ? 
        setDialogState(false) : 
        setDialogState(true);
    }
    
    const updateSelectedDays = () => {
        const selected = [];
        
        for (let i = 0; i < groupData.groupScaduals.length; i++) {
            const selectedData: any = {
                name: '',
                content: '',
                startTime: new Date(),
                endTime: new Date()
            };
            selectedData['name'] = (groupData.groupScaduals[i].day);
            selectedData['content'] = (dayTranslate(groupData.groupScaduals[i].day));
            selected.push(selectedData);
        };

        getSelectedDays(selected);
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
            },
            actions: {
                dayTranslate,
                nameHandler,
                yearHandler,
                headquarterHandler,
                classroomHandler,
                limitHandler,
                getSelectedDays,
                selectedDays
            },
            dialogs: {
                dialogState,
                handleDaysDialogState,
            }
        }
    );
}

export default useEditGroup;