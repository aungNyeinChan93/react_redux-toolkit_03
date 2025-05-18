import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';

const ComponentName = () => {
    return (
        <React.Fragment>
            <Navbar />
            <Outlet />
        </React.Fragment>
    );
};

export default ComponentName;