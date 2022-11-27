import { forwardRef } from 'react';
import MyCss from './MyDaysDialog.module.css';

// MUI
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const Transition = forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,) {
        return <Slide direction="up" ref={ref} {...props} />;
    }
);

type Props = {
    open: boolean;
    handleClose: Function;
    getSelectedDays: Function;
}

const MyDaysDialog: React.FC<Props> = ({open, handleClose, getSelectedDays}) => {

    const style = {
        root: {
            '.MuiDialog-paper': {
                borderRadius: '17px', 
            },
            '.MuiDialogTitle-root': {
                width: '100%',
                height: '100px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '20px',
                background: '#E5F1FE',
                borderBottom: '2px solid #3F72A4',
                boxShadow: 'inset 0px 0px 57px 4px rgba(63, 114, 164, 0.25)',
                '@media(max-width: 400px)': {
                    '.MuiTypography-root': {
                        fontSize: '25px',
                    }
                }
            },
            '.MuiDialogContent-root': {
                padding: '40px 45px',
                overflow: 'hidden',
                display: 'grid',
                placeItems: 'center',
                gridRowGap: '35px',
                gridColumnGap: '25px',
                gridTemplateColumns: 'repeat(4, 1fr)',
                background: '#E8F3FF',
                boxShadow: '0px 0px 25px rgba(28, 54, 79, 0.25), inset 0px 0px 57px 4px rgba(63, 114, 164, 0.25)',
                '@media(max-width: 1000px)': {
                    padding: '23px 45px',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gridRowGap: '22px',
                },
                '@media(max-width: 400px)': {
                    padding: '23px 23px',
                    gridTemplateColumns: 'repeat(1, 1fr)',
                    gridRowGap: '22px',
                }
            },
            '.MuiDialogActions-root': {
                padding: '0px',
            },
        },
        box: {
            width: '109px',
            height: '41px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: '700',
            fontSize: '19px',
            borderRadius: '5px',
            border: '1px solid #3F72A4',
            background: '#E8F3FF',
            cursor: 'pointer',
            color: '#3F72A4',
            transition: '.2s',
        },
        exitBut: {
            minWidth: 'fit-content',
            borderRadius: '5px',
            position: 'absolute',
            top: '12px',
            right: '10px',
            '.MuiSvgIcon-root': {
                width: '40px',
                height: '40px'
            },
            '@media(max-width: 400px)': {
                position: 'static',
                '.MuiSvgIcon-root': {
                    width: '30px',
                    height: '30px'
                },
            }
        },
        addBut: {
            width: '109px',
            height: '41px',
            borderRadius: '5px',
            background: '#3F72A4',
            color: '#E8F3FF',
            fontSize: '19px',
            fontWeight: '700',
            '&:hover': {
                background: '#1C364F',
            },
        },
    }

    const selectHandle = (e: any) => {
        e.preventDefault();
        e.target.classList.contains(MyCss.selected) ?
        e.target.classList.remove(MyCss.selected) :
        e.target.classList.add(MyCss.selected);
    };

    const submitData = () => {
        const selected = [];

        const days = document.getElementsByClassName('days');

        // get selected days then remove the selected class
        for (let i = 0; i < days.length; i++) {
            if (days[i]?.classList.contains(`${MyCss.selected}`)) {
                const selectedData: any = {
                    name: '',
                    content: '',
                    startTime: '',
                    endTime: ''
                };
                selectedData['name'] = (days[i]?.getAttribute("data-day"));
                selectedData['content'] = (days[i]?.innerHTML);
                selected.push(selectedData);
                days[i]?.classList.remove(`${MyCss.selected}`);
            } else {
                continue;
            }
        };

        getSelectedDays(selected);
        handleClose();
    }       

    return (
        <Dialog
            sx={style.root}
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={() => handleClose()}
        >
            <DialogTitle> 
                <Typography variant='h1' color='primary'>
                    أيام الاسبوع
                </Typography>  
                <Button sx={style.exitBut} onClick={() => handleClose()}>
                    <CloseIcon />
                </Button>
            </DialogTitle>
            <DialogContent>
                <Box sx={style.box} data-day='saturday' className='days' onClick={(e) => selectHandle(e)}>
                    السبت
                </Box>
                <Box sx={style.box} data-day='sunday' className='days' onClick={(e) => selectHandle(e)}>
                    الاحد   
                </Box>
                <Box sx={style.box} data-day='monday' className='days' onClick={(e) => selectHandle(e)}>
                    الاثنين
                </Box>
                <Box sx={style.box} data-day='tuesday' className='days' onClick={(e) => selectHandle(e)}>
                    الثلاثاء
                </Box>
                <Box sx={style.box} data-day='wednesday' className='days' onClick={(e) => selectHandle(e)}>
                    الاربعاء
                </Box>
                <Box sx={style.box} data-day='thursday' className='days' onClick={(e) => selectHandle(e)}>
                    الخميس  
                </Box>
                <Box sx={style.box} data-day='friday' className='days' onClick={(e) => selectHandle(e)}>
                    الجمعة
                </Box>
                <DialogActions>
                    <Button color='primary' sx={style.addBut} onClick={() => submitData()}>اضافة</Button>
                </DialogActions>
            </DialogContent>
        </Dialog>
    );
}

export default MyDaysDialog;