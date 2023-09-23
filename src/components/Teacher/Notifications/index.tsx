import { ar } from 'date-fns/locale'
import { useTheme } from 'context/ThemeContext'
import MyButton from 'components/Buttons/MyButton'
import { formatDistance, parseISO } from 'date-fns'

// MUI
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'

type Props = {
    data: any
    states: any
    actions: any
}

const NotificationsC: React.FC<Props> = ({ data, actions }) => {
    const { mainColors } = useTheme()
    const style = {
        container: {
            width: '767px',
            maxWidth: '100%',
            borderRadius: '12px',
            border: `2px solid ${mainColors.paper.border}`,
            backgroundColor: mainColors.paper.main,
        },
        header: {
            display: 'flex',
            gap: '20px',
            flexWrap: 'wrap',
            padding: '30px',
            borderRadius: '12px 12px 0px 0px',
            backgroundColor: mainColors.backgroundColor.main,
            borderBottom: `2px solid ${mainColors.paper.border}`,
        },
        secBut: {
            cursor: 'pointer',
            height: '40.22px',
            paddingX: '20px',
            display: 'grid',
            borderRadius: '7px',
            placeItems: 'center',
            backgroundColor: mainColors.paper.main,
            border: `1px solid ${mainColors.paper.border}`,
        },
        body: {
            padding: '30px',
            gap: '25px',
            display: 'flex',
            flexDirection: 'column',
        },
        cardsBox: {
            gap: '25px',
            display: 'flex',
            flexDirection: 'column',
        },
        card: {
            display: 'flex',
            gap: '10px',
            alignItems: 'center',
            width: '100%',
            padding: '20px',
            borderRadius: '12px',
            backgroundColor: mainColors.paper.main,
            boxShadow: `5px 5px 15px 0px  ${mainColors.shadow.secondary}`,
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
        cardStatusStyle: {
            backgroundColor: `${mainColors.backgroundColor.main} !important`,
        },
    }

    return (
        <Box sx={style.container}>
            <Box sx={style.header}>
                <MyButton content="الجميع" onClick={() => actions.filterDataHandler('all')} />
                <Box sx={style.secBut} onClick={() => actions.filterDataHandler('unSeen')}>
                    <Typography fontWeight={700} variant="h4" color={'primary'}>
                        الغير مقروءة
                    </Typography>
                </Box>
                <Box sx={style.secBut} onClick={() => actions.filterDataHandler('read')}>
                    <Typography fontWeight={700} variant="h4" color={'primary'}>
                        المقروءة
                    </Typography>
                </Box>
            </Box>
            <Box sx={style.body}>
                <Typography variant="h4" fontWeight={700} color={mainColors.title.main}>
                    اشعارات اليوم
                </Typography>
                <Box sx={style.cardsBox}>
                    {data.filterdData.length > 0 ? (
                        data.filterdData.map((notification: any) => (
                            <Box
                                key={notification.id}
                                onClick={() =>
                                    actions.directNotification(
                                        notification.id,
                                        notification.type,
                                        notification.entityId,
                                        notification.status,
                                    )
                                }
                                sx={[
                                    style.card,
                                    notification.status === 'UnSeen' ? style.cardStatusStyle : {},
                                    actions.getNotificationLabelStyle(
                                        notification.notificationLabel,
                                    ),
                                ]}
                            >
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
                                    <Typography
                                        noWrap
                                        variant="h5"
                                        fontWeight={700}
                                        color={'primary'}
                                    >
                                        {notification.message}
                                    </Typography>
                                </Tooltip>
                                <Typography
                                    variant="h5"
                                    justifyItems={'end'}
                                    color={mainColors.title.main}
                                >
                                    {formatDistance(parseISO(notification.createdOn), new Date(), {
                                        addSuffix: true,
                                        locale: ar,
                                    })}
                                </Typography>
                            </Box>
                        ))
                    ) : (
                        <Typography variant="h3" color={'primary'}>
                            لا يوجد اشعارات
                        </Typography>
                    )}
                </Box>
            </Box>
        </Box>
    )
}

export default NotificationsC
