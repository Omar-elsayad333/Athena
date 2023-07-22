import { IStyle } from 'styles/IStyle'
import Sections from './steps/Sections'
import ExamDetails from './steps/ExamDetails'

// MUI
import Box from '@mui/material/Box'

type Props = {
    data: any
    states: any
    actions: any
    dialogs: any
}

const ExamC: React.FC<Props> = ({ data, states, actions, dialogs }) => {
    const style: IStyle = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            flexWrap: 'wrap',
            gap: '95px',
        },
        buttonsContainer: {
            marginTop: '30px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '35px',
        },
        submitButton: {
            width: '170px',
            height: '40px',
        },
    }
    return (
        <Box sx={style.container}>
            {data.examDetails && (
                <ExamDetails
                    states={states}
                    actions={actions}
                    data={{
                        examDetails: data.examDetails,
                        examTypes: data.examTypes,
                        years: data.years,
                    }}
                />
            )}
            {states.examReady && (
                <Sections data={data.sections} states={states} actions={actions} />
            )}
            {states.examReady && (
                <>
                    {/* <Groups data={data.groupsData} states={states} actions={actions} /> */}
                    <Box sx={style.buttonsContainer}>
                        <Box sx={style.submitButton}>
                            {/* <MyButton
                                content="أنشاء الامتحان"
                                loading={states.loading}
                                onClick={actions.submitExam}
                            /> */}
                        </Box>
                        <Box sx={style.submitButton}>
                            {/* <MyButtonError
                                loading={states.loading}
                                content="إلغاء العملية"
                                onClick={() => {}}
                            /> */}
                        </Box>
                    </Box>
                </>
            )}
        </Box>
    )
}

export default ExamC
