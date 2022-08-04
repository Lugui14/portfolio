import { Flex, Box, Text, Heading } from '@chakra-ui/react';

export const About = () => {
    return (
        <Flex w={'100vw'} minH={'50vh'}>
            <Box
                bg={'#f8fdf8'}
                p={{ base: 8, md: 16, lg: 36 }}
                gap={8}
                w={'60%'}
            >
                <Heading>About</Heading>
                <Text>
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
        </Flex>
    );
};
