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
import DashboardLayout from '../layouts/DashboardLayout.jsx';
import Profile from '../pages/Profile.jsx';

const AppRoutes = () => {
    return (
        <Routes>
            {/* Public Routes */}
            <Route element = {<MainLayout/>}>
                <Route path = "/" element = {<Home/>} ></Route>
                <Route path = "about" element = {<About/>} ></Route>
                <Route path = "shop" element = {<Shop/>}></Route>
                <Route path = "login" element = {<Login/>}></Route>
                <Route path = "register" element = {<Register/>}></Route>
                <Route path="activate/:uid/:token" element={<ActivateAccount />} />
            </Route>
                {/* private route */}
                <Route path='dashboard' element = {<PrivateRoute> <DashboardLayout/> </PrivateRoute>}>
                    <Route index element = {<Dashboard/>}/>
                    <Route path='profile' element = {<Profile/>}/>
                </Route>
        </Routes>
    );
};

export default AppRoutes;