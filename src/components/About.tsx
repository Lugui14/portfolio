import { Flex, Box, Text, Heading, Image } from '@chakra-ui/react';

export const About = () => {
    return (
        <Flex
            flexDir={{ base: 'column', lg: 'row' }}
            w={'100vw'}
            borderBottom={'2px solid black'}
        >
            <Box
                bg={'#f8fdf8'}
                p={{ base: 8, md: 16, lg: 24 }}
                gap={8}
                w={{ base: '100%', lg: '70%' }}
                borderRight={{ base: 0, lg: '2px solid black' }}
                borderBottom={{ base: '2px solid black', lg: 0 }}
            >
                <Heading
                    textAlign={{ base: 'center', lg: 'start' }}
                    letterSpacing={'wider'}
                    fontFamily={'Bebas Neue'}
                    fontSize={'5xl'}
                    mb={8}
                    textDecor={'underline'}
                >
                    About
                </Heading>
                <Text
                    fontSize={'xl'}
                    textAlign={{ base: 'center', lg: 'start' }}
                >
                    Hi, my name is Luiz, I'm currently studying Computer Science
                    at the Federal University of Fronteira Sul, in Brazil, I'm
                    completely passionate about programming and technology. I
                    have experience with web development services and am
                    enthusiastic about NextJS, Node and Wordpress technologies.
                    I always value programming in the best way to meet my
                    customers' requests, and I guarantee their satisfaction at
                    the end of my service.
                </Text>
            </Box>

            <Box
                w={{ base: '100%', lg: '30%' }}
                display={'flex'}
                justifyContent={'center'}
            >
                <Image src="https://github.com/Lugui14.png" alt="My Face" />
            </Box>
        </Flex>
    );
};
