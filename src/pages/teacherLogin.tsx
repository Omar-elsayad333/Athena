import { NextPage } from 'next';
import PageHead from 'components/Shared/PageHead';
import useTeacherLogin from 'container/useTeacherLogin';
import TeacherLogin from '../components/TeacherLogin';
import Loading from 'components/Loading';

// MUI
import Box from "@mui/material/Box";

const classes: any = {
    root: {
        backgroundImage: 'url("./images/brad-pouncey-raV9BAKD1eE-unsplash.jpg")',
        backgroundPosition: 'top',
        backgroundSize: 'cover',
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',   
        alignItems: 'center',
        padding: '0px 30px',
        '@media (max-width: 600px)': {  
            justifyContent: 'center',
            padding: '0px 25px',
        },
        '@media (max-width: 400px)': {
            justifyContent: 'center',
            padding: '0px 20px',
        },
    },
};

const teacherLogin: NextPage = () => {

    const {
        userInfo,
        supmit,
        isLoading
    } = useTeacherLogin();

    return (
        <Box style={classes.root}>
            <PageHead title='Teacher Login' />
            { isLoading && <Loading /> }
            <TeacherLogin userInfo={userInfo} supmit={supmit} />
        </Box>
    );
}

export default teacherLogin;