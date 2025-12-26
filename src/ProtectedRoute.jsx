import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Header from './Components/Header'
import NavBar from './Components/NavBar'

const ProtectedRoute = ({ isAllowed }) => {

    if (!isAllowed) {
        return <Navigate to='/login' replace />
    }

    return <>
        <Header />
        <NavBar/>
        <Outlet />

    </>

}

export default ProtectedRoute