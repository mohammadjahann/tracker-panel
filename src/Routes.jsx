import { Children } from "react";
import LogIn from "./Components/LogIn";
import ProtectedRoute from "./ProtectedRoute";
import DashBoard from "./Components/DashBoard"
import Tracking from "./Components/Tracking";
import Messages from "./Components/Messages";


const routes = [

    { path: '/login', element: <LogIn /> },


    {
        element: <ProtectedRoute/>, children: [

            { path: '/', element:<DashBoard/>},
            { path: '/massages', element:<Messages/>},
            { path: '/tracking', element:<Tracking/>},
        ]
    }
]

export default  routes