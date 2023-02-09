import Link from 'next/link';
import Image from 'next/image';
import { NextPage } from 'next';
import { lightColors, darkColors } from 'styles/colors';
import { useContext } from 'react';
import { DarkThemeContext } from 'context/ThemeContext';
import PageHead from 'components/Shared/PageHead';
import logo from '../../public/images/logo-with-text.svg';
import LoginButLight from '../components/TeacherLogin/LoginButton';
import LoginButDark from '../components/LoginButDark';
import { withPublic } from 'routes/withRouts';

// MUI
import { Box, Typography } from '@mui/material';

const Home: NextPage = () => {

  const {darkMode} = useContext(DarkThemeContext);

  return (
    <Box sx={{width: '100%', background: darkMode ? darkColors.backgroundColor.main : lightColors.backgroundColor.main}}>
      <PageHead title='Athena' />
      <Box sx={{width: '100%', padding: '50px', display: 'flex', flexDirection: 'column', gap: '50px', alignItems: 'center'}}>
        <Box >
          <Image alt='athena' layout='intrinsic' src={logo} />
        </Box>
        <Box sx={{display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center'}}>
          <Typography variant='h3' color='primary'>
            انا مدرس
          </Typography>
          <Link href='/login-teacher'>
            <a>
              <LoginButDark content='تسجيل الدخول' />
            </a>
          </Link>
        </Box>
        <Box sx={{display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center'}}>
          <Typography variant='h3' color='primary'>
            انا طالب
          </Typography>
          <Link href='/studentLogin' style={{paddingLeft: '20px'}}>
            <a>
              <LoginButDark content='تسجيل الدخول' />
            </a>
          </Link>
          <Link href='/student-signup'>
            <a>
              <LoginButLight content='انشاء حساب' />
            </a>
          </Link>
        </Box>
        <Box sx={{display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center'}}>
          <Typography variant='h3' color='primary'>
            Teacher Section
          </Typography>
          <Link href='/teacher/home' style={{paddingLeft: '20px'}}>
            <a>
              <LoginButDark content='قسم المدرس' />
            </a>
          </Link>
        </Box>
        <Box sx={{display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center'}}>
          <Typography variant='h3' color='primary'>
            Dashboard Section
          </Typography>
          <Link href='/dashboard' style={{paddingLeft: '20px'}}>
            <a>
              <LoginButDark content='Dashboard' />
            </a>
          </Link>
        </Box>
        <Box sx={{display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center'}}>
          <Typography variant='h3' color='primary'>
            Test Section
          </Typography>
          <Link href='/test' style={{paddingLeft: '20px'}}>
            <a>
              <LoginButDark content='Test' />
            </a>
          </Link>
        </Box>
      </Box>
    </Box>
  )
} 

export default withPublic(Home);