import { NextPage } from "next";
import DesktopNavbar from "components/Layout/DesktopNavbar";

// MUI
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Home: NextPage = () => {
    return (
        <Box style={{width: '100%'}}>
          <DesktopNavbar /> 
          <Typography variant='h1' p={5}>
            home
          </Typography>
        </Box>    
    );
}

export default Home;