import React from 'react'
import { useService } from '../../API/Services'
import { useQuery } from 'react-query';
import Swal from 'sweetalert2';
import { ClipLoader } from 'react-spinners';
import { ProductCard } from '../components/ProductCard';
import Navbar from '../components/Navbar/Navbar';
import CaptionCarousel from '../components/Slider';

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
            <div className='d-flex'>
                {
                    productData.map((pr) => (
                        <ProductCard data={pr} />
                    ))
                }
            </div>
        </div>
    )
}

export default Home