import { useContext } from 'react';
import { IStyle } from 'styles/IStyle';
import MySelect from 'components/MySelect';
import MyIconButton from 'components/MyIconButton';
import { DarkThemeContext } from 'context/ThemeContext';
import ClassesDialog from 'components/Dialogs/ClassesDialog';
import useAddYear from 'container/years/useAddYear';
import Loading from 'components/Loading/Loading';
import MyButton from 'components/Buttons/MyButton';
import MyButtonError from 'components/Buttons/MyButtonError';

// MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import PageError from 'components/Shared/PageError';
import BasicDialog from 'components/Dialogs/BasicDialogs';


const AddYearC: React.FC = () => {
    
    const { mainColors } = useContext(DarkThemeContext);
    const {
        data,
        states,
        actions,
        dialog
    } = useAddYear();
    
    const style: IStyle = {
        container: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '40px',
            columnGap: '104px',
        },
        startYearContainer: {
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '43px',
        },
        startButton: {
            width: '214px',
            height: '40px',
            display: 'grid',
            placeItems: 'center',
            cursor: 'pointer',
            borderRadius: '7px',
            border: states.yearActive.state ? `solid 1px ${mainColors.chips.border}` : 'none',
            background: states.yearActive.state ? mainColors.linerGradient.primary : mainColors.chips.main,
        },
        backPaper: {
            width: 'fit-content',
            padding: '30px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '46px',
            borderRadius: '12px',
            background: mainColors.paper.main,
            border: `2px solid ${mainColors.paper.border}`,
        },
        classesList: {
            display: 'flex',
            gap: '25px',
            flexWrap: 'wrap',
        },
        classesLabel: {
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
            border: `1px solid ${mainColors.chips.border}`,
            color: mainColors.secondary.contrastText,
            background: mainColors.chips.main,
        },
        semestersBackPaper: {
            width: 'fit-content',
            padding: '40px',
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            gap: '60px',
            borderRadius: '12px',
            background: mainColors.paper.main,
            border: `2px solid ${mainColors.paper.border}`,
        },
        semeterContainer: {
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            columnGap: '80px',
            rowGap: '30px',
        },
        semestersBox: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '29px'
        },
        semesterChip: {
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
            border: `solid 1px ${mainColors.chips.border}`,
            color: mainColors.secondary.contrastText,
            background: mainColors.linerGradient.primary,
        },
        title: {
            flex: '100%',
        },
        buttonsContainer: {
            marginTop: '30px',
            flex: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '35px'
        },
        submitButton: {
            width: '170px',
            height: '40px',
        }
    }
    
    return (
        <Box sx={style.container}>
            {
                states.loading &&
                <Loading />
            }
            <ClassesDialog 
                data={data.requiredData} 
                open={states.classesDialogState} 
                handleClose={actions.classesHandleDialog} 
                getSelectedClasses={actions.handleSelectedClasses} 
            />
            <Box sx={style.startYearContainer}>
                <Box onClick={() => actions.activeYear()} sx={style.startButton} id='start-year-but'>
                    <Typography fontWeight={700} variant='h4' color='primary'>
                        بداية عام جديد
                    </Typography>
                </Box>
                <Box className='classes-section'>
                    <MySelect 
                        error={states.yearActive.error}
                        value={states.yearActive.name} 
                        getSelected={actions.getSelectedYear} 
                        placeholder='تحديد العام الدراسي' 
                        data={data.yearsToSelect}
                    />
                </Box>
            </Box>
            <Typography className='classes-section' sx={style.title} variant="h3" color={mainColors.title.main}>
                تحديد الصفوف الدراسية:-
            </Typography>
            <Box sx={style.backPaper} className='classes-section'>
                <MyIconButton 
                    event={actions.classesHandleDialog} 
                    icon={<ControlPointIcon />} 
                    content='الصفوف الدراسية'
                />
                {
                    data.selectedClasses.length > 0 &&
                    <Box sx={style.classesList}>
                        {
                            data.selectedClasses.map((item: any) => {
                                return (
                                    <Box key={item.id} sx={style.classesLabel}>
                                        {item.name}
                                    </Box>
                                )
                            })
                        }
                    </Box>
                }
            </Box>
            {
                data.selectedClasses.length > 0 &&
                <Typography className='classes-section' sx={style.title} variant="h3" color={mainColors.title.main}>
                    تحديد الفصول الدراسية:-
                </Typography>
            }
            {
                data.selectedClasses.length > 0 &&
                <Box sx={style.semestersBackPaper}>
                    {
                        data.selectedClasses.map((item: any, index: number) => {
                            return (
                                <Box key={item.id} sx={style.semeterContainer}>
                                    <Box sx={style.classesLabel}>
                                        {item.name}
                                    </Box>
                                    <Box sx={style.semestersBox}>
                                        {
                                            data.classes[index]?.first ?
                                            <Box sx={style.semesterChip} onClick={() => actions.removeSemester(item.id, 'first')}>
                                                الفصل الدراسي الاول
                                            </Box> : 
                                            <MyIconButton 
                                                event={() => actions.addSemester(item.id, 'first')} 
                                                content='الفصول الدراسية '
                                                icon={<ControlPointIcon />} 
                                            />
                                        }
                                        {
                                            data.classes[index]?.second ?
                                            <Box sx={style.semesterChip} onClick={() => actions.removeSemester(item.id, 'second')}>
                                                الفصل الدراسي الثاني
                                            </Box> : 
                                            <Box sx={style.semestersBox}>
                                                <MyIconButton 
                                                    event={() => actions.addSemester(item.id, 'second')} 
                                                    content='الفصول الدراسية '   
                                                    icon={<ControlPointIcon />} 
                                                    />
                                            </Box>
                                        }
                                    </Box>
                                </Box>
                            )
                        })
                    }
                </Box>
            }
            <PageError errorInfo={states.errorLabel} />
            <Box sx={style.buttonsContainer}  className='classes-section'>
                <Box sx={style.submitButton}>
                    <MyButton onClick={actions.submit} loading={states.loading} content='تأكيد واضافة' />
                </Box>
                <Box sx={style.submitButton}>
                    <MyButtonError loading={states.loading} content='إلغاء العملية' onClick={dialog.actions.handleDialogState} />
                </Box>
            </Box>
            <BasicDialog state={dialog.content.state} content={dialog.content} actions={dialog.actions} />
        </Box>
    );
}
 
export default AddYearC;