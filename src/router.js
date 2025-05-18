import { createBrowserRouter } from 'react-router';
import HomePage from './pages/HomePage';
import MasterLayout from './layouts/MasterLayout'
import CatPage from './pages/CatPage';
import ProductPage from './pages/ProductPage';
import DetailProduct from './pages/DetailProduct';

export const routes = createBrowserRouter([
    {
        path: '/',
        Component: MasterLayout,
        children: [
            { index: true, Component: HomePage },
            { path: 'cats', Component: CatPage },
            {
                path: 'products', Component: ProductPage, children: [
                    // { path: ':id', Component: DetailProduct }
                ],
            },
            { path: 'products/:id', Component: DetailProduct }
        ]
    }
]);
