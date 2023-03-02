import type { AppProps } from 'next/app';
import ThemeApp from '../styles/theme';
import '../styles/globals.css';
import Layout from 'components/Layout';
import { DarkThemeProvider } from 'context/ThemeContext';
import { UserProvider } from 'context/userContext';
import { AlertProvider } from 'context/AlertContext';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {

  const router = useRouter()

  if(router.pathname.startsWith('/teacher')) {
    return (
      <UserProvider>
        <AlertProvider>
          <DarkThemeProvider>
            <ThemeApp>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </ThemeApp>
          </DarkThemeProvider>
        </AlertProvider>
      </UserProvider>
    )
  }else if(router.pathname.startsWith('/student')) {
    return (
      <UserProvider>
        <AlertProvider>
          <DarkThemeProvider>
            <ThemeApp>
              <Component {...pageProps} />
            </ThemeApp>
          </DarkThemeProvider>
        </AlertProvider>
      </UserProvider>
    )
  } else {
    return (
      <UserProvider>
        <AlertProvider>
          <DarkThemeProvider>
            <ThemeApp>
              <Component {...pageProps} />
            </ThemeApp>
          </DarkThemeProvider>
        </AlertProvider>
      </UserProvider>
    )
  }
}

export default MyApp
