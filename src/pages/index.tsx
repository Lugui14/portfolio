import { useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Box, Heading, useColorMode } from '@chakra-ui/react';

import { Header } from 'components/Header';
import { Hero } from 'components/Hero';
import { About } from 'components/About';
import { Projects } from 'components/Projects';
import { Skills } from 'components/Skills';
import { Footer } from 'components/Footer';
import { LinkItem } from 'components/LinkItem';

const Home: NextPage = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    useEffect(() => {
        colorMode === 'dark' && toggleColorMode();
    }, [colorMode]); // eslint-disable-line

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
                <Box
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    bg={'pallete.bg2'}
                    w={'100vw'}
                    minH={'25vh'}
                    pb={8}
                >
                    <Heading
                        textAlign={'center'}
                        fontSize={{ base: '3xl', lg: '5xl' }}
                        letterSpacing={'wider'}
                        fontFamily={'Bebas Neue'}
                    >
                        Need a Developer? <br />
                        <LinkItem
                            color={'pallete.blue'}
                            transition={'.4s'}
                            _hover={{
                                transition: '.4s',
                                filter: 'auto',
                                brightness: '70%',
                            }}
                            href={'/contact'}
                        >
                            Lets Work Together!
                        </LinkItem>
                    </Heading>
                </Box>
                <Footer />
            </Box>
        </>
    );
};

export default Home;
