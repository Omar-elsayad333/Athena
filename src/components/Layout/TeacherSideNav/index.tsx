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

type Props = {
    sideNavState: Boolean;
}

const TeacherSideNav: React.FC<Props> = ({sideNavState}) => {

    const classes: any = {
        omar: {
            width: sideNavState ? '308px' : '76px',
        },
        footer: {
            justifyContent: sideNavState ? 'space-between' : 'center',  
        },
        privacy: {
            display: sideNavState ? 'block' : 'none',
        }
    }

    return (
        <Box sx={[style.container, classes.omar]} className='omar'>
            <Box sx={style.menu}>
                <Box>
                    <NavLink sideNavState={sideNavState} path='/teacher/home' icon={home} content='الرئيسية' />
                    <NavLink sideNavState={sideNavState} path='/teacher/students' icon={students} content='الطلاب' />
                    <NavLink sideNavState={sideNavState} path='/teacher/groups' icon={groups} content='المجموعات' />
                    <NavLink sideNavState={sideNavState} path='/teacher/attendance' icon={calender} content='الحضور' />
                    <NavLink sideNavState={sideNavState} path='/teacher/exams' icon={exams} content='الامتحانات' />
                    <NavLink sideNavState={sideNavState} path='/teacher/headquarters' icon={location} content='المقرات' />
                    <NavLink sideNavState={sideNavState} path='/teacher/reports' icon={charts} content='التقارير' />
                    <NavLink sideNavState={sideNavState} path='/teacher/session' icon={year} content='العام الدراسي' />
                    <NavLink sideNavState={sideNavState} path='/teacher/expenses' icon={money} content='المصروفات' />
                </Box>
                <Box>
                    <NavLink sideNavState={sideNavState} path='/teacher/employees' icon={employees} content='الموظفيين' />
                    <NavLink sideNavState={sideNavState} path='/teacher/settings' icon={setting} content='الاعدادت' />
                </Box>
            </Box>
            <Box sx={[style.footer, classes.footer]}>
                <Box sx={[style.footer.privacy, classes.privacy]}>
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
                <Image src={logOut} alt='تسجيل الخروج' style={{cursor: 'pointer'}}/>
            </Box>
        </Box>
    );
}

export default TeacherSideNav;