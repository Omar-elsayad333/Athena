import { useTheme } from 'context/ThemeContext';
import InputError from './Shared/InputError';

// MUI
import FormControl from '@mui/material/FormControl';

type Props = {
    value: string;
    onChange: Function;
    helperText: string;
    placeholder: string;
    name?: string | number;
}

const MyTextArea: React.FC<Props> = ({helperText, value, onChange, name, placeholder}) => {

    const { mainColors, darkMode } = useTheme()
    const style = {
        root: {
            padding: '20px',
            width: '100%',
            maxWidth: '580px',
            minWidth: '200px',
            height: '250px',
            minHeight: '250px',
            maxHeight: '1000px',
            border: darkMode ? '1px solid #3F72A4' : 'none',
            borderRadius: '10px',
            background: mainColors.paper.main,
            boxShadow: darkMode ? 'none' : '0px 0px 10px 1px #B6D5F0',
            color: mainColors.primary.main,
            fontSize: '14px',
            fontWeight: '400',
            transition: '.2s ease-out',
        }
    }

    return (
        <FormControl fullWidth>
            <textarea
                value={value}
                style={style.root}
                name={name?.toString()}
                placeholder={placeholder}
                onChange={(e) => onChange(e.target.value, name)}
                className={darkMode ? 'darkTextArea' : 'lightTextarea'}
            />
            <InputError content={helperText} type='error' />
        </FormControl>
    );
}
 
export default MyTextArea;