import GroupCard from "./GroupCard";

// MUI
import Box from "@mui/material/Box";

const GroupsC: React.FC = () => {

    const data = [
        {
            id: '1',
            name: 'مجموعة قاسم',
            level: 'الصف الثالث الثانوي',
            studentCount: '60',
            location: 'الشون'
        },
        {
            id: '2',
            name: 'مجموعة قاسم',
            level: 'الصف الثالث الثانوي',
            studentCount: '60',
            location: 'الشون'
        },
        {
            id: '3',
            name: 'مجموعة قاسم',
            level: 'الصف الثالث الثانوي',
            studentCount: '60',
            location: 'الشون'
        },
        {
            id: '4',
            name: 'مجموعة قاسم',
            level: 'الصف الثالث الثانوي',
            studentCount: '60',
            location: 'الشون'
        },
        {
            id: '5',
            name: 'مجموعة قاسم',
            level: 'الصف الثالث الثانوي',
            studentCount: '60',
            location: 'الشون'
        },
        {
            id: '6',
            name: 'مجموعة قاسم',
            level: 'الصف الثالث الثانوي',
            studentCount: '60',
            location: 'الشون'
        },
        {
            id: '7',
            name: 'مجموعة قاسم',
            level: 'الصف الثالث الثانوي',
            studentCount: '60',
            location: 'الشون'
        },
    ]

    return (
        <Box>
            <GroupCard data={data} />
        </Box>
    );
}

export default GroupsC;