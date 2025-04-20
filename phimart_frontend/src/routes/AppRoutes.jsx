import React from 'react';
import { Routes, Route } from 'react-router';
import About from '../pages/About.jsx';
import MainLayout from '../layouts/MainLayout.jsx';
import Home from '../pages/Home.jsx';
import Shop from '../pages/Shop.jsx';

const AppRoutes = () => {
    return (
        <Routes>
            {/* <Route index element = {<Home/>}></Route>
            <Route path="about" element={<About/>}/> */}
            <Route element = {<MainLayout/>}>
                <Route path = "/" element = {<Home/>} ></Route>
                <Route path = "about" element = {<About/>} ></Route>
                <Route path = "shop" element = {<Shop/>}></Route>
            </Route>
        </Routes>
    );
};

export default AppRoutes;