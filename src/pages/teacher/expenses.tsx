import { NextPage } from "next";

// MUI
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Expenses: NextPage = () => {
    return (
        <Box p={5}>
          <Typography variant='h1'>
            Expenses
          </Typography>
        </Box>         
    );
}
 
export default Expenses;