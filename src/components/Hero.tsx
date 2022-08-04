import {
    Stack,
    Flex,
    Button,
    Heading,
    Text,
    Box,
    Image,
} from '@chakra-ui/react';
import { LinkItem } from './LinkItem';

export const Hero = () => {
    return (
        <Flex
            id={'home'}
            flexDir={{ base: 'column', lg: 'row' }}
            justifyContent={{ base: 'center', lg: 'space-evenly' }}
            minH={'80vh'}
            px={{ base: 2, sm: 8, md: 24 }}
            pt={{ base: 32, lg: 40 }}
            pb={16}
            gap={{ base: 24, md: 12 }}
            borderBottom={'2px solid black'}
        >
            <Stack
                w={{ base: '100%', lg: '50%' }}
                h={'100%'}
                textAlign={{ base: 'center', lg: 'left' }}
            >
                <Heading
                    as="h3"
                    fontSize={36}
                    letterSpacing={'widest'}
                    fontFamily={'Square Peg'}
                    color={'pallete.blue'}
                >
                    Hi, I'm Luiz
                </Heading>
                <Heading
                    as="h1"
                    letterSpacing={'wider'}
                    fontFamily="Bebas Neue"
                    fontSize={{ base: '5xl', sm: '7xl' }}
                >
                    {' '}
                    A web developer you can trust{' '}
                </Heading>
                <Text fontSize={'xl'}>
                    I'm a programmer passionate about technology and addicted to
                    fulfilling my clients' requests in the best way.
                </Text>
                <Flex
                    alignItems={{ base: 'center', lg: 'start' }}
                    gap={8}
                    flexDir={{ base: 'column', lg: 'row' }}
                    pt={8}
                >
                    <LinkItem
                        as={Button}
                        href={'#'}
                        w={{ base: '70%', lg: '30%' }}
                        rounded={4}
                        bg={'transparent'}
                        border={'2px solid black'}
                        boxShadow={'3px 3px black'}
                        _hover={{
                            boxShadow: '4px 4px black',
                        }}
                    >
                        Read More
                    </LinkItem>
                    <LinkItem
                        as={Button}
                        href={'#'}
                        w={{ base: '70%', lg: '30%' }}
                        rounded={4}
                        bg={'pallete.yellow'}
                        border={'2px solid black'}
                        boxShadow={'3px 3px black'}
                        _hover={{
                            boxShadow: '4px 4px black',
                        }}
                    >
                        See Portfolio
                    </LinkItem>
                </Flex>
            </Stack>
            <Box
                as="div"
                h={'auto'}
                display={{ base: 'none', lg: 'flex' }}
                alignItems={'end'}
                w={{ base: '100%', lg: '50%' }}
            >
                <Image src={'hero-image.svg'} alt={'Hello'} w={'90%'} />
            </Box>
        </Flex>
    );
};
