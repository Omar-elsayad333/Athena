import Link from 'next/link'
import { ar } from 'date-fns/locale'
import { Routes } from 'routes/Routes'
import { useTheme } from 'context/ThemeContext'
import { formatDistance, parseISO } from 'date-fns'
import { useNotifications } from 'context/NotificationContext'

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
    const { notificationsData } = useNotifications()

    const style = {
        root: {
            '.MuiMenu-paper': {
                margin: '20px',
                padding: '20px',
                width: '400px',
                maxWidth: '80%',
                maxHeight: '70vh',
                overflowY: 'auto',
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
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                borderRadius: '12px',
                maxWidth: '100%',
                backgroundColor: mainColors.paper.main,
                boxShadow: `5px 5px 15px 0px  ${mainColors.shadow.secondary}`,
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
            borderRadius: '50%',
            width: '30px',
            minWidth: '30px',
            height: '30px',
            display: 'grid',
            placeItems: 'center',
            border: `1px solid ${mainColors.primary.main}`,
        },
        contentBody: {
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            maxWidth: '100%',
        },
        cardStatusStyle: {
            backgroundColor: `${mainColors.backgroundColor.main} !important`,
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
                <Link href={Routes.teacherNotifications}>
                    <a>
                        <Typography variant="h5" color={'primary'}>
                            جميع الاشعارات الواردة
                        </Typography>
                    </a>
                </Link>
            </Box>
            <hr style={style.divider} />
            {notificationsData.length > 0 ? (
                notificationsData.map((notification: any) => (
                    <MenuItem
                        key={notification.id}
                        sx={[
                            notification.status === 'UnSeen' ? style.cardStatusStyle : {},
                            actions.getNotificationLabelStyle(notification.notificationLabel),
                        ]}
                        onClick={() => {
                            actions.handleClose
                            actions.directNotification(
                                notification.id,
                                notification.type,
                                notification.entityId,
                                notification.status,
                            )
                        }}
                    >
                        <Box sx={style.contentBody}>
                            {notification.image ? (
                                <Avatar
                                    alt=""
                                    sizes="30"
                                    sx={style.avatar}
                                    src={actions.getNotificationAvatar(notification.type)}
                                />
                            ) : (
                                <Box sx={style.avatar}>
                                    {actions.getNotificationAvatar(notification.type)}
                                </Box>
                            )}
                            <Tooltip title="مرحبا! استاذ محمد لقد قمنا بتحديث سياسة الخصوصية الخاصة بنا">
                                <Typography noWrap variant="h5" fontWeight={700} color={'primary'}>
                                    {notification.message}
                                </Typography>
                            </Tooltip>
                        </Box>
                        <Typography variant="h5" color={mainColors.title.main}>
                            {formatDistance(parseISO(notification.createdOn), new Date(), {
                                addSuffix: true,
                                locale: ar,
                            })}
                        </Typography>
                    </MenuItem>
                ))
            ) : (
                <Typography variant="h3" color={'primary'}>
                    لا يوجد اشعارات
                </Typography>
            )}
            <Typography variant="h5" color={mainColors.title.main}>
                هذه هي كل إشعاراتك من آخر 7 أيام.
            </Typography>
        </Menu>
    )
}

export default NotificationsMenu
