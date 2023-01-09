import type { AppProps } from 'next/app';
import ThemeApp from '../styles/theme';
import '../styles/globals.css';
import Layout from 'components/Layout';
import { DarkThemeProvider } from 'context/ThemeContext';
import { UserProvider } from 'context/userContext';
import { ErrorProvider } from 'context/ErrorContext';

function MyApp({ Component, pageProps }: AppProps) {

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
}

export default MyApp
