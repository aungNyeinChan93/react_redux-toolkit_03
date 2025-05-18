import React, { useContext } from 'react';
import ProductCard from '../components/product/ProductCard';
import { useGetProductsQuery } from '../services/productData';
import { ThemeContext } from '../contexts/ThemeProvider';

const ProductPage = () => {
    const { theme } = useContext(ThemeContext);
    const { data, isError, isLoading } = useGetProductsQuery();

    if (isError) {
        <div>Error . . .</div>
    }
    if (isLoading) {
        <div className='text-3xl text-center text-red-500'>Loading . . .</div>
    }
    return (
        <React.Fragment>
            <section className={theme.color === 'dark' ? 'bg-slate-900 !text-white' : 'bg-white text-black'}>
                <h1 className='text-center p-4 text-2xl bg-gradient-to-r from-red-400 to-pink-400 text-white'>ProductPage</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 mx-10'>
                    {
                        data?.products.map(product => {
                            return <ProductCard key={product.id} {...product} />
                        })
                    }
                </div>
            </section>
        </React.Fragment>
    );
};

export default ProductPage;