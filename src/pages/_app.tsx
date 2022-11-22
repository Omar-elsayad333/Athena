import type { AppProps } from 'next/app';
import ThemeApp from '../styles/theme';
import '../styles/globals.css';
import Layout from 'components/Layout';
import { DarkThemeProvider } from 'context/ThemeContext';

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <DarkThemeProvider>
      <ThemeApp>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeApp>
    </DarkThemeProvider>
  )
}

export default MyApp
