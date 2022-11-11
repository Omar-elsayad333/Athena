import FormSection from "./FormSection";
import LayerSection from "./LayerSection";

// MUI
import Box from "@mui/material/Box";

const pageStyle: object = {
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    '@media (max-width: 1000px)': {
        flexDirection: 'column-reverse',
    }
}

const StudentSignUp: React.FC = () => {
    return (
        <Box sx={pageStyle}>
            <FormSection />
            <LayerSection />
        </Box>
    );
}
 
export default StudentSignUp;