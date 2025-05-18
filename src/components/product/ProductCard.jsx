import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeProvider';
import { Link } from 'react-router';

const ProductCard = ({ id, availabilityStatus, brand, description, category, images, price, thumbnail, title }) => {
    const { theme } = useContext(ThemeContext)
    return (
        <React.Fragment>
            <Link to={`/products/${id}`} className="relative block rounded-tr-3xl border border-gray-100">
                <span
                    className="absolute -top-px -right-px rounded-tr-3xl rounded-bl-3xl bg-rose-600 px-6 py-4 font-medium tracking-widest text-white uppercase"
                >
                    {brand ? brand : 'unkonwn'}
                </span>

                <img
                    src={thumbnail}
                    alt=""
                    className="h-80 w-full rounded-tr-3xl object-cover"
                />

                <div className="p-4 text-center">
                    <strong className={theme.color == 'dark' ? 'text-xl font-medium text-gray-100' : 'text-xl font-medium text-gray-900'}>{title?.length > 10 ? title.substring(0, 18) : title}</strong>

                    <p className={theme.color === 'dark' ? 'mt-2 text-pretty text-gray-100' : 'mt-2 text-pretty text-gray-700'}>
                        {description?.substring(0, 50)}
                    </p>

                    <p className='text-lg p-2 bg-gradient-to-r from-red-400 to-yellow-500 bg-clip-text text-transparent capitalize'>{category}</p>

                    <span
                        className="mt-4 block rounded-md border border-indigo-900 bg-indigo-900 px-5 py-3 text-sm font-medium tracking-widest text-white uppercase transition-colors hover:bg-white hover:text-indigo-900"
                    >
                        Learn More
                    </span>
                </div>
            </Link>
        </React.Fragment>
    );
};

export default ProductCard;