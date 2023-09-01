import { NextPage } from 'next'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import Button from '@mui/material/Button'
import { IStyle } from 'styles/IStyle'
import { useTheme } from 'context/ThemeContext'
import ErrorPageHeaderImg from 'components/BigImages/404Page/ErrorPageHeaderImg'
import ErrorPageContentBoxImg from 'components/BigImages/404Page/ErrorPageContentBoxImg'
import PageFooter from 'components/Shared/PageFooter'

const ErrorPage: NextPage = () => {
    const { mainColors } = useTheme()

    const style: IStyle = {
        root: {
            minWidth: '100vw',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '0px',
            backgroundColor: mainColors.backgroundColor.main,
            transition: '.2s',
        },
        header: {
            height: 'fit-content',
            paddingTop: '20px',
        },
        container: {
            paddingTop:"25%",
            height: 'fit-content',
            position: 'relative',
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
            '@media(max-width:400px)': {
                fontWeight: '500',
                fontSize: '80px',
            },
        },
        Text2: {
            color: mainColors.primary.main,
            fontSize: '40px',
            fontWeight: '700',
            '@media(max-width:400px)': {
                fontSize: '20px',
            },
        },
        Text3: {
            marginTop: '10px',
            fontWeight: '300',
            '@media(max-width:400px)': {
                fontSize: '13px',
            },
        },
        footerContainer: {
            marginTop: 'auto',
            width: '100%',
        },
        FirstRowHolder: {
            display:"flex",
            flexDirection:"row",
            '@media(max-width:400px)': {
                flexDirection:"column",
            alignItems: 'center',
            },  
        },

        holder: {
            height: '82vh !important',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        text:{
            display:"flex"
        }
    }

    return (
        <Box sx={style.root}>
            <Box sx={style.holder}>
                <Box sx={style.header}>
                    <ErrorPageHeaderImg />
                </Box>
                <Box sx={style.container}>
                    <Box sx={style.FirstRowHolder}>
                        <Box sx={style.imgBox}>
                            <ErrorPageContentBoxImg height="120" width="120" />
                        </Box>
                        <Box sx={style.text}>
                        <Typography sx={style.BigText}>404</Typography>
                        <Typography variant="h5" sx={style.Text}>
                            Error Code
                        </Typography>
                        </Box>
                    </Box>
                    <Box>
                        <Typography sx={style.Text2}>عفوا! لم يتم العثور على هذه الصفحة</Typography>
                    </Box>
                    <Box>
                        <Typography variant="h3" sx={style.Text3}>
                            حدث خطأ ما في الصفحة التي تحاول زيارتها لم يتم العثور عليها
                        </Typography>
                    </Box>
                    <Box sx={{ marginTop: '30px' }}>
                        <Link href="/teacher/home">
                            <Button variant="contained">العودة الى الرئيسية</Button>
                        </Link>
                    </Box>
                </Box>
            </Box>
            <Box sx={style.footerContainer}>
                <PageFooter />
            </Box>
        </Box>
    )
}
export default ErrorPage
