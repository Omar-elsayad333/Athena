import type { NextPage } from 'next';
import logo from '../../public/images/Logo(4).svg';
import LoginButDark from '../components/LoginButDark';
import LoginButLight from '../components/LoginButLight';

// MUI
import Container from '@mui/material/Container';
import Link from 'next/link';
import Image from 'next/image';
import { Box, Typography } from '@mui/material';

const Home: NextPage = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={{width: '100%', padding: '50px', display: 'flex', flexDirection: 'column', gap: '50px', alignItems: 'center'}}>
        <Box >
          <Image alt='athena' layout='intrinsic' src={logo} />
        </Box>
        <Box sx={{width: '100%', display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center'}}>
          <Typography variant='h3'>
            انا مدرس
          </Typography>
          <Link href='/teacherLogin'>
            <a>
              <LoginButDark content='تسجيل الدخول' />
            </a>
          </Link>
        </Box>
        <Box sx={{display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center'}}>
          <Typography variant='h3'>
            انا طالب
          </Typography>
          <Link href='/studentLogin' style={{paddingLeft: '20px'}}>
            <a>
              <LoginButDark content='تسجيل الدخول' />
            </a>
          </Link>
          <Link href='/studentSignUp'>
            <a>
              <LoginButLight content='انشاء حساب' />
            </a>
          </Link>
        </Box>
        <Box sx={{display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center'}}>
          <Typography variant='h3'>
            teacher pages
          </Typography>
          <Link href='/teacher/home' style={{paddingLeft: '20px'}}>
            <a>
              <LoginButDark content='قسم المدرس' />
            </a>
          </Link>
        </Box>
      </Box>
    </Container>
  )
} 

export default Home