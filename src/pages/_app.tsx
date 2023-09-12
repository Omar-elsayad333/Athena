import '../styles/globals.css'
import { Suspense } from 'react'
import Layout from 'components/Layout'
import ThemeApp from '../styles/theme'
import { useRouter } from 'next/router'
import type { AppProps } from 'next/app'
import Loading from 'components/Loading/Loading'
// import { UserProvider } from 'context/userContext'
import { AlertProvider } from 'context/AlertContext'
import { DarkThemeProvider } from 'context/ThemeContext'
import { UserContextProvider } from 'context/userContext'
import { NotificationsProvider } from 'context/NotificationContext'

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter()

    if (router.pathname.startsWith('/teacher/')) {
        return (
            <Suspense fallback={<Loading />}>
                <DarkThemeProvider>
                    <ThemeApp>
                        <UserContextProvider>
                            <AlertProvider>
                                <NotificationsProvider>
                                    <Layout>
                                        <Component {...pageProps} />
                                    </Layout>
                                </NotificationsProvider>
                            </AlertProvider>
                        </UserContextProvider>
                    </ThemeApp>
                </DarkThemeProvider>
            </Suspense>
        )
    } else {
        return (
            <Suspense fallback={<Loading />}>
                <UserContextProvider>
                    <AlertProvider>
                        <DarkThemeProvider>
                            <ThemeApp>
                                <Component {...pageProps} />
                            </ThemeApp>
                        </DarkThemeProvider>
                    </AlertProvider>
                </UserContextProvider>
            </Suspense>
        )
    }
}

export default MyApp
