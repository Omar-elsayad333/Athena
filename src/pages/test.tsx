import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import Input from '@mui/material/Input';

const Test = () => {
    return (
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', height: '100vh'}}>
            <TextField placeholder='omar' />
        </Box>
    );
}
 
export default Test;