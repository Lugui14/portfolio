import { Flex, Box, Heading, Button } from '@chakra-ui/react';
import { AiFillGithub } from 'react-icons/ai';
import { Card } from '../components/Card';
import { LinkItem } from './LinkItem';

export const Projects = () => {
    return (
        <Box
            id={'projects'}
            display={'flex'}
            flexDir={'column'}
            p={{ base: 4, sm: 8, md: 16 }}
            gap={8}
            borderBottom={'3px solid black'}
        >
            <Flex
                gap={4}
                flexDir={{ base: 'column', md: 'row' }}
                alignItems="center"
                justifyContent={'space-between'}
            >
                <Heading
                    letterSpacing={'wider'}
                    fontSize={'5xl'}
                    fontFamily="Bebas Neue"
                    textDecor={'underline'}
                    textAlign={{ base: 'center', md: 'start' }}
                    mb={4}
                >
                    Projects
                </Heading>

                <Button
                    as={LinkItem}
                    href={'https://github.com/Lugui14'}
                    target={'_blank'}
                    bg={'pallete.blue'}
                    rounded={8}
                    border={'2px solid black'}
                    boxShadow={'3px 3px black'}
                    w={48}
                    h={12}
                    fontSize={20}
                    leftIcon={<AiFillGithub size={26} />}
                >
                    All Projects
                </Button>
            </Flex>

            <Flex
                flexWrap={'wrap'}
                flexDir={{ base: 'column', md: 'row' }}
                justifyContent={{ base: 'auto', md: 'center' }}
                alignItems={'center'}
                gap={{ base: 8, sm: 6, lg: 16 }}
            >
                <Card
                    color={'pallete.purple'}
                    title={'Conveyor System'}
                    imageUri={'sistema.png'}
                >
                    System designed for companies that work with transport, it
                    has features for registering products, orders, customers,
                    sending email and contact. Programmed entirely with the PHP
                    language, using good development practices and
                    responsiveness.
                </Card>
                <Card
                    color={'pallete.pink'}
                    title={'DoWhile Chat NLWHeat'}
                    imageUri={'nlw-heat-rocketseat.png'}
                >
                    Complete web application developed during the Rocketseat
                    company's Next Level Week Heat event. It uses Vite, React
                    Native and NodeJS technologies, has a complete backend with
                    authentication system and dynamic interface updated in real
                    time.
                </Card>
                <Card
                    color={'pallete.yellow'}
                    title={'BLoUG!'}
                    imageUri={'Bloug.png'}
                >
                    Blog made with Next JS and Node JS technologies, using
                    ChakraUI design system. It has an authentication system and
                    real-time public messaging.
                </Card>
                <Card
                    color={'pallete.red'}
                    title={'RentX (backend)'}
                    imageUri={'rentX.png'}
                >
                    Backend project made during Rocketseat's Ignite training.
                    Project uses NodeJS, PostgreSQL and Jest for unit tests,
                    good programming practices based on SOLID principles. Its
                    objective is to simulate the website system of a company
                    that rents luxury cars, with authentication, registration
                    and car rental functionality.
                </Card>
            </Flex>
        </Box>
    );
};
