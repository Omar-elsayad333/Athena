import Link from 'next/link'
import { Routes } from 'routes/Routes'
import { IStyle } from 'styles/IStyle'
import StudentCard from './StudentCard'
import FilterWedgit from 'components/FilterWedgit'
import MySearchInput from 'components/MySearchInput'

// MUI
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'

type Props = {
    data: any
    states: any
    actions: any
}

const CorrectingStudentsListC: React.FC<Props> = ({ data, states, actions }) => {
    const style: IStyle = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            gap: '60px',
        },
        cardContainer: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '100px',
        },
    }

    return (
        <Box sx={style.container}>
            <MySearchInput placeholder="هل تبحث عن طالب معين ؟" onChange={actions.searchHandler} />
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
                        <Link href={`${Routes.teacherCorrectingRoom}/${student.id}`}>
                            <StudentCard
                                key={student.id}
                                studentData={student}
                                resultAvailable={data.originlData?.isFinished}
                                stateAvailable={data.originalData?.startCorrect}
                            />
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

export default CorrectingStudentsListC
