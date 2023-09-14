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
                {data.filterdData.length > 0 ? (
                    data.filterdData.map((student: any) => (
                        <StudentCard
                            key={student.id}
                            name={student.name}
                            image={student.image}
                            cardState={student.isFinish}
                            stateAvailable={data.originalData.startCorrect}
                        />
                    ))
                ) : (
                    <Typography>لا يوجد طلاب</Typography>
                )}
            </Box>
        </Box>
    )
}

export default CorrectingStudentsListC
