import { useContext, useRef, useState } from 'react'
import Modal from '../UI/Modal'
import CartContext from '../store/CartContext'
import Inputs from './Inputs.jsx'
import UserProgressContext from '../store/UserProgressContext.jsx'
import { Link, Navigate } from 'react-router-dom'
import SuccessMessage from './SuccessMessage.jsx'


function CheckOut() {

    const cartContext = useContext(CartContext);
    const userProgessContext = useContext(UserProgressContext);
    const formRef = useRef()
    const [success,setSuccess]=useState(false)

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


    return <section className=' w-full min-h-screen bg-slate-200'>

        <h2 className='text-center text-2xl lg:text-4xl font-mono pt-20 text-orange-500'>Checkout</h2>

        <form ref={formRef} onSubmit={handleSubmit} className='space-y-4 rounded flex flex-col min-h-screen lg:w-100 p-4 md:p-4 lg:p-8 my-10 text-xl mx-auto'>

            <p className='pb-4 lg:text-2xl font-bold'>Total Amount:{formatPrice.format(cartTotal)}</p>
            <Inputs label='Full Name' id="user-id" name='fullname' type="text" className='w-full text-sm   rounded border flex' />
            <Inputs label='E-Mail Address' id="email" name='email' type="email" className='w-full text-sm rounded border' />
            <Inputs label='Street' id="street" name='steet' type="text" className="w-full text-sm border flex rounded" />
            <div className='lg:flex flex-col gap-4 lg:pt-4 '>
                <Inputs label='Postal Code' id="postal-code" name='postal' type="text" className='w-full text-sm border line-clamp-1 rounded ' />
                <Inputs label='Phone Number' id="city" type="number" name='phone number' className='w-full text-sm border rounded flex' />
            </div>
             <div className='pt-4 flex gap-6 '>
            <button className='border rounded bg-amber-300 hover:bg-amber-500 active:bg-amber-600'>
                   {!success ? <p>Submit Order</p>:<Navigate to='/successmessage'/>}
            </button>

            </div>

        </form>
    </section>








}

export default CheckOut;
