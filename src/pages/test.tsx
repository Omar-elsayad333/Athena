import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import InputBase from '@mui/material/InputBase';
import { fontWeight } from "@mui/system";

const Test = () => {
    return (
        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '20px', height: '100vh'}}>
            <InputBase placeholder='omar' />
            <Typography sx={{fontSize: '12px', fontWeight: '200'}}>
            أكتب أسمك بالكامل
            </Typography>
            <Typography sx={{fontSize: '14px'}}>
            أكتب أسمك بالكامل
            </Typography>
            <Typography sx={{fontSize: '20px'}}>
            أكتب أسمك بالكامل
            </Typography>
            <Typography sx={{fontSize: '25px'}}>
            أكتب أسمك بالكامل
            </Typography>
            <Typography sx={{fontSize: '30px'}}>
            أكتب أسمك بالكامل
            </Typography>
            <Typography sx={{fontSize: '35px'}}>
            أكتب أسمك بالكامل
            </Typography>
        </Box>
    );
}

export default Test;