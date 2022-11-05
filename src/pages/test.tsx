import { Typography,TextField, Button} from "@mui/material";
import Box from "@mui/material/Box";
import InputBase from '@mui/material/InputBase';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { styled } from '@mui/material/styles';

const CssTextField = styled(TextField)({
    boxSizing: 'border-box',
    width: '265px',
    height: '46px',
    fontSize: '14px',
    '& label.Mui-focused': {
        color: 'green',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
        width: '265px',
        height: '46px',
        '& fieldset': {
            borderColor: 'red', 
        },
        '&:hover fieldset': {
            borderColor: 'yellow',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'green',
        },
    },
});

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

const classes:any = {
    root: {
                '& .MuiOutlinedInput-notchedOutline': {
                    border: 'solid 1px red',
                },
    },
    MuiTextField: {
        styleOverrides: {
            root: {
                boxSizing: 'border-box',
                width: '255px',
                height: '46px',
                '& .MuiOutlinedInput-notchedOutline': {
                    border: 'none',
                },
                '&:hover': {
                '& .MuiOutlinedInput-notchedOutline': {
                    border: 'solid 1px red',
                },
                },
            }
        }
    },
}

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

            <CssTextField label="Custom CSS" id="custom-css-outlined-input" />

            <InputBase placeholder='omar' />

            
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
                    <TextField
                        // fullWidth
                        variant="outlined"
                        id="email"
                        name="email"
                        // label="Email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />
                    <TextField
                        sx={classes}
                        variant="outlined"
                        id="password"
                        name="password"
                        type="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
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