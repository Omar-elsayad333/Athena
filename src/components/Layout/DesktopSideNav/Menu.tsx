import colors from 'styles/colors';
import NavLink from './NavLink';
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
    sideNavState: Boolean;
}

const classes = {
    menu: {
        width: '100%',
        height: 'calc(100% - (66px + 94px))',
        paddingY: '17px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: '40px',
        backgroundColor: '#B6D5F0',
        borderTop: `solid 1px ${colors.primary.dark}`,
        borderBottom: `solid 1px ${colors.primary.dark}`,
        borderLeft: `solid 1px ${colors.primary.dark}`,
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
}

const Menu: React.FC<Props> = ({sideNavState}) => {
    return (
        <Box sx={classes.menu}>
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
    );
}
 
export default Menu;