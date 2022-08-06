import { useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Box, useColorMode } from '@chakra-ui/react';

import { Header } from 'components/Header';
import { Hero } from 'components/Hero';
import { About } from 'components/About';
import { Projects } from 'components/Projects';
import { Skills } from 'components/Skills';

const Home: NextPage = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    useEffect(() => {
        colorMode === 'dark' && toggleColorMode();
    }, []);

    return (
        <>
            <Head>
                <title>Luiz | Portfolio</title>
            </Head>
            <Box as={'div'} bg={'pallete.bg'} minH={'100vh'} minW={'100vw'}>
                <Header />
                <Hero />
                <About />
                <Projects />
                <Skills />
            </Box>
        </>
    );
};

export default Home;
