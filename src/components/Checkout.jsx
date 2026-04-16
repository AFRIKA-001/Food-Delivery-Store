import { useContext, useRef } from 'react'
import Modal from '../UI/Modal'
import CartContext from '../store/CartContext'
import Inputs from './Inputs.jsx'
import UserProgressContext from '../store/UserProgressContext.jsx'
import { Link } from 'react-router-dom'


function CheckOut() {

    const cartContext = useContext(CartContext);
    const userProgessContext = useContext(UserProgressContext);
    const formRef = useRef()

    const formatPrice = new Intl.NumberFormat("en-Kenya", {
        style: "currency",
        currency: "Ksh"
    })

    const cartTotal = cartContext.items.reduce((totalPrice, item) => {
        return totalPrice + item.price * item.quantity;
    }, 0);

    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData.entries());
        userProgessContext.ShowSuccessMessage();
        cartContext.ClearCart();
        console.log(data);
        if (formRef) {
            e.target.reset();
        }
    }


    return <section className=' w-full h-200 bg-slate-200'>

        <h2 className='text-center text-2xl lg:text-4xl font-mono pt-20 text-orange-500'>Checkout</h2>

        <form ref={formRef} onSubmit={handleSubmit} className=' rounded flex flex-col lg:h-70 lg:w-100 p-4 md:p-4 lg:p-8 my-10 text-xl mx-auto'>

            <p className='pb-4 text-2xl font-bold'>Total Amount:{formatPrice.format(cartTotal)}</p>
            <Inputs label='Full Name' id="user-id" name='fullname' type="text" className='rounded border flex' />
            <Inputs label='E-Mail Address' id="email" name='email' type="email" className='rounded border' />
            <Inputs label='Street' id="street" name='steet' type="text" className="border flex rounded" />
            <div className='lg:flex flex-col gap-4 lg:pt-4 '>
                <Inputs label='Postal Code' id="postal-code" name='postal' type="text" className='border line-clamp-1 rounded ' />
                <Inputs label='Phone Number' id="city" type="number" name='phone number' className='border rounded flex' />
            </div>
            <div className='pt-4 flex gap-6 '>
                {/* <button type='button' onClick={handleClose} className='border rounded bg-gray-400 hover:bg-gray-600 active:bg-gray-900' >close</button> */}
                <button className='border rounded bg-amber-300 hover:bg-amber-500 active:bg-amber-600'>
                    Submit Order
                </button>
            </div>
        </form>
    </section>








}

export default CheckOut;
