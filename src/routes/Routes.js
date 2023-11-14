import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../app/main/Home'
import { ROUTES } from './consts'
import ProductDetail from '../app/components/ProductDetail/ProductDetail'
import Contact from '../app/components/Contact/Contact'
import Shop from '../app/components/Shop/Shop'
import Order from '../app/components/Order/Order'
import Login from '../app/auth/Login'
import Register from '../app/auth/Register'
import ForgotPassword from '../app/account/ForgotPassword'
import ResetPassword from '../app/account/ResetPassword'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path={ROUTES.MAIN.HOME} element={<Home />} />
            <Route path={ROUTES.PRODUCT.DETAIL} element={<ProductDetail />} />
            <Route path={ROUTES.CONTACT} element={<Contact />} />
            <Route path={ROUTES.SHOP} element={<Shop />} />
            <Route path={ROUTES.ORDER} element={<Order />} />
            <Route path={ROUTES.USER.LOGIN} element={<Login />} />
            <Route path={ROUTES.USER.REGISTER} element={<Register />} />
            <Route path={ROUTES.USER.FORGOTPASSWORD} element={<ForgotPassword />} />
            <Route path={ROUTES.USER.RESETPASSWORD} element={<ResetPassword />} />
            <Route path="*" element={<Register />} />
        </Routes>
    )
}

export default AppRoutes