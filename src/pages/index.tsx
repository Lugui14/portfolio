import type { NextPage } from 'next';
import Head from 'next/head';
import { Box } from '@chakra-ui/react';

import { Header } from 'components/Header';
import { Hero } from 'components/Hero';

const textos = {
    about: "Hi, my name is Luiz, I'm currently studying Computer Science at the Federal University of Fronteira Sul, in Brazil, I'm completely passionate about programming and technology. I have experience with web development services and am enthusiastic about NextJS, Node and Wordpress technologies. I always value programming in the best way to meet my customers' requests, and I guarantee their satisfaction at the end of my service.",
};

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
            </Box>
        </>
    );
};

export default Home;
