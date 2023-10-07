import { NextPage } from 'next'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import { IStyle } from 'styles/IStyle'
import { useTheme } from 'context/ThemeContext'
import ErrorPageHeaderImg from 'components/BigImages/404Page/ErrorPageHeaderImg'
import MyButton from 'components/Buttons/MyButton'
import ErrorPageContentBoxImg from 'components/BigImages/404Page/ErrorPageContentBoxImg'
import PageFooter from 'components/Shared/PageFooter'
import { Routes } from 'routes/Routes'

const ErrorPage: NextPage = () => {
    const { mainColors } = useTheme()

    const style: IStyle = {
        root: {
            minWidth: '100vw',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            gap: '50px',
            alignItems: 'center',
            backgroundColor: mainColors.backgroundColor.main,
            justifyContent: 'space-between',
        },
        header: {
            height: 'fit-content',
            paddingTop: '20px',
        },
        body: {
            display: 'flex',
            flexDirection: 'column',
        },
        Text: {
            color: mainColors.primary.main,
            paddingRight: '11px',
            alignSelf: 'end',
            paddingBottom: '40px',
        },
        BigText: {
            color: mainColors.primary.dark,
            display: 'flex-inline',
            fontWeight: '700',
            fontSize: '120px',
            alignSelf: 'end',
            marginRight: '40px',
            '@media(max-width:550px)': {
                fontWeight: '500',
                fontSize: '80px',
            },
        },
        Text2: {
            '@media(max-width:550px)': {
                fontSize: '20px',
            },
        },
        Text3: {
            marginTop: '10px',
            '@media(max-width:550px)': {
                fontSize: '13px',
            },
        },
        footerContainer: {
            width: '100%',
        },
        FirstRowHolder: {
            display: 'flex',
            flexDirection: 'row',
            '@media(max-width:550px)': {
                flexDirection: 'column',
                alignItems: 'center',
            },
        },

        holder: {
            height: '82vh !important',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        text: {
            display: 'flex',
        },
    }

    return (
        <Box sx={style.root}>
            <Box sx={style.header}>
                <ErrorPageHeaderImg />
            </Box>
            <Box sx={style.body}>
                <Box sx={style.FirstRowHolder}>
                    <Box sx={style.imgBox}>
                        <ErrorPageContentBoxImg height="144" width="170" />
                    </Box>
                    <Box sx={style.text}>
                        <Typography sx={style.BigText}>404</Typography>
                        <Typography variant="h5" sx={style.Text}>
                            Error Code
                        </Typography>
                    </Box>
                </Box>
                <Box>
                    <Typography sx={style.Text2} color="primary" fontSize={40} fontWeight={700}>
                        عفوا! لم يتم العثور على هذه الصفحة
                    </Typography>

                    <Typography variant="h3" fontWeight={300} sx={style.Text3}>
                        حدث خطأ ما في الصفحة التي تحاول زيارتها لم يتم العثور عليها
                    </Typography>
                </Box>
                <Box sx={{ marginTop: '30px' }}>
                    <Link href={Routes.teacherHome}>
                        <MyButton content="العودة الى الرئيسية" />
                    </Link>
                </Box>
            </Box>
            <Box sx={style.footerContainer}>
                <PageFooter />
            </Box>
        </Box>
    )
}
export default ErrorPage
