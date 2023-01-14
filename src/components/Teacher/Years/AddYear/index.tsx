import { useContext } from 'react';
import { IStyle } from 'styles/IStyle';
import MySelect from 'components/MySelect';
import MyIconButton from 'components/MyIconButton';
import { DarkThemeContext } from 'context/ThemeContext';
import ClassesDialog from 'components/Dialogs/ClassesDialog';
import useAddYear from 'container/years/useAddYear';
import SemestersDialog from 'components/Dialogs/SemestersDialog';
import Loading from 'components/Loading/Loading';

// MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ControlPointIcon from '@mui/icons-material/ControlPoint';


const AddYearC: React.FC = () => {
    
    const { mainColors } = useContext(DarkThemeContext);
    const {
        data,
        states,
        actions,
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
            justifyContent: 'center',
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
        classroomsContainer: {
            display: 'flex',
            flexWrap: 'wrap'
        },
        classroomsBackPaper: {
            width: 'fit-content',
            padding: '40px',
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            gap: '48px',
            background: 'transparent',
            borderRadius: '0px 12px 12px 0px',
            border: `2px solid ${mainColors.paper.border}`,
        },
        classroomsSecondBackPaper: {
            width: 'fit-content',
            padding: '40px',
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            gap: '48px',
            background: mainColors.paper.main,
            borderRadius: '12px 0px 0px 12px',
            border: `2px solid ${mainColors.paper.border}`,
            borderRight: 'none'
        },
        title: {
            flex: '100%',
        },
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
            <SemestersDialog 
                open={states.semetersDialogState} 
                handleClose={actions.semestersHandleDialog} 
                getSelectedClassrooms={actions.handleSelectedSemesters} 
            />
            <Box sx={style.startYearContainer}>
                <Box onClick={() => actions.activeYear()} sx={style.startButton} id='start-year-but'>
                    <Typography fontWeight={700} variant='h4' color='primary'>
                        بداية عام جديد
                    </Typography>
                </Box>
                <Box className='classes-section'>
                    <MySelect 
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
                <Box sx={style.classroomsContainer}>
                    <Box sx={style.classroomsBackPaper}>
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
                    <Box sx={style.classroomsSecondBackPaper}>
                        {
                            data.selectedClasses.map(() => {
                                return (
                                    // <Box key={item.id} sx={style.classesLabel}>
                                    //     {item.name}
                                    // </Box>
                                    <MyIconButton 
                                        event={actions.semestersHandleDialog} 
                                        content='الفصول الدراسية'
                                        icon={<ControlPointIcon />} 
                                    />
                                )   
                            })
                        }
                    </Box>
                </Box>
            }
        </Box>
    );
}
 
export default AddYearC;