
import MealFetching from './components/MealFetching.jsx';
import Cart from './components/cart.jsx';
import Login from './components/Login.jsx';
import CheckOut from './components/Checkout.jsx';
import SuccessMessage from './components/SuccessMessage.jsx';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import RootLayout from './components/RootLayout.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <MealFetching /> },
      {path:'/checkout', element:<CheckOut />},
      {path:'/login', element:<Login />},
      {path:'/cart', element:<Cart />},
      {path:'/success', element:<SuccessMessage />}
    ]
   
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App
