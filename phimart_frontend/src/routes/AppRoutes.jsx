import React from 'react';
import { Routes, Route } from 'react-router';
import About from '../pages/About.jsx';
import MainLayout from '../layouts/MainLayout.jsx';
import Home from '../pages/Home.jsx';
import Shop from '../pages/Shop.jsx';
import Login from '../pages/Login.jsx';
import Register from '../pages/Register.jsx';
import Dashboard from '../pages/Dashboard.jsx';
import PrivateRoute from '../Components/PrivateRoute.jsx';
import ActivateAccount from '../Components/Registration/ActivateAccount.jsx';

const AppRoutes = () => {
    return (
        <Routes>
            {/* <Route index element = {<Home/>}></Route>
            <Route path="about" element={<About/>}/> */}
            <Route element = {<MainLayout/>}>
                <Route path = "/" element = {<Home/>} ></Route>
                <Route path = "about" element = {<About/>} ></Route>
                <Route path = "shop" element = {<Shop/>}></Route>
                <Route path = "login" element = {<Login/>}></Route>
                <Route path = "register" element = {<Register/>}></Route>
                <Route path="activate/:uid/:token" element={<ActivateAccount />} />
                <Route path='dashboard' element = {
                    <PrivateRoute>
                        <Dashboard/>
                    </PrivateRoute>
                }>
                </Route>
            </Route>
        </Routes>
    );
};

export default AppRoutes;