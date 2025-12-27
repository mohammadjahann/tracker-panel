import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Header from './Components/Header'
import NavBar from './Components/NavBar'
import { PanelContext } from './Context/PanelContext'

const ProtectedRoute = () => {

    const { isLoggedIn } = useContext(PanelContext)

    if (!isLoggedIn) {
        return <Navigate to='/login' replace />
    }

    return <div className='flex flex-col items-center justify-center w-[80%] min-h-screen mx-auto'>

        <Header />

        <div className='flex'>
            <Outlet />

            <NavBar />

        </div>

    </div>

}

export default ProtectedRoute