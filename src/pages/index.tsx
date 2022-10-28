import type { NextPage } from 'next';

// MUI
import Container from '@mui/material/Container';
import MyButton from '../components/buttons/MyButton';
import Link from 'next/link';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <Container maxWidth="xl">
      <div>
        <Image alt='athena' layout='fill' src='/images/Logo(4).svg' />
        <div>
          <h1>
            انا مدرس
          </h1>
          <Link href='/teacherLogin'>
            <a>
              <MyButton content='تسجيل الدخول' color='primary' />
            </a>
          </Link>
        </div>
        <div>
          <h1>
            انا طالب
          </h1>
          <Link href='/studentLogin' style={{paddingLeft: '20px'}}>
            <a>
              <MyButton content='تسجيل الدخول' color='primary' />
            </a>
          </Link>
          <Link href='/studentSignUp'>
            <a>
              <MyButton content='انشاء حساب' color='secondary' />
            </a>
          </Link>
        </div>
      </div>
    </Container>
  )
}

export default Home