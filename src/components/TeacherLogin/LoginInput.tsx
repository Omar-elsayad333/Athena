import {lightColors} from '../../styles/colors';

// MUI
import TextField from '@mui/material/TextField';

type Props = {
    Id?: any;
    Name?: any;
    value?: any;
    setValue?: any;
    error?: any;
    HelperText?: any;
    Type?: any;
    Placeholder?: any;
}

const LoginInput: React.FC<Props> = ({Name, value, setValue, error, HelperText}) => {
    
    const classes = {
        root: {
            width: '100%',
            '.MuiOutlinedInput-root': {
                height: '80px',
                borderRadius: '12px',
                fontSize: '18px',
                fontWeight: '400',
                color: lightColors.primary.main,
                backgroundColor: 'rgba(232, 243, 255, 0.25)',
                border: '2.5px solid rgba(63, 114, 164, 0)',
                boxShadow: '0px 0px 10px 0px #1C364F40',
                transition: '.2s ease-out',
                '&.Mui-focused': {
                    boxShadow: 'none',
                    border: '2.5px solid rgba(63, 114, 164, 1)',
                    backgroundColor: 'rgba(232, 243, 255, 0.5)',
                },
                '.MuiOutlinedInput-notchedOutline': {
                    fontSize: '20px',
                    border: 'none',
                },
                '@media(max-width: 500px)': {   
                    fontSize: '13px',
                    height: '53px',
                },
            },
            '.Mui-error': {
                borderColor: '#9C1414 !important',
            },
        }
    };
    
    return (
        <TextField
            autoComplete='off'      
            sx={classes.root}  
            name={Name}
            value={value}
            onChange={e => setValue(e.target.value)}
            error={error}
            helperText={HelperText}
        />    
    )
}

export default LoginInput;