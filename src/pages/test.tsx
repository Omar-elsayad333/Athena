import * as yup from 'yup';
import { useFormik } from 'formik';
import MyInput from "../components/inputs/MyInput";

// MUI
import { Typography, Button, Box} from "@mui/material";

const validationSchema = yup.object({
    email: yup
        .string()
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string()
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
});

const Test = () => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '20px', height: '100vh'}}>
            
            <Typography sx={{fontSize: '12px', fontWeight: '300'}}>
                أكتب أسمك بالكامل
            </Typography>

            <Typography sx={{fontSize: '14px', fontWeight: '400'}}>
                أكتب أسمك بالكامل
            </Typography>

            <Typography sx={{fontSize: '20px', fontWeight: '400'}}>
                أكتب أسمك بالكامل
            </Typography>

            <Typography sx={{fontSize: '25px', fontWeight: '400'}}>
                أكتب أسمك بالكامل
            </Typography>

            <Typography sx={{fontSize: '30px', fontWeight: '400'}}>
                أكتب أسمك بالكامل
            </Typography>

            <Typography sx={{fontSize: '35px', fontWeight: '700'}}>
                أكتب أسمك بالكامل   
            </Typography>

            <div>
                <form onSubmit={formik.handleSubmit}>
                    <MyInput
                        Id="email"
                        Name="email"
                        Value={formik.values.email}
                        OnChange={formik.handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        HelperText={formik.touched.email && formik.errors.email}
                        Type='text'
                        Placeholder='أكتب عنوانك بالكامل'
                    />
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <Button color="primary" variant="contained" fullWidth type="submit">
                        Submit
                    </Button>
                </form>
            </div>
        </Box>
    );
}

export default Test;