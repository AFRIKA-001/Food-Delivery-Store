// 

import React, { useContext } from 'react'
import CartContext from '../store/CartContext.jsx'
import { Link } from 'react-router-dom';
import { MoveLeft } from 'lucide-react';

const formatPrice = new Intl.NumberFormat("en-Kenya", {
  style: "currency",
  currency: "Ksh"
})

function Cart() {
  const cartContext = useContext(CartContext)

  const cartTotal = cartContext.items.reduce((totalPrice, item) => {
    return totalPrice + item.price * item.quantity;
  }, 0)

  function addItems(item) {
    cartContext.AddItems({ ...item, quantity: 1 })
  }

  function removeItems(id) {
    cartContext.RemoveItems(id);
  }

  function ClearCart() {
    cartContext.ClearCart();
  }

  return (
    <section className="min-h-screen bg-gray-50 px-4 py-10">
      
      <div className="max-w-4xl mx-auto">

        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
          Your Cart
        </h1>

        {/* Cart Items */}
        <div className="space-y-4">
          {cartContext.items.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white p-4 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition"
            >
              
              {/* Left side */}
              <div className="flex items-center gap-4">
                <img
                  className="h-20 w-20 rounded-xl object-cover"
                  src={item.image_url}
                  alt="food"
                />

                <div>
                  <h3 className="font-semibold text-gray-800 line-clamp-1">
                    {item.name}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {formatPrice.format(item.price)}
                  </p>
                </div>
              </div>

              {/* Quantity controls */}
              <div className="flex items-center gap-3 bg-gray-100 px-3 py-2 rounded-xl">
                
                <button
                  onClick={() => addItems(item)}
                  className="w-8 h-8 flex items-center justify-center bg-amber-400 text-white rounded-lg hover:bg-amber-500 active:scale-95 transition"
                >
                  +
                </button>

                <span className="font-semibold text-gray-700 w-6 text-center">
                  {item.quantity}
                </span>

                <button
                  onClick={() => removeItems(item.id)}
                  className="w-8 h-8 flex items-center justify-center bg-red-400 text-white rounded-lg hover:bg-red-500 active:scale-95 transition"
                >
                  −
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-10 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
          
          <div className="flex justify-between items-center mb-6">
            <span className="text-gray-600 text-lg">Total</span>
            <span className="text-2xl font-bold text-gray-800">
              {formatPrice.format(cartTotal)}
            </span>
          </div>

          {/* Actions */}
          <div className="flex flex-col md:flex-row gap-4">

            {cartContext.items.length === 0 ? 
            <div>
             
<Link to="/meals" >
              <button className=' flex items-center gap-2 hover:scale-105 active:scale-95 active:bg-orange-300 bg-orange-500 text-white px-7 py-2 rounded-2xl '>
                <MoveLeft size={16}/>
               continue shopping
             </button>
            </Link>
            </div>
           
            :<button
              onClick={ClearCart}
              className="w-full md:w-1/2 bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-semibold transition active:scale-95"
            >
              Clear Cart
             
            </button>}

            
            {cartContext.items.length > 0 ?
            <Link
              to="/checkout"
              className="w-full md:w-1/2 bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-xl font-semibold text-center transition active:scale-95"
            >
              Proceed to Checkout
            </Link>
           : ""}
          </div>

        </div>
      </div>
    </section>
  )
}

export default Cart