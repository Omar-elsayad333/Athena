import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Button from '../components/buttons/MyButton';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <Container maxWidth="xl">
      <div>
        <div style={{width: '100px', height: '100px', backgroundColor: 'blue', margin: '50px'}} />
        <div>
          <h1>
            انا مدرس
          </h1>
          <Link href='/login'>
            <a>
              <Button content='تسجيل الدخول' />
            </a>
          </Link>
        </div>
        <div>
          <h1>
            انا طالب
          </h1>
          <Link href='/studentLogin' style={{paddingLeft: '20px'}}>
            <a>
              <Button content='تسجيل الدخول' />
            </a>
          </Link>
          <Link href='/studentSignUp'>
            <a>
              <Button content='انشاء حساب' />
            </a>
          </Link>
        </div>
      </div>
    </Container>
  )
}

export default Home