import style from './style';
import Image from 'next/image';
import NavLink from './NavLink';
import logOut from '../../../../public/images/LogOutIcon.svg';
import home from '../../../../public/images/HomeIcon.svg';
import students from '../../../../public/images/StudentsIcon.svg';
import groups from '../../../../public/images/GroupsIcon.svg';
import calender from '../../../../public/images/CalenderIcon.svg';
import exams from '../../../../public/images/ExamsIcon.svg';
import location from '../../../../public/images/LocationIcon.svg';
import charts from '../../../../public/images/ChartsIcon.svg';
import year from '../../../../public/images/YearIcon.svg';
import money from '../../../../public/images/MoneyIcon.svg';
import employees from '../../../../public/images/EmployeesIcon.svg';
import setting from '../../../../public/images/SettingIcon.svg';

// MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const TeacherSideNav: React.FC = () => {
    return (
        <Box sx={style.container}>
            <Box sx={style.menu}>
                <Box>
                    <NavLink icon={home} content='الرئيسية' />
                    <NavLink icon={students} content='الطلاب' />
                    <NavLink icon={groups} content='المجموعات' />
                    <NavLink icon={calender} content='الحضور' />
                    <NavLink icon={exams} content='الامتحانات' />
                    <NavLink icon={location} content='المقرات' />
                    <NavLink icon={charts} content='التقارير' />
                    <NavLink icon={year} content='العام الدراسي' />
                    <NavLink icon={money} content='المصروفات' />
                </Box>
                <Box>
                    <NavLink icon={employees} content='الموظفيين' />
                    <NavLink icon={setting} content='الاعدادت' />
                </Box>
            </Box>
            <Box sx={style.footer}>
                <Box sx={style.footer.privacy}>
                    <Typography variant='h6' fontWeight={700}>
                        إرسال ملاحظات
                    </Typography>
                    <Typography variant='h6' fontWeight={700}>
                        نبذة عن مشروع أثينا 
                    </Typography>
                    <Typography variant='h6' fontWeight={700}>
                        شروط الاستخدام وسياسة الخصوصية 
                    </Typography>
                </Box>
                <Image src={logOut} alt='تسجيل الخروج' />
            </Box>
        </Box>
    );
}

export default TeacherSideNav;