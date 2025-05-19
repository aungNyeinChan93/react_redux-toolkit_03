import React from 'react';
import { Outlet } from 'react-router';

const GuestLayout = () => {
    return (
        <React.Fragment>
            <Outlet />
        </React.Fragment>
    );
};
export default GuestLayout;
