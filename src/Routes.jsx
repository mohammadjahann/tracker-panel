import { Children } from "react";
import LogIn from "./Components/LogIn";
import ProtectedRoute from "./ProtectedRoute";
import DashBoard from "./Components/DashBoard"
import Devices from "./Components/Devices";
import Massages from "./Components/Massages";
import Tracking from "./Components/Tracking";

const isLoggedIn = true;

const routes = [

    { path: '/login', element: <LogIn /> },


    {
        element: <ProtectedRoute isAllowed={isLoggedIn} />, children: [

            { path: '/', element:<DashBoard/>},
            { path: '/devices', element:<Devices/>},
            { path: '/massages', element:<Massages/>},
            { path: '/tracking', element:<Tracking/>},
        ]
    }
]

export default  routes