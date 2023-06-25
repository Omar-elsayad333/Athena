import Link from 'next/link'
import DataCard from './DataCard'
import { Routes } from 'routes/Routes'
import { useTheme } from 'context/ThemeContext'

// MUI
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

type Props = {
    data: any
}

const HeadquarterC: React.FC<Props> = ({ data }) => {
    const { mainColors } = useTheme()
    const style = {
        container: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '40px',
        },
        inputContainer: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            gap: '13px',
        },
        title: {
            flex: '100%',
        },
        doubleTitle: {
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
            gap: '10px',
        },
        groupsContainer: {
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'start',
            flexWrap: 'wrap',
            gap: '60px',
        },
        groupsCard: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'start',
            gap: '20px',
            padding: '26px 30px',
            borderRadius: '12px',
            background: mainColors.paper.main,
            border: `2px solid ${mainColors.primary.main}`,
        },
        cardTitle: {
            height: '40px',
            padding: '10px 13px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: mainColors.backgroundColor.main,
            border: `1px solid ${mainColors.paper.border}`,
            borderRadius: '8px',
        },
        cardBody: {
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '30px',
        },
        group: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
        },
        groupIcon: {
            width: '75px',
            height: '75px',
            display: 'grid',
            placeItems: 'center',
            borderRadius: '50%',
            background: mainColors.backgroundColor.sideNav,
            border: `1.5px solid ${mainColors.primary.main}`,
        },
        showAllGroupsBut: {
            width: '75px',
            height: '75px',
            alignSelf: 'start',
            display: 'grid',
            placeItems: 'center',
            borderRadius: '50%',
            boxShadow: '0px 4px 4px 0px #3F72A440',
            background: mainColors.backgroundColor.sideNav,
            border: `1.5px solid ${mainColors.primary.main}`,
        },
        buttonsContainer: {
            marginTop: '30px',
            flex: '100%',
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
            <Typography sx={style.title} variant="h3" color={mainColors.title.main}>
                بيانات المقر:-
            </Typography>
            <DataCard data={data.headquarterData.name} title="أسم المقر" />
            <Typography sx={style.title} variant="h3" color={mainColors.title.main}>
                عنوان المقر:-
            </Typography>
            <DataCard data={data.headquarterData.city} title="المدينة" />
            <DataCard data={data.headquarterData.region} title="أسم المنطقة" />
            <DataCard data={data.headquarterData.street} title="أسم الشارع" />
            <DataCard data={data.headquarterData.building} title="رقم المبنى" />
            <Typography sx={style.title} variant="h3" color={mainColors.title.main}>
                بيانات الاتصال:-
            </Typography>
            {data.headquarterData.phones &&
                data.headquarterData.phones.map((item: any, index: number) => (
                    <DataCard data={item.phone} title={`تليفون ${index + 1}`} />
                ))}
            <Box sx={[style.title, style.doubleTitle]}>
                <Typography variant="h3" color={mainColors.title.main}>
                    المجموعات:-
                </Typography>
                <Typography variant="h5" color={'primary'}>
                    حسب الصف الدراسي
                </Typography>
            </Box>
            <Box sx={style.groupsContainer}>
                {data.headquarterData.years &&
                    data.headquarterData.years.map((year: any) => {
                        return year.levels.map((level: any) => (
                            <Box key={level.id} sx={style.groupsCard}>
                                <Box sx={style.cardTitle}>
                                    <Typography variant="h5" color={'primary'} fontWeight={700}>
                                        {level.levelName}
                                    </Typography>
                                </Box>
                                <Box sx={style.cardBody}>
                                    {level.groups.map((group: any) => (
                                        <Link
                                            key={group.id}
                                            href={`${Routes.teacherGroup}${group.id}`}
                                        >
                                            <Box sx={style.group}>
                                                <Box sx={style.groupIcon}>
                                                    <svg
                                                        width="45"
                                                        height="33"
                                                        viewBox="0 0 45 33"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M17.1604 0.637207H28.0192C28.1876 0.637207 28.3491 0.703349 28.4682 0.821079C28.5872 0.93881 28.6541 1.09849 28.6541 1.26498V9.52263C28.6541 9.68486 28.589 9.84044 28.4729 9.95515C28.3569 10.0699 28.1996 10.1343 28.0355 10.1343H17.1604C16.9963 10.1343 16.8389 10.0699 16.7229 9.95515C16.6069 9.84044 16.5417 9.68486 16.5417 9.52263V1.26498C16.5395 1.18331 16.5539 1.10204 16.5841 1.02596C16.6142 0.949876 16.6594 0.880533 16.7171 0.822017C16.7747 0.763502 16.8437 0.717 16.9198 0.685259C16.9959 0.653518 17.0777 0.637179 17.1604 0.637207Z"
                                                            fill="#3F72A4"
                                                        />
                                                        <path
                                                            d="M32.6309 22.9331H43.4897C43.6581 22.9331 43.8196 22.9992 43.9387 23.117C44.0577 23.2347 44.1246 23.3944 44.1246 23.5609V31.8185C44.1246 31.985 44.0577 32.1447 43.9387 32.2624C43.8196 32.3802 43.6581 32.4463 43.4897 32.4463H32.6309C32.4668 32.4463 32.3094 32.3819 32.1934 32.2671C32.0774 32.1524 32.0122 31.9969 32.0122 31.8346V23.5609C32.0122 23.3971 32.0768 23.2399 32.1924 23.1226C32.308 23.0053 32.4653 22.9373 32.6309 22.9331Z"
                                                            fill="#3F72A4"
                                                        />
                                                        <path
                                                            d="M17.1601 22.9331H28.019C28.1874 22.9331 28.3489 22.9992 28.468 23.117C28.587 23.2347 28.6539 23.3944 28.6539 23.5609V31.8185C28.6539 31.985 28.587 32.1447 28.468 32.2624C28.3489 32.3802 28.1874 32.4463 28.019 32.4463H17.1601C16.9961 32.4463 16.8387 32.3819 16.7227 32.2671C16.6067 32.1524 16.5415 31.9969 16.5415 31.8346V23.5609C16.5414 23.3971 16.6061 23.2399 16.7217 23.1226C16.8372 23.0053 16.9946 22.9373 17.1601 22.9331Z"
                                                            fill="#3F72A4"
                                                        />
                                                        <path
                                                            d="M1.48144 22.9331H12.3403C12.5043 22.9331 12.6617 22.9976 12.7777 23.1123C12.8937 23.227 12.9589 23.3826 12.9589 23.5448V31.8024C12.9589 31.9647 12.8937 32.1202 12.7777 32.235C12.6617 32.3497 12.5043 32.4141 12.3403 32.4141H1.48144C1.31736 32.4141 1.16001 32.3497 1.04399 32.235C0.927972 32.1202 0.862793 31.9647 0.862793 31.8024V23.5609C0.862739 23.3971 0.927392 23.2399 1.04297 23.1226C1.15854 23.0053 1.31588 22.9373 1.48144 22.9331Z"
                                                            fill="#3F72A4"
                                                        />
                                                        <path
                                                            d="M39.374 15.8126C39.3697 15.6489 39.3009 15.4934 39.1823 15.3791C39.0637 15.2648 38.9046 15.2009 38.739 15.2009H23.859V11.7884C23.8549 11.6232 23.7867 11.4659 23.6685 11.349C23.5503 11.2322 23.3912 11.1647 23.2241 11.1606H21.9705C21.805 11.1648 21.6476 11.2328 21.532 11.3501C21.4165 11.4674 21.3518 11.6247 21.3519 11.7884V15.2009H6.42301C6.34041 15.1988 6.25821 15.213 6.18126 15.2428C6.10432 15.2726 6.03418 15.3173 5.975 15.3743C5.91582 15.4313 5.86879 15.4995 5.83669 15.5748C5.80458 15.65 5.78806 15.7309 5.78809 15.8126V16.038V21.0119C5.78809 21.1784 5.85498 21.3381 5.97405 21.4558C6.09312 21.5735 6.25462 21.6397 6.42301 21.6397H7.67658C7.84213 21.6355 7.99948 21.5675 8.11505 21.4502C8.23062 21.3329 8.29528 21.1756 8.29522 21.0119V17.6637H21.3193V21.0763C21.3193 21.24 21.3839 21.3973 21.4995 21.5146C21.6151 21.6319 21.7724 21.6998 21.938 21.704H23.1915C23.3586 21.7 23.5177 21.6325 23.6359 21.5157C23.7541 21.3988 23.8223 21.2415 23.8264 21.0763V17.6637H36.8505V21.1889C36.8484 21.2706 36.8628 21.3519 36.8929 21.428C36.923 21.5041 36.9682 21.5734 37.0259 21.6319C37.0835 21.6904 37.1525 21.7369 37.2286 21.7687C37.3048 21.8004 37.3865 21.8167 37.4692 21.8167H38.7227C38.8067 21.8189 38.8903 21.8042 38.9683 21.7734C39.0464 21.7427 39.1173 21.6965 39.1767 21.6378C39.2361 21.579 39.2828 21.5089 39.3139 21.4318C39.345 21.3546 39.3599 21.272 39.3577 21.1889V15.9897L39.374 15.8126Z"
                                                            fill="#3F72A4"
                                                        />
                                                    </svg>
                                                </Box>
                                                <Typography variant="h5" color={'primary'}>
                                                    {group.name}
                                                </Typography>
                                            </Box>
                                        </Link>
                                    ))}
                                    {level.groups > 3 && (
                                        <Box sx={style.showAllGroupsBut}>
                                            <Typography
                                                variant="h5"
                                                color={'primary'}
                                                fontWeight={700}
                                            >
                                                عرض الكل
                                            </Typography>
                                        </Box>
                                    )}
                                </Box>
                            </Box>
                        ))
                    })}
            </Box>
        </Box>
    )
}

export default HeadquarterC
