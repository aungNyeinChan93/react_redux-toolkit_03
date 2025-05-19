import React from 'react';
import { useCreateProductMutation } from '../../services/productData';

const CreateProduct = () => {
    const [createProduct, { data, error, isLoading }] = useCreateProductMutation();
    console.log(error);
    console.log(data);

    const addProduct = async () => {
        try {
            const newProductData = {
                id: Math.random(),
                title: 'test title',
                description: 'test desc',
                category: 'test category',
                availabilityStatus: 'false',
                brand: 'local',
                price: 100,
                thumbnail: "",
            };
            await createProduct(newProductData);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <React.Fragment>
            <section className='flex justify-end my-2'>
                <button
                    onClick={addProduct}
                    disabled={isLoading}
                    className={`px-4 py-2 rounded mx-10 bg-red-600 ${isLoading && '!bg-red-300'}`}
                >
                    Add Products
                </button>
            </section>
        </React.Fragment>
    );
};

export default CreateProduct;