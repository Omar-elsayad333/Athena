import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import InputBase from '@mui/material/InputBase';

const Test = () => {
    return (
        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '20px', height: '100vh'}}>
            <InputBase placeholder='omar' />
            <Typography sx={{fontSize: '7px'}}>
            أكتب أسمك بالكامل
            </Typography>
            <Typography sx={{fontSize: '10px'}}>
            أكتب أسمك بالكامل
            </Typography>
            <Typography sx={{fontSize: '14px'}}>
            أكتب أسمك بالكامل
            </Typography>
            <Typography sx={{fontSize: '20px'}}>
            أكتب أسمك بالكامل
            </Typography>
            <Typography sx={{fontSize: '35px'}}>
            أكتب أسمك بالكامل
            </Typography>
            <Typography sx={{fontSize: '50px'}}>
            أكتب أسمك بالكامل
            </Typography>
        </Box>
    );
}

export default Test;