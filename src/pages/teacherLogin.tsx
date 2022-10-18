import { NextPage } from "next";
import TeacherLoginCard from "../components/teacherComLogin/TeacherLoginCard";

// MUI
import Container from '@mui/material/Container';

const classes: any = {
    root: {
        backgroundImage: 'url("./images/brad-pouncey-raV9BAKD1eE-unsplash.jpg")',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        width: '100%',
    },
    container: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0px 30px',
        '@media (max-width: 600px)': {
            justifyContent: 'center',
        }
    },
}

const teacherLogin: NextPage = () => {
    return (
        <div style={classes.root}>
            <Container maxWidth='xl' sx={classes.container}>
                <TeacherLoginCard />
            </Container>
        </div>
    );
}

export default teacherLogin;