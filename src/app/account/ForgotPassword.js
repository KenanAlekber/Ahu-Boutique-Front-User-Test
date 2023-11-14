import { Flex, Box, FormControl, FormLabel, Input, Stack, Button, Heading, useColorModeValue, } from '@chakra-ui/react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import React from 'react'
import '../auth/register.scss'
import { useService } from '../../API/Services'
import { useNavigate } from 'react-router-dom'
import { useMutation } from 'react-query'
import { ROUTES } from '../../routes/consts'
import Swal from 'sweetalert2'

export default function ForgotPassword() {
    const [forgotPassword, setForgotPassword] = React.useState()
    const { authService } = useService();
    const navigate = useNavigate()

    const { mutateAsync: mutateForgotPassword } = useMutation((body) => authService.forgotPassword(body).then(() => navigate(ROUTES.USER.LOGIN)).catch((err) => Swal.fire("Error", `${err.errors[0]}`, "error")))

    const handleOnChangeInput = ({ target: { name, value } }) => {
        setForgotPassword((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmitForgotPassword = () => mutateForgotPassword(forgotPassword)

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
                        <Heading fontSize={'4xl'}>Forgot Password</Heading>
                    </Stack>
                    <Box
                        w={'1000px'}
                        rounded={'lg'}
                        bg={useColorModeValue('white', 'gray.700')}
                        boxShadow={'lg'}
                        p={8}>
                        <Stack spacing={4}>
                            <FormControl id="email" isRequired>
                                <FormLabel>Email address</FormLabel>
                                <Input onChange={(e) => handleOnChangeInput(e)} type="email" name='email' placeholder='Enter your Email' />
                            </FormControl>
                            <Button
                                onClick={() => handleSubmitForgotPassword()}
                                w={'20%'} bg={'red'} color={'white'} _hover={{ bg: 'white', color: 'red' }}>Send Link
                            </Button>
                        </Stack>
                    </Box>
                </Stack>
            </Flex>
            <Footer />
        </>
    )
}