import type { AppProps } from 'next/app';
import ThemeApp from '../styles/theme';
import '../styles/globals.css';
import Layout from 'components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeApp>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeApp>
  )
}

export default MyApp
