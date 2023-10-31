import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../app/main/Home'
import { ROUTES } from './consts'
import ProductDetail from '../app/components/ProductDetail/ProductDetail'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path={ROUTES.MAIN.HOME} element={<Home />} />
            <Route path={ROUTES.PRODUCT.DETAIL} element={<ProductDetail />} />
        </Routes>
    )
}

export default AppRoutes