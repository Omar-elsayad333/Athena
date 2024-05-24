import style from './style'
import Image from 'next/image'
import MyButton from './LoginButton'
import LoginInput from './LoginInput'
import PasswordInput from './PasswordInput'
import PageError from 'components/Shared/PageError'

// MUI
import Box from '@mui/material/Box'
import Checkbox from '@mui/material/Checkbox'
import Typography from '@mui/material/Typography'

type Props = {
  states: any
  actions: any
}

const TeacherLogin: React.FC<Props> = ({ states, actions }) => {
  return (
    <Box sx={style.TeacherLoginCard}>
      <Box sx={style.container}>
        <Box sx={style.imageContainer}>
          <Image
            width="60%"
            height="50%"
            alt="Athena"
            layout="responsive"
            src="/images/logo-with-text.svg"
          />
        </Box>
        <Typography variant="h2" sx={style.headerText}>
          أهلاً بك في البوابة الرئيسية
        </Typography>
        <Box sx={style.form}>
          <Box>
            <Typography sx={style.formLabels}>
              أسم المستخدم، البريد الإلكتروني أو رقم الهاتف
            </Typography>
            <LoginInput
              value={states.userName.value}
              error={states.userName.error}
              onChange={actions.userNameHandler}
              helperText={states.userName.helperText}
            />
          </Box>
          <Box sx={{ width: '100%' }}>
            <Typography sx={style.formLabels}>الرقم السري الخاص بك</Typography>
            <PasswordInput
              show={states.password.show}
              value={states.password.value}
              error={states.password.error}
              onChange={actions.passwordHandler}
              helperText={states.password.helperText}
              showHandler={actions.showPasswordHandler}
            />
            <Box sx={style.formOptions}>
              <Typography variant="h5">هل نسيت الرقم السري ؟</Typography>
              <Box sx={style.checkContainer}>
                <Checkbox
                  size="small"
                  color="primary"
                  sx={style.checkBox}
                  checked={states.rememberMe}
                  onChange={actions.rememberMeHandler}
                />
                <Typography variant="h5">تذكريني</Typography>
              </Box>
            </Box>
          </Box>
          <PageError errors={states.pageErrors} />
          <Box sx={style.logContainer}>
            <MyButton content="تسجيل الدخول" onClick={actions.submit} />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default TeacherLogin
