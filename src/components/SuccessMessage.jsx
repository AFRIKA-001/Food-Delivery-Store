


import { CheckCircle, Clock, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

function SuccessMessage() {
  return (
    <section className="min-h-screen bg-linear-to-br from-green-50 via-white to-emerald-100 flex items-center justify-center px-4">
      
      <div className="max-w-lg w-full bg-white rounded-3xl shadow-2xl p-8 text-center">

        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-green-100 p-4 rounded-full">
            <CheckCircle
              size={80}
              className="text-green-600"
            />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Order Confirmed!
        </h1>

        <p className="text-gray-600 text-lg leading-relaxed">
          Thank you for your order. Our kitchen has received it and your meal is now being prepared.
        </p>

        {/* Order Card */}
        <div className="mt-8 bg-gray-50 rounded-2xl p-6 border border-gray-100">

          <div className="flex justify-between mb-4">
            <span className="text-gray-500">Order ID</span>
            <span className="font-semibold text-gray-800">
              #JH-2025-001
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500 flex items-center gap-2">
              <Clock size={18} />
              Estimated Delivery
            </span>

            <span className="font-semibold text-orange-500">
              25 - 35 mins
            </span>
          </div>

        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-col gap-4">

          <button
            className="
              bg-orange-500
              hover:bg-orange-600
              text-white
              py-3
              rounded-xl
              font-semibold
              transition
              active:scale-95
            "
          >
            Track Order
          </button>

          <Link
            to="/meals"
            className="
              flex items-center
              justify-center
              gap-2
              border
              border-gray-300
              py-3
              rounded-xl
              font-semibold
              text-gray-700
              hover:bg-gray-50
              transition
            "
          >
            <ShoppingBag size={18} />
            Continue Shopping
          </Link>

        </div>

      </div>
    </section>
  );
}

export default SuccessMessage;
// import UserProgressContext from '../store/UserProgressContext'
// import { Link } from 'react-router-dom'
// // import Modal from '../UI/Modal';


// function SuccessMessage() {
// // const userProgressContext = useContext(UserProgressContext)
// // function closeModal(){
// //     userProgressContext.HideSuccessMessage();


//   return <section  className='py-60 h-screen bg-amber-300/10'>
//     <div className='flex flex-col justify-center items-center '>
//      <h2 className=' text-xl lg:text-4xl font-mono '>Success!🎊</h2>
//     <p className='italic text-[12px] lg:text-2xl font-mono'> your JAHA feast is on the Way! <span className='text-3xl'>🍔</span></p>
//     <button  className='flex  w-40 mt-2 justify-center bg-orange-400 hover:bg-orange-600 active:bg-gray-800 font-black border '>
//       <Link to='/meals'>Go To Homepage</Link>
//     </button>
//     </div>
    
//   </section>
    
      

  
// }

// export default SuccessMessage
