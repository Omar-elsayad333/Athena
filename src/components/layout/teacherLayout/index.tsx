import style from './style';
import Image from 'next/image';
import NavLink from './NavLink';
import logo from "../../../../public/images/secondaryInlineLogo.svg";
// import menu from '../../../../public/images/Menu icon.svg';
// import logOut from '../../../../public/images/LogOut icon.svg';
// import home from '../../../../public/images/Home icon.svg';
// import students from '../../../../public/images/Students icon.svg';
// import groups from '../../../../public/images/Groups icon.svg';
// import calender from '../../../../public/images/Calender icon.svg';
// import exams from '../../../../public/images/Exams icon.svg';
// import location from '../../../../public/images/Location icon.svg';
// import charts from '../../../../public/images/Charts icon.svg';
// import year from '../../../../public/images/Year Icon.svg';
// import money from '../../../../public/images/Money icon.svg';
// import employees from '../../../../public/images/Employees icon.svg';
// import setting from '../../../../public/images/Setting icon.svg';

// MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const TeacherLayout: React.FC = () => {
    return (
        <Box sx={style.container}>
            <Box sx={style.header}>
                <Box sx={style.header.menuIcon} >
                    {/* <Image src={menu} layout='intrinsic' alt='menu icon' /> */}
                </Box>
                <Image src={logo} alt='Athena' width={228} height={43} />
            </Box>
            <Box sx={style.menu}>
                {/* <Box>
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
                </Box> */}
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
                {/* <Image src={logOut} alt='تسجيل الخروج' /> */}
            </Box>
        </Box>
    );
}

export default TeacherLayout;