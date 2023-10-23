import React from 'react'
import { useService } from '../../API/Services'
import { useQuery } from 'react-query';
import Swal from 'sweetalert2';
import { ClipLoader } from 'react-spinners';
import { ProductCard } from '../components/ProductCard';

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

    console.log(productData);

    return (
        <div>{
            productData.map((pr) => (
                <ProductCard data={pr} />
            ))
        }
        </div>
    )
}

export default Home