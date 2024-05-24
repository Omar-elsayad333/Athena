import { NextPage } from 'next'
import { withPublic } from 'routes/withRoute'
import PageHead from 'components/Shared/PageHead'
import TeacherLogin from '../components/TeacherLogin'
import useTeacherLogin from 'container/useTeacherLogin'
import LoginLoading from 'components/Loading/LoginLoading'

// MUI
import Box from '@mui/material/Box'

const style: any = {
  root: {
    width: '100%',
    minHeight: '100vh',
    padding: '0px 30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    backgroundPosition: 'top',
    backgroundImage: 'url("./images/brad-pouncey-raV9BAKD1eE-unsplash.jpg")',
    '@media screen and  (max-width: 600px)': {
      justifyContent: 'center',
      padding: '0px 25px',
    },
    '@media screen and  (max-width: 400px)': {
      justifyContent: 'center',
      padding: '0px 20px',
    },
  },
}

const teacherLogin: NextPage = () => {
  const { states, actions } = useTeacherLogin()

  return (
    <Box style={style.root}>
      <PageHead title="Teacher Login" />
      <TeacherLogin states={states} actions={actions} />
      {states.loading && <LoginLoading />}
    </Box>
  )
}

export default withPublic(teacherLogin)
