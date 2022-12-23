import { useContext } from 'react';
import { DarkThemeContext } from 'context/ThemeContext';

// MUI
import Button from '@mui/material/Button';

type Props = {
    event?: any;
    content: string;
    icon: any;
}

const MyIconButton: React.FC<Props> = ({event, content, icon}) => {

    const {mainColors, darkMode} = useContext(DarkThemeContext);

    const clasess = {
        root: {
            width: 'fit-content',
            height: '41px',
            padding: '8px 16px',
            fontSize: '20px',
            fontWeight: '700',  
            borderRadius: '6px',
            gap : '8px',
            border: darkMode ? 'solid 1px #E0EEFF' : 'none',
            background: mainColors.customButton.main,
            boxShadow: darkMode ? 'none' : '0px 0px 10px 1px #B6D5F0',
            "&:hover": {
                background: mainColors.customButton.main,
                boxShadow: darkMode ? 'none' : '0px 0px 10px 1px #B6D5F0',
            },
            '.MuiButton-startIcon': {
                margin: '0',
                width: '19px',
                height: '19px',
            }
        }
    };

    return ( 
        <Button sx={clasess.root} onClick={event} startIcon={icon} variant="contained" color='secondary'>
            {content}
        </Button> 
    );
}

export default MyIconButton;