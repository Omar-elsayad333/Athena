import { IStyle } from "styles/IStyle";

// MUI
import { Box, Button, Typography } from "@mui/material";

const AddTeacherForm: React.FC = () => {

    const style: IStyle = {
        container: {
            width: '100%',
            minHeight: '65vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '67px',
            background: '#E8F3FF',
        },
        backPaper: {
            width: 'fit-content',
            maxWidth: '80%',
            height: 'fit-content',
            minHeight: '300px',
            padding: '42px 69px',
            background: '#E0EEFF',
            borderRadius: '20px',
            border: '1px solid #3F72A4',
        },
        submitButton: {
            width: '202px',
            height: '46px',
            borderRadius: '7px',
            background: '#E8F3FF',
            border: '1.5px solid #3F72A4',
        }
    }

    return (
        <Box sx={style.container}>
            <Box sx={style.backPaper}>
                <Typography variant="h3" color={'primary'} fontWeight={700}>
                    New Teacher Application Form
                </Typography>
            </Box>
            <Button sx={style.submitButton}>
                <Typography variant="h4" color={'#3F72A4'} fontWeight={700} >
                    Confirm
                </Typography>
            </Button>
        </Box>
    );
}
 
export default AddTeacherForm;