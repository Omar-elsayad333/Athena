import type { AppProps } from 'next/app';
import ThemeApp from '../styles/theme';
import '../styles/globals.css';
import Layout from 'components/Layout';
import { DarkThemeProvider } from 'context/ThemeContext';
import { UserProvider } from 'context/userContext';
import { ErrorProvider } from 'context/ErrorContext';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {

  const router = useRouter()

  if(router.pathname.startsWith('/teacher')) {
    return (
      <UserProvider>
        <ErrorProvider>
          <DarkThemeProvider>
            <ThemeApp>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </ThemeApp>
          </DarkThemeProvider>
        </ErrorProvider>
      </UserProvider>
    )
  }else if(router.pathname.startsWith('/student')) {
    return (
      <UserProvider>
        <ErrorProvider>
          <DarkThemeProvider>
            <ThemeApp>
              <Component {...pageProps} />
            </ThemeApp>
          </DarkThemeProvider>
        </ErrorProvider>
      </UserProvider>
    )
  } else {
    return (
      <UserProvider>
        <ErrorProvider>
          <DarkThemeProvider>
            <ThemeApp>
              <Component {...pageProps} />
            </ThemeApp>
          </DarkThemeProvider>
        </ErrorProvider>
      </UserProvider>
    )
  }
}

export default MyApp
