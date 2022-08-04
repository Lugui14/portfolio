import type { NextPage } from 'next';
import Head from 'next/head';
import { Box } from '@chakra-ui/react';

import { Header } from 'components/Header';
import { Hero } from 'components/Hero';
import { About } from 'components/About';

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Luiz | Portfolio</title>
            </Head>
            <Box
                as={'div'}
                bg={'pallete.bg'}
                minH={'100vh'}
                minW={'100vw'}
                overflowX={'hidden'}
            >
                <Header />
                <Hero />
                <About />
            </Box>
        </>
    );
};

export default Home;
