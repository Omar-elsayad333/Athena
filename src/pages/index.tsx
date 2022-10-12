import type { NextPage } from 'next'
import Container from '@mui/material/Container';
import Button from '../components/button/Button'

const Home: NextPage = () => {
  return (
    <Container maxWidth="xl">
      <div>
        <div style={{width: '100px', height: '100px', backgroundColor: 'blue', margin: '50px'}} />
        <div>
          <h1>
            انا مدرس
          </h1>
          <a href='/login'>
            <Button content='تسجيل الدخول' />
          </a>
        </div>
        <div>
          <h1>
            انا طالب
          </h1>
          <a href='/studentLogin' style={{paddingLeft: '20px'}}>
            <Button content='تسجيل الدخول' />
          </a>
          <a href='/studentSignUp'>
            <Button content='انشاء حساب' />
          </a>
        </div>
      </div>
    </Container>
  )
}

export default Home