import colors from "styles/colors";
import Footer from './Footer';
import NavLink from "./NavLink";
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

type Props = {
    controleMobileSideNav: Function;
    mobileSideNavState: Boolean;
}

const style: any = {
    container: {
        width: '100%',
        position: 'absolute',
        top: '80px',
        overflow: 'hidden',
        zIndex: '99',
        transition: '.5s linear',
    },
    menu: {
        width: '100%',
        height: 'calc(100vh - (80px + 66px))',
        paddingY: '17px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: '#B6D5F0',
        borderBottom: `solid 1px ${colors.primary.dark}`,
        overflowY: 'auto',
        overflowX: 'hidden',
        '&::-webkit-scrollbar': {
            width: '7px'
        },
        '&::-webkit-scrollbar-track': {
            boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
            webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
        },
        '&::-webkit-scrollbar-thumb': {
            border: `1px solid ${colors.primary.main}`,
        },
    },
};

const Menu: React.FC<Props> = ({controleMobileSideNav, mobileSideNavState}) => {

    const classes = {
        container: {
            height: mobileSideNavState ? 'calc(100vh - 80px)' : '0px',
        }
    }

    return (
        <Box sx={[style.container, classes.container]}>
            <Box sx={style.menu}>
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
            <Footer />
        </Box>
    );
}

export default Menu;