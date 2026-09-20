
import { useContext, useRef, useState } from "react";
import { Navigate } from "react-router-dom";

import CartContext from "../store/CartContext";
import Inputs from "./Inputs.jsx";
import CheckoutButton from "../payChainInt.jsx";

function CheckOut() {
  const cartContext = useContext(CartContext);

  const formRef = useRef();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const formatPrice = new Intl.NumberFormat("en-KE", {
    style: "currency",
    currency: "KES",
  });

  // Calculate cart total
  const cartTotal = cartContext.items.reduce(
    (totalPrice, item) => totalPrice + item.price * item.quantity,
    0
  );

  // If cart is empty, don't allow checkout
  if (cartContext.items.length === 0) {
    return <Navigate to="/meals" replace />;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setError("");
    setIsLoading(true);

    try {
      // Get form data
      const formData = new FormData(e.currentTarget);

      const customer = {
        fullname: formData.get("fullname"),
        email: formData.get("email"),
        street: formData.get("street"),
        postal: formData.get("postal"),
        phone: formData.get("phone"),
      };

      // Basic validation
      if (
        !customer.fullname ||
        !customer.email ||
        !customer.street ||
        !customer.phone
      ) {
        throw new Error("Please fill in all required fields.");
      }

      /*
       * We will call our Supabase Edge Function here.
       *
       * IMPORTANT:
       * The PayChain API key stays inside Supabase.
       * NEVER put the PayChain API key in this React application.
       */

      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/create-paychain-checkout`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
            apikey: import.meta.env.VITE_SUPABASE_ANON_KEY,
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          },

          body: JSON.stringify({
            customer,
            amount: cartTotal,

            // Send the cart so the Edge Function can create
            // the order/order_items records.
            items: cartContext.items,
          }),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result?.error || "Unable to create payment. Please try again."
        );
      }

      /*
       * PayChain should return a hosted checkout URL.
       *
       * We redirect the customer there to complete payment.
       */
      if (!result.checkoutUrl) {
        throw new Error("Payment checkout URL was not returned.");
      }

      window.location.href = result.checkoutUrl;
    } catch (error) {
      console.error("Checkout error:", error);

      setError(
        error.message || "Something went wrong while starting payment."
      );

      setIsLoading(false);
    }
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 px-4 py-10">
      {/* Header */}
      <h2 className="text-center text-3xl md:text-4xl font-bold text-orange-500 mb-8">
        Checkout
      </h2>

      {/* Checkout Form */}
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white shadow-2xl border border-gray-100 rounded-3xl p-6 md:p-10 space-y-5"
      >
        {/* Total */}
        <p className="text-lg md:text-xl font-semibold text-gray-800 border-b pb-4">
          Total Amount:{" "}
          <span className="text-orange-500 font-bold">
            {formatPrice.format(cartTotal)}
          </span>
        </p>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 rounded-xl p-4 text-sm">
            {error}
          </div>
        )}

        {/* Customer Information */}

        <Inputs
          label="Full Name"
          id="user-id"
          name="fullname"
          type="text"
          required
          className="w-full text-sm border border-gray-300 rounded-xl px-4 py-3 bg-gray-50 focus:ring-2 focus:ring-amber-400 outline-none transition"
        />

        <Inputs
          label="E-Mail Address"
          id="email"
          name="email"
          type="email"
          required
          className="w-full text-sm border border-gray-300 rounded-xl px-4 py-3 bg-gray-50 focus:ring-2 focus:ring-amber-400 outline-none transition"
        />

        <Inputs
          label="Street"
          id="street"
          name="street"
          type="text"
          required
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
            type="tel"
            required
            placeholder="07XXXXXXXX"
            className="w-full text-sm border border-gray-300 rounded-xl px-4 py-3 bg-gray-50 focus:ring-2 focus:ring-amber-400 outline-none transition"
          />
        </div>
<div>
  <CheckoutButton />
</div>
      
      </form>
      
    </section>
  );
}

export default CheckOut;

