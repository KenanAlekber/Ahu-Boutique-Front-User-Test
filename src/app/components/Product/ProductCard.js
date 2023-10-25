import "../Product/Product.scss"
import {
    Flex,
    Circle,
    Box,
    Image,
    Badge,
    useColorModeValue,
    Icon,
    chakra,
    Tooltip,
} from '@chakra-ui/react'
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs'
import { FiShoppingCart } from 'react-icons/fi'



function Rating({ rate, numReviews }) {
    return (
        <Box display="flex" alignItems="center">
            {Array(5)
                .fill('')
                .map((_, i) => {
                    const roundedRating = Math.round(rate * 2) / 2
                    if (roundedRating - i >= 1) {
                        return (
                            <BsStarFill
                                key={i}
                                style={{ marginLeft: '1' }}
                                color={i < rate ? 'teal.500' : 'gray.300'}
                            />
                        )
                    }
                    if (roundedRating - i === 0.5) {
                        return <BsStarHalf key={i} style={{ marginLeft: '1' }} />
                    }
                    return <BsStar key={i} style={{ marginLeft: '1' }} />
                })}
            {/* <Box as="span" ml="2" color="gray.600" fontSize="sm">
                {numReviews} review{numReviews > 1 && 's'}
            </Box> */}
        </Box>
    )
}

function ProductAddToCart({ data }) {
    const { id, name, rate, salePrice, discountPercent, brand, posterImage } = data;
    return (
        <Flex key={id} my={2} w="25%" alignItems="center" justifyContent="center">
            <Box
                bg={useColorModeValue('white', 'gray.800')}
                maxW="sm"
                borderWidth="1px"
                rounded="lg"
                shadow="lg"
                position="relative">
                {true && (
                    <Circle size="10px" position="absolute" top={2} right={2} bg="red.200" />
                )}

                <Image src={`https://localhost:7094/${posterImage?.imageUrl}`} alt={`Picture of ${name}`} roundedTop="lg" />

                <Box p="6">
                    <Box display="flex" alignItems="baseline">
                        <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                            {brand?.name}
                        </Badge>
                    </Box>
                    <Flex mt="1" justifyContent="space-between" alignContent="center">
                        <Box
                            fontSize="2xl"
                            fontWeight="semibold"
                            as="h4"
                            lineHeight="tight"
                            isTruncated>
                            {name}
                        </Box>
                        <Tooltip
                            label="Add to cart"
                            bg="white"
                            placement={'top'}
                            color={'gray.800'}
                            fontSize={'1.2em'}>
                            <chakra.a href={'#'} display={'flex'}>
                                <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
                            </chakra.a>
                        </Tooltip>
                    </Flex>

                    <Flex justifyContent="space-between" alignContent="center">
                        <Rating rate={rate} />
                        <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
                            <Box as="span" color={'gray.600'} fontSize="lg">
                                $
                            </Box>
                            {discountPercent > 0 ? (salePrice.toFixed(2) - (salePrice.toFixed(2) / 100) * discountPercent) : (salePrice.toFixed(2))}
                            {discountPercent > 0 &&
                                (<Box className='discounted-product' as="span" color={'gray.600'} fontSize="lg">
                                    {salePrice.toFixed(2)}
                                </Box>)

                            }
                        </Box>
                    </Flex>
                </Box>
            </Box>
        </Flex>
    )
}

export default ProductAddToCart