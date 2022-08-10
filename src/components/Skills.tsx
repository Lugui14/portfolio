import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    Flex,
    Heading,
    Box,
} from '@chakra-ui/react';
import { FaReact } from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiTypescript } from 'react-icons/si';
import { GrNode } from 'react-icons/gr';
import { FiDatabase } from 'react-icons/fi';
import { BsWordpress } from 'react-icons/bs';

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
                            >
                                <Heading
                                    as={'h2'}
                                    fontFamily={'Bebas Neue'}
                                    letterSpacing={'wider'}
                                    fontSize={'xl'}
                                    display={'flex'}
                                    alignItems="center"
                                    gap={4}
                                >
                                    {' '}
                                    <FaReact size={24} />
                                    ReactJS{' '}
                                </Heading>
                            </AccordionButton>
                            <AccordionPanel pb={4} bg={'pallete.bg2'}>
                                React is a JavaScript library of code open with
                                a focus on creating user interfaces on web
                                pages.
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
                            >
                                <Heading
                                    as={'h2'}
                                    fontFamily={'Bebas Neue'}
                                    letterSpacing={'wider'}
                                    fontSize={'xl'}
                                    display={'flex'}
                                    alignItems="center"
                                    gap={4}
                                >
                                    {' '}
                                    <TbBrandNextjs size={24} />
                                    NextJS{' '}
                                </Heading>
                            </AccordionButton>
                            <AccordionPanel pb={4} bg={'pallete.bg2'}>
                                Next.js is a web framework of open source React
                                front-end development created by Vercel that
                                allows functionalities like server-side
                                rendering and generation from static websites to
                                web applications based on React.
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
                            >
                                <Heading
                                    as={'h2'}
                                    fontFamily={'Bebas Neue'}
                                    letterSpacing={'wider'}
                                    fontSize={'xl'}
                                    display={'flex'}
                                    alignItems="center"
                                    gap={4}
                                >
                                    {' '}
                                    <SiTypescript size={24} />
                                    Typescript{' '}
                                </Heading>
                            </AccordionButton>
                            <AccordionPanel pb={4} bg={'pallete.bg2'}>
                                TypeScript is an open source programming
                                language developed by Microsoft. It is a strict
                                syntactic superset of JavaScript and adds
                                optional static typing to the language.
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
                            >
                                <Heading
                                    as={'h2'}
                                    fontFamily={'Bebas Neue'}
                                    letterSpacing={'wider'}
                                    fontSize={'xl'}
                                    display={'flex'}
                                    alignItems="center"
                                    gap={4}
                                >
                                    {' '}
                                    <GrNode size={24} />
                                    NodeJS{' '}
                                </Heading>
                            </AccordionButton>
                            <AccordionPanel pb={4} bg={'pallete.bg2'}>
                                Node.js is open source software, cross-platform,
                                based on the V8 interpreter of Google and that
                                allows code execution JavaScript outside of a
                                web browser.
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
                            >
                                <Heading
                                    as={'h2'}
                                    fontFamily={'Bebas Neue'}
                                    letterSpacing={'wider'}
                                    fontSize={'xl'}
                                    display={'flex'}
                                    alignItems="center"
                                    gap={4}
                                >
                                    {' '}
                                    <FiDatabase size={24} />
                                    Databases{' '}
                                </Heading>
                            </AccordionButton>
                            <AccordionPanel pb={4} bg={'pallete.bg2'}>
                                Databases or databases are sets of related files
                                with records about people, places or things.
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
                            >
                                <Heading
                                    as={'h2'}
                                    fontFamily={'Bebas Neue'}
                                    letterSpacing={'wider'}
                                    fontSize={'xl'}
                                    display={'flex'}
                                    alignItems="center"
                                    gap={4}
                                >
                                    {' '}
                                    <BsWordpress size={24} />
                                    Wordpress{' '}
                                </Heading>
                            </AccordionButton>
                            <AccordionPanel pb={4} bg={'pallete.bg2'}>
                                WordPress is a free and open content management
                                system for the internet, based on PHP with a
                                MySQL database, running on an interpreter
                                server, aimed mainly at creating web pages and
                                online blogs.
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </Flex>
            </Box>
        </>
    );
};
