import { lightColors } from '../styles/colors'
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ar" dir="rtl">
        <Head>
          {/* PWA primary color */}
          <meta name="theme-color" content={lightColors.primary.main} />
          <link rel="icon" href="/images/Logo.svg" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&display=swap"
            rel="stylesheet"
          ></link>
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        </Head>
        <body style={{ margin: '0' }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
