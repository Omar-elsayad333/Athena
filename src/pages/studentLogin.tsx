import { NextPage } from "next";
import Container from '@mui/material/Container';

const classes = {
    root: {
        backgroundImage: 'url("./images/studentLogin.jpg")',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        width: '100%',
        height: '100vh'
    }
}

const studentLogin: NextPage = () => {
    return (
        <div style={classes.root}>
            <Container>
                
            </Container>
        </div>
    );
}
 
export default studentLogin;