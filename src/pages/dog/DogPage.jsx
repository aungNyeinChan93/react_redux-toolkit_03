import React from 'react';
import { useGetImagesQuery } from '../../services/dogData';
import DogCard from '../../components/dog/DogCard';

const DogPage = () => {
    const { data: dogs, error, isLoading } = useGetImagesQuery();
    // console.log(dogs);

    return (
        <React.Fragment>
            <h1>Title</h1>
            <section className='w-full h-screen'>
                <div className='grid grid-cols-6 gap-4'>
                    {
                        dogs?.message.map((dog, index) => {
                            return <DogCard key={index} image={dog} />
                        })
                    }
                </div>
            </section>
        </React.Fragment>
    );
};

export default DogPage;