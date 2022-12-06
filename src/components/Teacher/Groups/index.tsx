import GroupCard from "./GroupCard";

// MUI
import Box from "@mui/material/Box";

const GroupsC: React.FC = () => {

    const data = [
        {
            name: 'مجموعة قاسم',
            level: 'الصف الثالث الثانوي',
            studentCount: '60',
            location: 'الشون'
        },
        {
            name: 'مجموعة قاسم',
            level: 'الصف الثالث الثانوي',
            studentCount: '60',
            location: 'الشون'
        },
        {
            name: 'مجموعة قاسم',
            level: 'الصف الثالث الثانوي',
            studentCount: '60',
            location: 'الشون'
        },
        {
            name: 'مجموعة قاسم',
            level: 'الصف الثالث الثانوي',
            studentCount: '60',
            location: 'الشون'
        },
        {
            name: 'مجموعة قاسم',
            level: 'الصف الثالث الثانوي',
            studentCount: '60',
            location: 'الشون'
        },
        {
            name: 'مجموعة قاسم',
            level: 'الصف الثالث الثانوي',
            studentCount: '60',
            location: 'الشون'
        },
        {
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