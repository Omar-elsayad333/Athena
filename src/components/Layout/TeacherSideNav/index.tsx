// import style from './style';
import colors from 'styles/colors';
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
// import { useEffect } from 'react';

type Props = {
    sideNavState: Boolean;
}

const TeacherSideNav: React.FC<Props> = ({sideNavState}) => {

    const style: any = {
        container: {
            width: sideNavState ? '308px' : '76px',
            height: 'calc(100vh - 123px)',
            // '@media (max-width: 1440px)': {
            //     width: '250px',
            // },
            transition: '.5s',
        },
        menu: {   
            width: '100%',
            height: 'calc(100% - 95px)',
            paddingY: '17px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '40px',
            backgroundColor: '#B6D5F0',
            borderBottom: `solid 1px ${colors.primary.dark}`,
            borderLeft: `solid 1px ${colors.primary.dark}`,
            overflowY: 'auto',
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
        footer: {
            width: '100%',
            height: '95px',
            padding: '20px',
            borderLeft: `solid 1px ${colors.primary.dark}`,
            overflowY: 'hidden',
            background: 'linear-gradient(90deg, #B6D5F0 0%, #DFEFFF 100%)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'centre',
            privacy: {
                fontSize: '12px',
                fontWeight: '700',
                color: colors.primary.dark,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start',
                justifyContent: 'center',
                gap: '7px',
            }
        },
    }
    
    // useEffect(() => {
    //     if(sideNavState) {
    //         style.container.width = '308px'  
    //         console.log(style.container.width)
   
    //     }else {
    //         style.container.width = '76px'
    //         console.log(style.container.width)
    //     }
    // }, [sideNavState])

    return (
        <Box sx={style.container} className='omar'>
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