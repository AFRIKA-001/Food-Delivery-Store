import React from 'react'
import Header from './components/Header.jsx';
import MealFetching from './components/MealFetching.jsx';
import { CartContextProvider } from './store/CartContext.jsx';

function App() {
  return (
    <CartContextProvider>
    <Header />
    <MealFetching />
    </CartContextProvider>
  );
}

export default App
