// MUI
import Button from '@mui/material/Button';
import ControlPointIcon from '@mui/icons-material/ControlPoint';

const MyButton = {
    root: {
        width: 'fit-content',
        height: '41px',
        paddign: '6px 16px',
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

const AddDayBut: React.FC = () => {
    return (
        <Button sx={MyButton.root} startIcon={<ControlPointIcon />} variant="contained" color='secondary'>
            اضافة يوم 
        </Button> 
    );
}
 
export default AddDayBut;