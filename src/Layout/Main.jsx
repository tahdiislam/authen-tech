import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Component/Header';

const Main = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export default Main;