import type { AppProps } from 'next/app';
import '@fontsource/bebas-neue';
import '@fontsource/square-peg';

import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import theme from '../styles/theme';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <Head>
                <meta name="language" content="en" />
                <meta
                    name="description"
                    content="Website to display my professional portfolio. Hello my name is Luiz, I am a web developer and I will do everything to deliver the best service to you."
                />
                <meta name="robots" content="all" />
                <meta name="author" content="Luiz Guilherme" />
                <meta
                    name="keywords"
                    content="Portfolio, development, developer, programmer"
                />

                <meta property="og:type" content="page" />
                <meta property="og:url" content="portfolio.vercel.app" />
                <meta
                    property="og:title"
                    content="Luiz Guilherme | Web Developer Portfolio"
                />
                <meta
                    property="og:image"
                    content="https://github.com/Lugui14.png"
                />
                <meta
                    property="og:description"
                    content="Website to display my professional portfolio. Hello my name is Luiz, I am a web developer and I will do everything to deliver the best service to you."
                />

                <meta
                    property="article:author"
                    content="Luiz Guilherme Zanella Lopes"
                />

                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@Luiz Guilherme" />
                <meta
                    name="twitter:title"
                    content="Luiz Guilherme | Web Developer Portfolio"
                />
                <meta name="twitter:creator" content="@Luiz Guilherme" />
                <meta
                    name="twitter:description"
                    content="Website to display my professional portfolio. Hello my name is Luiz, I am a web developer and I will do everything to deliver the best service to you."
                />
            </Head>
            <CSSReset />
            <Component {...pageProps} />
        </ChakraProvider>
    );
}

export default MyApp;
