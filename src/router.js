import { createBrowserRouter } from 'react-router';
import HomePage from './pages/HomePage';
import MasterLayout from './layouts/MasterLayout'
import CatPage from './pages/CatPage';

export const routes = createBrowserRouter([
    {
        path: '/',
        Component: MasterLayout,
        children: [
            { index: true, Component: HomePage },
            { path: 'cats', Component: CatPage }
        ]
    }
]);
