import { NextPage } from "next";
import Container from '@mui/material/Container';
import LoginCard from "../components/studentLogin/LoginCard";

const classes = {
    root: {
        backgroundImage: 'url("./images/studentLogin.jpg")',
        backgroundPosition: 'right',
        backgroundSize: 'cover',
        width: '100%',
    },
    container: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0px 30px',
    },
}

const studentLogin: NextPage = () => {
    return (
        <div style={classes.root}>
            <Container maxWidth='xl' style={classes.container}>
                <LoginCard />
            </Container>
        </div>
    );
}

export default studentLogin;