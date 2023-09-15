import { useTheme } from 'context/ThemeContext'

// MUI
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import MyButton from 'components/Buttons/MyButton'
import MyButtonSuccess from 'components/Buttons/MyButtonSuccess'
import MyButtonError from 'components/Buttons/MyButtonError'

type Props = {
    data: any
    states: any
    actions: any
}

const ShowGroups: React.FC<Props> = ({ data, states, actions }) => {
    const { mainColors, darkMode } = useTheme()
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
            flexWrap: 'wrap',
            borderRadius: '15px',
            backgroundColor: mainColors.paper.main,
            border: `2px solid ${mainColors.paper.border}`,
        },
        groupChip: {
            width: '209px',
            height: '47px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
            padding: '10px 15px',
            borderRadius: '5px',
            overflow: 'hidden',
            wordWrap: 'break-word',
            background: mainColors.linerGradient.primary,
            border: `1px solid ${mainColors.primary.main}`,
        },
        actionBox: {
            gap: '20px',
            display: 'flex',
            flexWrap: 'wrap',
        },
    }

    return (
        <Box sx={style.container}>
            {!states.openToEditGroups ? (
                <>
                    <Box sx={style.groupsContainer}>
                        {data.groupsData.length > 0 ? (
                            data.groupsData.map((group: any) => (
                                <Box key={group.id} sx={style.groupChip}>
                                    <Typography variant="h4" color="primary" fontWeight={700}>
                                        {group.name}
                                    </Typography>
                                    <svg
                                        width="17"
                                        height="17"
                                        viewBox="0 0 19 19"
                                        stroke={mainColors.primary.main}
                                        xmlns="http://www.w3.org/2000/svg"
                                        onClick={() => actions.removeGroup(group.id)}
                                    >
                                        <path
                                            d="M17.28 2L2 17.28"
                                            stroke="inherit"
                                            strokeWidth="3.38"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M2 2L17.28 17.28"
                                            stroke="inherit"
                                            strokeWidth="3.38"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
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
                        {data.availableGroupsData.length > 0 ? (
                            data.availableGroupsData.map((group: any) => (
                                <Box
                                    key={group.id}
                                    sx={style.groupChip}
                                    className={
                                        states.newGroupsData.includes(group.id)
                                            ? darkMode
                                                ? 'darkSelected'
                                                : 'selected'
                                            : ''
                                    }
                                    onClick={() => actions.getNewGroups(group.id)}
                                >
                                    <Typography variant="h4" color="primary" fontWeight={700}>
                                        {group.name}
                                    </Typography>
                                </Box>
                            ))
                        ) : (
                            <Typography variant="h4" color="primary" fontWeight={700}>
                                لا يوجد مجموعات يمكن اضافتها
                            </Typography>
                        )}
                    </Box>
                    <Box sx={style.actionBox}>
                        <MyButtonError
                            content="الغاء التعديلات"
                            onClick={actions.closeGroupsToEdit}
                        />
                        <MyButtonSuccess onClick={actions.submitGroups} content="تأكيد التعديل" />
                    </Box>
                </>
            )}
        </Box>
    )
}

export default ShowGroups
