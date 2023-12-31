import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
} from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import { useService } from '../../API/Services'
import { useNavigate } from 'react-router-dom'
import { useMutation } from 'react-query'
import { ROUTES } from '../../routes/consts'
import Swal from 'sweetalert2'
import React from 'react'

export default function Register() {
    const [showPassword, setShowPassword] = React.useState(false)
    const [registerData, setRegisterData] = React.useState()
    const { authService } = useService()
    const navigate = useNavigate()

    const { mutateAsync: mutateRegister } = useMutation((body) => authService.register(body).then(() => navigate(ROUTES.USER.REGISTER)).catch((err) => Swal.fire("Error", `${err.errors[0]}`, "error")))

    const handleOnChangeInput = ({ target: { name, value } }) => {
        setRegisterData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = () => mutateRegister(registerData);

    return (
        <>
            <Navbar />
            <Flex
                className='register'
                minH={'100vh'}
                align={'center'}
                justify={'center'}
                bg={useColorModeValue('gray.50', 'gray.800')}>
                <Stack spacing={8} mx={'auto'} maxW={'lg'} pt={19} px={6}>
                    <Stack align={'center'}>
                        <Heading fontSize={'4xl'} textAlign={'center'}>
                            Sign up
                        </Heading>
                        <Text fontSize={'lg'} color={'gray.600'}>
                            Please register using account detail bellow.
                        </Text>
                    </Stack>
                    <Box
                        rounded={'lg'}
                        bg={useColorModeValue('white', 'gray.700')}
                        boxShadow={'lg'}
                        p={5}>
                        <Stack spacing={4}>
                            <FormControl id="FullName" isRequired>
                                <FormLabel>Full Name</FormLabel>
                                <Input type="text" name='FullName' onChange={(e) => handleOnChangeInput(e)} placeholder='Enter your Full Name' />
                            </FormControl>
                            <FormControl id="UserName" isRequired>
                                <FormLabel>User Name</FormLabel>
                                <Input type="text" name='UserName' onChange={(e) => handleOnChangeInput(e)} placeholder='Enter your User Name' />
                            </FormControl>
                            <FormControl id="Adress" isRequired>
                                <FormLabel>Adress</FormLabel>
                                <Input type="text" name='Adress' onChange={(e) => handleOnChangeInput(e)} placeholder='Enter your Adress' />
                            </FormControl>
                            <FormControl id="phone" isRequired>
                                <FormLabel>Phone Number</FormLabel>
                                <Input type="number" name='phone' onChange={(e) => handleOnChangeInput(e)} placeholder='Enter your Phone Number' />
                            </FormControl>
                            <FormControl id="email" isRequired>
                                <FormLabel>Email address</FormLabel>
                                <Input type="email" name='email' onChange={(e) => handleOnChangeInput(e)} placeholder='Enter your Email' />
                            </FormControl>
                            <FormControl id="password" isRequired>
                                <FormLabel>Password</FormLabel>
                                <InputGroup>
                                    <Input type={showPassword ? 'text' : 'password'} name='password' onChange={(e) => handleOnChangeInput(e)} placeholder='Enter your Password' />
                                    <InputRightElement h={'full'}>
                                        <Button
                                            variant={'ghost'}
                                            onClick={() => setShowPassword((showPassword) => !showPassword)}>
                                            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                            </FormControl>
                            <FormControl id="confirmPassword" isRequired>
                                <FormLabel>Confirm Password</FormLabel>
                                <InputGroup>
                                    <Input type={showPassword ? 'text' : 'password'} name='confirmPassword' onChange={(e) => handleOnChangeInput(e)} placeholder='Enter your Confirm Password' />
                                    <InputRightElement h={'full'}>
                                        <Button
                                            variant={'ghost'}
                                            onClick={() => setShowPassword((showPassword) => !showPassword)}>
                                            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                            </FormControl>
                            <Stack spacing={10} pt={2}>
                                <Button
                                    onClick={() => handleSubmit()}
                                    loadingText="Submitting"
                                    size="lg"
                                    bg={'red'}
                                    color={'white'}
                                    _hover={{
                                        bg: 'white',
                                        color: 'red'
                                    }}>
                                    Sign up
                                </Button>
                            </Stack>
                            <Stack pt={2}>
                                <Text align={'center'}>
                                    Have an account? <Link color={'red'} onClick={() => navigate(ROUTES.USER.LOGIN)}>Login</Link>
                                </Text>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </Flex>
            <Footer />
        </>
    )
}