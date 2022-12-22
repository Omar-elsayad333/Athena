import { useContext } from 'react';
import { DarkThemeContext } from 'context/ThemeContext';``

// MUI
import Button from '@mui/material/Button';
import ControlPointIcon from '@mui/icons-material/ControlPoint';


type Props = {
    handleDialogState: any;
}

const AddDayButton: React.FC<Props> = ({handleDialogState}) => {

    const {mainColors, darkMode} = useContext(DarkThemeContext);

    const MyButton = {
        root: {
            width: '109px',
            height: '41px',
            marginLeft: '22px',
            padding: '6px 5px',
            fontSize: '14px',
            fontWeight: '700',
            borderRadius: '6px',
            gap : '7px',
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
        <Button sx={MyButton.root} onClick={handleDialogState} startIcon={<ControlPointIcon />} variant="contained" color='secondary'>
            اضافة يوم 
        </Button> 
    );
}

export default AddDayButton;