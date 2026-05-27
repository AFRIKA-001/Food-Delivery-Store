 
import { useContext, useRef, useState } from 'react'
import CartContext from '../store/CartContext'
import Inputs from './Inputs.jsx'
import UserProgressContext from '../store/UserProgressContext.jsx'
import { Navigate } from 'react-router-dom'

function CheckOut() {
  const cartContext = useContext(CartContext);
  const userProgessContext = useContext(UserProgressContext);
  const formRef = useRef()
  const [success, setSuccess] = useState(false)

  const formatPrice = new Intl.NumberFormat("en-Kenya", {
    style: "currency",
    currency: "Ksh"
  })

  const cartTotal = cartContext.items.reduce((totalPrice, item) => {
    return totalPrice + item.price * item.quantity;
  }, 0);

  function handleSubmit(e) {
    e.preventDefault();
    setSuccess(true)

    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData.entries());

    userProgessContext.ShowSuccessMessage();
    cartContext.ClearCart();

    console.log(data);

    if (formRef) {
      e.target.reset();
    }
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 px-4 py-10">

      {/* Header */}
      <h2 className="text-center text-3xl md:text-4xl font-bold text-orange-500 mb-8">
        Checkout
      </h2>

      {/* Form Card */}
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-white shadow-2xl border border-gray-100 rounded-3xl p-6 md:p-10 space-y-5"
      >

        {/* Total */}
        <p className="text-lg md:text-xl font-semibold text-gray-800 border-b pb-4">
          Total Amount:{" "}
          <span className="text-orange-500 font-bold">
            {formatPrice.format(cartTotal)}
          </span>
        </p>

        {/* Inputs */}
        <Inputs
          label="Full Name"
          id="user-id"
          name="fullname"
          type="text"
          className="w-full text-sm border border-gray-300 rounded-xl px-4 py-3 bg-gray-50 focus:ring-2 focus:ring-amber-400 outline-none transition"
        />

        <Inputs
          label="E-Mail Address"
          id="email"
          name="email"
          type="email"
          className="w-full text-sm border border-gray-300 rounded-xl px-4 py-3 bg-gray-50 focus:ring-2 focus:ring-amber-400 outline-none transition"
        />

        <Inputs
          label="Street"
          id="street"
          name="street"
          type="text"
          className="w-full text-sm border border-gray-300 rounded-xl px-4 py-3 bg-gray-50 focus:ring-2 focus:ring-amber-400 outline-none transition"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Inputs
            label="Postal Code"
            id="postal-code"
            name="postal"
            type="text"
            className="w-full text-sm border border-gray-300 rounded-xl px-4 py-3 bg-gray-50 focus:ring-2 focus:ring-amber-400 outline-none transition"
          />

          <Inputs
            label="Phone Number"
            id="phone"
            name="phone"
            type="number"
            className="w-full text-sm border border-gray-300 rounded-xl px-4 py-3 bg-gray-50 focus:ring-2 focus:ring-amber-400 outline-none transition"
          />
        </div>

        {/* Button */}
        <div className="pt-4">
          <button
            className="w-full bg-amber-400 hover:bg-amber-500 active:scale-95 transition-all duration-200 text-white font-semibold py-3 rounded-xl shadow-md"
            type="submit"
          >
            {!success ? "Submit Order" : <Navigate to="/successmessage" />}
          </button>
        </div>

      </form>
    </section>
  )
}

export default CheckOut;