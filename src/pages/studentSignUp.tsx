import FormSection from "../components/StudentSignUp/FormSection";
import LayerSection from "../components/StudentSignUp/LayerSection";

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

const studentSignUp = () => {
    return (
        <Box sx={pageStyle}>
            <FormSection />
            <LayerSection />
        </Box>
    );
}

export default studentSignUp;