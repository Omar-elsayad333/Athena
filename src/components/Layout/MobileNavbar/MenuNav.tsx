import { MenuStyle } from './style';
import Image from 'next/image';
import NavLink from "./NavLink";
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
    controleMobileSideNav: Function;
    mobileSideNavState: Boolean;
}

const MenuNav: React.FC<Props> = ({controleMobileSideNav, mobileSideNavState}) => {

    const classes = {
        container: {
            height: mobileSideNavState ? 'calc(100vh - 97px)' : '0px',
        }
    }

    return (
        <Box sx={[MenuStyle.container, classes.container]} className='omar'>
            <Box sx={MenuStyle.menu}>
                <Box>
                    <NavLink controleMobileSideNav={controleMobileSideNav} path='/teacher/home' icon={home} content='الرئيسية' />
                    <NavLink controleMobileSideNav={controleMobileSideNav} path='/teacher/students' icon={students} content='الطلاب' />
                    <NavLink controleMobileSideNav={controleMobileSideNav} path='/teacher/groups' icon={groups} content='المجموعات' />
                    <NavLink controleMobileSideNav={controleMobileSideNav} path='/teacher/attendance' icon={calender} content='الحضور' />
                    <NavLink controleMobileSideNav={controleMobileSideNav} path='/teacher/exams' icon={exams} content='الامتحانات' />
                    <NavLink controleMobileSideNav={controleMobileSideNav} path='/teacher/headquarters' icon={location} content='المقرات' />
                    <NavLink controleMobileSideNav={controleMobileSideNav} path='/teacher/reports' icon={charts} content='التقارير' />
                    <NavLink controleMobileSideNav={controleMobileSideNav} path='/teacher/session' icon={year} content='العام الدراسي' />
                    <NavLink controleMobileSideNav={controleMobileSideNav} path='/teacher/expenses' icon={money} content='المصروفات' />
                </Box>
                <Box>
                    <NavLink controleMobileSideNav={controleMobileSideNav} path='/teacher/employees' icon={employees} content='الموظفيين' />
                    <NavLink controleMobileSideNav={controleMobileSideNav} path='/teacher/settings' icon={setting} content='الاعدادت' />
                </Box>
            </Box>
            <Box sx={MenuStyle.footer}>
                <Box sx={MenuStyle.footer.privacy}>
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
 
export default MenuNav;