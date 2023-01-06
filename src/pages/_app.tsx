import type { AppProps } from 'next/app';
import ThemeApp from '../styles/theme';
import '../styles/globals.css';
import Layout from 'components/Layout';
import { DarkThemeProvider } from 'context/ThemeContext';
import { UserProvider } from 'context/userContext';

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <UserProvider>
      <DarkThemeProvider>
        <ThemeApp>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeApp>
      </DarkThemeProvider>
    </UserProvider>
  )
}

export default MyApp
