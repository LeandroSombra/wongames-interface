import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <Head>
                <title>React avaçado - bolierplate</title>
                <link rel="shortcut icon" href="/img/iconfinder_React.png" />
                <link rel="apple-touch-icon" href="/img/iconfinder_React.png" />
                <link rel="manifest" href="/manifest.json" />
                <meta name="description" content="Simples projeto" />
            </Head>
            <GlobalStyles />
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default App
