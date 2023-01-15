import MyCss from './MyDialog.module.css';
import { forwardRef, useContext, useEffect } from 'react';
import { DarkThemeContext } from 'context/ThemeContext';

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
    name?: string;
    handleClose: Function;
    getSelectedClassrooms: Function;
}

const SemestersDialog: React.FC<Props> = ({open, name, handleClose, getSelectedClassrooms}) => {

    const { mainColors, darkMode } = useContext(DarkThemeContext);

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
                '@media(max-width: 450px)': {
                    '.MuiTypography-root': {
                        fontSize: '25px',
                    },
                }
            },
            '.MuiDialogContent-root': {
                padding: '35px 80px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '40px',
                boxShadow: 'inset 0px -20px 57px 4px rgb(63 114 164 / 25%)',
                '@media(max-width: 400px)': {
                    padding: '35px 20px',
                    gap: '30px'
                },
                '@media(max-width: 300px)': {
                    padding: '35px 10px',
                    gap: '30px'
                }
            },
            '.MuiDialogActions-root': {
                padding: '0px',
            },
        },
        boxContainer: {
            display: 'grid',
            gridRowGap: '31px',
            gridColumnGap: '35px',
            gridTemplateColumns: 'repeat(2, 1fr)',
            '@media screen and (max-width: 600px) ': {
                gridTemplateColumns: 'repeat(1, 1fr)',
            }
        },
        box: {
            width: '154px',
            height: '41px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '14px',
            fontWeight: '700',
            textAlign: 'center',    
            cursor: 'pointer',
            borderRadius: '5px',
            color: mainColors.secondary.contrastText,
            background: mainColors.chips.main,
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
            width: '343px',    
            height: '41px',
            fontSize: '19px',
            fontWeight: '700',
            borderRadius: '5px',
            boxShadow: 'none',
            '@media screen and (max-width: 600px) ': {
                width: '154px',
            }
        },
    }

    const selectHandle = (e: any) => {
        e.preventDefault();
        e.target.classList.contains( MyCss.selected ) ||  e.target.classList.contains( MyCss.darkSelected ) ?
        e.target.classList.remove(MyCss.selected, MyCss.darkSelected) :
        e.target.classList.add(darkMode ? MyCss.darkSelected : MyCss.selected);
    };

    const submitData = () => {
        const semester = document.getElementsByClassName('semester');
        const selectedData: any = {
            id: name,
            first: false,
            second: false,
        };

        // get selected days then remove the selected class
        for (let i = 0; i < semester.length; i++) {
            if (semester[i]?.classList.contains(`${MyCss.selected}`) || semester[i]?.classList.contains(`${MyCss.darkSelected}`) ) {
                if(semester[i]?.getAttribute("data-definition") == 'first'){
                    selectedData['first'] = true;
                }else {
                    selectedData['second'] = true;
                }
            } else {
                continue;
            }
        };

        
        getSelectedClassrooms(selectedData);
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
                    الفصول الدراسية
                </Typography>  
                <Button sx={style.exitBut} onClick={() => handleClose()}>
                    <CloseIcon />
                </Button>
            </DialogTitle>
            <DialogContent>
                <Typography variant='h4' color='primary' textAlign={'center'}>
                    حدد الفصول الدراسية المناسبة لك
                </Typography>
                <Box sx={style.boxContainer}>
                    <Box sx={style.box} data-definition='first' className='semester' onClick={(e) => selectHandle(e)}>
                        فصل دراسي أول
                    </Box>
                    <Box sx={style.box} data-definition='second' className='semester' onClick={(e) => selectHandle(e)}>
                        فصل دراسي ثاني  
                    </Box>
                </Box>
                <DialogActions>
                    <Button variant='contained' color='primary' sx={style.addBut} onClick={() => submitData()}>
                        تأكيد واضافة    
                    </Button>
                </DialogActions>
            </DialogContent>
        </Dialog>
    );
}

export default SemestersDialog;