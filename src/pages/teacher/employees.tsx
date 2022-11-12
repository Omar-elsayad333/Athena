import { NextPage } from 'next';

// MUI
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Employees: NextPage = () => {
    return (
        <Box p={5}>
          <Typography variant='h1'>
            Employees
          </Typography>
        </Box>
    );
}
 
export default Employees;