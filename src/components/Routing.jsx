import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Cart from './cart';
import App from '../App';
import Login from './Login'
import CheckOut from './Checkout';
import MealFetching from './MealFetching';
import MealDetails from './MealDetails.jsx';
import Signup from './Signup';
import RootLayout from './RootLayout.jsx'
import ProtectedRoutes from './ProtectedRoutes.jsx';
import SuccessMessage from './SuccessMessage.jsx';

export const router = createBrowserRouter([

    { path: '/', element: <App /> },
    { path: '/signin', element: <Login /> },
    {path:'/successmessage',element:<ProtectedRoutes><SuccessMessage /></ProtectedRoutes>},
    {
        path: '/',
        element: <RootLayout />,
        children: [
            { path: '/cart', element: <ProtectedRoutes><Cart /> </ProtectedRoutes>},
            { path: '/checkout', element: <ProtectedRoutes><CheckOut /> </ProtectedRoutes>},
            {path:'/meals', element:<ProtectedRoutes><MealFetching /></ProtectedRoutes>},
            { path: '/meals/poducts/:id', element:<ProtectedRoutes><MealDetails /></ProtectedRoutes>  },
            
        ]
    },
    { path: '/signup', element: <Signup /> },
]);

