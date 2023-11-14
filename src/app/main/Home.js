import React from 'react'
import { useService } from '../../API/Services'
import { useQuery } from 'react-query';
import Swal from 'sweetalert2';
import { ClipLoader } from 'react-spinners';
import ProductAddToCart from '../components/Product/ProductCard';
import Navbar from '../components/Navbar/Navbar';
import CaptionCarousel from '../components/Slider/Slider';
import Hero from '../components/Hero/Hero';
import Footer from '../components/Footer/Footer';
import Image from '../components/ImageSection/Image';

const Home = () => {
    const { productService } = useService();
    const [productData, setProductData] = React.useState([])
    const { isLoading } = useQuery(["GETPRODUCT"], () => {
        productService.getAllProducts().then(({ data }) => setProductData(data)).catch(() => Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
        }))
    })

    if (isLoading)
        <ClipLoader color="#36d7b7" />

    return (
        <div>
            <Navbar />
            <CaptionCarousel />
            <div className='product-flex'>
                {
                    productData.slice(0, 8).map((data) => (
                        <ProductAddToCart data={data} />
                    ))
                }
            </div>
            <Hero />
            <div className='product-flex'>
                {
                    productData.slice(8, 12).map((data) => (
                        <ProductAddToCart data={data} />
                    ))
                }
            </div>
            <Image />
            <Footer />
        </div>
    )
}

export default Home