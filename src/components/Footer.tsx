import { Flex, Heading } from '@chakra-ui/react';

export const Footer = () => {
    return (
        <Flex
            position={'absolute'}
            bottom={0}
            h={'5vh'}
            w={'100vw'}
            bg={'pallete.green'}
            alignItems={'center'}
            justifyContent={'center'}
            borderTop={'3px solid black'}
        >
            <Heading
                as="h5"
                fontSize={'lg'}
                letterSpacing={'wider'}
                fontFamily="Bebas Neue"
                textAlign="center"
            >
                This website is MIT licensed.
            </Heading>
        </Flex>
    );
};
