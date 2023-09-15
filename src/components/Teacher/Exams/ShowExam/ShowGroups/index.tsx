import { useTheme } from 'context/ThemeContext'

// MUI
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import MyButton from 'components/Buttons/MyButton'
import MyButtonSuccess from 'components/Buttons/MyButtonSuccess'

type Props = {
    data: any
    states: any
    actions: any
}

const ShowGroups: React.FC<Props> = ({ data, states, actions }) => {
    const { mainColors } = useTheme()
    const style: any = {
        container: {
            width: '580px',
            display: 'flex',
            flexDirection: 'column',
            gap: '45px',
        },
        flexColumn: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'start',
            flexWrap: 'wrap',
            gap: '34px',
        },
        groupsContainer: {
            display: 'flex',
            padding: '50px',
            gap: '55px',
            borderRadius: '15px',
            backgroundColor: mainColors.paper.main,
            border: `2px solid ${mainColors.paper.border}`,
        },
        groupChip: {
            width: '209px',
            height: '47px',
            display: 'grid',
            placeItems: 'center',
            padding: '10px 15px',
            borderRadius: '5px',
            background: mainColors.linerGradient.primary,
            border: `1px solid ${mainColors.primary.main}`,
        },
    }

    return (
        <Box sx={style.container}>
            {!states.openToEditGroups ? (
                <>
                    <Box sx={style.groupsContainer}>
                        {data.groupsData.lenght > 0 ? (
                            data.groupsData.map((group: any) => (
                                <Box key={group.id} sx={style.groupChip}>
                                    <Typography variant="h4" color="primary" fontWeight={700}>
                                        {group.name}
                                    </Typography>
                                </Box>
                            ))
                        ) : (
                            <Typography variant="h4" color="primary" fontWeight={700}>
                                لا يوجد مجموعات
                            </Typography>
                        )}
                    </Box>
                    <MyButton onClick={actions.openGroupsToEdit} content="تعديل المجموعات" />
                </>
            ) : (
                <>
                    <Box sx={style.groupsContainer}>
                        {data.availableGroupsData.lenght > 0 ? (
                            data.availableGroupsData.map((group: any) => (
                                <Box key={group.id} sx={style.groupChip}>
                                    <Typography variant="h4" color="primary" fontWeight={700}>
                                        {group.name}
                                    </Typography>
                                </Box>
                            ))
                        ) : (
                            <Typography variant="h4" color="primary" fontWeight={700}>
                                لا يوجد مجموعات
                            </Typography>
                        )}
                    </Box>
                    <MyButtonSuccess onClick={actions.closeGroupsToEdit} content="تأكيد التعديل" />
                </>
            )}
        </Box>
    )
}

export default ShowGroups
