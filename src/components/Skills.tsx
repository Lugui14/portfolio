import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    Flex,
    Heading,
    Box,
} from '@chakra-ui/react';

export const Skills = () => {
    return (
        <>
            <Box
                id={'skills'}
                p={{ base: 4, sm: 8, md: 16 }}
                borderBottom={'3px solid black'}
                position={'relative'}
            >
                <Heading
                    fontFamily={'Bebas Neue'}
                    letterSpacing={'wider'}
                    fontSize={'5xl'}
                    textDecor={'underline'}
                    mb={16}
                    textAlign={{ base: 'center', md: 'start' }}
                >
                    {' '}
                    Skills and Technologies{' '}
                </Heading>
                <Flex
                    gap={{ base: 0, md: 16 }}
                    flexDir={{ base: 'column', md: 'row' }}
                    alignItems={'center'}
                    justifyContent={'center'}
                >
                    <Accordion allowMultiple w={{ base: '80%', md: '50%' }}>
                        <AccordionItem
                            mb={8}
                            border={'2px solid black'}
                            boxShadow={'2px 2px black'}
                            rounded={8}
                            bg={'pallete.lime'}
                        >
                            <AccordionButton
                                alignItems={'center'}
                                justifyContent={'center'}
                                borderBottom={'2px solid black'}
                            >
                                <Heading
                                    as={'h2'}
                                    fontFamily={'Bebas Neue'}
                                    letterSpacing={'wider'}
                                    fontSize={'xl'}
                                >
                                    {' '}
                                    ReactJS{' '}
                                </Heading>
                            </AccordionButton>
                            <AccordionPanel pb={4} bg={'pallete.bg2'}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem
                            mb={8}
                            border={'2px solid black'}
                            boxShadow={'2px 2px black'}
                            rounded={8}
                            bg={'pallete.lime'}
                        >
                            <AccordionButton
                                alignItems={'center'}
                                justifyContent={'center'}
                                borderBottom={'2px solid black'}
                            >
                                <Heading
                                    as={'h2'}
                                    fontFamily={'Bebas Neue'}
                                    letterSpacing={'wider'}
                                    fontSize={'xl'}
                                >
                                    {' '}
                                    NextJS{' '}
                                </Heading>
                            </AccordionButton>
                            <AccordionPanel pb={4} bg={'pallete.bg2'}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem
                            mb={8}
                            border={'2px solid black'}
                            boxShadow={'2px 2px black'}
                            rounded={8}
                            bg={'pallete.lime'}
                        >
                            <AccordionButton
                                alignItems={'center'}
                                justifyContent={'center'}
                                borderBottom={'2px solid black'}
                            >
                                <Heading
                                    as={'h2'}
                                    fontFamily={'Bebas Neue'}
                                    letterSpacing={'wider'}
                                    fontSize={'xl'}
                                >
                                    {' '}
                                    Design Systems{' '}
                                </Heading>
                            </AccordionButton>
                            <AccordionPanel pb={4} bg={'pallete.bg2'}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>

                    <Accordion allowMultiple w={{ base: '80%', md: '50%' }}>
                        <AccordionItem
                            mb={8}
                            border={'2px solid black'}
                            boxShadow={'2px 2px black'}
                            rounded={8}
                            bg={'pallete.lime'}
                        >
                            <AccordionButton
                                alignItems={'center'}
                                justifyContent={'center'}
                                borderBottom={'2px solid black'}
                            >
                                <Heading
                                    as={'h2'}
                                    fontFamily={'Bebas Neue'}
                                    letterSpacing={'wider'}
                                    fontSize={'xl'}
                                >
                                    {' '}
                                    NodeJS{' '}
                                </Heading>
                            </AccordionButton>
                            <AccordionPanel pb={4} bg={'pallete.bg2'}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem
                            mb={8}
                            border={'2px solid black'}
                            boxShadow={'2px 2px black'}
                            rounded={8}
                            bg={'pallete.lime'}
                        >
                            <AccordionButton
                                alignItems={'center'}
                                justifyContent={'center'}
                                borderBottom={'2px solid black'}
                            >
                                <Heading
                                    as={'h2'}
                                    fontFamily={'Bebas Neue'}
                                    letterSpacing={'wider'}
                                    fontSize={'xl'}
                                >
                                    {' '}
                                    Databases{' '}
                                </Heading>
                            </AccordionButton>
                            <AccordionPanel pb={4} bg={'pallete.bg2'}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem
                            mb={8}
                            border={'2px solid black'}
                            boxShadow={'2px 2px black'}
                            rounded={8}
                            bg={'pallete.lime'}
                        >
                            <AccordionButton
                                alignItems={'center'}
                                justifyContent={'center'}
                                borderBottom={'2px solid black'}
                            >
                                <Heading
                                    as={'h2'}
                                    fontFamily={'Bebas Neue'}
                                    letterSpacing={'wider'}
                                    fontSize={'xl'}
                                >
                                    {' '}
                                    Wordpress{' '}
                                </Heading>
                            </AccordionButton>
                            <AccordionPanel pb={4} bg={'pallete.bg2'}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </Flex>
            </Box>
        </>
    );
};
