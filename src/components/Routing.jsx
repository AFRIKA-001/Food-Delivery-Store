import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Cart from './cart';
import App from '../App';
import Login from './Login'
import CheckOut from './Checkout';
import MealFetching from './MealFetching';
import Signup from './Signup';
import RootLayout from './RootLayout.jsx'
import ProtectedRoutes from './ProtectedRoutes.jsx';

export const router = createBrowserRouter([

    { path: '/', element: <App /> },
    { path: '/signin', element: <Login /> },
    {
        path: '/',
        element: <RootLayout />,
        children: [
            { path: '/cart', element: <Cart /> },
            { path: '/checkout', element: <CheckOut /> },
            { path: '/mealfetching', element:<ProtectedRoutes><MealFetching /></ProtectedRoutes>  },
        ]
    },
    { path: '/signup', element: <Signup /> },
]);

