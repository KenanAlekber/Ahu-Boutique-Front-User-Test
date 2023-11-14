import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Heading,
    useColorModeValue,
    InputGroup,
    InputRightElement,
} from '@chakra-ui/react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import React from 'react'
import '../auth/register.scss'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'

export default function ResetPassword() {
    const [showPassword, setShowPassword] = React.useState(false)
    const [token, setToken] = React.useState("");
    const [email, setEmail] = React.useState("");

    // const handleOnChangeInput = ({ target: { name, value } }) => {
    //     setLoginData((prev) => ({ ...prev, [name]: value }))
    // }
    console.log(token);
    console.log(email);

    React.useEffect(() => {
        const urlSearchParams = new URLSearchParams(window.location.search);
        const params = Object.fromEntries(urlSearchParams.entries());
        const tokenParam = params?.token;
        const emailParam = params?.email;

        setToken(tokenParam);
        setEmail(emailParam);
    }, []);

    return (
        <>
            <Navbar />
            <Flex
                minH={'100vh'}
                align={'center'}
                justify={'center'}
                bg={useColorModeValue('gray.50', 'gray.800')}>
                <Stack spacing={8} mx={'auto'} maxW={'100%'} py={12} px={6}>
                    <Stack align={'center'}>
                        <Heading fontSize={'4xl'}>Reset Password</Heading>
                    </Stack>
                    <Box
                        w={'1000px'}
                        rounded={'lg'}
                        bg={useColorModeValue('white', 'gray.700')}
                        boxShadow={'lg'}
                        p={8}>
                        <Stack spacing={4}>
                            <FormControl id="password" isRequired>
                                <FormLabel>Password</FormLabel>
                                <InputGroup>
                                    {/* onChange={(e) => handleOnChangeInput(e)} */}
                                    <Input type={showPassword ? 'text' : 'password'} name='password' placeholder='Enter your Password' />
                                    <InputRightElement h={'full'}>
                                        <Button
                                            variant={'ghost'}
                                            onClick={() => setShowPassword((showPassword) => !showPassword)}>
                                            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                            </FormControl>
                            <FormControl id="ConfirmPassword" isRequired>
                                <FormLabel>Confirm Password</FormLabel>
                                <InputGroup>
                                    <Input type={showPassword ? 'text' : 'ConfirmPassword'} name='ConfirmPassword' placeholder='Enter your Confirm Password' />
                                    <InputRightElement h={'full'}>
                                        <Button
                                            variant={'ghost'}
                                            onClick={() => setShowPassword((showPassword) => !showPassword)}>
                                            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                            </FormControl>
                            <Button bg={'red'} color={'white'} _hover={{ bg: 'white', color: 'red' }}>Reset Password</Button>
                        </Stack>
                    </Box>
                </Stack>
            </Flex>
            <Footer />
        </>
    )
}