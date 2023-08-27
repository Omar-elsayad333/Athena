import Link from 'next/link'
import { Routes } from 'routes/Routes'
import { IStyle } from 'styles/IStyle'
import { useTheme } from 'context/ThemeContext'

// MUI
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

type Props = {
    data: any
}

const YearsC: React.FC<Props> = ({ data }) => {
    const { mainColors } = useTheme()

    const style: IStyle = {
        container: {
            position: 'relative',
            display: 'flex',
            alignItems: 'start',
            flexWrap: 'wrap',
            gap: '55px',
        },
        card: {
            width: '335px',
            maxWidth: '100%',
            height: '149px',
            padding: '40px 30px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'start',
            gap: '35px',
            border: '2px solid #3F72A4',
            background: mainColors.linerGradient.primary,
            borderRadius: '18px',
            overflow: 'hidden',
            cursor: 'pointer',
            transition: '.35s',
            ':hover': {
                boxShadow: '0px 0px 15px 0px rgba(63, 114, 164, .50)',
            },
            '@media(max-width: 400px)': {
                gap: '25px',
                padding: '40px 20px',
            },
        },
        content: {
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
        },
        spcialCard: {
            width: '335px',
            maxWidth: '100%',
            height: '149px',
            padding: '40px 30px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: '2px solid #3F72A4',
            background: mainColors.dialog.background,
            borderRadius: '18px',
            overflow: 'hidden',
            cursor: 'pointer',
            transition: '.2s',
            ':hover': {
                boxShadow: '0px 0px 15px 0px rgba(63, 114, 164, .50)',
            },
            '@media(max-width: 400px)': {
                gap: '25px',
                padding: '40px 20px',
            },
        },
        span: {
            fontWeight: '700',
        },
        title: {
            flex: '100%',
        },
    }

    return (
        <Box sx={style.container}>
            <Typography sx={style.title} color={mainColors.title.main} variant="h3">
                السنوات المفتوحه
            </Typography>
            {data.yearsData &&
                data.yearsData.open.map((item: any) => {
                    return (
                        <Link key={item.id} href={`${Routes.teacherYear}${item.id}`}>
                            <Box sx={style.card}>
                                <Box sx={style.content}>
                                    <Typography color="primary" variant="h4" fontWeight={700}>
                                        العام الدراسي
                                    </Typography>
                                    <Typography color="primary" variant="h1">
                                        {`${item.end} / ${item.start}`}
                                    </Typography>
                                </Box>
                            </Box>
                        </Link>
                    )
                })}
            <Typography sx={style.title} color={mainColors.title.main} variant="h3">
                السنوات التجهيزيه
            </Typography>
            {data.yearsData &&
                data.yearsData.preopen.map((item: any) => {
                    return (
                        <Link key={item.id} href={`${Routes.teacherYear}${item.id}`}>
                            <Box sx={style.card}>
                                <Box sx={style.content}>
                                    <Typography color="primary" variant="h4" fontWeight={700}>
                                        العام الدراسي
                                    </Typography>
                                    <Typography color="primary" variant="h1">
                                        {`${item.end} / ${item.start}`}
                                    </Typography>
                                </Box>
                            </Box>
                        </Link>
                    )
                })}
            <Typography sx={style.title} color={mainColors.title.main} variant="h3">
                السنوات المغلقه
            </Typography>
            {data.yearsData &&
                data.yearsData.finished.map((item: any) => {
                    return (
                        <Link key={item.id} href={`${Routes.teacherYear}${item.id}`}>
                            <Box sx={style.card}>
                                <Box sx={style.content}>
                                    <Typography color="primary" variant="h4" fontWeight={700}>
                                        العام الدراسي
                                    </Typography>
                                    <Typography color="primary" variant="h1">
                                        {`${item.end} / ${item.start}`}
                                    </Typography>
                                </Box>
                            </Box>
                        </Link>
                    )
                })}
        </Box>
    )
}

export default YearsC
