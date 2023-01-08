import { forwardRef, useContext } from 'react';
import { DarkThemeContext } from 'context/ThemeContext';

// MUI
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
    state: boolean;
    actions: any;
    content: any;
}

const BasicDialog: React.FC<Props> = ({state, content, actions}) => {
    
    const { mainColors } = useContext(DarkThemeContext);

    const style = {
        root: {
            '.MuiDialog-paper': {
                maxWidth: '90%',
                width: 'fit-content',
                borderRadius: '17px', 
                background: mainColors.dialog.background,
            },
            '.MuiDialogTitle-root': {
                width: '100%',
                height: '100px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '20px',
                borderBottom: '2px solid #3F72A4',
                boxShadow: mainColors.dialog.titleShadow,
                '@media(max-width: 400px)': {
                    '.MuiTypography-root': {
                        fontSize: '25px',
                    },
                }
            },
            '.MuiDialogContent-root': {
                width: 'fit-content',
                padding: '30px 50px 40px !important',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '40px',
                boxShadow: 'inset 0px -20px 57px 4px rgb(63 114 164 / 25%)',
                '@media(max-width: 450px)': {
                    padding: '35px 20px',
                    gap: '20px'
                },
                '@media(max-width: 300px)': {
                    padding: '35px 10px',
                    gap: '20px'
                }
            },
            '.MuiDialogActions-root': {
                padding: '0px',
                gap: '35px'
            },
        },
        boxContainer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '28px',
        },
        box: {
            width: '95px',
            height: '95px',
            padding: '5px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: '700',
            fontSize: '20px',
            textAlign: 'center',
            borderRadius: '50%',
            color: mainColors.secondary.contrastText,
            background: mainColors.chips.main,
            cursor: 'pointer',
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
            fontSize: '19px',
            fontWeight: '700',
            borderRadius: '5px',
            boxShadow: 'none',
        },
    }     

    return (
        <Dialog
            sx={style.root}
            open={state}
            TransitionComponent={Transition}
            keepMounted
            onClose={() => actions.handleDialogState()}
        >
            <DialogTitle> 
                <Typography variant='h1' color='primary'>
                    {content.title}
                </Typography>  
                <Button sx={style.exitBut} onClick={() => actions.handleDialogState()}>
                    <CloseIcon />
                </Button>
            </DialogTitle>
            <DialogContent>
                <Typography variant='h4' color='primary' textAlign={'center'}>
                    {content.main}
                </Typography>
                <DialogActions>
                    <Button onClick={() => actions.submitDialog()} variant='contained' color='error' sx={style.addBut}>
                        {content.actionContent.first}
                    </Button>
                    <Button onClick={() => actions.handleDialogState()} variant='contained' color='primary' sx={style.addBut}>
                        {content.actionContent.second}
                    </Button>
                </DialogActions>
            </DialogContent>
        </Dialog>
    );
}
 
export default BasicDialog;