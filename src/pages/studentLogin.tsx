import { NextPage } from "next";
import StudentLoginCard from "../components/studentLogin/StudentLoginCard";

// MUI
import Container from '@mui/material/Container';
import Box from "@mui/material/Box";

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
            padding: '0px 25px',
        },
        '@media (max-width: 400px)': {
            justifyContent: 'center',
            padding: '0px 15px',
        }
    },
}

const studentLogin: NextPage = () => {
    return (
        <Box style={classes.root}>
            <Container maxWidth='xl' sx={classes.container}>
                <StudentLoginCard />
            </Container>
        </Box>
    );
}

export default studentLogin;