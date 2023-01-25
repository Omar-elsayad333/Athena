import { forwardRef, useContext } from 'react';
import { dayTranslateToArabic } from 'utils/content';
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
    handleClose: Function;
    getSelectedDays: Function;
    data?: any;
}

const MyDaysDialog: React.FC<Props> = ({open, handleClose, getSelectedDays, data}) => {

    const { mainColors, darkMode } = useContext(DarkThemeContext);

    const style = {
        root: {
            '.MuiDialog-paper': {
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
                '@media screen and (max-width: 400px)': {
                    '.MuiTypography-root': {
                        fontSize: '25px',
                    },
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
                boxShadow: 'inset 0px -20px 57px 4px rgb(63 114 164 / 25%)',
                '@media screen and (max-width: 1000px)': {
                    padding: '23px 45px',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gridRowGap: '22px',
                },
                '@media screen and (max-width: 400px)': {
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
            border: `1px solid ${mainColors.primary.main}`,
            background: mainColors.secondary.main,
            color: mainColors.secondary.contrastText,
            cursor: 'pointer',
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
            '@media screen and (max-width: 400px)': {
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

    const selectHandle = (e: any) => {
        e.preventDefault();
        e.target.classList.contains( 'selected' ) ||  e.target.classList.contains( 'darkSelected' ) ?
        e.target.classList.remove('selected', 'darkSelected') :
        e.target.classList.add(darkMode ? 'darkSelected' : 'selected');
    };

    const submitData = () => {
        const selected = [];
        const days = document.getElementsByClassName('days');

        // get selected days then remove the selected class
        for (let i = 0; i < days.length; i++) {
            if(data) {
                let dayState: boolean = false;

                for(let oldData of data) {
                    if(days[i]?.getAttribute('data-day') == oldData.name) {
                        dayState = true
                        if (days[i]?.classList.contains('selected') || days[i]?.classList.contains('darkSelected') ) {
                            const selectedData: any = {
                                name: oldData.name,
                                content: oldData.content,
                                startTime: oldData.startTime,
                                endTime: oldData.endTime
                            };
                            selected.push(selectedData);
                        } else {
                            continue;
                        }
                    }else {
                    }
                }
                
                if(!dayState) {
                    if (days[i]?.classList.contains('selected') || days[i]?.classList.contains('darkSelected') ) {
                        const selectedData: any = {
                            name: '',
                            content: '',
                            startTime: new Date(),
                            endTime: new Date()
                        };
                        selectedData.name = days[i]?.getAttribute('data-day');
                        selectedData.content = dayTranslateToArabic(days[i]?.getAttribute('data-day'))
                        selected.push(selectedData);
                    } else {
                        continue;
                    }
                }
            }else {
                if (days[i]?.classList.contains('selected') || days[i]?.classList.contains('darkSelected') ) {
                    const selectedData: any = {
                        name: '',
                        content: '',
                        startTime: new Date(),
                        endTime: new Date()
                    };
                    selectedData.name = days[i]?.getAttribute('data-day');
                    selectedData.content = dayTranslateToArabic(days[i]?.getAttribute('data-day'))
                    selected.push(selectedData);
                } else {
                    continue;
                }
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
                <Box sx={style.box} data-day='Saturday' className='days' onClick={(e) => selectHandle(e)}>
                    السبت
                </Box>
                <Box sx={style.box} data-day='Sunday' className='days' onClick={(e) => selectHandle(e)}>
                    الاحد   
                </Box>
                <Box sx={style.box} data-day='Monday' className='days' onClick={(e) => selectHandle(e)}>
                    الاثنين
                </Box>
                <Box sx={style.box} data-day='Tuesday' className='days' onClick={(e) => selectHandle(e)}>
                    الثلاثاء
                </Box>
                <Box sx={style.box} data-day='Wednesday' className='days' onClick={(e) => selectHandle(e)}>
                    الاربعاء
                </Box>
                <Box sx={style.box} data-day='Thursday' className='days' onClick={(e) => selectHandle(e)}>
                    الخميس  
                </Box>
                <Box sx={style.box} data-day='Friday' className='days' onClick={(e) => selectHandle(e)}>
                    الجمعة
                </Box>
                <DialogActions>
                    <Button variant='contained' color='primary' sx={style.addBut} onClick={() => submitData()}>اضافة</Button>
                </DialogActions>
            </DialogContent>
        </Dialog>
    );
}

export default MyDaysDialog;