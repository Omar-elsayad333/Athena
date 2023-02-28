import InputError from './Shared/InputError';
import { useTheme } from 'context/ThemeContext';

// MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';

type Props = {
    value: string;
    onChange: Function;
    helperText: string;
    placeholder: string;
    name?: string | number;
    indexes?: any;
    addImage: Function;
}

const MyTextArea: React.FC<Props> = ({helperText, value, onChange, name, placeholder, indexes, addImage}) => {

    const { mainColors, darkMode } = useTheme()
    const style = {
        root: {
            padding: '20px',
            width: '580px',
            maxWidth: '100%',
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
        },
        icon: {
            position: 'absolute',
            zIndex: '5',
            bottom: '20px',
            left: '15px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px'
        }
    }

    return (
        <FormControl sx={{maxWidth: '100%'}}>
            <textarea
                value={value}
                style={style.root}
                name={name?.toString()}
                placeholder={placeholder}
                onChange={(e) => onChange(e.target.value, indexes)}
                className={darkMode ? 'darkTextArea' : 'lightTextarea'}
            />
            <Box sx={style.icon} component="label">
                <Typography variant='h6' color={'primary'} fontWeight={700}>
                    {`5000 / ${value.length}`}
                </Typography>
                <input
                    hidden 
                    type="file"  
                    accept="image/png, image/jpeg, image/jpg" 
                    onChange={(e) => addImage(e.target.files, indexes)} 
                />
                <svg width="20" height="20" viewBox="0 0 20 20" fill={mainColors.primary.main} xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.8837 2.48047H4.96125C4.30334 2.48047 3.67239 2.74182 3.20718 3.20703C2.74197 3.67223 2.48062 4.30319 2.48062 4.96109V14.8836C2.48062 15.5415 2.74197 16.1725 3.20718 16.6377C3.67239 17.1029 4.30334 17.3642 4.96125 17.3642H14.8837C15.5416 17.3642 16.1726 17.1029 16.6378 16.6377C17.103 16.1725 17.3644 15.5415 17.3644 14.8836V4.96109C17.3644 4.30319 17.103 3.67223 16.6378 3.20703C16.1726 2.74182 15.5416 2.48047 14.8837 2.48047ZM4.96125 4.13422H14.8837C15.103 4.13422 15.3134 4.22134 15.4684 4.3764C15.6235 4.53147 15.7106 4.74179 15.7106 4.96109V11.8738L13.0646 9.6164C12.6547 9.27907 12.1402 9.09464 11.6093 9.09464C11.0784 9.09464 10.564 9.27907 10.154 9.6164L4.13437 14.6355V4.96109C4.13437 4.74179 4.22149 4.53147 4.37656 4.3764C4.53163 4.22134 4.74195 4.13422 4.96125 4.13422ZM14.8837 15.7105H5.4243L11.2124 10.8815C11.3236 10.799 11.4584 10.7544 11.5969 10.7544C11.7354 10.7544 11.8702 10.799 11.9814 10.8815L15.7106 14.0567V14.8836C15.7106 15.1029 15.6235 15.3132 15.4684 15.4683C15.3134 15.6234 15.103 15.7105 14.8837 15.7105Z" fill="inherit"/>
                    <path d="M6.61501 8.26969C7.30001 8.26969 7.85532 7.71438 7.85532 7.02937C7.85532 6.34437 7.30001 5.78906 6.61501 5.78906C5.93 5.78906 5.37469 6.34437 5.37469 7.02937C5.37469 7.71438 5.93 8.26969 6.61501 8.26969Z" fill="inherit"/>
                </svg>
            </Box>
            <InputError content={helperText} type='error' />
        </FormControl>
    );
}
 
export default MyTextArea;