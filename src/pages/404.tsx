import { NextPage } from 'next'
import Box from '@mui/material/Box'
import { IStyle } from 'styles/IStyle'
import { useTheme } from 'context/ThemeContext'
import ErrorPageHeaderImg from 'components/BigImages/ErrorPageHeaderImg'
import PageFooter from 'components/Shared/PageFooter'

const ErrorPage: NextPage = () => {
    const { mainColors } = useTheme()

    const style: IStyle = {
        root: {
            width: '100%',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: mainColors.backgroundColor.main,
            transition: '.2s',
        },
        header: {
            width: '100%',
            height: 'auto',
            position: 'absolute',
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '20px',
            top: '0px',
        },
        container: {
            backgroundColor: 'red',
            height: 'fit-content',
            display: 'flex',
            position: 'relative',
            top: '45vh',
            justifyContent: 'center',
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
                <Box sx={style.container}>testing</Box>
                <PageFooter />
            </Box>
        </Box>
    )
}
export default ErrorPage
