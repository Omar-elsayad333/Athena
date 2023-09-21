import { useTheme } from 'context/ThemeContext'
// import { useNotifications } from 'context/NotificationContext'

// MUI
import Box from '@mui/material/Box'
import Menu from '@mui/material/Menu'
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'

type Props = {
    states: any
    actions: any
}

const NotificationsMenu: React.FC<Props> = ({ states, actions }) => {
    const { mainColors } = useTheme()
    // const { notificationsData } = useNotifications()

    const style = {
        root: {
            '.MuiMenu-paper': {
                margin: '20px',
                padding: '20px',
                width: '400px',
                maxWidth: '80%',
                borderRadius: '12px',
                backgroundColor: mainColors.backgroundColor.main,
                boxShadow: `5px 5px 22px 1px  ${mainColors.shadow.secondary}`,
            },
            '.MuiMenu-list': {
                gap: '25px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            },
            '.MuiMenuItem-root': {
                display: 'flex',
                gap: '10px',
                alignItems: 'center',
                width: '100%',
                padding: '20px',
                borderRadius: '12px',
                backgroundColor: mainColors.paper.main,
                boxShadow: `5px 5px 15px 0px  ${mainColors.shadow.secondary}`,
            },
            '.MuiTooltip-tooltip': {
                fontSize: '20px',
            },
        },
        headerBox: {
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            gap: '30px',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
        },
        divider: {
            width: '100%',
            borderColor: mainColors.primary.main,
        },
        avatar: {
            border: `1px solid ${mainColors.primary.main}`,
        },
    }

    return (
        <Menu
            sx={style.root}
            id="basic-menu"
            anchorEl={states.anchorEl}
            open={states.open}
            onClose={actions.handleClose}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}
        >
            <Box sx={style.headerBox}>
                <Typography variant="h3" color={'primary'}>
                    الاشعارات
                </Typography>
                <Typography variant="h5" color={'primary'}>
                    جميع الاشعارات الواردة
                </Typography>
            </Box>
            <hr style={style.divider} />
            <MenuItem onClick={actions.handleClose}>
                <Avatar sx={style.avatar} src="" alt="" sizes="30" />
                <Tooltip title="مرحبا! استاذ محمد لقد قمنا بتحديث سياسة الخصوصية الخاصة بنا">
                    <Typography noWrap variant="h5" fontWeight={700} color={'primary'}>
                        مرحبا! استاذ محمد لقد قمنا بتحديث سياسة الخصوصية الخاصة بنا
                    </Typography>
                </Tooltip>
                <Typography variant="h5" color={mainColors.title.main}>
                    منذ 10 ساعات
                </Typography>
            </MenuItem>
            <Typography variant="h5" color={mainColors.title.main}>
                هذه هي كل إشعاراتك من آخر 7 أيام.
            </Typography>
        </Menu>
    )
}

export default NotificationsMenu
