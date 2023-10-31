import {
    Box,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    List,
    ListItem,
    Spinner,
} from '@chakra-ui/react'
import { useLocation } from 'react-router-dom'
import { useService } from '../../../API/Services';
import { useQuery } from 'react-query';
import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

export default function ProductDetail() {
    const location = useLocation();
    const { productService } = useService()
    const [productData, setProductData] = React.useState();
    const { isLoading } = useQuery([], () => {
        productService.getProductById(location.state?.id).then(({ data }) => setProductData(data))
    })

    if (isLoading || productData == null)
        <Spinner />

    return (
        <>
            <Navbar />
            <Container maxW={'7xl'}>
                <SimpleGrid
                    columns={{ base: 1, lg: 2 }}
                    spacing={{ base: 8, md: 10 }}
                    py={{ base: 18, md: 24 }}>
                    <Flex>
                        <Image
                            rounded={'md'}
                            alt={`Picture of ${productData?.name}`}
                            // src={`https://localhost:7094/Product/${productData?.posterImage?.imageUrl}`}
                            src='https://static.ticimax.cloud/cdn-cgi/image/width=472,quality=90,format=webp/30743/uploads/urunresimleri/buyuk/montici-kurklu-kot-mont-mavi-efe-46.jpg'
                            fit={'cover'}
                            align={'center'}
                            w={'100%'}
                            h={{ base: '100%', sm: '400px', lg: '600px' }}
                        />
                    </Flex>
                    <Stack spacing={{ base: 6, md: 10 }}>
                        <Box as={'header'}>
                            <Heading
                                lineHeight={1.1}
                                fontWeight={600}
                                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                                {productData?.name}
                            </Heading>
                            <Text
                                color={useColorModeValue('gray.900', 'gray.400')}
                                fontWeight={300}
                                fontSize={'2xl'}>
                                ${productData?.discountPercent > 0 ? (productData?.salePrice.toFixed(2) - (productData?.salePrice.toFixed(2) / 100) * productData?.discountPercent) : (productData?.salePrice.toFixed(2))}
                                {productData?.discountPercent > 0 &&
                                    (<Box className='discounted-product' as="span" color={'red'} fontSize="lg">
                                        {productData?.salePrice.toFixed(2)}
                                    </Box>)

                                }
                            </Text>
                        </Box>

                        <Stack
                            spacing={{ base: 4, sm: 6 }}
                            direction={'column'}
                            divider={
                                <StackDivider borderColor={useColorModeValue('gray.200', 'gray.600')} />
                            }>
                            <VStack spacing={{ base: 4, sm: 6 }} alignItems={'flex-start'}>
                                <Text fontSize={'lg'}>
                                    {productData?.description}
                                </Text>
                            </VStack>
                            <Box>
                                <Text
                                    fontSize={{ base: '16px', lg: '18px' }}
                                    color={useColorModeValue('yellow.500', 'yellow.300')}
                                    fontWeight={'500'}
                                    textTransform={'uppercase'}
                                    mb={'4'}>
                                    Product Details
                                </Text>

                                <List spacing={2}>
                                    <ListItem>
                                        <Text as={'span'} fontWeight={'bold'}>
                                            Description:
                                        </Text>{' '}
                                        {productData?.description}
                                    </ListItem>
                                    <ListItem>
                                        <Text as={'span'} fontWeight={'bold'}>
                                            Color:
                                        </Text>{' '}
                                        {productData?.color}
                                    </ListItem>
                                    <ListItem>
                                        <Text as={'span'} fontWeight={'bold'}>
                                            Size:
                                        </Text>{' '}
                                        {productData?.size}
                                    </ListItem>
                                    <ListItem>
                                        <Text as={'span'} fontWeight={'bold'}>
                                            Stock:
                                        </Text>{' '}
                                        {productData?.stockCount}
                                    </ListItem>
                                </List>
                            </Box>
                        </Stack>

                        <Button
                            rounded={'none'}
                            w={'full'}
                            mt={8}
                            size={'lg'}
                            py={'7'}
                            bg={useColorModeValue('gray.900', 'gray.50')}
                            color={useColorModeValue('white', 'gray.900')}
                            textTransform={'uppercase'}
                            _hover={{ transform: 'translateY(2px)', boxShadow: 'lg' }}>
                            Add to cart
                        </Button>

                        <Stack direction="row" alignItems="center" justifyContent={'center'}>
                            <Text>2-3 business days delivery</Text>
                        </Stack>
                    </Stack>
                </SimpleGrid>
            </Container>
            <Footer />
        </>
    )
}