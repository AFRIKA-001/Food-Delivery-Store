import React from 'react'
import Header from './components/Header.jsx';
import MealFetching from './components/MealFetching.jsx';
import { CartContextProvider } from './store/CartContext.jsx';
import { UserProgressContextProvider } from './store/UserProgressContext.jsx';
import Cart from './components/cart.jsx';
import { LoginContextProvider } from './store/LoginContext.jsx';
import Login from './components/Login.jsx';
import CheckOut from './components/Checkout.jsx';
import SuccessMessage from './components/SuccessMessage.jsx';


function App() {
  return (
    <LoginContextProvider>
      <UserProgressContextProvider>
    <CartContextProvider>
    <Header />
    <MealFetching />  
    <Cart/>
    <CheckOut/>
    <SuccessMessage/>
    
    <Login/>
    </CartContextProvider>
    </UserProgressContextProvider>
    </LoginContextProvider>
   
  );
}

export default App
