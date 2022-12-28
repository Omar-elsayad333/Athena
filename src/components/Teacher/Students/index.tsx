import StudentCard from "./StudentCard";

// MUI
import Box from "@mui/material/Box";

const StudentsC: React.FC = () => {

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
            parentPhone: '01154688380'
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
            parentPhone: '01154688380'
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
            parentPhone: '01154688380'
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
            parentPhone: '01154688380'
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
            parentPhone: '01154688380'
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
            parentPhone: '01154688380'
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
            parentPhone: '01154688380'
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
            parentPhone: '01154688380'
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
            parentPhone: '01154688380'
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
            parentPhone: '01154688380'
        },

    ]

    return (
        <Box>
            <StudentCard data={data} />
        </Box>
    );
}
 
export default StudentsC;