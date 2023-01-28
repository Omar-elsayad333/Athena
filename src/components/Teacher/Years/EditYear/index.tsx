import { useContext } from 'react';
import { IStyle } from 'styles/IStyle';
import MySelect from 'components/MySelect';
import MyIconButton from 'components/MyIconButton';
import { DarkThemeContext } from 'context/ThemeContext';
import ClassesDialog from 'components/Dialogs/ClassesDialog';
// import MyButton from 'components/Buttons/MyButton';
// import MyButtonError from 'components/Buttons/MyButtonError';
// import BasicDialog from 'components/Dialogs/BasicDialogs';
// import PageError from 'components/Shared/PageError';

// MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { Button } from '@mui/material';

type Props = {
    data: any;
    states: any;
    actions: any;
    dialogs: any;
}

const EditYearC: React.FC<Props> = ({data, states, actions}) => {
    
    const { mainColors } = useContext(DarkThemeContext);
    
    const style: IStyle = {
        container: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '40px',
            columnGap: '104px',
        },
        yearControlsContainer: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'start',
            alignItems: 'center',
            gap: '43px'
        },
        deleteYearButton: {
            width: '214px',
            height: '40px',
            color: '#E8F3FF',
            background: mainColors.error.main,
            borderRadius: '7px',
            ':hover': {
                background: mainColors.error.main,
            }
        },
        endYearButton: {
            width: '214px',
            height: '40px',
            color: mainColors.error.main,
            background: 'transparent',
            borderRadius: '7px',
            border: `1px solid ${mainColors.error.main}`,
            ':hover': {
                background: 'transparent',
            }
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
            <Box sx={style.yearControlsContainer}>
                <MySelect
                    value={states.selectedYear.name}
                    error={states.selectedYear.error}
                    getSelected={actions.getSelectedYear} 
                    placeholder={states.year.name} 
                    data={data.yearsToSelect}
                />
                <Button sx={style.endYearButton} onClick={actions.endYear}>
                    <Typography fontSize={'h4'} fontWeight={700}>
                        إنهاء العام الدراسي 
                    </Typography>
                </Button>
                <Button sx={style.deleteYearButton} onClick={actions.deleteYear}>
                    <Typography fontSize={'h4'} fontWeight={700}>
                        حذف العام الدراسي   
                    </Typography>
                </Button>
            </Box>
            <Typography sx={style.title} variant="h3" color={mainColors.title.main}>
                تحديد الصفوف الدراسية:-
            </Typography>
            <Box sx={style.backPaper}>
                <MyIconButton 
                    event={actions.classesHandleDialog} 
                    icon={<ControlPointIcon />} 
                    content='الصفوف الدراسية'
                />
                {/* {
                    data.classes.length > 0 &&
                    <Box sx={style.classesList}>
                        {
                            data.classes.map((item: any) => {
                                return (
                                    <Box key={item.id} sx={style.classesLabel}>
                                        {item.name}
                                    </Box>
                                )
                            })
                        }
                    </Box>
                } */}
            </Box>
            {
                // data.classes.length > 0 &&
                // <Typography sx={style.title} variant="h3" color={mainColors.title.main}>
                //     تحديد الفصول الدراسية:-
                // </Typography>
            }
            {
                // data.classes.length > 0 &&
                // <Box sx={style.semestersBackPaper}>
                //     {
                //         data.classes.map((item: any) => {
                //             return (
                //                 <Box key={item.id} sx={style.semeterContainer}>
                //                     <Box sx={style.classesLabel}>
                //                         {item.name}
                //                     </Box>
                //                     <Box sx={style.semestersBox}>
                //                         {
                //                             item.first ?
                //                             <Box sx={style.semesterChip} onClick={() => actions.removeSemester(item.id, 'first')}>
                //                                 الفصل الدراسي الاول
                //                             </Box> : 
                //                             <MyIconButton 
                //                                 event={() => actions.addSemester(item.id, 'first')} 
                //                                 content='الفصول الدراسية '
                //                                 icon={<ControlPointIcon />} 
                //                             />
                //                         }
                //                         {
                //                             item.second ?
                //                             <Box sx={style.semesterChip} onClick={() => actions.removeSemester(item.id, 'second')}>
                //                                 الفصل الدراسي الثاني
                //                             </Box> : 
                //                             <Box sx={style.semestersBox}>
                //                                 <MyIconButton 
                //                                     event={() => actions.addSemester(item.id, 'second')} 
                //                                     content='الفصول الدراسية '   
                //                                     icon={<ControlPointIcon />} 
                //                                     />
                //                             </Box>
                //                         }
                //                     </Box>
                //                 </Box>
                //             )
                //         })
                //     }
                // </Box>
            }
            {/* <Box sx={style.buttonsContainer}>
                <PageError errorInfo={states.errorLabel} />
                <Box sx={style.submitButton}>
                    <MyButton onClick={actions.submit} loading={states.loading} content='تأكيد واضافة' />
                </Box>
                <Box sx={style.submitButton}>
                    <MyButtonError loading={states.loading} content='إلغاء العملية' onClick={dialogs.actions.handleDialogState} />
                </Box>
            </Box> */}
            {/* <BasicDialog state={dialogs.content.state} content={dialogs.content} actions={dialogs.actions} /> */}
            <ClassesDialog 
                data={data.requiredData} 
                open={states.classesDialogState} 
                handleClose={actions.classesHandleDialog} 
                getSelectedClasses={actions.handleSelectedClasses} 
            />
        </Box>
    );
}
 
export default EditYearC;