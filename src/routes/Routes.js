import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../app/main/Home'
import { ROUTES } from './consts'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path={ROUTES.MAIN.HOME} element={<Home />} />
        </Routes>
    )
}

export default AppRoutes