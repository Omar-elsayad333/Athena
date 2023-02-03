import useStudents from "container/students/useStudents";
import MySearchInput from "components/MySearchInput";
import FilterWedgit from "./FilterWedgit";
import StudentCard from "./StudentCard";
import StudentsTable from "./StudentsTable";

// MUI
import Box from "@mui/material/Box";


const StudentsC: React.FC = () => {

    const {
        tableState,
        showTable,
        hideTable
    } = useStudents();

    const style = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            gap: '60px',
        }
    }

    const data = [
        {
            id: '1',
            code: '25012011',
            name: 'مروان محمد عبد العزيز',
            firstName: 'مروان',
            lastName: 'عبد العزيز',
            middelName: 'عبد العزيز',
            gender: 'male',
            birthDate: '25-02-1999',
            address: '17 شارع الحرية',
            phoneNumber: '01221660052',
            homeName: '2501201',
            parentName: 'محمد عبد العزيز',
            parentJob: 'رجل أعمال',
            parentPhone: '01154688380',
            level: 'الصف الثالث الثانوي',
            group: 'مجموعة قاسم',
        },
        {
            id: '2',
            code: '25012022',
            name: 'مروان محمد عبد العزيز',
            firstName: 'مروان',
            lastName: 'عبد العزيز',
            middelName: 'عبد العزيز',
            gender: 'male',
            birthDate: '25-02-1999',
            address: '17 شارع الحرية',
            phoneNumber: '01221660052',
            homeName: '2501201',
            parentName: 'محمد عبد العزيز',
            parentJob: 'رجل أعمال',
            parentPhone: '01154688380',
            level: 'الصف الثالث الثانوي',
            group: 'مجموعة قاسم',
        },
        {
            id: '3',
            code: '25012033',
            name: 'مروان محمد عبد العزيز',
            firstName: 'مروان',
            lastName: 'عبد العزيز',
            middelName: 'عبد العزيز',
            gender: 'male',
            birthDate: '25-02-1999',
            address: '17 شارع الحرية',
            phoneNumber: '01221660052',
            homeName: '2501201',
            parentName: 'محمد عبد العزيز',
            parentJob: 'رجل أعمال',
            parentPhone: '01154688380',
            level: 'الصف الثالث الثانوي',
            group: 'مجموعة قاسم',
        },
        {
            id: '4',
            code: '25012044',
            name: 'مروان محمد عبد العزيز',
            firstName: 'مروان',
            lastName: 'عبد العزيز',
            middelName: 'عبد العزيز',
            gender: 'male',
            birthDate: '25-02-1999',
            address: '17 شارع الحرية',
            phoneNumber: '01221660052',
            homeName: '2501201',
            parentName: 'محمد عبد العزيز',
            parentJob: 'رجل أعمال',
            parentPhone: '01154688380',
            level: 'الصف الثالث الثانوي',
            group: 'مجموعة قاسم',
        },
        {
            id: '5',
            code: '25012055',
            name: 'مروان محمد عبد العزيز',
            firstName: 'مروان',
            lastName: 'عبد العزيز',
            middelName: 'عبد العزيز',
            gender: 'male',
            birthDate: '25-02-1999',
            address: '17 شارع الحرية',
            phoneNumber: '01221660052',
            homeName: '2501201',
            parentName: 'محمد عبد العزيز',
            parentJob: 'رجل أعمال',
            parentPhone: '01154688380',
            level: 'الصف الثالث الثانوي',
            group: 'مجموعة قاسم',
        },
        {
            id: '6',
            code: '25012066',
            name: 'مروان محمد عبد العزيز',
            firstName: 'مروان',
            lastName: 'عبد العزيز',
            middelName: 'عبد العزيز',
            gender: 'male',
            birthDate: '25-02-1999',
            address: '17 شارع الحرية',
            phoneNumber: '01221660052',
            homeName: '2501201',
            parentName: 'محمد عبد العزيز',
            parentJob: 'رجل أعمال',
            parentPhone: '01154688380',
            level: 'الصف الثالث الثانوي',
            group: 'مجموعة قاسم',
        },
        {
            id: '7',
            code: '25012077',
            name: 'مروان محمد عبد العزيز',
            firstName: 'مروان',
            lastName: 'عبد العزيز',
            middelName: 'عبد العزيز',
            gender: 'male',
            birthDate: '25-02-1999',
            address: '17 شارع الحرية',
            phoneNumber: '01221660052',
            homeName: '2501201',
            parentName: 'محمد عبد العزيز',
            parentJob: 'رجل أعمال',
            parentPhone: '01154688380',
            level: 'الصف الثالث الثانوي',
            group: 'مجموعة قاسم',
        },
        {
            id: '8',
            code: '25012088',
            name: 'مروان محمد عبد العزيز',
            firstName: 'مروان',
            lastName: 'عبد العزيز',
            middelName: 'عبد العزيز',
            gender: 'male',
            birthDate: '25-02-1999',
            address: '17 شارع الحرية',
            phoneNumber: '01221660052',
            homeName: '2501201',
            parentName: 'محمد عبد العزيز',
            parentJob: 'رجل أعمال',
            parentPhone: '01154688380',
            level: 'الصف الثالث الثانوي',
            group: 'مجموعة قاسم',
        },
        {
            id: '9',
            code: '25012099',
            name: 'مروان محمد عبد العزيز',
            firstName: 'مروان',
            lastName: 'عبد العزيز',
            middelName: 'عبد العزيز',
            gender: 'male',
            birthDate: '25-02-1999',
            address: '17 شارع الحرية',
            phoneNumber: '01221660052',
            homeName: '2501201',
            parentName: 'محمد عبد العزيز',
            parentJob: 'رجل أعمال',
            parentPhone: '01154688380',
            level: 'الصف الثالث الثانوي',
            group: 'مجموعة قاسم',
        },
        {
            id: '10',
            code: '25012010',
            name: 'مروان محمد عبد العزيز',
            firstName: 'مروان',
            lastName: 'عبد العزيز',
            middelName: 'عبد العزيز',
            gender: 'male',
            birthDate: '25-02-1999',
            address: '17 شارع الحرية',
            phoneNumber: '01221660052',
            homeName: '2501201',
            parentName: 'محمد عبد العزيز',
            parentJob: 'رجل أعمال',
            parentPhone: '01154688380',
            level: 'الصف الثالث الثانوي',
            group: 'مجموعة قاسم',
        },

    ]

    return (
        <Box sx={style.container}>
            <MySearchInput placeholder='هل تبحث عن طالب معين ؟' />
            <FilterWedgit showTable={showTable} hideTable={hideTable} />
            {
                tableState?
                <StudentsTable />:
                <StudentCard data={data} />
            }
        </Box>
    );
}
 
export default StudentsC;