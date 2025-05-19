import React from 'react';
import { useUpdateProductMutation } from '../../services/productData';
import { useDropProductMutation } from '../../services/productData';

const UpdateProduct = ({ productId }) => {
    const [updateProduct, { data }] = useUpdateProductMutation();
    // console.log(data);
    const [dropProduct, product] = useDropProductMutation();
    console.log(product);

    const updateHandle = async () => {
        const newUpdatProductData = {
            title: 'hey this is update data 👌👌👌'
        };
        await updateProduct({
            id: productId,
            updateProduct: newUpdatProductData,
        })
    };

    const deleteHandle = async () => {
        await dropProduct(productId)
    }

    return (
        <React.Fragment>
            <button className='inline-block px-4 py-2 bg-amber-300 rounded mt-2 text-black' onClick={updateHandle}>Update Product</button>
            <button className='inline-block px-4 py-2 bg-amber-300 rounded mt-2 text-black' onClick={deleteHandle}>Delete Product</button>
        </React.Fragment>
    );
};

export default UpdateProduct;