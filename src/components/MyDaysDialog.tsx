import { useState, forwardRef } from 'react';

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
    handleClose: Function;
    open: boolean;
}

const MyDaysDialog: React.FC<Props> = ({handleClose, open}) => {

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
            borderRadius: '5px',
            border: '1px solid #3F72A4',
            background: '#E8F3FF',
            cursor: 'pointer',
            color: '#3F72A4',
            transition: '.2s',
            ':hover': {
                color: '#1C364F',
                border: '1px solid #1C364F',
                background: '#B6D5F0',
            }
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
                <Box sx={style.box} id='السبت'>
                    <Typography color='inherit' fontSize={19} fontWeight={700}>
                        السبت
                    </Typography>
                </Box>
                <DialogActions>
                    <Button color='primary' sx={style.addBut} onClick={() => handleClose()}>اضافة</Button>
                </DialogActions>
            </DialogContent>
        </Dialog>
    );
}

export default MyDaysDialog;