import {
    Flex,
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    InputGroup,
    InputLeftElement,
    VStack,
    Textarea,
    Button,
    useToast,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { AiOutlineMail, AiOutlineInfoCircle } from 'react-icons/ai';

interface IMyInputTypes {
    email: string;
    name: string;
    message: string;
}

export const Form = () => {
    const toast = useToast();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IMyInputTypes>();

    const onSubmit = handleSubmit((data) => {
        fetch('/api/mail', {
            method: 'post',
            body: JSON.stringify(data),
        })
            .then((response) => {
                response.status === 200
                    ? toast({
                          title: 'Email sent!',
                          description:
                              'Your message has been sent, wait for a response to the email provided.',
                          status: 'success',
                          duration: 9000,
                          isClosable: true,
                          containerStyle: {
                              letterSpacing: 'wider',
                              border: '3px solid black',
                              boxShadow: '2px 2px black',
                              borderRadius: 10,
                          },
                      })
                    : toast({
                          title: 'An error has occurred.',
                          description: 'An internal server error has occurred.',
                          status: 'error',
                          duration: 9000,
                          isClosable: true,
                          containerStyle: {
                              letterSpacing: 'wider',
                              border: '3px solid black',
                              boxShadow: '2px 2px black',
                              borderRadius: 10,
                          },
                      });
            })
            .catch(() => {
                toast({
                    title: 'An error has occurred.',
                    description: 'Unknown error.',
                    status: 'error',
                    duration: 9000,
                    isClosable: true,
                    containerStyle: {
                        letterSpacing: 'wider',
                        border: '3px solid black',
                        boxShadow: '2px 2px black',
                        borderRadius: 10,
                    },
                });
            });
    });

    return (
        <form method="post" onSubmit={onSubmit}>
            <VStack>
                <Flex
                    w={'100%'}
                    justifyContent={'space-between'}
                    flexDir={{ base: 'column', lg: 'row' }}
                    gap={8}
                    mb={8}
                >
                    <FormControl isRequired>
                        <FormLabel> Email </FormLabel>
                        <InputGroup
                            boxShadow={'2px 2px black'}
                            size={'lg'}
                            bg={'pallete.bg2'}
                            border={'3px solid black'}
                        >
                            <InputLeftElement children={<AiOutlineMail />} />
                            <Input
                                {...register('email', {
                                    required: 'This is required',
                                })}
                                fontFamily={'cursive'}
                                border="0"
                                outline="0"
                                _focusVisible={{
                                    borderColor: 'transparent',
                                    outline: 0,
                                }}
                                type="email"
                                placeholder="Email"
                                aria-label="Email"
                            />
                        </InputGroup>
                        <FormHelperText color={'pallete.red'}>
                            {errors.email && errors.email.message}
                        </FormHelperText>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel> Name </FormLabel>
                        <InputGroup
                            boxShadow={'2px 2px black'}
                            bg={'pallete.bg2'}
                            size={'lg'}
                            border={'3px solid black'}
                        >
                            <InputLeftElement>
                                <AiOutlineInfoCircle />
                            </InputLeftElement>
                            <Input
                                {...register('name', {
                                    required: 'This is required.',
                                })}
                                fontFamily={'cursive'}
                                border="0"
                                outline="0"
                                _focusVisible={{
                                    borderColor: 'transparent',
                                    outline: 0,
                                }}
                                type="name"
                                placeholder="Name"
                                aria-label="Name"
                            />
                        </InputGroup>
                        <FormHelperText color={'pallete.red'}>
                            {errors.name && errors.name.message}
                        </FormHelperText>
                    </FormControl>
                </Flex>
                <FormControl marginBottom={8} isRequired>
                    <FormLabel> Message </FormLabel>
                    <InputGroup
                        boxShadow={'2px 2px black'}
                        border={'3px solid black'}
                    >
                        <Textarea
                            {...register('message', {
                                required: 'This is required',
                                minLength: {
                                    value: 10,
                                    message: 'The message is too short.',
                                },
                            })}
                            fontFamily={'cursive'}
                            bg={'pallete.bg2'}
                            placeholder="Type your message here."
                            size="md"
                            h={40}
                            border="0"
                            outline="0"
                            _focusVisible={{
                                borderColor: 'transparent',
                                outline: 0,
                            }}
                        />
                    </InputGroup>
                    <FormHelperText color={'pallete.red'}>
                        {errors.message && errors.message.message}
                    </FormHelperText>
                </FormControl>
                <Button
                    bg={'pallete.yellow'}
                    rounded={0}
                    border={'3px solid black'}
                    boxShadow={'2px 2px black'}
                    w={'60%'}
                    letterSpacing={'wider'}
                    type={'submit'}
                >
                    Send Email!
                </Button>
            </VStack>
        </form>
    );
};
