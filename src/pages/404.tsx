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
            width: '100vw',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            backgroundColor: mainColors.backgroundColor.main,
            transition: '.2s',
        },
        header: {
            width: '100%',
            height: 'auto',
            position: 'absolute',
            display: 'flex',
            justifyContent: 'center',
            FlexDirection: 'row',
            paddingTop: '20px',
            top: '0px',
        },
        container: {
            height: 'fit-content',
            display: 'flex',
            position: 'absolute',
            flexDirection: 'column',
            top: '30vh',
            right: '30vw',
            justifyContent: 'center',
            alignContent: 'flex-end',
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
        },
        Text2: {
            color: mainColors.primary.main,
            fontSize: '40px',
            fontWeight: '700',
        },
        Text3: {
            marginTop: '10px',
            fontWeight: '300',
        },
        footerContainer: {
            marginTop: 'auto',
        },
    }

    return (
        <Box sx={style.root}>
            <Box sx={style.footerContainer}>
                <Box sx={style.header}>
                    <ErrorPageHeaderImg />
                </Box>
                <Box sx={style.container}>
                    <Box sx={{ display: 'inline-flex' }}>
                        <ErrorPageContentBoxImg />
                        <Typography sx={style.BigText}>404</Typography>
                        <Typography variant="h5" sx={style.Text}>
                            Error Code
                        </Typography>
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

                <PageFooter />
            </Box>
        </Box>
    )
}
export default ErrorPage
