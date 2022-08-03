import type { AppProps } from 'next/app';
import '@fontsource/bebas-neue';
import '@fontsource/square-peg';

import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <CSSReset />
            <Component {...pageProps} />
        </ChakraProvider>
    );
}

export default MyApp;
