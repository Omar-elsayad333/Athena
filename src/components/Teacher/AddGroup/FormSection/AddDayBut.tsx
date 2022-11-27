// MUI
import Button from '@mui/material/Button';
import ControlPointIcon from '@mui/icons-material/ControlPoint';

const MyButton = {
    root: {
        width: '109px',
        height: '41px',
        padding: '6px 5px',
        fontSize: '14px',
        fontWeight: '700',
        borderRadius: '6px',
        gap : '7px',
        boxShadow: '0px 0px 10px 1px #B6D5F0',
        "&:hover": {
            backgroundColor: "inherit",
            boxShadow: '0px 0px 10px 1px #B6D5F0',
        },
        '.MuiButton-startIcon': {
            margin: '0',
            width: '19px',
            height: '19px',
        }
    }
};

type Props = {
    handleDialogState: any;
}

const AddDayBut: React.FC<Props> = ({handleDialogState}) => {
    return (
        <Button sx={MyButton.root} onClick={handleDialogState} startIcon={<ControlPointIcon />} variant="contained" color='secondary'>
            اضافة يوم 
        </Button> 
    );
}
 
export default AddDayBut;