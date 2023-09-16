import Link from 'next/link'
import { Routes } from 'routes/Routes'
import { IStyle } from 'styles/IStyle'
import StudentCard from './StudentCard'
import FilterWedgit from 'components/FilterWedgit'
import MySearchInput from 'components/MySearchInput'

// MUI
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useTheme } from 'context/ThemeContext'

type Props = {
    data: any
    states: any
    actions: any
}

const CorrectingListC: React.FC<Props> = ({ data, states, actions }) => {
    const { mainColors } = useTheme()
    const style: IStyle = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            gap: '60px',
        },
        searchControlBox: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '30px',
            alignItems: 'center',
            '@media screen and (max-width: 1333px)': {
                alignItems: 'start',
                flexDirection: 'column-reverse',
            },
        },
        examNameBox: {
            padding: '14px',
            borderRadius: '7px',
            cursor: 'pointer',
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
            <Box sx={style.searchControlBox}>
                <MySearchInput
                    placeholder="هل تبحث عن طالب معين ؟"
                    onChange={actions.searchHandler}
                />
                {data.originalData.isFinished && (
                    <Link href={`${Routes.teacherExamResult}${data.originalData?.examId}`}>
                        <a>
                            <Box sx={style.examNameBox}>
                                <Typography variant="h4" color={'primary'} fontWeight={700}>
                                    نتائج الامتحان
                                </Typography>
                            </Box>
                        </a>
                    </Link>
                )}
            </Box>
            {data.groups && (
                <FilterWedgit
                    selected={states.selectedGroup}
                    filters={data.groups}
                    allFilter="جميع المجموعات"
                    getSelected={actions.selectedGroupHandler}
                />
            )}
            <Box sx={style.cardContainer}>
                {data.filterdData?.length > 0 ? (
                    data.filterdData.map((student: any) => (
                        <Link
                            key={student.id}
                            href={`${Routes.teacherCorrectingRoom}${student.id}`}
                        >
                            <a style={{ maxWidth: '100%' }}>
                                <StudentCard
                                    studentData={student}
                                    resultAvailable={data.originalData?.isFinished}
                                    stateAvailable={data.originalData?.startCorrect}
                                />
                            </a>
                        </Link>
                    ))
                ) : (
                    <Typography color={'primary'} variant="h4" fontWeight={700}>
                        لا يوجد طلاب
                    </Typography>
                )}
            </Box>
        </Box>
    )
}

export default CorrectingListC
