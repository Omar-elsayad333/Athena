import type { AppProps } from 'next/app';
import ThemeApp from '../styles/theme';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeApp>
      <Component {...pageProps} />
    </ThemeApp>
  )
}

export default MyApp
