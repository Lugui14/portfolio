import { useEffect } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

import { Box, Heading, useColorMode } from '@chakra-ui/react';

import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { Form } from 'components/Form';

const Contact: NextPage = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    useEffect(() => {
        colorMode === 'dark' && toggleColorMode();
    }, []);

    return (
        <>
            <Head>
                <title>Luiz | Contact</title>
            </Head>
            <Box as={'div'} bg={'pallete.bg'} minH={'100vh'} minW={'100vw'}>
                <Header />
                <Box px={{ base: 8, md: 32, lg: 40 }} py={{ base: 24, lg: 32 }}>
                    <Heading
                        textAlign={'center'}
                        mb={8}
                        letterSpacing={'wider'}
                        fontFamily={'Bebas Neue'}
                        fontSize={'5xl'}
                        textDecor={'underline'}
                    >
                        {' '}
                        Send a Message for Me!
                    </Heading>
                    <Form />
                </Box>
                <Footer />
            </Box>
        </>
    );
};

export default Contact;
