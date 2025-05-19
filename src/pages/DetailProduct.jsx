import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { useGetProductQuery } from '../services/productData'
import ProductCard from '../components/product/ProductCard';
import { ThemeContext } from '../contexts/ThemeProvider';
import { Link } from 'react-router';
import UpdateProduct from '../components/product/UpdateProduct';

const DetailProduct = () => {
    const { id } = useParams();
    const { data, error, isLoading } = useGetProductQuery(id);
    const { theme } = useContext(ThemeContext);


    if (error) {
        return <p>{error}</p>
    }
    if (isLoading) {
        return <p>Loading . . .</p>
    }
    return (
        <React.Fragment>
            <section className={theme.color == 'dark' ? 'bg-slate-900 text-white' : 'bg-white text-black'}>
                <div className='grid grid-cols-3 gap-4 mx-10  p-[80px]'>
                    <div></div>
                    <div>
                        <ProductCard {...data} />
                        <div className='flex justify-between'>
                            <UpdateProduct productId={id} />
                            <Link to={`/products`} className='inline-block px-6 py-2 bg-amber-300 rounded mt-2 text-black'>Back</Link>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default DetailProduct;