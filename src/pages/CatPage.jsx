import React, { useContext } from 'react';
import useGetData from '../hooks/useGetData';
import CatCard from '../components/cat/CatCard';
import { ThemeContext } from '../contexts/ThemeProvider';

const CatPage = () => {
    const { theme } = useContext(ThemeContext);
    const { data: cats, isError, isLoading } = useGetData(`https://api.thecatapi.com/v1/images/search?limit=10`);
    if (isError) {
        return <p>{isError}</p>
    }
    if (isLoading) {
        return <p>Loading...</p>
    }
    return (
        <React.Fragment>
            <div className={theme.color === 'dark' ? 'bg-slate-800 text-white' : 'bg-slate-100 text-black'}>
                <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8  p-4 rounded mx-10'>
                    {
                        cats?.map(cat => {
                            return <CatCard key={cat.id} {...cat} />
                        })
                    }
                </section>
            </div>
        </React.Fragment>
    );
};

export default CatPage;