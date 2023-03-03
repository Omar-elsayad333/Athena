import { useContext } from 'react';
import { IStyle } from 'styles/IStyle';
import { useAlert } from 'context/AlertContext';
import AlertNotify from 'components/AlertNotify';
import { DarkThemeContext } from "context/ThemeContext";

// MUI
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

type Props = {
    data: any;
}

const YearC: React.FC<Props> = ({data}) => {

    const { mainColors } = useContext(DarkThemeContext);
    const {
        msg,
        state,
        msgType,
        handleState
    } = useAlert();

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
            background: mainColors.paper.border,
            '@media screen and (max-width: 500px)': {
                height: '2px',
                width: '100%'
            }
        },
        backPaper: {
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
    }

    return (  
        <Box sx={style.container}>
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
            <Typography sx={style.title} variant="h3" color={mainColors.title.main}>
                الفصول الدراسية:-
            </Typography>
            {
                data.pageData &&
                <Box sx={style.semestersBackPaper}>
                    {
                        data.pageData.levels.map((item: any, index: number) => {
                            return (
                                <Box key={item.id} sx={style.semeterContainer}>
                                    <Box sx={style.classesLabel}>
                                        {item.levelName}
                                    </Box>
                                    <Box sx={style.semestersBox}>
                                        {
                                            data.pageData.levels[index].semsters.map((item: any) => {
                                                return (
                                                    <Box sx={style.semesterChip}>
                                                        {item.semster}
                                                    </Box>
                                                )
                                            })
                                        }
                                    </Box>
                                </Box>
                            )
                        })
                    }
                </Box>
            }
            <AlertNotify msg={msg} state={state} handleState={handleState} msgType={msgType} />
        </Box>
    );
}
 
export default YearC;