import Link from 'next/link'
import DataTable from './DataTable'
import { IStyle } from 'styles/IStyle'
import { Routes } from 'routes/Routes'
import FilterWedgit from 'components/FilterWedgit'
import MySearchInput from 'components/MySearchInput'
import { ExamsResultTable } from 'content/tableHeaders'

// MUI
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useTheme } from 'context/ThemeContext'

type Props = {
    data: any
    states: any
    actions: any
}

const ExamResultC: React.FC<Props> = ({ data, states, actions }) => {
    const { mainColors } = useTheme()
    const style: IStyle = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            gap: '60px',
        },
        searchControlContainer: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '30px',
            alignItems: 'center',
            '@media screen and (max-width: 1500px)': {
                alignItems: 'start',
                flexDirection: 'column-reverse',
            },
        },
        searchControlBox: {
            display: 'flex',
            gap: '30px',
        },
        examNameBox: {
            padding: '14px',
            borderRadius: '7px',
            cursor: 'pointer',
            textAlign: 'center',
            backgroundColor: mainColors.paper.main,
            border: `1px solid ${mainColors.paper.border}`,
            boxShadow: `0px 5px 15px 0px ${mainColors.icons.roundedAdd}`,
        },
        cardContainer: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '100px',
        },
    }

    return (
        <Box sx={style.container}>
            <Box sx={style.searchControlContainer}>
                <MySearchInput
                    placeholder="هل تبحث عن طالب معين ؟"
                    onChange={actions.searchHandler}
                />
                <Box sx={style.searchControlBox}>
                    <Link href={`${Routes.teacherCorrectingList}${data.originalData?.id}`}>
                        <a>
                            <Box sx={style.examNameBox}>
                                <Typography variant="h4" color={'primary'} fontWeight={700}>
                                    غرفة التصحيح
                                </Typography>
                            </Box>
                        </a>
                    </Link>
                    <Box onClick={() => actions.sendResults()} sx={style.examNameBox}>
                        <Typography variant="h4" color={'primary'} fontWeight={700}>
                            ارسال النتائج
                        </Typography>
                    </Box>
                </Box>
            </Box>
            {data.groups && (
                <FilterWedgit
                    selected={states.selectedGroup}
                    filters={data.groups}
                    allFilter="جميع المجموعات"
                    getSelected={actions.selectedGroupHandler}
                />
            )}
            {data.filterdData.length > 0 ? (
                <Box sx={style.cardContainer}>
                    <DataTable headerData={ExamsResultTable} bodyData={data.filterdData} />
                </Box>
            ) : (
                <Typography variant="h3" color={'primary'}>
                    لا يوجد نتائج
                </Typography>
            )}
        </Box>
    )
}

export default ExamResultC
