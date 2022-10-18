import { NextPage } from "next";
import Container from '@mui/material/Container';
import StudentLoginCard from "../components/studentLogin/StudentLoginCard";

const classes: any = {
    root: {
        backgroundImage: 'url("./images/studentLogin.jpg")',
        backgroundPosition: 'right',
        backgroundSize: 'cover',
        width: '100%',
    },
    container: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'end',
        alignItems: 'center',
        padding: '0px 30px',
        '@media (max-width: 600px)': {
            justifyContent: 'center',
        }
    },
}

const studentLogin: NextPage = () => {
    return (
        <div style={classes.root}>
            <Container maxWidth='xl' sx={classes.container}>
                <StudentLoginCard />
            </Container>
        </div>
    );
}

export default studentLogin;