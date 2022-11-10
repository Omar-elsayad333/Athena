import { NextPage } from "next";
import LoginCard from "../components/TeacherLogin/LoginCard";

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
    return (
        <Box style={classes.root}>
            <LoginCard />
        </Box>
    );
}

export default teacherLogin;