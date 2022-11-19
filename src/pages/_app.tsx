import type { AppProps } from 'next/app';
import ThemeApp from '../styles/theme';
import '../styles/globals.css';
import Layout from 'components/Layout';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {

  function preventScrollWheel(event: any) {
    if (typeof event.cancelable !== 'boolean' || event.cancelable) {
      // The event can be canceled, so we do so.
      event.preventDefault();
    } else {
      // The event cannot be canceled, so it is not safe
      // to call preventDefault() on it.
      console.warn(`The following event couldn't be canceled:`);
      console.dir(event);
    }
  }

  useEffect(() => {
    window?.document.addEventListener('wheel', preventScrollWheel);
  })
  


  return (
    <ThemeApp>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeApp>
  )
}

export default MyApp
