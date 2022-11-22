import type { AppProps } from 'next/app';
import ThemeApp from '../styles/theme';
import '../styles/globals.css';
import Layout from 'components/Layout';
import { DarkModeProvider } from 'context/DarkModeContext';

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <DarkModeProvider>
      <ThemeApp>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeApp>
    </DarkModeProvider>
  )
}

export default MyApp
