import { ReactNode } from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Box,
    useDisclosure,
    Button,
    Image,
    Heading,
} from '@chakra-ui/react';

interface ICardProps {
    title: string;
    color: string;
    imageUri: string;
    children: ReactNode;
}

export const Card = ({ title, color, imageUri, children }: ICardProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box
                p={4}
                display={'flex'}
                flexDir={'column'}
                alignItems={'center'}
                w={{ base: '80vw', md: '40vw' }}
                border={'2px solid black'}
                boxShadow={'4px 4px black'}
                rounded={8}
                cursor={'pointer'}
                onClick={onOpen}
                bg={'pallete.bg2'}
                transition={'.4s'}
                _hover={{
                    transition: '.4s',
                    boxShadow: '5px 5px black',
                    bg: color,
                }}
            >
                <Image
                    src={imageUri}
                    alt={title}
                    rounded={8}
                    mb={8}
                    h={{ base: '10em', md: '16em' }}
                />
                <Heading
                    fontFamily="Bebas Neue"
                    letterSpacing="wider"
                    textAlign={'center'}
                >
                    {title}
                </Heading>
            </Box>

            <Modal
                size={{ base: 'full', md: 'xl' }}
                isOpen={isOpen}
                onClose={onClose}
                isCentered
            >
                <ModalOverlay rounded={0} bg={'pallete.bg'} />
                <ModalContent
                    rounded={{ base: 0, md: 8 }}
                    border={{ base: 0, md: '2px solid black' }}
                    boxShadow={{ base: 0, md: '3px 3px black' }}
                    textAlign="center"
                >
                    <ModalHeader letterSpacing="wider" fontSize="3xl">
                        {title}
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody
                        fontSize="lg"
                        display="flex"
                        flexDir="column"
                        alignItems="center"
                    >
                        <Image
                            src={imageUri}
                            alt={title}
                            mb={8}
                            rounded={4}
                            maxH={'50vh'}
                        />
                        {children}
                    </ModalBody>

                    <ModalFooter>
                        <Button
                            fontSize={'xl'}
                            w={24}
                            bg="pallete.blue"
                            mr={3}
                            onClick={onClose}
                            rounded={8}
                            border={'2px solid black'}
                            boxShadow={'3px 3px black'}
                        >
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};
