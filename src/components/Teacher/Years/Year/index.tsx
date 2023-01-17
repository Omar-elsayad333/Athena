import { useContext } from 'react';
import { IStyle } from 'styles/IStyle';
import Loading from "components/Loading/Loading";
import { DarkThemeContext } from "context/ThemeContext";

// MUI
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

type Props = {
    data: any;
    states: any;
    actions: any;
    dialogs: any;
}

const YearC: React.FC<Props> = ({data, states}) => {

    const { mainColors } = useContext(DarkThemeContext)

    const style: IStyle = {
        container: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '40px',
            columnGap: '104px',
        },
        periodContainer: {
            width: 'fit-content',
            padding: '22px 35px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '43px',
            borderRadius: '12px',
            background: mainColors.paper.main,
            border: `2px solid ${mainColors.paper.border}`,
        },
        period: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'start',
            flexWrap: 'wrap',
            gap: '13px'
        },
        periodBreak: {
            width: '2px',
            height: '100%',
            background: mainColors.paper.border
        },
        backPaper: {
            width: 'fit-content',
            padding: '26px 42px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '29px',
            borderRadius: '12px',
            background: mainColors.paper.main,
            border: `2px solid ${mainColors.paper.border}`,
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
            <Typography sx={style.title} variant="h3" color={mainColors.title.main}>
                الفترة الزمنية:-
            </Typography>
            <Box sx={style.periodContainer}>
                <Box sx={style.period}>
                    <Typography variant='h5' fontWeight={700} color={mainColors.title.main}>
                        بداية العام الدراسي
                    </Typography>
                    <Typography variant='h3' fontWeight={700} color={'primary'}>
                        {data.pageData.start}
                    </Typography>
                </Box>
                <Box sx={style.periodBreak} />
                <Box sx={style.period}>
                    <Typography variant='h5' fontWeight={700} color={mainColors.title.main}>
                        نهاية العام الدراسي
                    </Typography>
                    <Typography variant='h3' fontWeight={700} color={'primary'}>
                        {data.pageData.end}
                    </Typography>
                </Box>
            </Box>
            <Typography sx={style.title} variant="h3" color={mainColors.title.main}>
                الصفوف الدراسية:-
            </Typography>
            <Box sx={style.backPaper}>                
                {
                    data.pageData &&
                    data.pageData.levels.map((item: any) => {
                        return (
                            <Box key={item.id} sx={style.classesLabel}>
                                {item.levelName}
                            </Box>
                        )
                    })
                }
            </Box>
            {
                // data.selectedClasses.length > 0 &&
                // <Box sx={style.semestersBackPaper}>
                //     {
                //         data.selectedClasses.map((item: any, index: number) => {
                //             return (
                //                 <Box key={item.id} sx={style.semeterContainer}>
                //                     <Box sx={style.classesLabel}>
                //                         {item.name}
                //                     </Box>
                //                     <Box sx={style.semestersBox}>
                //                         {
                //                             data.classes[index]?.first ?
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
                //                             data.classes[index]?.second ?
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
        </Box>
    );
}
 
export default YearC;