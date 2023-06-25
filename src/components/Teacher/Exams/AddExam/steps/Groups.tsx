import { IStyle } from 'styles/IStyle'
import { useTheme } from 'context/ThemeContext'

// MUI
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'

type Props = {
    data: any
    states: any
    actions: any
}

const Groups: React.FC<Props> = ({ data, actions }) => {
    const { mainColors } = useTheme()
    const style: IStyle = {
        container: {
            padding: '50px 20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '100px',
        },
        containerTitle: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '15px',
        },
        groupsContainer: {
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            gap: '40px',
            border: `2px solid ${mainColors.chips.main}`,
            borderRadius: '12px',
            padding: '30px',
        },
        groupCard: {
            width: '209px',
            height: '47px',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '5px',
            background: mainColors.chips.main,
            border: `1px solid ${mainColors.chips.border}`,
        },
        pageActions: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '60px',
        },
    }

    return (
        <Box sx={style.container}>
            <Box sx={style.containerTitle}>
                <Typography variant="h3" color={'primary'} fontWeight={700}>
                    المجموعات:-
                </Typography>
                <Typography variant="h5" color={mainColors.title.main} fontWeight={400}>
                    حدد المجموعات المراد ارسال الامتحان إليها
                </Typography>
            </Box>
            <Box sx={style.groupsContainer}>
                {data.length > 0 ? (
                    data.map((group: any) => (
                        <Box
                            sx={style.groupCard}
                            key={group.id}
                            onClick={(e) => actions.groupHandler(e, group.id)}
                        >
                            <Typography variant="h4" color={'primary'} fontWeight={700}>
                                {group.name}
                            </Typography>
                        </Box>
                    ))
                ) : (
                    <Typography variant="h3" color={'primary'} fontWeight={700}>
                        لا يوجد مجموعات
                    </Typography>
                )}
            </Box>
        </Box>
    )
}

export default Groups
