import { useEffect, useState } from 'react';
import {
    Heading,
    HStack,
    Box,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Button,
} from '@chakra-ui/react';
import { LinkItem } from '../components/LinkItem';
import { AiOutlineMenu } from 'react-icons/ai';

export const Header = () => {
    const [YPosition, setYPosition] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setYPosition(scrollY);
        });
    }, []);

    return (
        <HStack
            position={'fixed'}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'space-between'}
            w={'100%'}
            px={{ base: 4, sm: 6, md: 24 }}
            py={
                YPosition === 0
                    ? { base: 2, sm: 6, md: 8 }
                    : { base: 2, sm: 2, md: 3 }
            }
            zIndex={1}
            transition=".5s"
            bg={'pallete.topbg'}
        >
            <Heading letterSpacing={'tight'} as={'h3'}>
                {' '}
                PORTFOLIO{' '}
            </Heading>

            <HStack
                display={{ base: 'none', md: 'flex' }}
                flexDir="row"
                alignItems={'center'}
                justifyContent={'center'}
                gap={12}
            >
                <LinkItem href={'/#home'} fontSize={'xl'}>
                    Home
                </LinkItem>
                <LinkItem href={'/#about'} fontSize={'xl'}>
                    About
                </LinkItem>
                <LinkItem href={'/#projects'} fontSize={'xl'}>
                    Projects
                </LinkItem>
                <LinkItem href={'/#skills'} fontSize={'xl'}>
                    Skills
                </LinkItem>
                <LinkItem href={'contact'} fontSize={'xl'}>
                    Contact
                </LinkItem>
            </HStack>

            <Box display={{ base: 'inline-block', md: 'none' }}>
                <Menu>
                    <MenuButton
                        as={Button}
                        bg={'pallete.red'}
                        border={'2px solid black'}
                        rounded={0}
                        boxShadow={'2px 2px black'}
                        _hover={{
                            bg: 'pallete.red',
                            boxShadow: '3px 3px black',
                        }}
                    >
                        <AiOutlineMenu size={'18px'} />
                    </MenuButton>

                    <MenuList gap={8} rounded={0} border={'2px solid black'}>
                        <MenuItem as={LinkItem} href={'/#home'} fontSize={'xl'}>
                            Home
                        </MenuItem>
                        <MenuItem
                            as={LinkItem}
                            href={'/#about'}
                            fontSize={'xl'}
                        >
                            About
                        </MenuItem>
                        <MenuItem
                            as={LinkItem}
                            href={'/#projects'}
                            fontSize={'xl'}
                        >
                            Projects
                        </MenuItem>
                        <MenuItem
                            as={LinkItem}
                            href={'/#skills'}
                            fontSize={'xl'}
                        >
                            Skills
                        </MenuItem>
                        <MenuItem
                            as={LinkItem}
                            href={'contact'}
                            fontSize={'xl'}
                        >
                            Contact
                        </MenuItem>
                    </MenuList>
                </Menu>
            </Box>
        </HStack>
    );
};
