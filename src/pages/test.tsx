import * as yup from 'yup';
import { useFormik } from 'formik';
import MyInput from "../components/Inputs/MyInput";
import LogButS from '../components/Buttons/LogButS';
import LogButL from '../components/Buttons/LoginButDark';

// MUI
// import { Typography, Button, Box} from "@mui/material";
import Box from "@mui/material/Box";
import MyDropDown from '../components/Inputs/MyDropDown';

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
                    <MyDropDown age={''}/>
                    <br/>
                    <br/>
                    <LogButS 
                        
                        content="انشاء الحساب"
                        onClick={() => console.log('omar')}
                    />
                    <LogButL
                        type='submit'
                        content="انشاء الحساب"
                        onClick={() => console.log('omar')}
                    />
                </form>
            </div>
        </Box>
    );
}

export default Test;