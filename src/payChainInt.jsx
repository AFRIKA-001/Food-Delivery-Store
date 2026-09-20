import React from 'react';

export default function CheckoutButton() {
  // Replace this with the actual link you generate in your PayChain Merchant Dashboard
  const PAYCHAIN_LINK = "https://app.paychain.co.ke/pay/3c1af240";

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-md max-w-sm mx-auto border border-gray-100">
      <h3 className="text-lg font-bold text-gray-900 mb-2">Premium Plan</h3>
      <p className="text-sm text-gray-500 text-center mb-6">
        Get instant access to all premium features. Secured by PayChain.
      </p>
      
      <a 
        href={PAYCHAIN_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Pay Now with PayChain
      </a>
    </div>
  );
}
