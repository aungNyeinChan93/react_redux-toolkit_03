import { createBrowserRouter } from 'react-router';
import HomePage from './pages/HomePage';
import MasterLayout from './layouts/MasterLayout'
import CatPage from './pages/CatPage';
import ProductPage from './pages/ProductPage';
import DetailProduct from './pages/DetailProduct';
import UserPage from './pages/User/UserPage';
import DetailUser from './pages/User/DetailUser';
import GuestLayout from './layouts/GuestLayout';
import LoginPage from './pages/auth/LoginPage';
import PostPage from './pages/post/PostPage';
import DetailPost from './pages/post/DetailPost';

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
            { path: 'products/:id', Component: DetailProduct },

            { path: 'users', Component: UserPage },
            { path: 'users/:id', Component: DetailUser },

            // posts
            { path: '/posts', Component: PostPage },
            { path: '/posts/:id', Component: DetailPost },
        ]
    },
    {
        path: '/auth', Component: GuestLayout, children: [
            { path: 'login', Component: LoginPage }
        ]
    }
]);
