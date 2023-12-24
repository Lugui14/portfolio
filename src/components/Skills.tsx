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
import { FaJava } from 'react-icons/fa';

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
                            <AccordionPanel
                                pb={4}
                                bg={'pallete.bg2'}
                                rounded={8}
                            >
                                Very widely used frontend JavaScript library, I
                                have 2 years of experience using it and it is
                                the main technology in my range of skills
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
                            <AccordionPanel
                                rounded={8}
                                pb={4}
                                bg={'pallete.bg2'}
                            >
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
                            <AccordionPanel
                                rounded={8}
                                pb={4}
                                bg={'pallete.bg2'}
                            >
                                TypeScript is is a strict syntactic superset of
                                JavaScript and adds optional static typing to
                                the language. I have experience in developing
                                with typescript to improve the robustness and
                                quality of my software
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
                            <AccordionPanel
                                rounded={8}
                                pb={4}
                                bg={'pallete.bg2'}
                            >
                                Node.js is open source software, cross-platform,
                                based on the V8 interpreter of Google and that
                                allows code execution JavaScript outside of a
                                web browser. I have experience using it to build
                                APIs and microservices.
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
                            <AccordionPanel
                                rounded={8}
                                pb={4}
                                bg={'pallete.bg2'}
                            >
                                Databases are sets of related files with records
                                about people, places or things. I've worked a
                                lot with PostgreSQL and have solid knowledge in
                                managing relational databases.
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
                                    <FaJava size={24} />
                                    Java{' '}
                                </Heading>
                            </AccordionButton>
                            <AccordionPanel
                                rounded={8}
                                pb={4}
                                bg={'pallete.bg2'}
                            >
                                Java is an object-oriented programming language
                                widely used in the world. I have one year of
                                experience using the JAVA language using Spring
                                Boot and MVC architecture, it is an extremely
                                solid language and very satisfying to work with.
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </Flex>
            </Box>
        </>
    );
};
